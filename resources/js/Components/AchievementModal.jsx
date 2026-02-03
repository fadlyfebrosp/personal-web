export default function AchievementModal({ data, onClose }) {
    if (!data) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl max-w-4xl w-full overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-800">
                    <h2 className="text-lg font-semibold">
                        Achievement Detail
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white text-xl"
                    >
                        ✕
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 grid md:grid-cols-2 gap-6">
                    {/* Image */}
                    <img
                        src={data.image}
                        alt={data.title}
                        className="rounded-xl border border-gray-800"
                    />

                    {/* Info */}
                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="text-xl font-semibold">
                                {data.title}
                            </h3>
                            <p className="text-gray-400 mt-1">{data.issuer}</p>
                        </div>

                        <div>
                            <p className="text-gray-500">Role</p>
                            <p className="font-medium">{data.role}</p>
                        </div>

                        <div>
                            <p className="text-gray-500">Credential ID</p>
                            <p className="font-mono text-sm">
                                {data.credentialId}
                            </p>
                        </div>
                        <div>
                            <p className="text-gray-500 mb-2">Type</p>

                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 text-xs rounded-full bg-gray-800 border border-gray-700">
                                    {data.type}
                                </span>

                                <span className="px-3 py-1 text-xs rounded-full bg-gray-800 border border-gray-700">
                                    {data.category}
                                </span>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-500">Issued Date</p>
                            <p>{data.issued}</p>
                        </div>

                        <div>
                            <p className="text-gray-500">Description</p>
                            <p className="text-gray-300 leading-relaxed">
                                {data.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
