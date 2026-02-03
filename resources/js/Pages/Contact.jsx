import Layout from "../Components/Layout";
import { useForm } from "@inertiajs/react";
import {
    EnvelopeIcon,
    ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        message: "",
        website: "",
    });

    function submit(e) {
        e.preventDefault();

        post("/contact", {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                alert("✅ Message sent successfully!");
            },
            onError: () => {
                alert("❌ Failed to send message. Please check your input.");
            },
        });
    }

    return (
        <Layout>
            <div className="max-w-6xl mx-auto py-16 text-white">
                <h1 className="text-3xl font-bold mb-2">Contact</h1>
                <p className="text-gray-400 mb-10">Let’s get in touch</p>

                <p className="text-sm text-gray-400 mb-6">
                    Find me on social media
                </p>

                {/* SOCIAL CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    <ContactCard
                        title="Stay in Touch"
                        description="Reach out via email for inquiries or collaborations."
                        href="mailto:fadlyfebro123@gmail.com"
                        button="Go to Gmail"
                        gradient="from-red-600 to-red-800"
                        icon={<EnvelopeIcon className="w-14 h-14 opacity-80" />}
                    />

                    <ContactCard
                        title="Follow My Journey"
                        description="Follow my creative journey."
                        href="https://instagram.com/fdly.fbro_"
                        button="Go to Instagram"
                        gradient="from-pink-500 via-purple-500 to-orange-400"
                        icon={
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                                className="w-14 h-14 opacity-80"
                                alt=""
                            />
                        }
                    />

                    <ContactCard
                        title="Let’s Connect"
                        description="Connect with me professionally."
                        href="https://www.linkedin.com/in/fadly-febro-519273204/"
                        button="Go to LinkedIn"
                        gradient="from-sky-600 to-blue-800"
                        icon={
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                                className="w-14 h-14 opacity-80"
                                alt=""
                            />
                        }
                    />

                    <ContactCard
                        title="Explore the Code"
                        description="Explore my open-source work."
                        href="https://github.com/fadlyfebrosp"
                        button="Go to GitHub"
                        gradient="from-slate-700 to-slate-900"
                        icon={
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                                className="w-14 h-14 opacity-80"
                                alt=""
                            />
                        }
                    />
                </div>

                {/* FORM */}
                <div className="max-w-4xl">
                    <h2 className="text-lg font-semibold mb-4">
                        Or send me a message
                    </h2>

                    <form onSubmit={submit} className="space-y-4">
                        {/* Honeypot */}
                        <input
                            type="text"
                            value={data.website}
                            onChange={(e) => setData("website", e.target.value)}
                            className="hidden"
                            tabIndex="-1"
                            autoComplete="off"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm"
                                />
                                {errors.name && (
                                    <p className="text-red-400 text-xs mt-1">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm"
                                />
                                {errors.email && (
                                    <p className="text-red-400 text-xs mt-1">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <textarea
                                rows="4"
                                placeholder="Message"
                                value={data.message}
                                onChange={(e) =>
                                    setData("message", e.target.value)
                                }
                                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm"
                            />
                            {errors.message && (
                                <p className="text-red-400 text-xs mt-1">
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 py-3 text-sm font-medium transition"
                        >
                            {processing ? "Sending..." : "Send Email"}
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

/* ===============================
   CARD COMPONENT
================================ */
function ContactCard({ title, description, href, button, gradient, icon }) {
    return (
        <div
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-6 min-h-[170px] flex flex-col justify-between`}
        >
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-sm text-white/80">{description}</p>
            </div>
            <div className="relative z-10 flex items-end justify-between">
                <a
                    href={href}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-white/90 text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-white transition"
                >
                    {button}
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </a>
                {icon}
            </div>
        </div>
    );
}
