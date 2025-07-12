
import NavLinks from "@/app/_ui/components/NavLinks";
import Logo from "@/app/_ui/components/Logo";
import ThemeToggle from "@/app/_ui/components/ThemeToggle";

export default function NavBar() {
    return (
        <>
            <nav className="flex flex-row flex-nowrap justify-between items-center w-full select-none">
                <Logo />
                <NavLinks />
                <ThemeToggle />
            </nav>

        </>
    );
}
