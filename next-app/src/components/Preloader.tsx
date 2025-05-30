// Preloader.tsx
"use client";
import Logo from "./Logo";
import { useEffect, useState, useRef } from "react";
import { PRELOADER_CONSTANTS } from "@/constants/preloader";
import { clear } from "console";

export default function Preloader({ dev = true }: { dev?: boolean }) {
  const [loading, setLoading] = useState(true);
  const [hintIndex, setHintIndex] = useState(0);
  const lastIndexRef = useRef(0);
  useEffect(() => {
    const hintTimer = setTimeout(() => {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * PRELOADER_CONSTANTS.hints.length);
      } while (nextIndex === lastIndexRef.current);

      lastIndexRef.current = nextIndex;
      setHintIndex(nextIndex);
    }, 2500);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);
    return () => {
      clearTimeout(hintTimer);
      clearTimeout(timer);
    };
  }, []);

  if (!loading) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-50 gap-12">
      <Logo animate={true} size={64} showSlogan={true} />
      <div className="flex flex-col items-center justify-center">
        <span>Did you know?</span>
        <span>{PRELOADER_CONSTANTS.hints[hintIndex]}</span>
      </div>
    </div>
  );
}
