import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "@inertiajs/react";
import Sidebar from "../Components/Sidebar";
import { Toaster } from "react-hot-toast";

function DefaultLayout({ children }) {
    return (
        <>
            <Toaster position="top-right" />
            <div className="d-flex">
                <Sidebar />

                <div className="flex-grow-1">
                    <Navbar />
                    <main className="admin-main-content">{children}</main>
                </div>
            </div>
        </>
    );
}

export default DefaultLayout;
