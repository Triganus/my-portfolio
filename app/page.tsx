"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Mail, Send, Download } from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiTypescript,
} from "react-icons/si";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-gray-950 to-black">
      {/* Фотография */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mb-8"
      >
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] transition-all duration-300 hover:scale-105">
          <Image
            src="/photo.jpg"
            alt="Павел Босый"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Градиентная обводка */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-20 blur-xl animate-pulse"></div>
      </motion.div>

      {/* Главный блок */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold text-cyan-400 mb-3 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
      >
        ПАВЕЛ БОСЫЙ
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl text-gray-400 mb-10 tracking-widest"
      >
        FRONTEND DEVELOPER • REACT • NEXT.JS • TYPESCRIPT
      </motion.h2>

      {/* Кнопка скачать резюме */}
      <motion.a
        href="/Pavel-Bosyy-CV.pdf"
        download
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex items-center gap-2 bg-cyan-500 text-black font-semibold px-5 py-3 rounded-full hover:shadow-[0_0_15px_rgba(34,211,238,0.7)] hover:scale-105 transition mb-12"
      >
        <Download size={20} />
        Скачать резюме (PDF)
      </motion.a>

      {/* Социальные ссылки */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex gap-6 mb-16"
      >
        <a href="https://github.com/Triganus" target="_blank" className="hover:text-cyan-400 transition">
          <Github size={28} />
        </a>
        <a href="mailto:pavelbosy452@gmail.com" className="hover:text-cyan-400 transition">
          <Mail size={28} />
        </a>
        <a href="https://t.me/Triganusnikus2312" target="_blank" className="hover:text-cyan-400 transition">
          <Send size={28} />
        </a>
      </motion.div>

      {/* Навыки */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="max-w-4xl text-left mb-16"
      >
        <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">Навыки</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 justify-items-center text-gray-300">
          <Skill icon={<SiHtml5 color="#e34f26" />} label="HTML5" />
          <Skill icon={<SiCss3 color="#1572B6" />} label="CSS3" />
          <Skill icon={<SiJavascript color="#f7df1e" />} label="JavaScript" />
          <Skill icon={<SiTypescript color="#3178c6" />} label="TypeScript" />
          <Skill icon={<SiReact color="#61dafb" />} label="React" />
          <Skill icon={<SiNextdotjs color="#fff" />} label="Next.js" />
          <Skill icon={<SiGit color="#f14e32" />} label="Git" />
        </div>
      </motion.section>

      {/* Проекты */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="max-w-3xl text-left space-y-8"
      >
        <div>
          <h3 className="text-2xl font-semibold text-cyan-400 mb-3">Проекты</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <strong className="text-cyan-400">Auction Website</strong> — адаптивный сайт по макету Figma (HTML, CSS, Flexbox)
            </li>
            <li>
              <strong className="text-cyan-400">Weather App</strong> — React + OpenWeather API
            </li>
            <li>
              <strong className="text-cyan-400">Portfolio Page</strong> — персональный сайт на Next.js (этот)
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-cyan-400 mb-3">Контакты</h3>
          <p className="text-gray-300">
            📧 pavelbosy452@gmail.com  
            💬 Telegram: <a href="https://t.me/Triganusnikus2312" target="_blank" className="text-cyan-400 hover:underline">@Triganusnikus2312</a>
          </p>
        </div>
      </motion.section>
    </main>
  );
}

function Skill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className="text-4xl group-hover:scale-110 transition-transform">{icon}</div>
      <span className="text-sm text-gray-400">{label}</span>
    </div>
  );
}
