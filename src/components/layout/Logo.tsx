import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  href?: string;
  linked?: boolean;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline gap-1.5", className)}>
      <span className="font-script text-3xl text-yellow md:text-4xl">Pho</span>
      <span className="font-display text-lg tracking-[0.18em] text-foreground uppercase md:text-xl">
        Kentish
      </span>
    </span>
  );
}

export function Logo({
  href = "/",
  linked = true,
  className,
  priority: _priority = false,
}: LogoProps) {
  if (!linked) {
    return (
      <div className={cn("inline-block shrink-0", className)}>
        <Wordmark />
      </div>
    );
  }

  return (
    <Link href={href} className={cn("inline-block shrink-0", className)}>
      <Wordmark />
    </Link>
  );
}
