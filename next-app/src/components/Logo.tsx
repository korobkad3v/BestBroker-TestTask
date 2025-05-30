// Logo.tsx
import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import { LOGO_CONSTANTS } from "@/constants/logo";

type Props = {
  className?: string;
  size?: number;
  showSlogan?: boolean;
  animate?: boolean;
};

export default function Logo({
  className = "",
  size = LOGO_CONSTANTS.size,
  showSlogan = LOGO_CONSTANTS.showSlogan,
  animate = LOGO_CONSTANTS.animate
}: Props) {
  const words = LOGO_CONSTANTS.name.split("\n");
  return (
    <Link href={"/"} className={`${className? className + " ": ""}flex items-start gap-3 font-logo no-underline`}>
      <div className="flex items-center flex-col gap-2 ">
        <div className="flex items-center gap-2 pb-2 border-b-2">
          <Image
            src={logo}
            alt="Logo icon"
            width={size}
            height={size}
            priority
          />
          <div className="leading-tight">
            <span className="text-xl font-bold uppercase whitespace-pre-line">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={index === 0 ? "text-accent-foreground" : ""}
                >
                  {word}
                  {index !== words.length - 1 ? "\n" : ""}
                </span>
              ))}
            </span>
          </div>
        </div>
        {showSlogan && <span className={"text-xs" + 
          (animate ? " text-transparent bg-gradient-to-r from-foreground/0 via-foreground/90 to-foreground/0 bg-[length:200%_100%] bg-clip-text animate-shine" : "")}>{LOGO_CONSTANTS.slogan}</span>}
      </div>
    </Link>
  );
}
