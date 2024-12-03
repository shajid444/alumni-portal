import React from 'react';

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-between bg-white px-6 md:px-20 py-12">
      {/* Left Section: Image */}
      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
        <img
          src="https://i.ibb.co.com/zVbZrJF/design-wala-Ngj-JZ31c9-I-unsplash.jpg" // Replace with your actual image URL
          alt="President of Alumnut"
          className="w-full h-auto rounded-lg "
        />
      </div>

      {/* Right Section: Text Content */}
      <div className="mt-8 md:mt-0 md:ml-12 flex flex-col items-start bg-yellow-200 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <span className="bg-white text-purple-700 text-sm px-3 py-1 rounded-lg shadow">
            About Us
          </span>
        </div>
        <h1 className="text-4xl font-bold text-purple-800 mb-6">
          Welcome to Alumnut
        </h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          Dear Alumni,
          <br />
          Welcome to the official website of the Alumni Association of North
          South University (Alumnut)! As your President, I am thrilled to connect
          with you all.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          We are a vibrant network of graduates from Bangladesh's leading
          private university. Alumnut is dedicated to fostering lifelong bonds,
          celebrating our achievements, and contributing to our alma mater's
          growth. Our mission is rooted in unity, success, and community
          impact, bringing together diverse talents for collaboration and
          support.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Thank you for your dedication and passion. Together, we can inspire,
          connect, and thrive, building a future that honors our proud past.
        </p>
        <p className="text-gray-700 leading-relaxed mt-6 font-bold">
          Warm regards,
          <br />
          Abcd Hasan
          <br />
          President, Alumnut
        </p>
      </div>
    </section>
  );
};

export default About;
