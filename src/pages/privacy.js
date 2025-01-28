import React from "react";
import { Link } from "react-router-dom";

import BackgroudImage from "../assets/images/bg/01.jpg";
import { LuArrowRight } from "react-icons/lu";

export default function Privacy() {
  return (
    <>
      {/* <!-- Start Hero --> */}
      <section
        style={{ backgroundImage: `url(${BackgroudImage})` }}
        className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover"
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              Privacy Policy
            </h3>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <section className="relative lg:py-24 py-16">
        <div className="container">
          <div className="md:flex justify-center">
            <div className="md:w-3/4">
              <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                <h5 className="text-xl font-medium mb-4">Overview :</h5>
                <p className="text-slate-400">
                  It seems that only fragments of the original text remain in
                  the Lorem Ipsum texts used today. One may speculate that over
                  the course of time certain letters were added or deleted at
                  various positions within the text.
                </p>
                <p className="text-slate-400">
                  In the 1960s, the text suddenly became known beyond the
                  professional circle of typesetters and layout designers when
                  it was used for Letraset sheets (adhesive letters on
                  transparent film, popular until the 1980s) Versions of the
                  text were subsequently included in DTP programmes such as
                  PageMaker etc.
                </p>
                <p className="text-slate-400">
                  There is now an abundance of readable dummy texts. These are
                  usually used when a text is required purely to fill a space.
                  These alternatives to the classic Lorem Ipsum texts are often
                  amusing and tell short, funny or nonsensical stories.
                </p>

                <h5 className="text-xl font-medium mb-4 mt-8">
                  We use your information to :
                </h5>
                <ul className="list-unstyled text-slate-400 mt-4">
                  <li className="flex mt-2 items-center">
                    <LuArrowRight className="text-green-600 align-middle me-2" />
                    Digital Marketing Solutions for Tomorrow
                  </li>
                  <li className="flex mt-2 items-center">
                    <LuArrowRight className="text-green-600 align-middle me-2" />
                    Our Talented & Experienced Marketing Agency
                  </li>
                  <li className="flex mt-2 items-center">
                    <LuArrowRight className="text-green-600 align-middle me-2" />
                    Create your own skin to match your brand
                  </li>
                  <li className="flex mt-2 items-center">
                    <LuArrowRight className="text-green-600 align-middle me-2" />
                    Digital Marketing Solutions for Tomorrow
                  </li>
                  <li className="flex mt-2 items-center">
                    <LuArrowRight className="text-green-600 align-middle me-2" />
                    Our Talented & Experienced Marketing Agency
                  </li>
                  <li className="flex mt-2 items-center">
                    <LuArrowRight className="text-green-600 align-middle me-2" />
                    Create your own skin to match your brand
                  </li>
                </ul>

                <h5 className="text-xl font-medium mb-4 mt-8">
                  Information Provided Voluntarily :
                </h5>
                <p className="text-slate-400">
                  In the 1960s, the text suddenly became known beyond the
                  professional circle of typesetters and layout designers when
                  it was used for Letraset sheets (adhesive letters on
                  transparent film, popular until the 1980s) Versions of the
                  text were subsequently included in DTP programmes such as
                  PageMaker etc.
                </p>

                <div className="mt-8">
                  <Link
                    to="#"
                    onClick={() => window.print()}
                    className="btn bg-green-600 hover:bg-green-700 text-white rounded-md"
                  >
                    Print
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Terms & Conditions --> */}
    </>
  );
}
