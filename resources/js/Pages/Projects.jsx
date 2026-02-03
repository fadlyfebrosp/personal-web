import { useState } from "react";
import Layout from "../Components/Layout";
import ProjectCard from "../Components/ProjectCard";
import ProjectModal from "../Components/ProjectModal";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "fadlyfebro.my.id",
            image: "/projectni/fadlyfebro-portfolio.png",
            description: `
Personal website & portfolio built from scratch using **React JS**,
**Tailwind CSS**, and **DaisyUI**.

This project focuses on clean UI, performance, and scalability.
`,
            sections: [
                {
                    id: "intro",
                    title: "📘 Introduction",
                    body: `
This is my personal website built as a developer portfolio to showcase
my projects, achievements, and technical skills.

The website is designed with a clean, modern, and responsive UI.
`,
                },
                {
                    id: "tech",
                    title: "⚙️ Tech Stack",
                    body: `
- React JS
- Tailwind CSS
- DaisyUI
- Inertia.js
- Laravel
- MySQL
`,
                },
                {
                    id: "features",
                    title: "🚀 Features",
                    body: `
- Project showcase with detail view
- Achievements & certificates gallery
- Fully responsive layout
- Clean dark theme UI
- Reusable component architecture
`,
                },
                {
                    id: "links",
                    title: "🔗 Links",
                    body: `
- **Live Demo**: https://www.fadlyfebro.my.id
- **Source Code**: https://github.com/username/repo
`,
                },
            ],
        },
    ];

    return (
        <Layout>
            {/* ===== PROJECT LIST ===== */}
            {!selectedProject && (
                <div className="max-w-5xl mx-auto py-16 text-white">
                    <header className="mb-16">
                        <h1 className="text-4xl font-bold">Projects</h1>
                        <p className="text-gray-400 mt-4 max-w-2xl">
                            A curated list of personal and open-source projects
                            I’ve worked on.
                        </p>
                    </header>

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

            {/* ===== PROJECT DETAIL ===== */}
            {selectedProject && (
                <ProjectModal
                    data={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </Layout>
    );
}
