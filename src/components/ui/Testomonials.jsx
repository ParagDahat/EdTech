import { cn } from "../../utils"; // adjust the path as needed
import { AnimatePresence, motion } from "framer-motion"; // using framer-motion instead of motion/react
import { useState } from "react";

export function HoverEffect({ items, className }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10", className)}>
      {items.map((item, idx) => (
        <a
          href="https://www.google.com/search?sca_esv=7de7cf0b204bb13b&sxsrf=AHTn8zpmo3oKd_h1vFmcdG0o-XFLwWiVWQ:1744883366564&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzXKA8P58fgLW6bx1BcmShTKocFHOSCXFj06fThxEw9X3oRhwl5iTOwaZqXk_6ip7SjhXN5oouaZdzn4oDoyafLogWqNGOQ4KYwrWs5EoVbSXUaLEtw%3D%3D&q=Calibre+technology+and+services+Reviews&sa=X&ved=2ahUKEwja-vOJ5d6MAxWpxTgGHRa9MyoQ0bkNegQIIBAD&biw=1536&bih=695&dpr=1.25"
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
}

export function Card({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export function CardTitle({ className, children }) {
  return (
    <h4 className={cn("text-zinc-100 font-lato font-bold text-2xl tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
}

export function CardDescription({ className, children }) {
  return (
    <p className={cn("mt-8 text-zinc-400 font-lato tracking-wide leading-relaxed text-lg", className)}>
      {children}
    </p>
  );
}
