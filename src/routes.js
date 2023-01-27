import React from "react";

// Root Include
const Root = React.lazy(() => import("./pages/Home/indexRoot"));

const PageError = React.lazy(() => import("./pages/Pages/Special/PageError"));

const routes = [
    { path: "/", component: Root, isWithoutLayout: true, exact: true },
    { component: PageError, isWithoutLayout: true, exact: false },
]

export default routes;