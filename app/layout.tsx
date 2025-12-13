import "./globals.css";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Pavel Bosyy — Frontend Developer",
  description: "Frontend Developer Portfolio — React / Next.js / TypeScript",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${orbitron.className} bg-gray-950 text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
