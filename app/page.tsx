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
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-8 sm:py-12 bg-gradient-to-b from-gray-950 to-black">
      {/* Фотография */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mb-6 sm:mb-8"
      >
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 sm:border-4 border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.5)] sm:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] transition-all duration-300 hover:scale-105">
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
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-400 mb-2 sm:mb-3 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] px-2"
      >
        ПАВЕЛ БОСЫЙ
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 md:mb-10 tracking-widest px-2"
      >
        <span className="block sm:inline">FRONTEND DEVELOPER</span>
        <span className="hidden sm:inline"> • </span>
        <span className="block sm:inline sm:block md:inline">REACT • NEXT.JS</span>
        <span className="hidden md:inline"> • </span>
        <span className="block md:inline">TYPESCRIPT</span>
      </motion.h2>

      {/* Кнопка скачать резюме */}
      <motion.a
        href="/Pavel-Bosyy-CV.pdf"
        download
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex items-center justify-center gap-2 bg-cyan-500 text-black font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-full hover:shadow-[0_0_15px_rgba(34,211,238,0.7)] hover:scale-105 transition mb-8 sm:mb-12 text-sm sm:text-base"
      >
        <Download size={18} className="sm:w-5 sm:h-5" />
        <span className="whitespace-nowrap">Скачать резюме (PDF)</span>
      </motion.a>

      {/* Социальные ссылки */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex gap-4 sm:gap-6 mb-10 sm:mb-16"
      >
        <a href="https://github.com/Triganus" target="_blank" className="hover:text-cyan-400 transition">
          <Github size={24} className="sm:w-7 sm:h-7" />
        </a>
        <a href="mailto:pavelbosy452@gmail.com" className="hover:text-cyan-400 transition">
          <Mail size={24} className="sm:w-7 sm:h-7" />
        </a>
        <a href="https://t.me/Triganusnikus2312" target="_blank" className="hover:text-cyan-400 transition">
          <Send size={24} className="sm:w-7 sm:h-7" />
        </a>
      </motion.div>

      {/* Навыки */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="max-w-4xl w-full text-left mb-10 sm:mb-16 px-2"
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-4 sm:mb-6 text-center">Навыки</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center text-gray-300">
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
        className="max-w-3xl w-full text-left space-y-6 sm:space-y-8 px-4"
      >
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-3 text-center sm:text-left">Проекты</h3>
          <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
            <li>
              <a href="https://meditation-swart.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">Meditation</a> — приложение для медитации на React
            </li>
            <li>
              <a href="https://selenurtrade.com/index.html" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">СеленЮР-трейд</a> — готовый проект по заказу, интернет-магазин автозапчастей (уже работает на своего заказчика)
            </li>
            <li>
              <a href="https://stellar-burgers-ecru.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">Stellar Burgers</a> — онлайн-заказ бургеров, React приложение
            </li>
            <li>
              <a href="https://triganus.github.io/web-larek-frontend/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">Web Larek</a> — интернет-магазин магических товаров для веб-разработчиков, TypeScript, паттерн MVP с событийным обменом
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-3 text-center sm:text-left">Контакты</h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            <span className="block sm:inline mb-1 sm:mb-0">📧 <a href="mailto:pavelbosy452@gmail.com" className="text-cyan-400 hover:underline">pavelbosy452@gmail.com</a></span>
            <span className="hidden sm:inline">  </span>
            <span className="block sm:inline mb-1 sm:mb-0">📧 <a href="mailto:triganus2312000@gmail.com" className="text-cyan-400 hover:underline">triganus2312000@gmail.com</a></span>
            <span className="hidden sm:inline">  </span>
            <br className="sm:hidden" />
            <span className="block sm:inline">💬 Telegram: <a href="https://t.me/Triganusnikus2312" target="_blank" className="text-cyan-400 hover:underline break-all">@Triganusnikus2312</a></span>
          </p>
        </div>
      </motion.section>
    </main>
  );
}

function Skill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 sm:gap-2 group">
      <div className="text-2xl sm:text-3xl md:text-4xl group-hover:scale-110 transition-transform">{icon}</div>
      <span className="text-xs sm:text-sm text-gray-400">{label}</span>
    </div>
  );
}
