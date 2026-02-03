import { Link, usePage } from "@inertiajs/react";
import { CheckBadgeIcon, XMarkIcon } from "@heroicons/react/24/solid";

const MenuItem = ({ href, children, onClick }) => {
    const { url } = usePage();
    const isActive = url === href;

    return (
        <li>
            <Link
                href={href}
                onClick={onClick}
                className={`
                    relative flex items-center
                    px-4 py-2 rounded-lg
                    transition-all duration-300
                    ${
                        isActive
                            ? "bg-primary text-primary-content"
                            : "hover:bg-base-300 hover:pl-6"
                    }
                `}
            >
                {children}
                <span
                    className={`
                        absolute left-0 top-0 h-full w-1 rounded-r
                        bg-primary transition-all
                        ${isActive ? "opacity-100" : "opacity-0"}
                    `}
                />
            </Link>
        </li>
    );
};

export default function Sidebar({ onClose }) {
    return (
        <aside className="w-72 h-screen bg-base-200 p-6 flex flex-col overflow-y-auto">
            {/* Close button (mobile) */}
            {onClose && (
                <button onClick={onClose} className="md:hidden self-end mb-3">
                    <XMarkIcon className="w-6 h-6" />
                </button>
            )}

            {/* Profile */}
            <div className="flex flex-col items-center text-center mb-8">
                <div className="avatar mb-3">
                    <div className="w-20 rounded-full ring ring-base-100 ring-offset-2 ring-offset-base-200">
                        <img src="/pp.jpg" alt="Fadly Febro avatar" />
                    </div>
                </div>

                <h2 className="font-bold text-lg flex items-center gap-1">
                    Fadly Febro
                    <CheckBadgeIcon className="w-5 h-5 text-sky-500" />
                </h2>

                <p className="text-sm opacity-60">@fdly.fbro_</p>
            </div>

            {/* Menu */}
            <ul className="space-y-1 flex-1">
                <li className="text-xs uppercase opacity-50 px-2 mb-2">Menu</li>

                <MenuItem href="/" onClick={onClose}>
                    Home
                </MenuItem>
                <MenuItem href="/about" onClick={onClose}>
                    About
                </MenuItem>
                <MenuItem href="/achievements" onClick={onClose}>
                    Achievements
                </MenuItem>
                <MenuItem href="/projects" onClick={onClose}>
                    Projects
                </MenuItem>
                <MenuItem href="/dashboard" onClick={onClose}>
                    Dashboard
                </MenuItem>
                <MenuItem href="/chat" onClick={onClose}>
                    Chat Room
                </MenuItem>
                <MenuItem href="/contact" onClick={onClose}>
                    Contact
                </MenuItem>
            </ul>

            {/* Footer */}
            <div className="text-xs opacity-40 text-center pt-6">
                COPYRIGHT © 2026 <br />
                Fadly Febro. All rights reserved.
            </div>
        </aside>
    );
}

