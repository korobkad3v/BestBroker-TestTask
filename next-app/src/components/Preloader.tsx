// Preloader.tsx
"use client";
import Logo from "./Logo";
import { useEffect, useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { AppConfig } from "@/utils/config";

export default function Preloader({ dev = true }: { dev: boolean }) {
  const t = useTranslations("Preloader");
  const [loading, setLoading] = useState(false);
  const hintsRef = useRef(t.raw("hints"));
  const [hintIndex, setHintIndex] = useState(
    Math.floor(Math.random() * hintsRef.current.length)
  );

  const usedIndicesRef = useRef<number[]>([]);

  // dev mode
  useEffect(() => {
    if (!dev) return;
    setLoading(true);
    document.body.style.overflow = "hidden";
    const timer = setInterval(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 5000);
    return () => {
      document.body.style.overflow = "";
      clearInterval(timer);
    };
  }, []);

  // prod mode
  useEffect(() => {
    if (dev) return;

    // const alreadyShown = sessionStorage.getItem("preloaderShown");
    // if (alreadyShown) {
    //   return;
    // }

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
  }, []);

  useEffect(() => {
    if (!loading) return;
    const hintTimer = setInterval(() => {
      const availableIndices: string[] = t
        .raw("hints")
        .map((_: any, i: any) => i)
        .filter((i: number) => !usedIndicesRef.current.includes(i));

      if (availableIndices.length === 0) {
        usedIndicesRef.current = [];
      }

      const remaining =
        availableIndices.length > 0
          ? availableIndices
          : t.raw("hints").map((_: any, i: any) => i);
      const nextIndex = remaining[Math.floor(Math.random() * remaining.length)];

      usedIndicesRef.current.push(nextIndex);
      setHintIndex(nextIndex);
    }, 2500);

    return () => {
      clearInterval(hintTimer);
    };
  }, [loading]);

  useEffect(() => {
    if (hintsRef.current.length < 1) {
      hintsRef.current = t("hints");
    }
  }, [hintIndex]);

  if (!loading) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-9999 bg-background">
      <Logo
        className="flex items-center justify-center pointer-events-none"
        animate={AppConfig.preloader.logo.animate}
        size={AppConfig.preloader.logo.size}
        showSlogan={AppConfig.preloader.logo.showSlogan}
      />
      <div className="flex flex-col gap-1.5 absolute bottom-32 left-1/2 -translate-x-1/2 text-center">
        <span className="font-semibold">Why Choose Best Broker?</span>
        <span className="whitespace-pre-line">{hintsRef.current[hintIndex]}</span>
      </div>
    </div>
  );
}
