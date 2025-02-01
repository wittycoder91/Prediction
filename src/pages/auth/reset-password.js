import React from "react";
import { Link } from "react-router-dom";

import LogoLight from "../../assets/logos/menu-logo-light.png";
import LogoDark from "../../assets/logos/menu-logo-dark.png";
import BackgroudImage from "../../assets/images/bg/01.jpg";

export default function ResetPassword() {
  return (
    <section className="md:h-screen py-36 flex items-center relative overflow-hidden zoom-image">
      <div
        style={{ backgroundImage: `url(${BackgroudImage})` }}
        className="absolute inset-0 image-wrap z-1 bg-[url('../../assets/images/bg/01.jpg')] bg-no-repeat bg-center bg-cover"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2"></div>

      <div className="container z-3">
        <div className="flex justify-center">
          <div className="flex flex-col items-center max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md">
            <Link to="/">
              <img
                src={LogoDark}
                className="inline-block dark:hidden"
                width="100"
                alt=""
              />
              <img
                src={LogoLight}
                width="100"
                className="hidden dark:inline-block"
                alt=""
              />
            </Link>
            <h5 className="my-6 text-xl font-semibold">Reset Your Password</h5>
            <div className="grid grid-cols-1">
              <p className="text-slate-400 mb-6">
                Please enter your email address. You will receive a link to
                create a new password via email.
              </p>
              <form className="text-start">
                <div className="grid grid-cols-1">
                  <div className="mb-4">
                    <label className="font-medium" htmlFor="LoginEmail">
                      Email Address:
                    </label>
                    <input
                      id="LoginEmail"
                      type="email"
                      className="form-input mt-3"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div className="mb-4">
                    <Link
                      to="#"
                      className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full"
                    >
                      Send
                    </Link>
                  </div>

                  <div className="text-center">
                    <span className="text-slate-400 me-2">
                      Remember your password ?{" "}
                    </span>
                    <Link
                      to="/auth-login"
                      className="text-black dark:text-white font-bold"
                    >
                      Sign in
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
