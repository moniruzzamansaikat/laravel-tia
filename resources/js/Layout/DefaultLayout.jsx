import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "@inertiajs/react";

function DefaultLayout({ children }) {
    return (
        <div className="d-flex">
            <div className="sidebar bg-light p-3" style={{ width: "250px" }}>
                <h4>Sidebar</h4>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>

            <div className="flex-grow-1">
                <Navbar />
                <main className="container mt-4">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default DefaultLayout;
