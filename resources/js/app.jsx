import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import DefaultLayout from "./Layout/DefaultLayout";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        return resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ).then(page => {
            page.default.layout = page.default.layout || (page => <DefaultLayout children={page} />)
    
            return page;
        });

    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        return root.render(<App {...props} />);
    },
    progress: {
        color: "#F87415",
    },
});
