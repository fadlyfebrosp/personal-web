import { useState } from "react";
import {
    ChevronDownIcon,
    ChevronUpIcon,
    BriefcaseIcon,
    LinkIcon,
    PhotoIcon,
} from "@heroicons/react/24/outline";

export default function CareerCard({
    typeLabel,
    logo,
    company,
    location,
    period,
    roles = [],
    projectLink,
    gallery = [],
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="rounded-2xl bg-base-200/60 border border-white/10 backdrop-blur shadow-lg transition">
            {/* HEADER */}
            <div className="flex gap-4 p-5">
                {/* Logo */}
                <div className="w-14 h-14 rounded-xl bg-base-100 flex items-center justify-center shadow">
                    <img
                        src={logo}
                        alt={company}
                        className="w-10 h-10 object-contain"
                    />
                </div>

                {/* Info */}
                <div className="flex-1">
                    {typeLabel && (
                        <span className="badge badge-outline badge-sm mb-1">
                            {typeLabel}
                        </span>
                    )}

                    <h3 className="font-semibold text-base mt-1">{company}</h3>
                    <p className="text-sm opacity-80">{location}</p>
                    <p className="text-xs opacity-60 mt-1">{period}</p>

                    <button
                        onClick={() => setOpen(!open)}
                        className="mt-3 flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                        {open ? "Hide details" : "Show details"}
                        {open ? (
                            <ChevronUpIcon className="w-4 h-4" />
                        ) : (
                            <ChevronDownIcon className="w-4 h-4" />
                        )}
                    </button>
                </div>
            </div>

            {/* DETAILS */}
            {open && (
                <div className="px-5 pb-5 pt-2 space-y-6 border-t border-white/10">
                    {/* ROLES */}
                    {roles.map((role, idx) => (
                        <div key={idx}>
                            <h4 className="font-semibold">{role.title}</h4>
                            <p className="text-xs opacity-60 mb-2">
                                {role.period}
                            </p>

                            <p className="flex items-center gap-2 text-sm font-semibold text-warning mb-2">
                                <BriefcaseIcon className="w-4 h-4" />
                                RESPONSIBILITIES
                            </p>

                            <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
                                {role.responsibilities.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            {/* Skills */}
                            {role.skills && (
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {role.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="badge badge-outline badge-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* PROJECT LINK */}
                    {projectLink && (
                        <div>
                            <p className="flex items-center gap-2 text-sm font-semibold mb-2">
                                <LinkIcon className="w-4 h-4" />
                                PROJECT LINK
                            </p>
                            <a
                                href={projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link link-primary text-sm break-all"
                            >
                                {projectLink}
                            </a>
                        </div>
                    )}

                    {/* GALLERY */}
                    {gallery.length > 0 && (
                        <div>
                            <p className="flex items-center gap-2 text-sm font-semibold mb-3">
                                <PhotoIcon className="w-4 h-4" />
                                CLIENT MEETING & PROJECT
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {gallery.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt="Client meeting"
                                        className="rounded-xl object-cover h-32 w-full border border-white/10"
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
