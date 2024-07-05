import React from "react";
import { motion } from "framer-motion";

function Card({ project }) {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 mb-3 mt-3"
    >
      <a href={project.link}>
        <img src={project.image} alt={project.title} className="rounded-t-lg w-full" />
      </a>
      <div className="p-5">
        <a href={project.link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
          {project.description}
        </p>
        <a
          href={project.sourceCode}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Source Code
          <img className="ml-2 -mr-1 w-4 h-4 filter invert" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />
        </a>
      </div>
    </motion.div>
  );
};

export default Card;