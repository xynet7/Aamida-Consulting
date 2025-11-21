import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("relative block h-14 w-40", className)}>
      <Image
        src="https://i.postimg.cc/xCmrvGvG/PNG.png"
        alt="Aamida Consulting Logo"
        fill
        priority
        className="object-contain"
      />
    </Link>
  );
}
