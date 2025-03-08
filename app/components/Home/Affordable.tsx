import React from "react";
import contactInfo from "@/components/Content/ContactInfo.json";
import { GrUserWorker } from "react-icons/gr";
import { FaRegThumbsUp } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

const Affordable = () => {
  return (
    <div className="bg-gray-100 px-6 py-12 ">
      <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-10 text-center lg:flex-row">
        <div className="lg:w-[40%]">
          <h2 className="text-3xl font-bold text-gray-800">
          Professional Water Heater Installation & Repair in Syracuse, NY
          </h2>
            <p className="mt-4 text-gray-600">
            Need plumbing services in Syracuse? Syracuse Drain Cleaning Pros offers fast,
            reliable, and affordable plumbing solutions. Whether it’s for
            a leaky faucet, water heater installation, or major repairs, we have
            the expertise to handle your needs. Call now and get your plumbing
            issues resolved promptly!
            </p>
          <a id="cta-id" href={`tel:${contactInfo.tel}`}>
            <button
              id="cta-id"
              className="mt-8 rounded-lg bg-minor px-6 py-3 text-white transition duration-700 ease-in hover:bg-main"
            >
              Call Now
            </button>
          </a>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-6 lg:flex-row ">
          {/* Affordable Pricing */}
          <div className="flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-md ">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-minor/20 ">
              <GiReceiveMoney className=" text-xl" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Affordable Plumbing Services
            </h3>
            <p className="mt-2 text-gray-600">
              Syracuse Drain Cleaning Pros offers cost-effective plumbing solutions to fit any budget, ensuring you get the best value for your plumbing needs.
            </p>
          </div>
          {/* Various Services */}
          <div className="flex w-full max-w-sm flex-col items-center rounded-lg border border-main bg-white p-6 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <GrUserWorker className="text-xl text-main" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Comprehensive Plumbing Services
            </h3>
            <p className="mt-2 text-gray-600">
              From leaky faucets to major repairs, Syracuse Drain Cleaning Pros offers a wide range of plumbing services to meet your specific needs.
            </p>
          </div>
          {/* Timely Service */}
          <div className="flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-minor/20">
              <FaRegThumbsUp className=" text-xl" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Prompt Service
            </h3>
            <p className="mt-2 text-gray-600">
              Our team ensures prompt service, so your plumbing issues are resolved quickly and efficiently, keeping your home or business running smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affordable;
