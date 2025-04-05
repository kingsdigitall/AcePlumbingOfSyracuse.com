import React from "react";

const ProcessWidget = () => {
  return (
    <div className="mt-16 px-4 md:px-32">
      <h2 className="text-center text-3xl font-extrabold text-main">
      Drain Cleaning Services in Syracuse – 3 Easy Steps!
      </h2>
      <p className="mt-4 text-center text-lg">
      Getting your drains cleaned with Syracuse Drain Cleaning Pros is simple, fast, and hassle-free. Here’s how it works:
      </p>
      <section className="relative lg:mx-32 flex flex-col items-center justify-center gap-8 p-8">
      {/* Vertical Progress Bar */}
      <div className="absolute left-1/2 h-[90%] w-1 -translate-x-1/2 transform bg-gray-300 md:block"></div>

      {/* Step 1 */}
      <div className="relative flex flex-col items-center rounded-md bg-white p-4 text-center shadow-lg">
      <h3 className="mb-4 text-xl font-bold">Step 1: Schedule an Appointment</h3>
      <p>
      Contact us to schedule a convenient time for our team to visit and assess your drain cleaning needs.
      </p>
      </div>

      {/* Step 2 */}
      <div className="relative flex flex-col items-center rounded-md bg-white p-4 text-center shadow-lg">
      <h3 className="mb-4 text-xl font-bold">Step 2: Get Transparent Pricing</h3>
      <p>
      No surprises, no hidden fees—just clear, competitive pricing for your drain cleaning service.
      </p>
      </div>

      {/* Step 3 */}
      <div className="relative flex flex-col items-center rounded-md bg-white p-4 text-center shadow-lg">
      <h3 className="mb-4 text-xl font-bold">Step 3: Fast & Efficient Service</h3>
      <p>
      Our team arrives on time, performs the cleaning efficiently, and ensures your drains are flowing smoothly.
      </p>
      </div>
      </section>
    </div>
  );
};

export default ProcessWidget;
