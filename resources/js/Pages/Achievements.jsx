import { useState } from "react";
import Layout from "../Components/Layout";
import AchievementCard from "../Components/AchievementCard";
import AchievementModal from "../Components/AchievementModal";

export default function Achievements() {
    const [selected, setSelected] = useState(null);

    const achievements = [
        {
            id: 1,
            title: "Panitia Tabligh Akbar Bersama Ustadz Abdul Somad",
            issuer: "LDK KAHFI Universitas YARSI",
            image: "/sertifikat/cert-tabligh-akbar.jpg",
            role: "Panitia",
            type: "Organizational",
            category: "Event Committee",
            issued: "March 2025",
            credentialId: "040/SPPAN/SYIAR/LDK-KAHFI/IV/2025",
            description:
                "Berperan sebagai panitia dalam kegiatan Tabligh Akbar bersama Ustadz Abdul Somad (UAS) dengan tema “Al-Qur’an dan Ramadhan: Bulan Diturunkannya Pedoman Hidup”.",
        },
        {
            id: 2,
            title: "Cara Mencari Kelemahan Web Application Security Melalui Upload File",
            issuer: "ITBOX Academy",
            image: "/sertifikat/itbox-upload-file-security.jpg",
            role: "Participant",
            type: "Course",
            category: "Cyber Security",
            issued: "November 2023",
            credentialId: "ITBOX-UPLOAD-FILE-SEC-2023",
            description:
                "Menyelesaikan course Web Application Security yang membahas teknik identifikasi dan eksploitasi celah keamanan pada fitur upload file, termasuk validasi file, bypass restriction, dan security best practices.",
        },
    ];

    return (
        <Layout>
            <div className="px-6 py-8 text-white">
                <h1 className="text-3xl font-bold">Achievements</h1>
                <p className="text-gray-400 mt-1">
                    A curated collection of certificates and organizational
                    achievements I've earned throughout my journey.
                </p>

                <hr className="my-6 border-gray-700" />

                <p className="text-sm text-gray-400 mb-4">
                    Total: {achievements.length}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((item) => (
                        <AchievementCard
                            key={item.id}
                            data={item}
                            onClick={setSelected}
                        />
                    ))}
                </div>
            </div>

            <AchievementModal
                data={selected}
                onClose={() => setSelected(null)}
            />
        </Layout>
    );
}
