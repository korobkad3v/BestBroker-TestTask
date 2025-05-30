//Header.tsx
import { MiniNavbar } from "./blocks/sign-in-flow-1";
import Logo from "./Logo";

export default function Header() {
    return (
        <header className="flex w-full items-center justify-around lg:justify-between fixed top-0 z-1 p-10">
            <Logo className="hidden lg:block"/>
            <MiniNavbar />
        </header>
    );
}