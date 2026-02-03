import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/* ===== SECTION ===== */
function Section({ title, body }) {
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{title}</h2>

            <div
                className="
                    prose prose-invert max-w-none
                    prose-p:my-4
                    prose-ul:my-4
                    prose-li:my-1
                    prose-a:text-primary
                "
            >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {body}
                </ReactMarkdown>
            </div>
        </section>
    );
}

/* ===== MODAL ===== */
export default function ProjectModal({ data, onClose }) {
    if (!data) return null;

    return (
        <div className="max-w-4xl mx-auto px-6 py-20 text-white">
            {/* Back */}
            <button
                onClick={onClose}
                className="text-sm text-gray-400 hover:text-white mb-12"
            >
                ← Back
            </button>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-10">
                {data.title}
            </h1>

            {/* Image */}
            <img
                src={data.image}
                alt={data.title}
                className="w-full rounded-xl mb-8"
            />

            {/* Description (Markdown / lead text) */}
            {data.description && (
                <div
                    className="
                        prose prose-invert
                        text-lg leading-8
                        border-l-4 border-primary
                        pl-6
                        italic
                        mb-16
                        max-w-3xl
                    "
                >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {data.description}
                    </ReactMarkdown>
                </div>
            )}

            {/* Sections */}
            <div className="space-y-16">
                {data.sections?.map((section) => (
                    <Section
                        key={section.id}
                        title={section.title}
                        body={section.body}
                    />
                ))}
            </div>
        </div>
    );
}
