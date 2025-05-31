//Header.tsx
import { MiniNavbar } from "./blocks/sign-in-flow-1";
import Logo from "./Logo";

export default function HeaderWrapper() {
    return (
        // header tag is inside mini navbar, so semantic is okay
        <div className="w-full fixed left-1/2 px-2 -translate-x-1/2 top-[15px] z-1">
            <MiniNavbar />
        </div>
        
    );
}