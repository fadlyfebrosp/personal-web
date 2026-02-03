import {
    ArrowUturnLeftIcon,
    ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

function Section({ title, children }) {
    return (
        <section className="space-y-6">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div className="w-full h-px bg-white/10" />
            {children}
        </section>
    );
}

export default function ProjectModal({ data, onClose }) {
    if (!data) return null;

    return (
        <div className="max-w-4xl mx-auto px-6 py-20 text-white">
            {/* Back */}
            <button
                onClick={onClose}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-12"
            >
                <ArrowUturnLeftIcon className="w-5 h-5" />
                Back
            </button>

            {/* Title */}
            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>

            {/* Description */}
            <p className="text-gray-300 max-w-3xl mb-12 leading-relaxed">
                {data.description}
            </p>

            {/* Tech + Actions */}
            <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-16">
                <div className="flex items-center flex-wrap gap-4">
                    <span className="font-semibold text-sm">Tech Stack:</span>
                    {data.tech.map((tech) => (
                        <img
                            key={tech.name}
                            src={tech.icon}
                            alt={tech.name}
                            className="w-9 h-9 object-contain"
                        />
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    {data.sourceCode && (
                        <a
                            href={data.sourceCode}
                            target="_blank"
                            className="text-sm hover:text-primary"
                        >
                            Source Code
                        </a>
                    )}
                    {data.liveDemo && (
                        <a
                            href={data.liveDemo}
                            target="_blank"
                            className="flex items-center gap-1 text-sm hover:text-primary"
                        >
                            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>

            {/* Image */}
            <div
                className="
        w-full rounded-2xl overflow-hidden
        bg-black/30
        mb-20
        flex items-center justify-center
    "
            >
                {data.mediaType === "video" ? (
                    <video
                        src={data.media}
                        autoPlay
                        loop
                        muted
                        playsInline
                        disablePictureInPicture
                        controls={false}
                        className="
            w-full
            max-h-[520px]
            object-contain
            bg-black
            pointer-events-none
        "
                    />
                ) : (
                    <img
                        src={data.media}
                        alt={data.title}
                        className="
            w-full
            max-h-[520px]
            object-contain
        "
                    />
                )}
            </div>

            {/* Sections */}
            <div className="space-y-10">
                {data.sections.map((section) => (
                    <Section key={section.id} title={section.title}>
                        {section.content && (
                            <p className="text-gray-300 leading-relaxed">
                                {section.content}
                            </p>
                        )}

                        {section.items && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                {section.items.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 text-gray-300"
                                    >
                                        <img
                                            src={item.icon}
                                            alt={item.name}
                                            className="w-7 h-7 object-contain"
                                        />
                                        <span className="text-sm">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Section>
                ))}
            </div>
        </div>
    );
}
