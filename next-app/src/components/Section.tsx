import {cn} from "@/utils/utils";

export default function Section({className, children}: {className?: string, children: React.ReactNode}) {
    return (
        <section className={cn("w-full h-full", className)}> 
            {children}
        </section>
    )
}