export default function Main({ children }) {
    return (
        <main className="flex-1 overflow-y-auto px-4 md:px-8 pt-4 pb-2 md:pb-1">
            {children}
        </main>
    );
}
