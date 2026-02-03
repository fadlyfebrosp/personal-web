export default function AchievementCard({ data, onClick }) {
    const isCourse = data.type === "Course";

    return (
        <div
            onClick={() => onClick(data)}
            className="group cursor-pointer bg-gray-900 border border-gray-800 rounded-xl overflow-hidden transition hover:border-gray-600"
        >
            {/* IMAGE */}
            <div className="relative bg-gray-950 aspect-[16/10] overflow-hidden">
                <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-xs text-gray-300 uppercase tracking-wider">
                            View Detail
                        </p>
                        <p className="text-sm font-medium mt-1">
                            Click to open
                        </p>
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div className="p-4">
                <h3 className="font-semibold text-lg leading-snug">
                    {data.title}
                </h3>

                <p className="text-sm text-gray-400 mt-1">{data.issuer}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                    <span
                        className={`text-xs px-3 py-1 rounded-full border flex items-center gap-1
                        ${
                            isCourse
                                ? "bg-blue-900/40 border-blue-700 text-blue-300"
                                : "bg-emerald-900/40 border-emerald-700 text-emerald-300"
                        }`}
                    >
                        {isCourse ? "📘" : "🏛️"} {data.type}
                    </span>

                    <span className="text-xs px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300">
                        {data.category}
                    </span>
                </div>

                <p className="text-xs text-gray-500 mt-4 uppercase">
                    Issued {data.issued}
                </p>
            </div>
        </div>
    );
}
