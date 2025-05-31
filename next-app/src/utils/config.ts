export const AppConfig = {
    // global logo settings
    logo : {
        size: Number(process.env.NEXT_PUBLIC_LOGO_SIZE),
        showSlogan: process.env.NEXT_PUBLIC_LOGO_SHOW_SLOGAN === "true",
        animate: process.env.NEXT_PUBLIC_LOGO_ANIMATE === "true"
    },

    preloader: {
        dev: process.env.NEXT_PUBLIC_PRELOADER_DEV === "true",
        // logo in preloader
        logo: {
            size: 64,
            showSlogan: true,
            animate: true
        }
    },
    
    heroGeometric: {
        delay: 0,
    }
}