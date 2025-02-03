import React, { useState } from "react";
import { Assistant } from "../configs/openai";
import { Loader } from "../component/ai/Loader/Loader";
import { Chat } from "../component/ai/Chat/Chat";
import { Controls } from "../component/ai/Controls/Controls";

export default function AIFundsManager() {
  const assistant = new Assistant();
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);

  function updateLastMessageContent(content) {
    setMessages((prevMessages) =>
      prevMessages.map((message, index) =>
        index === prevMessages.length - 1
          ? { ...message, content: `${message.content}${content}` }
          : message
      )
    );
  }

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  async function handleContentSend(content) {
    addMessage({ content, role: "user" });
    setIsLoading(true);
    try {
      const result = await assistant.chatStream(content, messages);
      let isFirstChunk = false;

      for await (const chunk of result) {
        if (!isFirstChunk) {
          isFirstChunk = true;
          addMessage({ content: "", role: "assistant" });
          setIsLoading(false);
          setIsStreaming(true);
        }

        updateLastMessageContent(chunk);
      }

      setIsStreaming(false);
    } catch (error) {
      addMessage({
        content: "Sorry, I couldn't process your request. Please try again!",
        role: "system",
      });
      setIsLoading(false);
      setIsStreaming(false);
    }
  }

  return (
    <div className="bg-[#f3f3f3]">
      <section className="container relative flex flex-col items-center gap-4 h-[100vh] px-4 w-full py-28">
        {isLoading && <Loader />}
        <header className="text-center">
          <img width={64} height={64} src="/chat-bot.png" alt="" />
          <h2 className="m-0">AI Chatbot</h2>
        </header>
        <div className="flex-grow w-full bg-white dark:bg-[#212121] rounded-2xl overflow-y-auto">
          <Chat messages={messages} />
        </div>
        <Controls
          isDisabled={isLoading || isStreaming}
          onSend={handleContentSend}
        />
      </section>
    </div>
  );
}
