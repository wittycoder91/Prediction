import React from "react";
import { Link } from "react-router-dom";
import LogoLight from "../assets/logos/menu-logo-light.png";
import LogoDark from "../assets/logos/menu-logo-dark.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  FiDribbble,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTwitter,
} from "react-icons/fi";
import { BiLogoBehance } from "react-icons/bi";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-slate-900 dark:bg-slate-800">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="relative py-16">
              {/* <!-- Subscribe --> */}
              <div className="relative">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                  <div className="lg:col-span-4 md:col-span-12">
                    <Link to="#" className="text-[22px] focus:outline-none">
                      <img
                        src={LogoLight}
                        alt=""
                        className="l-dark hidden dark:block"
                        width={100}
                      />
                      <img
                        src={LogoDark}
                        alt=""
                        className="l-light block dark:hidden"
                        width={100}
                      />
                    </Link>
                    <p className="mt-6 text-gray-300">
                      A great plateform to buy, sell and rent your properties
                      without any agent or commisions.
                    </p>
                  </div>

                  <div className="lg:col-span-2 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Company
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      <li>
                        <Link
                          to="/aboutus"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"
                        >
                          <MdKeyboardArrowRight className="me-1 text-xl" />{" "}
                          About us
                        </Link>
                      </li>
                      <li className="mt-[10px]">
                        <Link
                          to="/features"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"
                        >
                          <MdKeyboardArrowRight className="me-1 text-xl" />{" "}
                          Services
                        </Link>
                      </li>
                      <li className="mt-[10px]">
                        <Link
                          to="/pricing"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"
                        >
                          <MdKeyboardArrowRight className="me-1 text-xl" />{" "}
                          Pricing
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Usefull Links
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      <li>
                        <Link
                          to="/terms"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"
                        >
                          <MdKeyboardArrowRight className="me-1 text-xl" />{" "}
                          Terms of Services
                        </Link>
                      </li>
                      <li className="mt-[10px]">
                        <Link
                          to="/privacy"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"
                        >
                          <MdKeyboardArrowRight className="me-1 text-xl" />{" "}
                          Privacy Policy
                        </Link>
                      </li>
                      <li className="mt-[10px]">
                        <Link
                          to="/contact"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"
                        >
                          <MdKeyboardArrowRight className="me-1 text-xl" />{" "}
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Contact Details
                    </h5>
                    <div className="flex mt-6">
                      <FiMapPin className="size-5 text-green-600 me-3" />
                      <div className="">
                        <h6 className="text-gray-300">
                          example, example, <br /> example, example
                        </h6>
                      </div>
                    </div>
                    <div className="flex mt-2">
                      <FiMail className="size-5 text-green-600 me-3" />
                      <div className="">
                        <Link
                          to="mailto:contact@example.com"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
                        >
                          contact@example.com
                        </Link>
                      </div>
                    </div>

                    <div className="flex mt-2">
                      <FiPhone className="size-5 text-green-600 me-3" />
                      <div className="">
                        <Link
                          to="tel:+123456-789-854"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
                        >
                          +123 456-789-854
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Subscribe --> */}
            </div>
          </div>
        </div>

        <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
          <div className="container text-center">
            <div className="grid md:grid-cols-2 items-center gap-6">
              <div className="md:text-start text-center">
                <p className="mb-0 text-gray-300">
                  ©{" "}
                  <script
                    type="text/javascript"
                    id="www-widgetapi-script"
                    src="https://www.youtube.com/s/player/d87d581f/www-widgetapi.vflset/www-widgetapi.js"
                  ></script>
                  <script
                    id="iframe_api"
                    src="https://www.youtube.com/iframe_api"
                  ></script>
                  {new Date().getFullYear()} My Website
                </p>
              </div>

              <ul className="list-none md:text-end text-center">
                <li className="inline ms-1">
                  <Link
                    to="https://dribbble.com/"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <FiDribbble className="size-4" />
                  </Link>
                </li>
                <li className="inline ms-1">
                  <Link
                    to="https://www.behance.net/"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <BiLogoBehance className="align-baseline" />
                  </Link>
                </li>
                <li className="inline ms-1">
                  <Link
                    to="http://linkedin.com/company/"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <FiLinkedin className="size-4" />
                  </Link>
                </li>
                <li className="inline ms-1">
                  <Link
                    to="https://www.facebook.com/"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <FiFacebook className="size-4" />
                  </Link>
                </li>
                <li className="inline ms-1">
                  <Link
                    to="https://www.instagram.com//"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <FiInstagram className="size-4" />
                  </Link>
                </li>
                <li className="inline ms-1">
                  <Link
                    to="https://twitter.com/"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <FiTwitter className="size-4" />
                  </Link>
                </li>
                <li className="inline ms-1">
                  <Link
                    to="mailto:support@test.in"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <FiMail className="size-4" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
