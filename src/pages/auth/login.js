import React from "react";
import { Link } from "react-router-dom";

import Icon from "../../assets/images/logo-icon-64.png";
import BackgroudImage from "../../assets/images/bg/01.jpg";

export default function Login() {
  return (
    <section className="md:h-screen py-36 flex items-center relative overflow-hidden zoom-image">
      <div
        style={{ backgroundImage: `url(${BackgroudImage})` }}
        className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2"></div>

      <div className="container z-3">
        <div className="flex justify-center">
          <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md">
            <Link to="/index">
              <img src={Icon} className="mx-auto" alt="" />
            </Link>
            <h5 className="my-6 text-xl font-semibold">Login</h5>
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
                  <label className="font-medium" htmlFor="LoginPassword">
                    Password:
                  </label>
                  <input
                    id="LoginPassword"
                    type="password"
                    className="form-input mt-3"
                    placeholder="Password:"
                  />
                </div>

                <div className="flex justify-between mb-4">
                  <div className="inline-flex items-center">
                    <input
                      className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-green-600 focus:border-green-300 focus:ring focus:ring-offset-0 focus:ring-green-200 focus:ring-opacity-50 me-2"
                      type="checkbox"
                      value=""
                      id="RememberMe"
                    />
                    <label
                      className="form-check-label text-slate-400"
                      htmlFor="RememberMe"
                    >
                      Remember me
                    </label>
                  </div>

                  <p className="text-slate-400 mb-0">
                    <Link to="/auth-reset-password" className="text-slate-400">
                      Forgot password ?
                    </Link>
                  </p>
                </div>

                <div className="mb-4">
                  <Link
                    to="#"
                    className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full"
                  >
                    Login / Sign in
                  </Link>
                </div>

                <div className="text-center">
                  <span className="text-slate-400 me-2">
                    Don't have an account ?
                  </span>{" "}
                  <Link
                    to="/auth-signup"
                    className="text-black dark:text-white font-bold"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
