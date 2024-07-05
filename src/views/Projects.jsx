import React, { useContext } from "react";
import Card from "../components/Card";
import { projectStack } from "../constants";
import { ThemeContext } from "../themeProvider";

function Projects() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div id="projects" className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <div className="mt-6 flex items-stretch flex-wrap gap-x-6">
          {projectStack.map((el, index) => (
            <Card key={index} project={el} />
          ))}
        </div>
        <a
          href="/"
          className=" w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus:ring-blue-300 mx-auto mt-4"
        >
          Show More
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;