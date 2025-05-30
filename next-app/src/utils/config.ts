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
    }
}