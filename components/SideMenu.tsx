import React, { FC } from "react";

import { X } from "lucide-react";

import Link from "next/link";
import { useOutsideClick } from "@/hooks";
import { headerData } from "@/constants/data";
import { usePathname } from "next/navigation";

import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 shadow-xl text-white/70 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}
    >
      <div
        className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop_light_green flex flex-col gap-6"
        ref={sidebarRef}
      >
        <div className="flex justify-between items-center gap-5">
          <Logo className="text-white" spanDesign="group-hover:text-white" />
          <button
            className="hover:text-shop_light_green hoverEffect"
            onClick={onClose}
          >
            <X />
          </button>
        </div>
        <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
          {headerData?.map((item) => (
            <Link
              href={item?.href}
              key={item?.title}
              className={`hover:text-shop_light_green hoverEffect ${
                pathname === item?.href && "text-shop_light_green"
              }`}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default SideMenu;
