import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import medicareImage from "../assets/images/medicareImage.png";
import ecomImage from "../assets/images/ecomImage.png";
import lmsImage from "../assets/images/LmsImage.png";
import dashboardImage from "../assets/images/dashboard.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <Navbar />

      <div className="mx-auto px-2 bg-gray-200 max-w-full">
        {/* //my-8 bg-gray-200 */}
        <div className="flex justify-center text-2xl md:text-3xl font-bold mb-5">
          <h3 className="mt-5 text-rose-500">Recent Projects</h3>
        </div>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
          {/* ======Project One======= */}
          <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">
            <a className="relative">
              <img
                className="rounded relative w-full object-cover aspect-video"
                src={lmsImage}
                alt="Image"
                loading="lazy"
              />
            </a>

            <div className="flex flex-col justify-between gap-3 px-4 py-2">
              <a className="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis">
                <span>1.Library Management System</span>
              </a>

              <p className="text-gray-600 two-lines">
                A Library Management System built using the MERN stack, a
                comprehensive web application designed to streamline the
                management of library resources. By leveraging the power of
                MongoDB for a scalable and flexible database, Express.js and
                Node.js for a strong server-side framework and React.js for a
                dynamic and user-friendly frontend.
              </p>

              <ul className="flex flex-wrap text-sm gap-2 my-1">
                <li className="flex items-center gap-2">
                  <span>Add Book,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Edit Book,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>General Writing</span>
                </li>
              </ul>
              <button className="p-2 px-6 mt-2 bg-rose-500 text-white rounded-full hover:bg-purple-500">
                <Link to="https://github.com/sunill27/L.M.S">View Code</Link>
              </button>
            </div>
          </li>

          {/* ======Project Two======= */}
          <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">
            <a className="relative">
              <img
                className="rounded relative w-full object-cover aspect-video "
                src={medicareImage}
                alt="Image"
                loading="lazy"
              />
            </a>
            <a className="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis">
              <span>2.Medicare Booking</span>
            </a>

            <div className="flex flex-col justify-between gap-3 px-4 py-2">
              <p className="text-gray-600 two-lines">
                The frontend design of the Medicare-Booking website focuses on
                providing a seamless and user-friendly experience for patients
                seeking medical services. The design includes essential features
                such as medical appointment booking, a detailed FAQ section and
                responsive layouts that cater to both desktop and mobile users.
              </p>

              <ul className="flex flex-wrap text-sm gap-2 my-1">
                <li className="flex items-center gap-2">
                  <span>Medical Appointment,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Wider Services,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>FAQ</span>
                </li>
              </ul>
              <button className="p-2 px-6 mt-6 bg-rose-500 text-white rounded-full hover:bg-purple-500">
                <Link to="https://github.com/sunill27/Medicare-Booking">
                  View Code
                </Link>
              </button>
            </div>
          </li>

          {/* ======Project Three======= */}
          <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">
            <a className="relative">
              <img
                className="rounded relative w-full object-cover aspect-video"
                src={ecomImage}
                alt="Image"
                loading="lazy"
              />
            </a>

            <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
              <a className="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis">
                <span>3.Sneakers Store</span>
              </a>

              <p className="text-gray-600 two-lines">
                This project involves developing a comprehensive e-commerce
                website using the MERN stack (MongoDB, Express.js, React.js,
                Node.js) with TypeScript. The website offers a full suite of
                e-commerce functionalities including user authentication,
                product management, shopping cart, payment processing, order
                management and more.
              </p>

              <ul className="flex flex-wrap text-sm gap-2 my-1">
                <li className="flex items-center gap-2">
                  <span>SignUp and SignIn,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Cart system,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Order placement,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Payment Methods</span>
                </li>
              </ul>
              <button className="p-2 px-6 mt-2 bg-rose-500 text-white rounded-full hover:bg-purple-500">
                <Link to="https://github.com/sunill27/Sneakers-Store">
                  View Code
                </Link>
              </button>
            </div>
          </li>
          {/* ======Project Four======= */}
          <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">
            <a className="relative">
              <img
                className="rounded relative w-full object-cover aspect-video"
                src={dashboardImage}
                alt="Image"
                loading="lazy"
              />
            </a>

            <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
              <a className="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis">
                <span>4.Admin-Dashboard</span>
              </a>

              <p className="text-gray-600 two-lines">
                Admin dashboard with a focus on seamless user management,
                product tracking, and real-time analytics, ensuring efficient
                control over all aspects of the online store.
              </p>

              <ul className="flex flex-wrap text-sm gap-2 my-1">
                <li className="flex items-center gap-2">
                  <span>SignUp and SignIn,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Product management,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Order management,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>User management</span>
                </li>
              </ul>
              <button className="p-2 px-6 mt-2 bg-rose-500 text-white rounded-full hover:bg-purple-500">
                <Link to="https://github.com/sunill27/SneakerStore-Admin">
                  View Code
                </Link>
              </button>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
