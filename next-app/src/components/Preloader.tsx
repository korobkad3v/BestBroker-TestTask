// Preloader.tsx
"use client";
import Logo from "./Logo";
import { useEffect, useState, useRef } from "react";
import { AppConfig } from "@/utils/config";
import { clear } from "console";
import { tr } from "framer-motion/client";

export default function Preloader({
  dev = true,
}: {
  dev: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);
  const hintsRef = useRef(AppConfig.preloader.hints);
  const usedIndicesRef = useRef<number[]>([]);

  // dev mode
  useEffect(() => {
    if (!dev) return;
    setLoading(true);
    const timer = setInterval(() => {
      setLoading(false);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // prod mode
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("preloaderShown");
    if (alreadyShown || dev) return;

    setLoading(true);
    const onLoad = () => {
      sessionStorage.setItem("preloaderShown", "true");
      setLoading(false);
    };
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  });

  useEffect(() => {
    if (!loading) return;
    const hintTimer = setInterval(() => {
        console.log("change");
      const availableIndices = AppConfig.preloader.hints
        .map((_, i) => i)
        .filter((i) => !usedIndicesRef.current.includes(i));

      if (availableIndices.length === 0) {
        usedIndicesRef.current = [];
      }

      const remaining =
        availableIndices.length > 0
          ? availableIndices
          : AppConfig.preloader.hints.map((_, i) => i);
      const nextIndex = remaining[Math.floor(Math.random() * remaining.length)];

      usedIndicesRef.current.push(nextIndex);
      setHintIndex(nextIndex);
    }, 2500);

    return () => {
      clearTimeout(hintTimer);
    };
  }, [loading]);

  useEffect(() => {
    if (hintsRef.current.length < 1) {
      hintsRef.current = [...AppConfig.preloader.hints];
    }
  }, [hintIndex]);

  if (!loading) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-50 gap-12 bg-background">
      <Logo animate={true} size={64} showSlogan={true} />
      <div className="flex flex-col items-center justify-center">
        <span>Did you know?</span>
        <span>{hintsRef.current[hintIndex]}</span>
      </div>
    </div>
  );
}
