// Logo.tsx
import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import { AppConfig } from "@/utils/config";
import { useTranslations } from "next-intl";
import { cn } from "@/utils/utils";
type Props = {
  className?: string;
  size?: number;
  width?: number;
  height?: number;
  showSlogan?: boolean;
  animate?: boolean;
};

export default function Logo({
  className = "",
  size = AppConfig.logo.size,
  showSlogan = AppConfig.logo.showSlogan,
  animate = AppConfig.logo.animate,
}: Props) {
  const t = useTranslations("Logo");
  const words = t("name").split("\n");
  return (
    <Link
      href={"/"}
      className={`${
        className ? className + " " : ""
      }flex gap-3 font-logo no-underline`}
    >
      <div className="flex items-center flex-col gap-2">
        <div className={cn("flex items-center gap-2", showSlogan && "pb-2 border-b-2")}>
          <Image src={logo} alt="Logo icon" width={size} height={size} />
          <div className="leading-tight">
            <span className="font-bold uppercase whitespace-pre-line" style={{ fontSize: `${Math.round(size/2.4)}px` }}>
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
        {showSlogan && (
          <span
          
            className={cn("font-light", animate && "text-transparent bg-gradient-to-r from-foreground/0 via-foreground/90 to-foreground/0 bg-[length:200%_100%] bg-clip-text animate-shine")}
            style={{ fontSize: `${Math.round(size/4)}px` }}
          >
            {t("slogan")}
          </span>
        )}
      </div>
    </Link>
  );
}
