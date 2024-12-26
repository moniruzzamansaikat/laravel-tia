import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "@inertiajs/react";
import Sidebar from "../Components/Sidebar";
import { Toaster } from "react-hot-toast";

function DefaultLayout({ children }) {
    return (
        <>
            <Toaster />
            <div className="d-flex">
                <Sidebar />

                <div className="flex-grow-1">
                    <Navbar />
                    <main className="container mt-4">{children}</main>
                </div>
            </div>
        </>
    );
}

export default DefaultLayout;
