import Layout from "../Components/Layout";

export default function Dashboard() {
    return (
        <Layout>
            {/* Intro */}
            <section className="max-w-5xl animate-fade-up">
                <h1 className="text-3xl font-bold mb-2">Hi, I'm Fadly Febro</h1>

                <div className="flex items-center gap-3 text-sm opacity-60 mb-6 animate-fade-in">
                    <span>Based in Jakarta, Indonesia</span>
                    <span className="w-1 h-1 rounded-full bg-base-content opacity-40" />
                    <span>Onsite</span>
                </div>

                <p className="opacity-80 leading-relaxed mb-4 animate-fade-up">
                    Software Engineer with a strong focus on web development and
                    modern frontend experiences. I work extensively with HTML,
                    CSS, Bootstrap, Tailwind CSS, and JavaScript to build
                    responsive and user-friendly interfaces, while leveraging
                    React JS and Vite for fast, scalable applications.
                </p>

                <p className="opacity-80 leading-relaxed animate-fade-up">
                    On the backend side, I develop robust systems using Laravel,
                    PHP, and MySQL, and also have experience with Go, Java, and
                    Python for performance-oriented services. I’m comfortable
                    deploying and managing applications using Vercel,
                    Cloudflare, Firebase, and Apache, ensuring reliable, secure,
                    and production-ready solutions from development to release.
                </p>
            </section>

            {/* Divider */}
            <div className="divider my-10 animate-fade-in" />

            {/* Skills */}
            <section className="max-w-5xl">
                <h2 className="text-xl font-semibold mb-1">{"</>"} Skills</h2>
                <p className="opacity-60 mb-6">My professional skills.</p>

                <div
                    className="grid gap-x-6 gap-y-6"
                    style={{
                        gridTemplateColumns: "repeat(auto-fit, 56px)",
                    }}
                >
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="group relative flex flex-col items-center opacity-0 animate-fade-up"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-full bg-base-200 flex items-center justify-center shadow-md transition-all duration-200 group-hover:scale-105">
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="w-7 h-7"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                    }}
                                />
                            </div>

                            {/* Label on hover */}
                            <span
                                className="
                                    mt-2 text-xs text-center
                                    opacity-0 translate-y-1
                                    transition-all duration-200
                                    group-hover:opacity-100
                                    group-hover:translate-y-0
                                "
                            >
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
}

const skills = [
    { name: "HTML", icon: "https://cdn.simpleicons.org/html5/e34f26" },
    {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952b3" },
    {
        name: "Tailwind CSS",
        icon: "https://cdn.simpleicons.org/tailwindcss/38bdf8",
    },
    {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript/f7df1e",
    },
    { name: "React JS", icon: "https://cdn.simpleicons.org/react/61dafb" },
    { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/ff2d20" },
    { name: "PHP", icon: "https://cdn.simpleicons.org/php/777bb4" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479a1" },
    { name: "Go", icon: "https://cdn.simpleicons.org/go/00add8" },
    { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/ffffff" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776ab" },
    { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646cff" },
    { name: "Apache", icon: "https://cdn.simpleicons.org/apache/d22128" },
    { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/ffca28" },
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/ffffff" },
    {
        name: "Cloudflare",
        icon: "https://cdn.simpleicons.org/cloudflare/f38020",
    },
];
