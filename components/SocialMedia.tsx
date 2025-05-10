import { Dribbble, Github, Instagram, Slack, Youtube } from "lucide-react";
import React from "react";
import { Tooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

const socialLink = [
  {
    title: "Dribbble",
    href: "https://dribbble.com",
    icon: <Dribbble className="w-5 h-5" />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    title: "Slack",
    href: "https://slack.com",
    icon: <Slack className="w-5 h-5" />,
  },
  {
    title: "GitHub",
    href: "https://github.com",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com",
    icon: <Youtube className="w-5 h-5" />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex gap-3.5 items-center", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger>
              <Link href={item?.href}>{item?.icon}</Link>
            </TooltipTrigger>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
