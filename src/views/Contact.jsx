import React, { useContext } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";

function Contact() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className={
        darkMode
          ? "bg-gray-100 pt-24 "
          : "bg-gray-700 pt-24 text-white "
      }
    >
      <div id="contact" className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
          Contact
        </h2>
        <div>
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">
            Connect with me
          </h4>
          <p className={darkMode ?"text-gray-500 text-xl" :"text-gray-200 text-xl"}>
            If you want to know more about me or my work, or if you would just
            <br />
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>
        <div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-24">
          <div className="w-full md:pr-8">
            <form>
              <div className="my-6">
                <label
                  htmlFor="name"
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Name
                </label>
                <input
                  type="email"
                  id="name"
                  className={darkMode ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={darkMode ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className={darkMode ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="flex justify-between ">
                <div className="underline">
                  <a href="mailto:rssathishkumar@icloud.com">
                    Send me email directly
                  </a>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 w-40 rounded-md hover:bg-blue-300">
                  <a href="mailto:rssathishkumar@icloud.com">Submit</a>
                </button>
              </div>
            </form>
          </div>
          <div className="w-full flex flex-col md:items-end  mt-12 md:mt-6">
            <h1 className="text-3xl font-bold">Phone</h1>
            <a
              href="/"
              className="mb-8 mt-2 font-semibold text-blue-500 block uppercase"
            >
              +91 9600260364
            </a>
            <h1 className="text-3xl font-bold">Email</h1>
            <a
              href="/"
              className="mb-8 mt-2 font-semibold text-blue-500 block uppercase"
            >
              rssathishkumar@icloud.com
            </a>
            <h1 className="text-3xl  font-bold">Address</h1>
            <a
              href="/"
              className="mb-8 mt-2 md:text-right font-semibold text-blue-500 block uppercase"
            >
              Hosur, Tamil Nadu
              <br />
              India
            </a>
            <h1 className="text-3xl  font-bold">Social</h1>
            <ul className="flex">
              {contactLinks.map((el,index) => (
                <a key={index}
                  href={el.link}
                  className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                >
                  <img alt="" src={el.url} />
                  {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={
          darkMode
            ? "w-full bg-white text-black text-lg py-3 flex justify-center"
            : "w-full bg-gray-900 text-white text-lg py-3 flex justify-center"
        }
      >
        Made with
        <div className="text-red-500 px-2 text-2xl">&#10084;</div>
        by Sathishkumar Ranganathan
      </div>
    </div>
  );
};

export default Contact;