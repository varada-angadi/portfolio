// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#011313] text-gray-300 py-8 px-4 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4">
        <a
          href="mailto:your.email@example.com"
          className="hover:text-white transition"
        >
          Email
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>
      </div>
      <p className="text-sm text-gray-400">
        Always open to collaborations, ideas, and opportunities.
      </p>
    </footer>
  );
}
