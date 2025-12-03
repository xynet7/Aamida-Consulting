
"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

// Inline SVGs for flags
const SvgFlagCn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" width="24" height="18">
    <rect width="32" height="24" fill="#de2910"/>
    <path d="M7.4 5.3l-2.4 1.8 1-2.9-2.5-1.7 3 .2L7.4 0l.8 2.7 3-.2-2.4 1.7 1 2.9-2.5-1.8zM14.6 3.2l-.4.9.7.7-.9-.3-.5.9-.6-.8-.9.3.6-.8-.4-.9.8.5zM16.9 6.2l-.8.6.2.9-.9-.4-.8.5.1-1-.9-.3.6-.8.2.9.8- L16.9 6.2zM15.7 9.5l-1 .1.4.9-.9-.4-1 .2.3-1-.9-.4.8-.6.4 1 1-.2zM12.1 8.9l-.9.4.5.8-1-.1-.9.4.5-.9-1-.1.9-.5.5.9.9.1z" fill="#ffde00"/>
  </svg>
);

const SvgFlagJp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" width="24" height="18">
    <rect width="32" height="24" fill="#fff"/>
    <circle cx="16" cy="12" r="6" fill="#bc002d"/>
  </svg>
);

const SvgFlagKr = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" width="24" height="18">
        <rect width="32" height="24" fill="#fff" />
        <circle cx="16" cy="12" r="5.3" fill="#cd2e3a" />
        <circle cx="16" cy="12" r="5.3" fill="#0047a0" path="M16 12a5.3 5.3 0 000-10.6z" />
        <g fill="none" stroke="#000" stroke-width="2.5">
            <path d="M7 7l4 4" />
            <path d="M7 8.7l4 4" />
            <path d="M7 10.3l4 4" />
            <path d="M21 7l4 4" />
            <path d="M21 8.7l4 4" />
            <path d="M22.5 7l-4 4" />
            <path d="M7 17l4-4" />
            <path d="M7 15.3l4-4" />
            <path d="M7 13.7l4-4" />
            <path d="M21 17l4-4" />
            <path d="M21 15.3l4-4" />
            <path d="M22.5 17l-4-4" />
        </g>
    </svg>
);

const SvgFlagUs = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" width="24" height="18">
        <path fill="#bf0a30" d="M0 0h32v2.4H0zM0 4.8h32v2.4H0zM0 9.6h32v2.4H0zM0 14.4h32v2.4H0zM0 19.2h32v2.4H0z" />
        <path fill="#fff" d="M0 2.4h32v2.4H0zM0 7.2h32v2.4H0zM0 12h32v2.4H0zM0 16.8h32v2.4H0zM0 21.6h32v2.4H0z" />
        <path fill="#002868" d="M0 0h16v12H0z" />
        <g fill="#fff">
            <g id="s9">
                <g id="s5">
                    <path id="s" transform="translate(3.2 2.4) scale(.4)" d="M0-4l1.2 3.8-3-2.2h3.6l-3 2.2z" />
                    <use href="#s" transform="translate(4.8)" />
                </g>
                <use href="#s" transform="translate(9.6)" />
                <use href="#s" transform="translate(-2.4 2.4)" />
            </g>
            <use href="#s9" y="4.8" />
        </g>
    </svg>
);



export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();

  const languages = [
    { code: 'en', label: 'English', Flag: SvgFlagUs },
    { code: 'zh', label: '中文', Flag: SvgFlagCn },
    { code: 'ja', label: '日本語', Flag: SvgFlagJp },
    { code: 'ko', label: '한국어', Flag: SvgFlagKr },
  ];

  const CurrentFlag = languages.find(l => l.code === language)?.Flag || Globe;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <CurrentFlag />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map(({ code, label, Flag }) => (
          <DropdownMenuItem key={code} onSelect={() => setLanguage(code as any)}>
            <Flag />
            <span className="ml-2">{label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
