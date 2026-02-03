import Layout from "../Components/Layout";
import CareerCard from "../Components/CareerCard";

export default function About() {
    return (
        <Layout>
            <div className="max-w-5xl space-y-12">
                {/* ================= ABOUT ================= */}
                <section>
                    {/* Title */}
                    <div className="mb-1">
                        <h1 className="text-xl font-semibold">About</h1>
                    </div>
                    <p className="text-sm text-base-content/60 mb-6">
                        A brief introduction to who I am.
                    </p>

                    {/* Content */}
                    <div
                        className="
            rounded-2xl
            border border-white/5
            bg-gradient-to-br from-base-200/80 to-base-300/40
            px-6 py-6
        "
                    >
                        <div className="space-y-6 leading-relaxed text-base opacity-90">
                            <p>
                                I'm <b>Fadly Febro</b>, a Jakarta-based Software
                                Engineer with a strong focus on building modern,
                                scalable, and user-friendly web applications. I
                                specialize in frontend development, crafting
                                clean interfaces and smooth user experiences
                                using HTML, CSS, Tailwind CSS, JavaScript, React
                                JS, and Vite.
                            </p>

                            <p>
                                On the backend side, I work extensively with
                                <b> Laravel, PHP, and MySQL</b> to build
                                reliable and maintainable systems. I also have
                                hands-on experience with
                                <b> Go, Java, and Python</b> for
                                performance-oriented services and backend logic.
                            </p>

                            <p>
                                Beyond development, I’m familiar with deploying
                                and managing applications using
                                <b> Vercel, Cloudflare, Firebase, and Apache</b>
                                . I enjoy delivering production-ready solutions
                                that are secure, efficient, and easy to
                                maintain.
                            </p>

                            {/* Closing */}
                            <div className="pt-4">
                                <p className="mb-2">Best regards,</p>
                                <img
                                    src="/fadly.png"
                                    alt="Fadly Signature"
                                    className="h-24 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= EDUCATION ================= */}
                <section>
                    {/* Title */}
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">🎓</span>
                        <h2 className="text-xl font-semibold">Education</h2>
                    </div>
                    <p className="text-sm text-base-content/60 mb-6">
                        My educational journey.
                    </p>

                    <div className="space-y-6">
                        {/* ===== Universitas YARSI ===== */}
                        <div
                            className="
            flex items-center gap-5
            rounded-2xl
            border border-white/5
            bg-gradient-to-br from-base-200/80 to-base-300/40
            px-6 py-5
        "
                        >
                            {/* Logo */}
                            <div className="w-14 h-14 shrink-0 rounded-full bg-base-100 flex items-center justify-center">
                                <img
                                    src="/education/yarsi.jpg"
                                    alt="Universitas YARSI"
                                    className="w-9 h-9 object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="font-semibold text-base leading-tight">
                                    Universitas YARSI
                                </h3>

                                <p className="text-sm text-base-content/70 mt-0.5">
                                    Mahasiswa • Teknik Informatika (S.Kom) •
                                    GPA: 3.40 / 4.00
                                </p>

                                <p className="text-xs text-base-content/50 mt-1.5">
                                    2023 – 2026 · Jakarta, Indonesia
                                </p>
                            </div>
                        </div>

                        {/* ===== SMK ===== */}
                        <div
                            className="
            flex items-center gap-5
            rounded-2xl
            border border-white/5
            bg-gradient-to-br from-base-200/80 to-base-300/40
            px-6 py-5
        "
                        >
                            {/* Logo */}
                            <div className="w-14 h-14 shrink-0 rounded-full bg-base-100 flex items-center justify-center">
                                <img
                                    src="/education/smk.png"
                                    alt="SMK Dinamika Pembangunan 1 Jakarta"
                                    className="w-9 h-9 object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="font-semibold text-base leading-tight">
                                    SMK Dinamika Pembangunan 1 Jakarta
                                </h3>

                                <p className="text-sm text-base-content/70 mt-0.5">
                                    Teknik Komputer & Jaringan (TKJ)
                                </p>

                                <p className="text-xs text-base-content/50 mt-1.5">
                                    2020 – 2023 · Jakarta, Indonesia
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= CAREER ================= */}
                <section>
                    <h2 className="text-xl font-semibold mb-1">Career</h2>
                    <p className="text-sm opacity-60 mb-6">
                        My professional journey.
                    </p>

                    <div className="space-y-6">
                        <CareerCard
                            typeLabel="PKL / Praktik Kerja Lapangan"
                            logo="/education/tiptop.jpeg"
                            company="Tiptop Supermarket Swalayan"
                            location="Jakarta Timur, Indonesia · On-site"
                            period="Apr 2022 – Present · 3 yrs 11 mos"
                            roles={[
                                {
                                    title: "Junior Merchandiser",
                                    period: "Jul 2022 – Present · 3 yrs 8 mos",
                                    responsibilities: [
                                        "Melayani customer yang berbelanja",
                                        "Mengisi, merapihkan, dan mengecek expired barang",
                                        "Membuat order barang sesuai permintaan sales",
                                    ],
                                    skills: ["Retail", "Customer Service"],
                                },
                                {
                                    title: "Staff Administrator",
                                    period: "Apr 2022 – Present · 3 yrs 11 mos",
                                    responsibilities: [
                                        "Menangani komplain customer via WhatsApp dan telepon",
                                        "Membuat laporan harian belanja customer",
                                        "Melakukan proses return barang customer",
                                    ],
                                    skills: [
                                        "Administration",
                                        "Customer Support",
                                        "Reporting",
                                    ],
                                },
                            ]}
                        />
                        <CareerCard
                            typeLabel="Trek Peminatan Pengembangan Berbasis Multiplatform"
                            logo="/education/masjid.png"
                            company="Masjid Baiturrahman"
                            location="Jakarta, Indonesia · Client-based"
                            period="2023 – Present"
                            projectLink="https://www.masjidbaiturrahman.or.id/"
                            gallery={[
                                "/education/zoom1.png",
                                "/education/zoom2.png",
                            ]}
                            roles={[
                                {
                                    title: "Fullstack Web Developer",
                                    period: "Project-based",
                                    responsibilities: [
                                        "Melakukan pertemuan langsung dengan pengurus masjid untuk analisis kebutuhan sistem",
                                        "Mengembangkan website Masjid Baiturrahman sebagai pusat informasi dan layanan digital",
                                        "Membangun sistem manajemen konten untuk artikel, agenda, dan pengumuman masjid",
                                        "Menerapkan desain responsif agar optimal di berbagai perangkat",
                                        "Melakukan deployment, maintenance, dan pembaruan fitur secara berkala",
                                    ],
                                    skills: [
                                        "Laravel",
                                        "PHP",
                                        "MySQL",
                                        "Tailwind CSS",
                                        "JavaScript",
                                        "Client Communication",
                                    ],
                                },
                            ]}
                        />
                    </div>
                </section>
            </div>
        </Layout>
    );
}
