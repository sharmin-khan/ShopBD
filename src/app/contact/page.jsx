"use client";
import React from 'react';

const About = () => {
  const projects = [
    {
      title: 'PropEase',
      description: "PropEase is your all-in-one platform for buying, selling, and renting properties. It simplifies the entire real estate process with an intuitive interface, smart search tools, and secure transactions, making property management effortless for everyone.",
      demo: 'https://real-estate-platform-4dacc.web.app',
    },
    {
      title: 'TaskNest',
      description: "TaskNest is a smart freelance task marketplace that connects clients with skilled freelancers. It simplifies project management with seamless task posting, bidding, and secure payments, ensuring efficient collaboration and successful project completion for everyone.",
      demo: 'https://freelance-task-marketpla-73040.web.app',
    },
    {
      title: 'MarathonPro',
      description: "Marathon Pro is a comprehensive platform for runners and event organizers. It streamlines marathon management with easy registration, real-time tracking, and performance analytics, helping athletes achieve their goals while making event organization efficient and seamless.",
      demo: 'https://marathon-management-syst-3a566.web.app',
    },
  ];

  const contactInfo = [
    { label: 'Location', value: 'Dhaka, Bangladesh' },
    { label: 'Phone', value: '+8801885676543' },
    { label: 'Email', value: 'sarminkhan@gmail.com' },
  ];

  return (
    <section className=" min-h-screen py-12 px-4 sm:px-6 lg:px-8" aria-labelledby="about-heading">
      <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-center mb-10">
        Meet the Developer
      </h2>

      <article
        className="bg-white max-w-md mx-auto mb-12 p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 flex flex-col items-center"
        aria-labelledby="developer-name"
      >
        <img
          src="https://i.ibb.co.com/q3SyTLH0/girl.jpg"
          alt="Sarmin Akter"
          className="rounded-full w-40 h-40 object-cover mb-6 border-4 border-amber-100"
        />
        <h3 id="developer-name" className="text-2xl font-semibold text-gray-800 text-center">
          Sarmin Akter
        </h3>
        <p className="text-gray-600 text-center mb-4">Frontend Developer</p>
        <p className="text-gray-700 text-center leading-relaxed">
          I build responsive web applications using the MERN stack, Firebase, and modern UI. I love creating user-friendly interfaces and seamless experiences. My goal is to make the web a better place, one project at a time.
        </p>
      </article>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
        {projects.map((project, index) => (
          <article
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
            aria-labelledby={`project-title-${index}`}
          >
            <h4 id={`project-title-${index}`} className="text-xl font-semibold text-gray-800 mb-3">
              {project.title}
            </h4>
            <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
            <div className="flex justify-center gap-4">
    
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className=" text-lg text-center mb-10">
        Want to collaborate or learn more? Feel free to reach out through the contact form below!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {contactInfo.map((info, index) => (
          <article key={index} className="bg-white p-6 rounded-xl shadow-lg">
            <p className="text-gray-800 font-semibold mb-2">{info.label}</p>
            <p className="text-gray-700">{info.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default About;