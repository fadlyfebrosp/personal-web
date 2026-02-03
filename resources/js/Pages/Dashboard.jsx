// import Layout from "../Components/Layout";
// import { ClockIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

// export default function Dashboard() {
//     return (
//         <Layout>
//             <div className="max-w-6xl mx-auto py-20 text-white">
//                 <h1 className="text-3xl font-bold mb-6">
//                     Monitoring Dashboard
//                 </h1>

//                 <p className="text-gray-400 mb-12 max-w-2xl">
//                     Real-time traffic monitoring is currently under development.
//                     This dashboard will display live visitors, page views, and
//                     interaction statistics once the integration is finalized.
//                 </p>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     <PlaceholderCard
//                         title="Real-time Visitors"
//                         icon={ClockIcon}
//                         status="In Progress"
//                     />
//                     <PlaceholderCard
//                         title="Page Views Analytics"
//                         icon={WrenchScrewdriverIcon}
//                         status="Coming Soon"
//                     />
//                 </div>
//             </div>
//         </Layout>
//     );
// }

// function PlaceholderCard({ title, icon: Icon, status }) {
//     return (
//         <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
//             <div className="flex items-center gap-3 mb-4">
//                 <Icon className="w-6 h-6 text-yellow-400" />
//                 <h3 className="text-lg font-semibold">{title}</h3>
//             </div>

//             <p className="text-gray-400 text-sm mb-4">
//                 This feature is currently being developed and will be available
//                 in a future update.
//             </p>

//             <span className="inline-block text-xs px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
//                 {status}
//             </span>
//         </div>
//     );
// }
import Layout from "../Components/Layout";

export default function Dashboard() {
    return (
        <Layout>
            <div className="max-w-6xl mx-auto py-16 text-white">
                <h1 className="text-3xl font-bold mb-6">
                    Monitoring Dashboard
                </h1>

                <p className="text-gray-400 max-w-2xl mb-12">
                    This dashboard is currently under development. Real-time
                    traffic monitoring and analytics will be available soon.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <PlaceholderCard title="Active Visitors" />
                    <PlaceholderCard title="Page Views" />
                    <PlaceholderCard title="Visits" />
                    <PlaceholderCard title="Countries" />
                </div>

                <div className="mt-16 text-sm text-gray-500">
                    Powered by Umami Analytics · Coming Soon 🚧
                </div>
            </div>
        </Layout>
    );
}

function PlaceholderCard({ title }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 animate-pulse">
            <p className="text-sm text-gray-400 mb-2">{title}</p>
            <div className="h-8 w-16 bg-white/10 rounded" />
        </div>
    );
}
