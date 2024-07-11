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
      </div>
    </div>
  );
};

export default Projects;