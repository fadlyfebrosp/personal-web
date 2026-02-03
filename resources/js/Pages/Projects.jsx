import { useState } from "react";
import Layout from "../Components/Layout";
import ProjectCard from "../Components/ProjectCard";
import ProjectModal from "../Components/ProjectModal";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        /* ===============================
           PROJECT 1 – PERSONAL WEBSITE
        =============================== */
        {
            id: 1,
            title: "fadlyfebro.my.id",
            image: "/projectni/fadlyfebro-portfolio.png",

            description:
                "Personal website & portfolio built from scratch to showcase profile, skills, and projects as a web developer.",

            tech: [
                {
                    name: "React JS",
                    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                },
                {
                    name: "Tailwind CSS",
                    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
                },
                {
                    name: "DaisyUI",
                    icon: "https://img.daisyui.com/images/daisyui/mark-rotating.svg",
                },
            ],

            sourceCode: "https://github.com/fadlyfebrosp/personal-web",
            liveDemo: "https://www.fadlyfebro.my.id",

            sections: [
                {
                    id: "about",
                    title: "About This Project",
                    content: `
Website ini merupakan personal website dan portfolio yang dibangun dari nol untuk menampilkan profil, skill, serta project yang pernah saya kerjakan sebagai seorang web developer.

Fokus utama website ini adalah pada tampilan yang bersih, struktur yang rapi, performa yang baik, serta kemudahan pengembangan dan pemeliharaan di masa depan.
                    `,
                },
                {
                    id: "tech",
                    title: "Tech Stack",
                    items: [
                        {
                            name: "React JS",
                            icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                        },
                        {
                            name: "Tailwind CSS",
                            icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
                        },
                        {
                            name: "DaisyUI",
                            icon: "https://img.daisyui.com/images/daisyui/mark-rotating.svg",
                        },
                    ],
                },
                {
                    id: "features",
                    title: "Features",
                    items: [
                        {
                            name: "Project Showcase",
                            icon: "https://cdn-icons-png.flaticon.com/512/1828/1828673.png",
                        },
                        {
                            name: "Detailed Project View",
                            icon: "https://cdn-icons-png.flaticon.com/512/1828/1828765.png",
                        },
                        {
                            name: "Reusable Components",
                            icon: "https://cdn-icons-png.flaticon.com/512/919/919827.png",
                        },
                        {
                            name: "Responsive Layout",
                            icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
                        },
                        {
                            name: "Dark Mode UI",
                            icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
                        },
                    ],
                },
            ],
        },

        /* ===============================
           PROJECT 2 – MASJID WEBSITE
        =============================== */
        {
            id: 2,
            title: "masjidbaiturrahman.or.id",
            mediaType: "video",
            media: "/projectni/masjidbaiturrahman.mp4",

            description:
                "Official mosque website built to provide structured information and activities for the community.",

            tech: [
                {
                    name: "Laravel",
                    icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
                },
                {
                    name: "MySQL",
                    icon: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
                },
                {
                    name: "Tailwind CSS",
                    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
                },
            ],

            sourceCode: null,
            liveDemo: "https://www.masjidbaiturrahman.or.id",

            sections: [
                {
                    id: "about",
                    title: "About This Project",
                    content: `
Website resmi Masjid Baiturrahman yang dikembangkan sebagai media informasi untuk jamaah, meliputi profil masjid, jadwal ibadah, serta pengumuman kegiatan.

Website ini dibangun menggunakan Laravel dan MySQL dengan Tailwind CSS untuk memastikan tampilan yang modern, responsif, dan mudah diakses di berbagai perangkat.
                    `,
                },
                {
                    id: "features",
                    title: "Features",
                    items: [
                        {
                            name: "Jadwal Ibadah & Kegiatan",
                            icon: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
                        },
                        {
                            name: "Informasi Masjid",
                            icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
                        },
                        {
                            name: "Responsive Layout",
                            icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
                        },
                        {
                            name: "Content Management",
                            icon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <Layout>
            {!selectedProject && (
                <div className="max-w-5xl mx-auto py-16 text-white">
                    <h1 className="text-4xl font-bold mb-12">Projects</h1>

                    <div className="space-y-10">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                data={project}
                                onClick={setSelectedProject}
                            />
                        ))}
                    </div>
                </div>
            )}

            {selectedProject && (
                <ProjectModal
                    data={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </Layout>
    );
}
