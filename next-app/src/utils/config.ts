import { title } from "process";

export const AppConfig = {
    logo : {
        name: (process.env.NEXT_PUBLIC_LOGO_NAME ?? "").replace(/\\n/g, "\n"),
        size: Number(process.env.NEXT_PUBLIC_LOGO_SIZE),
        slogan: process.env.NEXT_PUBLIC_LOGO_SLOGAN,
        showSlogan: process.env.NEXT_PUBLIC_LOGO_SHOW_SLOGAN === "true",
        animate: process.env.NEXT_PUBLIC_LOGO_ANIMATE === "true"
    },
    preloader: {
        hints: (process.env.NEXT_PUBLIC_PRELOADER_HINTS || "").split("|").filter(Boolean),
    },
    hero: {
        badge: process.env.NEXT_PUBLIC_HERO_BADGE,
        title1: process.env.NEXT_PUBLIC_HERO_TITLE1,
        title2: process.env.NEXT_PUBLIC_HERO_TITLE2,
        subtitle: process.env.NEXT_PUBLIC_HERO_SUBTITLE
    }
}