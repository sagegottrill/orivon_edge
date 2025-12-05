import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        // Disable browser's default scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Temporarily disable smooth scrolling to force instant jump
        document.documentElement.style.scrollBehavior = 'auto';

        window.scrollTo(0, 0);

        // Optional: Restore smooth scrolling if you want it for anchor links
        // document.documentElement.style.scrollBehavior = 'smooth'; 

        // Optional: Re-enable it on unmount if needed, but keeping it manual is usually safer for SPAs
        return () => {
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'manual';
            }
        };
    }, [pathname]);

    return null;
}
