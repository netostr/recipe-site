import NavBar from "@/app/_ui/components/NavBar";

export default function Header() {
    return (
        <header className="sticky top-0 z-1000 h-16 flex items-center justify-center border-b border-gray-400 backdrop-blur-3xl backdrop-saturate-180 overflow-hidden px-6">
            <NavBar />
        </header>
    )
}