import ReactMarkdown from "react-markdown";

export default function ProjectCard({ data, onClick }) {
    return (
        <button
            onClick={() => onClick(data)}
            className="w-full text-left group"
        >
            <div className="flex flex-col md:flex-row gap-6">
                {/* Image */}
                <img
                    src={data.image}
                    alt={data.title}
                    className="
                        w-full md:w-64
                        h-40
                        object-cover
                        rounded-xl
                        group-hover:opacity-90
                        transition
                    "
                />

                {/* Content */}
                <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4">{data.title}</h3>

                    {/* Description (Markdown, ringkas) */}
                    <div
                        className="
                        prose prose-invert
                        text-gray-400
                        max-w-xl
                        line-clamp-3
                        prose-p:my-0
                    "
                    >
                        <ReactMarkdown>{data.description}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </button>
    );
}
