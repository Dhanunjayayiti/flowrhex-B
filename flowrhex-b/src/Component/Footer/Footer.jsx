import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaPen
} from "react-icons/fa";

const Footer = ({color}) => {
  return (
    <div className="bg-green-800 text-white py-10 px-5 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold">
            FLOW<span className="text-teal-400">RHEX</span>
          </h2>
          <p className="text-sm mt-1 mb-4 text-teal-200">PROBURGEON Pvt Ltd</p>
          <p className="text-sm text-gray-300 mb-4">
            Providing Process Intensified Solutions to make Conventional Chemical Production routes Greener, Safer, Smaller, Faster and Cost-Effective!
          </p>
          <div className="flex space-x-4 mt-4 text-white text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>

        <div className="md:w-1/3">
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p className="font-semibold text-sm text-white">Registered Office</p>
          <div className="mt-2 text-sm text-gray-300 space-y-2">
            <p className="flex items-start"><FaMapMarkerAlt className="mt-1 mr-2" /> Regd. Address: A2-301, Shri Swami Landmark, Phase-II, Survey no. 3/15, Narhe-Ambegaon Road, Narhe, Pune 411041</p>
            <p className="flex items-center"><FaPhone className="mr-2" /> +91 9420586572</p>
            <p className="flex items-center text-red-400"><FaPen className="mr-2" /> <a href="http://www.flowrhex.com" target="_blank" rel="noopener noreferrer">www.flowrhex.com</a></p>
          </div>
        </div>

       
        <div className="md:w-1/3">
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p className="font-semibold text-sm text-white">Lab</p>
          <div className="mt-2 text-sm text-gray-300 space-y-2">
            <p className="flex items-start"><FaMapMarkerAlt className="mt-1 mr-2" /> 105, FlowRHEX® Lab, Chemical Engineering Department, National Institute of Technology Warangal, Warangal, Telangana 506004</p>
            <p className="flex items-center"><FaPhone className="mr-2" /> +91 9420586572</p>
            <p className="flex items-center text-red-400"><FaPen className="mr-2" /> <a href="http://www.flowrhex.com" target="_blank" rel="noopener noreferrer">www.flowrhex.com</a></p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
