export const AppConfig = {
    // global logo settings
    logo : {
        size: 40,
        showSlogan: false,
        animate: false
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
        delay: 0
    }
}

AppConfig.heroGeometric = {
    delay: 0 + (AppConfig.preloader.dev ? 5 : 0),
};