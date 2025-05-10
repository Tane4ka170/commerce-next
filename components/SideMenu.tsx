import React, { FC } from "react";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  return <div className={`fixed inset-y-0`}>SideMenu</div>;
};

export default SideMenu;
