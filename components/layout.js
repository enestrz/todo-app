import React from "react";
import Navbar from "./navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    return (
        <div className="wrapper">
            <Navbar />
            <Sidebar />
            {children}
        </div>
    );
}
