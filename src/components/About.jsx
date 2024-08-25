import React from "react";
import aboutImage from "../assets/images/about.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="flex h-screen items-center justify-center bg-gray-200 p-5">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-3 md:px-10">
            <div>
              <h1 className="mb-2 mt-5 text-3xl font-bold text-black">
                <span>Hi, I'm</span>
                <span className="text-rose-500"> Sunil Chand</span>
              </h1>
              <p className="mb-6 text-black">
                An aspiring IT student, currently pursuing my BSc.CSIT degree at
                Amrit Campus (ASCOL). With a strong passion for technology, I am
                committed to gaining practical experience on Web development and
                expanding my skills.
              </p>
              <div className="flex justify-center space-x-5">
                <Link to="https://github.com/iamSunil57">
                  <button className="flex w-full items-center justify-center gap-1 rounded-2xl bg-rose-500 p-5 py-3 font-semibold text-white hover:bg-rose-700">
                    Follow
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{
                        fill: "rgba(0, 0, 0, 1)",
                        transform: "",
                        msFilter: "",
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                      />
                    </svg>
                  </button>
                </Link>
                <a href="/Resume.pdf" download="Resume.pdf">
                  <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-400 p-5 py-3 font-semibold">
                    Resume
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            <div className="center-on-large">
              <img
                className="md:size-96 size-72  min-w-[320px] hide-on-small rounded-full"
                src={aboutImage}
                alt="About Image"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
