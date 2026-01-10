import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * NoIndex component that adds a noindex meta tag to all pages except the homepage.
 * This prevents search engines from indexing subpages.
 */
const NoIndex = () => {
    const location = useLocation();

    useEffect(() => {
        // Only allow indexing for the homepage
        const isHomePage = location.pathname === '/';

        // Find or create the robots meta tag
        let metaRobots = document.querySelector('meta[name="robots"]');

        if (!isHomePage) {
            // Add noindex for all subpages
            if (!metaRobots) {
                metaRobots = document.createElement('meta');
                metaRobots.name = 'robots';
                document.head.appendChild(metaRobots);
            }
            metaRobots.content = 'noindex, nofollow';
        } else {
            // Allow indexing for homepage
            if (metaRobots) {
                metaRobots.content = 'index, follow';
            }
        }

        // Cleanup on unmount or route change
        return () => {
            // Reset to allow indexing when navigating away
            if (metaRobots && !isHomePage) {
                metaRobots.content = 'index, follow';
            }
        };
    }, [location.pathname]);

    return null; // This component doesn't render anything
};

export default NoIndex;
