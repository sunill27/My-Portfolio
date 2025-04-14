import React, { useEffect } from "react";
import homeImage from "../assets/images/home.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Home = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js";
    script.referrerPolicy = "no-referrer";
    script.onload = () => {
      new window.Typed(".typing", {
        strings: [
          "Full Stack Developer(MERN)",
          //  "Node.js Developer",
        ],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true,
      });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Navbar />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
        rel="stylesheet"
      />

      <div className="w-full h-screen bg-gray-200">
        <div className="w-full h-screen relative">
          <div className="w-full h-full xl:px-16 xs:px-8 flex gap-4 justify-center items-center">
            <div className="w-full">
              <h1 className="mb-2 mt-5 text-3xl font-bold text-black">
                <span className="text-green-500">Hello,</span>
                <span className="text-rose-500"> I'm Sunil Chand</span>
              </h1>
              <h1 className="mt-4 sm:text-4xl xs:text-3xl text-black">
                I'm...
                <span className="typing libre-baskerville-bold text-green-600"></span>
              </h1>
              <p className="mt-4 sm:text-lg xs:text-md capitalize text-black">
                Enthusiastic full-stack developer with hands-on experience in
                building dynamic web applications using React.js and Node.js. I
                have successfully completed several projects that showcase my
                skills in both front-end and back-end development. Passionate
                about coding and always eager to learn new technologies, I am
                committed to delivering high-quality, user-centric solutions.
              </p>
              {/* <button className="p-2 px-6 mt-6 bg-rose-500 text-white rounded-full hover:bg-purple-500">
                Download CV
              </button> */}
              <Link to="mailto:sunilchand675@gmail.com">
                <button className="p-2 px-6 mt-6 ml-2 bg-rose-500 text-white rounded-full hover:bg-purple-500">
                  Hire Me
                </button>
              </Link>
            </div>
            <div className="xl:max-w-[30%] md:max-w-[30%] h-fit hidden md:block">
              <img
                className="rounded-sm  min-w-[200px] rounded-br-[5rem] rounded-tl-[5rem]"
                src={homeImage}
                alt="MyPic"
              />
            </div>
          </div>
        </div>

        {/* <!-- Email Js --> */}
        <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
      </div>
      <Footer />
    </>
  );
};

export default Home;
