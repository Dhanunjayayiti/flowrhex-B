

import React from "react";
import { FaUserAlt, FaLightbulb, FaPaperPlane } from "react-icons/fa";

const SingleWindowSolution = () => {
  const cards = [
    {
      icon: <FaUserAlt size={40} className="text-teal-500 mb-4" />,
      title: "When you know, what you need",
      desc: "We deliver Intensified Flow Reactors as per user requirement with desired MOC, desired size, shape and volume of flow...",
      button: "Customized Products",
    },
    {
      icon: <FaLightbulb size={40} className="text-teal-500 mb-4" />,
      title: "When you want to develop in flow",
      desc: "We believe intensification should happen at the root scale i.e. right from start. Along with transforming available chemistries,…",
      button: "Process Development",
    },
    {
      icon: <FaPaperPlane size={40} className="text-teal-500 mb-4" />,
      title: "Intensifying only reaction is not enough",
      desc: "We are applying intensification for different unit operations such as distillation, crystallization, absorption,…",
      button: "View All",
    },
  ];

  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-xl font-bold text-gray-800 mb-2 uppercase tracking-wide">
        Single Window Solution with <br/>Flow Chemistry and Process Intensification
      </h2>
      <p className="text-teal-600 font-semibold max-w-3xl mx-auto mb-12 text-gray-300">
        FlowRHEX ® offers unique solutions based on flow chemistry and process intensification techniques. We provide service and support right from introducing Process Intensification to complete process development using intensified tools.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-8 shadow-lg border rounded transition hover:shadow-xl"
          >
            <div>{card.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600 mb-6">{card.desc}</p>
            <button className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition">
              {card.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SingleWindowSolution;
