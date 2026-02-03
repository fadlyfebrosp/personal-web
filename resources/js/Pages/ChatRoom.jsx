import Layout from "../Components/Layout";
import { useForm, usePage, router } from "@inertiajs/react";
import { ArrowUturnLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function ChatRoom({ messages = [] }) {
    const { auth } = usePage().props;
    const user = auth?.user ?? null;

    const { data, setData, post, reset, processing, errors } = useForm({
        message: "",
        parent_id: null,
    });

    const submit = (e) => {
        e.preventDefault();
        if (!data.message.trim()) return;

        post("/chat", {
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
        });
    };


    const logout = () => {
        router.post("/logout");
    };

    const startReply = (msg) => {
        setData((prev) => ({
            ...prev,
            parent_id: msg.id,
        }));
    };

    const cancelReply = () => {
        setData((prev) => ({
            ...prev,
            parent_id: null,
        }));
    };

    const replyingTo = messages.find((m) => m.id === data.parent_id);

    return (
        <Layout>
            <div className="flex flex-col h-full min-h-0">
                {/* Header */}
                <div className="mb-4">
                    <h1 className="text-2xl font-bold mb-1">Chat Room</h1>
                    <p className="opacity-70">
                        Feel free to share your thoughts, suggestions,
                        questions, or anything else!
                    </p>

                    <div className="divider my-3"></div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 pr-2 mb-6">
                    {messages.length === 0 && (
                        <p className="opacity-50 text-sm">No messages yet.</p>
                    )}

                    {messages.map((msg) => (
                        <div key={msg.id} className="flex gap-3 group">
                            <img
                                src={msg.user?.avatar || "/no-picture.png"}
                                alt={msg.user?.name}
                                className="w-9 h-9 rounded-full object-cover"
                            />

                            <div className="flex-1">
                                {/* Name + reply info */}
                                <div className="flex items-center gap-2 text-sm flex-wrap">
                                    <span className="font-semibold">
                                        {msg.user?.name}
                                    </span>

                                    {msg.parent && msg.parent.user && (
                                        <span className="flex items-center gap-1 text-xs opacity-60">
                                            <ArrowUturnLeftIcon className="w-3 h-3" />
                                            {msg.parent.user.name}
                                        </span>
                                    )}

                                    <span className="opacity-40">
                                        {new Date(
                                            msg.created_at,
                                        ).toLocaleString()}
                                    </span>
                                </div>

                                {/* Bubble + reply */}
                                <div className="flex items-start gap-2 mt-1">
                                    <div className="bg-base-200 px-4 py-2 rounded-lg max-w-xl break-words">
                                        {msg.message}
                                    </div>

                                    {user && (
                                        <button
                                            onClick={() => startReply(msg)}
                                            className="opacity-0 group-hover:opacity-100 transition text-base-content/60 hover:text-primary mt-1"
                                            title="Reply"
                                        >
                                            <ArrowUturnLeftIcon className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ========================= */}
                {/* GUEST (BELUM LOGIN) */}
                {/* ========================= */}
                {!user && (
                    <div className="border-t border-base-300 py-10 mt-6 text-center">
                        <p className="mb-6 opacity-70">
                            Please sign in to join the conversation.
                        </p>

                        <a
                            href="/auth/google"
                            className="btn btn-outline gap-2"
                        >
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                className="w-5 h-5"
                                alt="Google"
                            />
                            Sign in with Google
                        </a>
                    </div>
                )}

                {/* ========================= */}
                {/* LOGGED IN */}
                {/* ========================= */}
                {user && (
                    <div className="sticky bottom-0 bg-base-100 border-t border-base-300 pt-1 space-y-2 rounded-t-xl">
                        {/* Reply bar */}
                        {replyingTo && (
                            <div className="flex items-center justify-between bg-base-200 px-3 py-2 rounded-lg text-sm mx-2">
                                <div className="flex items-center gap-2 truncate">
                                    <ArrowUturnLeftIcon className="w-4 h-4 opacity-60" />
                                    <span>
                                        Replying to{" "}
                                        <b>{replyingTo.user?.name}</b>
                                    </span>
                                </div>

                                <button
                                    onClick={cancelReply}
                                    title="Cancel reply"
                                >
                                    <XMarkIcon className="w-4 h-4 hover:text-error" />
                                </button>
                            </div>
                        )}

                        {/* Input */}
                        <form onSubmit={submit} className="flex gap-3 px-2">
                            <input
                                className="input input-bordered flex-1"
                                placeholder="Type your message..."
                                value={data.message}
                                onChange={(e) =>
                                    setData("message", e.target.value)
                                }
                                disabled={processing}
                            />

                            <button
                                className="btn btn-primary"
                                disabled={processing}
                            >
                                Send
                            </button>
                        </form>

                        {errors.message && (
                            <p className="text-error text-sm px-2">
                                {errors.message}
                            </p>
                        )}

                        {/* Status */}
                        <div className="flex items-center justify-between px-2 pb-2 text-sm opacity-80">
                            <div className="flex items-center gap-2">
                                <img
                                    src={user.avatar || "/no-picture.png"}
                                    alt={user.name}
                                    className="w-6 h-6 rounded-full"
                                />
                                <span>
                                    Signed in as <b>{user.name}</b>
                                </span>
                            </div>

                            <button
                                type="button"
                                onClick={logout}
                                className="btn btn-xs btn-error btn-outline"
                            >
                                Sign out
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}
