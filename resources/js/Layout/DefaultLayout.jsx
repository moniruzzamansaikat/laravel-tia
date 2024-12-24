import React from "react";
import Navbar from "../Components/Navbar";

function DefaultLayout({ ...props }) {
    return (
        <div>
            <Navbar />
            <main className="container">
                <div>{props.children}</div>
            </main>
        </div>
    );
}

export default DefaultLayout;
