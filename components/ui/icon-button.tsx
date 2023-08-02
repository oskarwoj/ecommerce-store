import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  icon: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({
  className,
  icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        `rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition`,
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
