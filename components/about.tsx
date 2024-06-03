"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      {/* <p className="mb-3">
        After graduating with a degree in
        <span className="font-medium"> Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned
        <span className="font-medium"> full-stack web development</span>.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is  
        <span className="font-medium"> 
            React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a 
        <span className="font-medium"> full-time position</span> as a software
        developer.
      </p> */}
      <div className="mb-3 md:text-start">
        <p>A passionate and dedicated Full Stack Developer with a strong foundation in both front-end and back-end technologies. Over the years, I have honed my skills through diverse projects that showcase my ability to create dynamic, user-friendly, and efficient web applications.
        </p>
        <h2 className="font-bold text-center md:py-5 text-xl md:text-2xl">Skills & Expertise </h2>
        <div className="md:flex gap-5 mb-3">


          <ul className="md:list-disc">
            <p className="font-medium my-3 text-xl">Front-End Development </p>
            <li className="md:mb-5">
              Languages: HTML, CSS, JavaScript </li>

            <li className="md:mb-5">Frameworks & Libraries: React, Angular, Vue.js </li>
            <li className="md:mb-5">UI/UX Design: Responsive Design, Bootstrap, Material UI </li>
            <li className="md:mb-5">Tools: Figma, Adobe XD, Sketch</li>
          </ul>
          <ul className="md:list-disc">
            <h2 className="font-medium my-3 text-xl ">Back-End Development </h2>
            <li> Languages: Node.js, Python, Ruby</li>
            <li >Frameworks: Express.js, Django </li>
            <li >Databases: MySQL, PostgreSQL, MongoDB </li>
            <li >APIs: RESTful Services, GraphQL </li>
            <li >Server Management: AWS, Heroku, Docker </li>
            <li >Full Stack Integration </li>
            <li >Version Control: Git, GitHub, Bitbucket </li>
          </ul>
        </div>
        <p className="mb-3">
          I thrive in dynamic environments where I can leverage my technical expertise and creativity to solve complex problems. My approach to development is user-centric, ensuring that every application I build is not only functional but also provides a seamless user experience. I am constantly learning and adapting to new technologies and methodologies, which keeps me at the forefront of industry trends and best practices.
        </p>
        <p>
          Feel free to explore my portfolio to see examples of my work, and do not hesitate to reach out if you are interested in collaborating or learning more about my experience.
        </p>
      </div>
      {/* <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy
        <span className="font-medium"> learning new things</span>. I am currently
        learning about
        <span className="font-medium"> history and philosophy</span>. I&apos;m also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
}
