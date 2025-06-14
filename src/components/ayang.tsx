"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const menuList = [
    {
        name: "Sate Ayam",
        image: "/sateayam.jpg",
        message: "AYANG AKU MAU SATE AYAM!",
    },
    {
        name: "Corndog",
        image: "/corndog.jpg",
        message: "AYANG AKU MAU CORN DOG!",
    },
    {
        name: "Dyson",
        image: "/dyson.jpg",
        message: "MANA JANJI MAU BELIIN DYSON!!",
    },
    {
        name: "Ceker Mercon",
        image: "/cekermercon.jpg",
        message: "MAU CEKER!!!:((",
    },
];

export default function AyangPage() {
    const [step, setStep] = useState(1);
    const [showHearts, setShowHearts] = useState(false);
    const [showGallery, setShowGallery] = useState(false);
    const [galleryImages, setGalleryImages] = useState<string[]>([]);

    useEffect(() => {
        if (showGallery && galleryImages.length === 0) {
            const paths = [
                "/gallery/WhatsApp Image 2025-05-05 at 10.21.13 PM (1).jpeg",
                "/gallery/WhatsApp Image 2025-05-05 at 10.21.13 PM.jpeg",
                "/gallery/WhatsApp Image 2025-05-05 at 10.21.14 PM.jpeg",
                "/gallery/WhatsApp Image 2025-05-05 at 10.21.15 PM.jpeg",
                "/gallery/WhatsApp Image 2025-05-05 at 10.21.19 PM.jpeg",
                "/gallery/WhatsApp Image 2025-05-05 at 10.23.08 PM (1).jpeg",
            ];
            setGalleryImages(paths);
        }
    }, [showGallery, galleryImages]);


    const handleClick = (message: string) => {
        const encoded = encodeURIComponent(message);
        const waUrl = `https://wa.me/6281299090466?text=${encoded}`;
        window.open(waUrl, "_blank");
    };

    const handleHeartClick = () => {
        setShowHearts(true);
        setTimeout(() => setShowHearts(false), 2000);
    };

    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-pink-200 to-rose-100 p-4 font-sans overflow-hidden">
            {step === 1 && (
                <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-2xl max-w-md text-center border border-pink-300 animate-fadeIn">
                    <h1 className="text-3xl font-bold text-pink-700 mb-3">💌 Halo Ayang! 🥰</h1>
                    <p className="text-pink-600 mb-6">
                        Aku kepengen beliin ayang sesuatu ni, ayang pilih deh salah satuu!! 💖
                    </p>
                    <button
                        onClick={() => setStep(2)}
                        className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition-all"
                    >
                        MAU!! 💕
                    </button>
                </div>
            )}

            {step === 2 && !showGallery && (
                <>
                    <h2 className="text-xl font-semibold text-rose-600 mb-4 animate-fadeIn">
                        Pilih makanan atau barangmu ya Ayang 🍽️💕
                    </h2>
                    <div className="grid grid-cols-2 gap-4 max-w-sm w-full animate-fadeIn">
                        {menuList.map(({ name, image, message }) => (
                            <div
                                key={name}
                                onClick={() => handleClick(message)}
                                className="cursor-pointer bg-white/80 backdrop-blur-lg p-3 rounded-2xl shadow-lg text-center text-pink-700 font-semibold hover:bg-pink-100 hover:scale-105 transition-all border border-pink-200"
                            >
                                <Image
                                    src={image}
                                    alt={name}
                                    width={150}
                                    height={150}
                                    className="rounded-xl mb-2 object-cover w-full h-28"
                                />
                                <span className="block text-sm">{name}</span>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {showGallery && (
                <div className="grid grid-cols-2 gap-4 mt-6 max-w-md animate-fadeIn">
                    {galleryImages.map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            alt={`Gallery ${index}`}
                            width={300}
                            height={200}
                            className="rounded-xl object-cover w-full h-40"
                        />
                    ))}
                </div>
            )}

            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
                <button
                    onClick={handleHeartClick}
                    className="bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg hover:scale-110 transition-all"
                >
                    SAYANG AYANG!! 💋
                </button>
                <button
                    onClick={() => setShowGallery(!showGallery)}
                    className="bg-rose-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-110 transition-all"
                >
                    LIHAT FOTO KITA DEH! 📸
                </button>
            </div>

            {showHearts && (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-40">
    {[...Array(10)].map((_, i) => (
      <div
        key={i}
        className="absolute text-pink-400 text-2xl animate-floatLove"
        style={{
          left: `${Math.random() * 80 + 10}%`,
          bottom: "0px",
          animationDelay: `${Math.random() * 0.5}s`,
        }}
      >
        ❤️
      </div>
    ))}
  </div>
)}


        </main>
    );
}