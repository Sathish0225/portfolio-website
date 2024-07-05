import React, { useContext } from "react";
import { serviceData } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

function Services() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return ( 
        <div className={darkMode ? "pb-20 bg-fixed bg-gray-100" : "pb-20 bg-gray-700"}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 pt-20" id="services">
                <h2 className={darkMode ? "text-5xl font-bold px-4 md:px-0 text-center" : "text-5xl font-bold px-4 md:px-0 text-center text-white"}>Services</h2>
                <div className="">
                    <div className="mt-8 flex md:flex-row justify-between flex-col md:items-stretch items-center">
                        {serviceData.map((el,index) => (
                            <motion.div key={index}
                                initial="hidden"
                                whileInView={"visible"}
                                variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0, scale: 0 },
                                }}
                                className={
                                darkMode
                                    ? "md:w-96 p-4 bg-white rounded-lg flex items-center flex-col mt-8"
                                    : "md:w-96 p-4 bg-gray-100 rounded-lg flex items-center flex-col mt-8"
                                }
                            >
                                <img src={el.img} alt="" />
                                <h4 className="text-xl font-bold mt-4">{el.name}</h4>
                                <p className="text-lg mt-2 text-justify">{el.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;