import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-[#f8f8f8] shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Chopra Kitchens</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:text-orange-500">Home</a>
            <a href="#" className="hover:text-orange-500">Kitchens</a>
            <a href="#" className="hover:text-orange-500">Wardrobes</a>
            <a href="#" className="hover:text-orange-500">Locations</a>
            <a href="#" className="hover:text-orange-500">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Modular Kitchens & Wardrobes</h2>
        <p className="text-lg text-gray-600 mb-8">
          Designed to fit your lifestyle. Serving Ferozepur & Amritsar.
        </p>
        <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600">
          Get a Free Consultation
        </button>
      </main>
    </div>
  );
}

