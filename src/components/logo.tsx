import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <div className="relative h-12 w-12">
        <Image
          src="https://i.postimg.cc/xCmrvGvG/PNG.png"
          alt="Aamida Consulting Logo"
          fill
          priority
          className="object-contain"
        />
      </div>
      <span className="font-headline text-lg font-bold">
        Aamida Consulting
      </span>
    </Link>
  );
}
