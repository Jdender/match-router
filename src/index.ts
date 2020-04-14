(() => {
    interface Route {
        route: string;
        el: HTMLElement;
    }

    const hashRegex = /#?(.*)/; // Regex to remove leading #s
    const routes: Route[] = []; // Cached routes from init
    let hasInitYet = false; // What it says on the tin

    // Handle the current route on inital load and on any hash change
    const handle = () => {
        // Just in case
        if (!hasInitYet) init();

        // Get the current route from hash and regex
        const current = decodeURIComponent(hashRegex.exec(location.hash)?.[1] ?? '').trim();

        for (const { route, el } of routes) {

            // If the route matches then good, else hide it
            if (route === current) el.style.display = '';
            else el.style.display = 'none';
        }
    };

    // Runs on inital load
    const init = () => {
        // Avoid double initing
        if (hasInitYet) return;
        hasInitYet = true;

        // Find the route matcher
        const matcher = document.getElementById('route-matcher');
        if (!matcher) return;

        // Turn the element list into an array and iterate it
        for (const el of Array.prototype.slice.apply(matcher.children)) {

            // Filter out null or non html elements e.g. svg or xml
            if (!el || !(el instanceof HTMLElement)) continue;

            // Get the `data-route` atribute
            const route = el.dataset?.route?.trim();
            if (!route) continue;

            // Add to the list of routes
            routes.push({ route, el });
        }

        // Call handle after init
        handle();
    };

    // Lastly, add the event listeners
    addEventListener('hashchange', handle);
    addEventListener('DOMContentLoaded', init);

    // If the event is already fired before the script loaded
    if (document.readyState === 'interactive' || document.readyState === 'complete') init();
})();
