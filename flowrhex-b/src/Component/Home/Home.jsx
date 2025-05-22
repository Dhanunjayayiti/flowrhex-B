
import React from "react";
import { FaGem, FaCloud, FaCloudUploadAlt, FaRocket } from "react-icons/fa";

const features = [
  {
    icon: <FaGem className="text-teal-500 text-2xl" />,
    title: "Young Intensification Techies",
    description:
      "We are process intensification enthusiasts, dedicated to make the technology end to end applicable for chemical processes along with complete automation",
  },
  {
    icon: <FaRocket className="text-teal-500 text-2xl" />,
    title: "We are a Startup!!!",
    description:
      "FlowRHEX ® is a DIPP, Govt. of India recognized startup. As a startup, we are flexible and adaptable to your needs. Also, we are affordable to everyone",
  },
  {
    icon: <FaCloudUploadAlt className="text-teal-500 text-2xl" />,
    title: "Renowned Experts for back end support",
    description:
      "We have wide expertise with academic and industrial process intensification and flow chemistry experts on our advisory board",
  },
  {
    icon: <FaCloud className="text-teal-500 text-2xl" />,
    title: "Our Vision",
    description:
      "To make process intensification and flow chemistry, available, applicable and affordable for chemical industries and create a greener impact over Indian Chemical Industry by providing end to end Intensified turn-key plants",
  },
];


const Home = () => {
  return (
    <section className="px-2 py-5 bg-white">
      <div className="grid md:grid-cols-2 gap-20 items-center bg-gray-900">
        {/* Left Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            FRHexeR – Glass Series
          </h2>
          <p className="text-teal-300 mb-4 leading-relaxed">
            Mass Transfer and Heat Transfer are key drivers for any chemical process.
            FlowRHEX® reactors help in providing intense mixing and efficient heat
            transfer. For multiphase reactions, interfacial mass transfer is very
            important. This video shows air - coloured water intense mixing in a single
            module of the reactor. Along with glass micro-reactors, we provide SS316/SS316L
            and Hastelloy C276 plate type microreactors. Other materials of constructions like
            <span className="font-bold underline text-white"> Tantalum Coated / Silicon carbide </span>
             are on demand.
          </p>
          <button className="mt-4 px-6 py-2 border border-orange-500 text-orange-500 hover:bg-black-500 hover:text-orange rounded transition">
            Learn more
          </button>
        </div>

        {/* Right Video */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <video controls className="w-full h-auto rounded-lg">
            <source src="https://www.flowrhex.com/assets/frontend/images/Product%20Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <br/>
      <div className="flex flex-col md:flex-row items-start gap-6">
  
  {/* 40% Title Section */}
  <div className="w-full md:w-[40%]">
    <h2 className="text-2xl text-center font-bold text-gray-900 mb-6">
      Why Choose Us?
    </h2>
  </div>

  {/* 60% Features Grid */}
  <div className="w-full md:w-[60%]">
    <div className="grid sm:grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="mt-1">{feature.icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>

</div>

    </section>
  );
};

export default Home;
