

export default function Section({className, children}: {className?: string, children: React.ReactNode}) {
    return (
        <section className={"w-full h-full" + (className ? " " + className : "")}>
            {children}
        </section>
    )
}