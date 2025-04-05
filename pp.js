import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import Lottie from "lottie-react";
import contactAnimation from "@/assets/lottie/contact.json";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) setDarkMode(storedTheme === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <motion.main
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      className={`relative min-h-screen bg-[linear-gradient(270deg,_#00ffff,_#ff0000,_#ffff00)] bg-[length:400%_400%] ${darkMode ? "text-white" : "text-gray-900"} font-sans`}
    >
      <header className="p-6 border-b shadow-sm bg-white/10 backdrop-blur sticky top-0 z-50">
        <nav className="flex flex-col sm:flex-row justify-between items-center max-w-5xl mx-auto gap-2 sm:gap-0">
          <h1 className="text-2xl font-bold">Sharad</h1>
          <ul className="flex gap-4 text-sm font-medium items-center">
            <li><a href="#about" className="hover:text-cyan-300 transition">About</a></li>
            <li><a href="#projects" className="hover:text-cyan-300 transition">Projects</a></li>
            <li><a href="#resume" className="hover:text-cyan-300 transition">Resume</a></li>
            <li><a href="#contact" className="hover:text-cyan-300 transition">Contact</a></li>
            <li>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="ml-2 text-lg hover:text-yellow-300"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun /> : <Moon />}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <motion.section
        id="about"
        className="p-6 max-w-4xl mx-auto transition-all duration-700"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-4">About Me</h2>
            <p className={`${darkMode ? "text-white/90" : "text-gray-800"}`}>
              Hi! I'm Sharad, a passionate Web Developer focused on building clean and functional web interfaces. I love working with JavaScript, React, HTML, and cutting-edge CSS.
            </p>
          </div>
          <div className="flex-1">
            <Lottie animationData={contactAnimation} loop={true} className="w-full h-48" />
          </div>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="p-6 max-w-4xl mx-auto transition-all duration-700"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <ul className="grid gap-4">
          {[
            {
              title: "Portfolio Website",
              description: "A personal portfolio built with React and Tailwind CSS to showcase my projects and skills."
            },
            {
              title: "Nike Jordans History Site",
              description: "An informative site about the evolution of Nike Jordans sneakers using HTML, CSS, and JavaScript."
            },
            {
              title: "To-Do List App",
              description: "A simple React-based task manager with dynamic filtering and persistent local storage."
            }
          ].map((project, i) => (
            <li key={i} className={`p-4 border rounded-xl shadow-sm ${darkMode ? "bg-white/10 border-white/20" : "bg-gray-100 border-gray-300"} transform transition duration-300 hover:scale-105 hover:shadow-md`}>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className={darkMode ? "text-white/80" : "text-gray-700"}>{project.description}</p>
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        id="resume"
        className="p-6 max-w-4xl mx-auto text-center transition-all duration-700"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-6"
        >
          <Button className="bg-white text-cyan-700 px-6 py-2 rounded-full flex items-center gap-2 font-semibold shadow-lg hover:bg-cyan-300 hover:text-red-800 transition">
            Download Resume
          </Button>
        </motion.div>
      </motion.section>

      <motion.section
        id="contact"
        className="p-6 max-w-4xl mx-auto transition-all duration-700"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-semibold mb-4 text-center">Contact Me</h2>
        <form
          action="https://formspree.io/f/mayvgozn"
          method="POST"
          className="grid gap-4 max-w-xl mx-auto"
        >
          <input name="name" placeholder="Your Name" required className="p-2 rounded-md border text-black" />
          <input name="email" placeholder="Your Email" type="email" required className="p-2 rounded-md border text-black" />
          <textarea name="message" placeholder="Your Message" required className="p-2 rounded-md border text-black"></textarea>
          <Button type="submit" className="bg-cyan-600 text-white hover:bg-cyan-500 transition">Send Message</Button>
        </form>
      </motion.section>

      <footer className="p-6 text-center text-white/80 text-sm border-t border-white/30 mt-10">
        © {new Date().getFullYear()} Sharad. All rights reserved.
      </footer>
    </motion.main>
  );
}