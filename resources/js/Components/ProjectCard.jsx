import ReactMarkdown from "react-markdown";

export default function ProjectCard({ data, onClick }) {
    return (
        <button
            onClick={() => onClick(data)}
            className="w-full text-left group"
        >
            <div
                className="
                    flex flex-col md:flex-row gap-8
                    p-6 md:p-8 rounded-2xl
                    border border-white/10
                    bg-white/[0.02]
                    hover:border-white/20 hover:bg-white/[0.04]
                    transition-all
                "
            >
                {/* MEDIA */}
                <div className="w-full md:w-72 h-44 rounded-xl overflow-hidden">
                    {data.mediaType === "video" ? (
                        <video
                            src={data.media}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <img
                            src={data.image}
                            alt={data.title}
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">
                        {data.title}
                    </h3>

                    <div className="text-gray-300 mb-5 max-w-2xl line-clamp-3">
                        <ReactMarkdown>{data.description}</ReactMarkdown>
                    </div>

                    {/* TECH */}
                    {data.tech && (
                        <div className="flex items-center gap-4">
                            {data.tech.map((tech) => (
                                <img
                                    key={tech.name}
                                    src={tech.icon}
                                    alt={tech.name}
                                    title={tech.name}
                                    className="w-9 h-9 object-contain"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </button>
    );
}
