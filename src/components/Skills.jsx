import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Skills = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center items-center bg-gray-200">
        <div className="max-w-xl mx-auto w-full">
          {/* <!-- To achieve the desired progress, you can update the 'stroke-dasharray' property. --> */}
          <h4 className="text-3xl md:text-5xl text-Black font-bold mb-6">
            Skills
          </h4>

          <div className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-black font-semibold ">
                Html,CSS & Javascript
              </span>
              {/* <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                55%
              </span> */}
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              ></path>
              <path
                className="rc-progress-line-path"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#FF6464"
                strokeWidth="1"
                fillOpacity="0"
                style={{
                  strokeDasharray: "55.2px, 100px",
                  strokeDashoffset: "0px",
                  transition:
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                }}
              ></path>
            </svg>
          </div>

          <div className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-black font-semibold ">React</span>
              {/* <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                50%
              </span> */}
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              ></path>
              <path
                className="rc-progress-line-path"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#5185D4"
                strokeWidth="1"
                fillOpacity="0"
                style={{
                  strokeDasharray: "50.35px, 100px",
                  strokeDashoffset: "0px",
                  transition:
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                }}
              ></path>
            </svg>
          </div>

          <div className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-black font-semibold ">
                NodeJs/Express Js
              </span>
              {/* <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                60%
              </span> */}
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              ></path>
              <path
                className="rc-progress-line-path"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#CA56F2"
                strokeWidth="1"
                fillOpacity="0"
                style={{
                  strokeDasharray: "57.25px, 100px",
                  strokeDashoffset: "0px",
                  transition:
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                }}
              ></path>
            </svg>
          </div>

          <div className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-black   font-semibold ">
                Typescript
              </span>
              {/* <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                55%
              </span> */}
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              ></path>
              <path
                className="rc-progress-line-path"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#FF6464"
                strokeWidth="1"
                fillOpacity="0"
                style={{
                  strokeDasharray: "55.2px, 100px",
                  strokeDashoffset: "0px",
                  transition:
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                }}
              ></path>
            </svg>
          </div>

          <div className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-black font-semibold ">
                MongoDB
              </span>
              {/* <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                50%
              </span> */}
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              ></path>
              <path
                className="rc-progress-line-path"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#5185D4"
                strokeWidth="1"
                fillOpacity="0"
                style={{
                  strokeDasharray: "50.35px, 100px",
                  strokeDashoffset: "0px",
                  transition:
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                }}
              ></path>
            </svg>
          </div>

          <div className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-black font-semibold ">MySQL</span>
              {/* <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                60%
              </span> */}
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              ></path>
              <path
                className="rc-progress-line-path"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#9272D4"
                strokeWidth="1"
                fillOpacity="0"
                style={{
                  strokeDasharray: "60.05px, 100px",
                  strokeDashoffset: "0px",
                  transition:
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                }}
              ></path>
            </svg>
          </div>

          <div className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-black font-semibold ">
                Git and Github
              </span>
              {/* <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                55%
              </span> */}
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              ></path>
              <path
                className="rc-progress-line-path"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#FF6464"
                strokeWidth="1"
                fillOpacity="0"
                style={{
                  strokeDasharray: "55.2px, 100px",
                  strokeDashoffset: "0px",
                  transition:
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                }}
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Skills;
