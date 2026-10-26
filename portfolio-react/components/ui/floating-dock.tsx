"use client";
import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

export interface FloatingDockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

export interface FloatingDockProps {
  items: FloatingDockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
  tooltipPosition?: "top" | "bottom";
  direction?: "up" | "down";
}

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  tooltipPosition = "top",
  direction = "up",
}: FloatingDockProps) => {
  return (
    <>
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
        tooltipPosition={tooltipPosition}
      />
      <FloatingDockMobile
        items={items}
        className={mobileClassName}
        direction={direction}
      />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
  direction = "up",
}: {
  items: FloatingDockItem[];
  className?: string;
  direction?: "up" | "down";
}) => {
  const [open, setOpen] = useState(false);
  const isDown = direction === "down";

  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className={cn(
              "absolute flex flex-col gap-2.5 z-50",
              isDown
                ? "top-full right-0 mt-3 items-end"
                : "bottom-full inset-x-0 mb-2 items-center"
            )}
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: isDown ? -10 : 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: isDown ? -10 : 10,
                  transition: {
                    delay: idx * 0.04,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.04 }}
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-2 rounded-full border border-white/15 bg-[rgba(5,8,17,0.92)] p-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all hover:border-green-400/50 hover:bg-white/[0.08]"
                >
                  <span className="max-w-0 overflow-hidden whitespace-nowrap font-mono text-[11px] text-zinc-300 transition-all group-hover:max-w-xs group-hover:pr-1">
                    {item.title}
                  </span>
                  <div className="flex size-5 items-center justify-center text-zinc-300 transition-colors group-hover:text-green-400">
                    {item.icon}
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle Navigation Dock"
        className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-[rgba(5,8,17,0.85)] text-zinc-300 shadow-lg backdrop-blur-md transition-all hover:border-green-400/50 hover:text-green-400"
      >
        <IconLayoutNavbarCollapse className="size-5 text-green-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  tooltipPosition = "top",
}: {
  items: FloatingDockItem[];
  className?: string;
  tooltipPosition?: "top" | "bottom";
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-3 rounded-2xl border border-white/10 bg-[rgba(5,8,17,0.7)] px-4 pb-3 md:flex shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          key={item.title}
          tooltipPosition={tooltipPosition}
          {...item}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  tooltipPosition = "top",
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  tooltipPosition?: "top" | "bottom";
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 72, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 72, 40]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 34, 20]);
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 34, 20]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);
  const isBottom = tooltipPosition === "bottom";

  return (
    <a href={href} className="flex items-center">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-zinc-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-md transition-colors hover:border-green-400/50 hover:bg-white/[0.12] hover:text-green-400"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{
                opacity: 0,
                y: isBottom ? -6 : 6,
                x: "-50%",
              }}
              animate={{
                opacity: 1,
                y: 0,
                x: "-50%",
              }}
              exit={{
                opacity: 0,
                y: isBottom ? -6 : 6,
                x: "-50%",
              }}
              className={cn(
                "pointer-events-none absolute left-1/2 z-50 w-fit rounded-lg border border-white/15 bg-[rgba(5,8,17,0.95)] px-2.5 py-1 font-mono text-[11px] text-green-400 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-xl whitespace-pre",
                isBottom ? "-bottom-9" : "-top-9"
              )}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}

export default FloatingDock;
