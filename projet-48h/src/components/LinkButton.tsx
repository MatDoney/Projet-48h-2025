"use client"

import { useState } from "react";

interface ILinkProps {
  href: string
  className: string
  title: string
}

export function LinkButton(props: ILinkProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <a
      href={props.href}
      onMouseMove={handleMouseMove}
      onPointerEnter={() => setVisible(true)}
      onPointerLeave={() => setVisible(false)}
    >
    <div className={`cursor-pointer hover:bg-red-600 opacity-20 ${props.className}`}></div>
      {visible && (
        <div
          className="absolute bg-gray-500 text-white px-2 py-1 rounded shadow-lg flex items-center justify-center w-3xs"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(10px, 10px)",
          }}
        >
          {props.title}
        </div>
      )}
    </a>
  );
}

