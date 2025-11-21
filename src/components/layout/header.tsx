"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Logo } from "@/components/logo";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-card/80 shadow-md backdrop-blur-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) =>
            item.subItems ? (
              <DropdownMenu
                key={item.title}
                open={openDropdown === item.title}
                onOpenChange={(isOpen) =>
                  setOpenDropdown(isOpen ? item.title : null)
                }
              >
                <DropdownMenuTrigger asChild>
                  <div
                    onMouseEnter={() => setOpenDropdown(item.title)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        pathname.startsWith(item.href)
                          ? "text-primary font-bold"
                          : "text-muted-foreground hover:text-primary",
                        openDropdown === item.title && "text-primary"
                      )}
                    >
                      {item.title}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          openDropdown === item.title ? "rotate-180" : ""
                        )}
                      />
                    </Link>
                    <DropdownMenuContent
                      align="start"
                      className="w-56"
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.subItems.map((subItem) => (
                        <DropdownMenuItem key={subItem.title} asChild>
                          <Link href={subItem.href}>{subItem.title}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </div>
                </DropdownMenuTrigger>
              </DropdownMenu>
            ) : (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-primary font-bold"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.title}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild>
            <Link href="/contact">QUOTE</Link>
          </Button>
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(isScrolled ? "text-foreground" : "text-primary-foreground hover:bg-white/10 hover:text-primary-foreground")}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-0">
                <div className="flex h-full flex-col">
                  <div className="flex h-20 items-center justify-between border-b px-4">
                    <Logo />
                    <SheetTrigger asChild>
                       <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetTrigger>
                  </div>
                  <nav className="flex flex-col p-4">
                    <Accordion type="single" collapsible className="w-full">
                       {navItems.map((item) => (
                        item.subItems ? (
                           <AccordionItem value={item.title} key={item.title} className="border-b-0">
                            <AccordionTrigger className="flex justify-between rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-secondary hover:no-underline [&[data-state=open]>svg]:rotate-180">
                              <Link href={item.href} onClick={(e) => e.stopPropagation()}>{item.title}</Link>
                            </AccordionTrigger>
                            <AccordionContent className="pb-0">
                              <div className="flex flex-col space-y-1 pl-8">
                                {item.subItems.map((subItem) => (
                                  <Link
                                    key={subItem.title}
                                    href={subItem.href}
                                    onClick={closeMobileMenu}
                                    className="rounded-md px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                                  >
                                    {subItem.title}
                                  </Link>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ) : (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={closeMobileMenu}
                            className={cn(
                              "rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-secondary",
                              pathname === item.href
                                ? "bg-secondary text-primary"
                                : "text-foreground"
                            )}
                          >
                            {item.title}
                          </Link>
                        )
                       ))}
                    </Accordion>
                  </nav>
                  <div className="mt-auto border-t p-4">
                    <Button asChild className="w-full" onClick={closeMobileMenu}>
                      <Link href="/contact">QUOTE</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
