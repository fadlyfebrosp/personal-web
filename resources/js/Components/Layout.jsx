import { useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Footer from "./Footer";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

export default function Layout({ children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="h-screen bg-base-300 flex overflow-hidden">
            {/* ===== Desktop Sidebar ===== */}
            <div className="hidden md:block">
                <Sidebar />
            </div>

            {/* ===== Mobile Sidebar Drawer ===== */}
            {open && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setOpen(false)}
                    />
                    <div className="absolute right-0 top-0 h-full w-72 bg-base-200 shadow-xl">
                        <Sidebar onClose={() => setOpen(false)} />
                    </div>
                </div>
            )}

            {/* ===== Right Area ===== */}
            <div className="flex flex-col flex-1 h-screen">
                {/* ===== Mobile Top Bar ===== */}
                <div className="md:hidden flex items-center justify-between px-4 py-3 bg-base-100 border-b border-base-300">
                    <div className="flex items-center gap-2">
                        <img
                            src="/pp.jpg"
                            alt="Fadly Febro avatar"
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="font-semibold flex items-center gap-1">
                            Fadly Febro
                            <CheckBadgeIcon className="w-4 h-4 text-sky-500" />
                        </span>
                    </div>

                    <button onClick={() => setOpen(true)}>
                        <Bars3Icon className="w-6 h-6" />
                    </button>
                </div>

                {/* ===== SCROLL AREA ===== */}
                <Main>{children}</Main>

                {/* ===== FIXED FOOTER ===== */}
                <Footer />
            </div>
        </div>
    );
}
