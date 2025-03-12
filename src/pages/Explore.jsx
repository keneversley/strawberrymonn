// import React from "react";

// const Explore = () => {
//   return <div className="min-h-screen">Explore</div>;
// };

// export default Explore;
import React from "react";

const Explore = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-20">
      {/* Adjust the `pt-20` (padding-top) based on your navbar height */}
      <h1 className="text-4xl font-bold text-center mb-6">Explore</h1>
      <p className="text-lg text-gray-700 text-center">
        Welcome to the Explore page! Here, you'll find exciting opportunities, insights, and resources to broaden your horizons. Dive in and discover something new today!
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">What You Can Discover</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Innovative solutions and tools</li>
          <li>Community projects and collaborations</li>
          <li>Upcoming events and opportunities</li>
        </ul>
      </div>
    </div>
  );
};

export default Explore;

