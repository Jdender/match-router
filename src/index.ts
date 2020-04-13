(() => {
    interface Route {
        route: string;
        el: HTMLElement;
    }

    // Regex to remove leading #s
    const hashRegex = /#?(.*)/;

    // Cached routes
    const routes: Route[] = [];

    // Handle the current route on inital load and on any hash change
    const handle = () => {
        // Get the current route from hash and regex
        const current = hashRegex.exec(location.hash)?.[1] ?? '';

        for (const { route, el } of routes) {

            // If the route matches then good, else hide it
            if (route === current) el.style.display = '';
            else el.style.display = 'hidden';
        }
    };

    // Runs on inital load
    const init = () => {
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
    };

    // Lastly, add the event listeners
    addEventListener('hashchange', handle);
    addEventListener('DOMContentLoaded', init);
})();
