import { Head } from "@inertiajs/react";
import React from "react";
import { Toaster } from "react-hot-toast";

function AuthLayout({ title, children }) {
    return (
        <>
            <Head title={title} />
            <Toaster position="top-right" />
            <div className="d-flex">
                <div className="flex-grow-1">
                    <main className="admin-main-content">{children}</main>
                </div>
            </div>
        </>
    );
}

export default AuthLayout;
