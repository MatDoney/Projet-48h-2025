'use client'

import { useState, useEffect } from "react";
import Image from 'next/image';
import ImageMap from '../../../public/assets/image/map.png';
import { usePathname } from "next/navigation";

const Map = () => {
  const [playerX, setPlayerX] = useState(0);
  const [playerY, setPlayerY] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const location = pathname.split("/").pop() || "default";

  useEffect(() => {
    switch (location) {
      case 'couloir':
        setPlayerX(60);
        setPlayerY(60);
        break;
      case 'bureau':
        setPlayerX(45);
        setPlayerY(75);
        break;
      case 'cuisine':
        setPlayerX(75);
        setPlayerY(70);
        break;
      case 'salon':
        setPlayerX(40);
        setPlayerY(20);
        break;
      case 'chambre':
        setPlayerX(20);
        setPlayerY(45);
        break;
      case 'balcon':
        setPlayerX(75);
        setPlayerY(25);
        break;
      case 'salle_de_bain':
        setPlayerX(45);
        setPlayerY(45);
        break;
      default:
        setPlayerX(0);
        setPlayerY(0);
    }
  }, [location]);

  const handleMapClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(true);
  };


  const handleOutsideClick = () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {

    if (isExpanded) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isExpanded]);

  if (isExpanded) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
        onClick={handleOutsideClick}
      >
        <div
          className="relative w-full max-w-3xl mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={ImageMap}
            alt="Map"
            className="w-full h-auto rounded-lg"
          />
          <div
            className="absolute w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg"
            style={{
              top: `${playerY}%`,
              left: `${playerX}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full cursor-pointer"
      onClick={handleMapClick}
    >
      <Image
        src={ImageMap}
        alt="Map"
        className="w-full h-auto"
      />
      <div
        className="absolute w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"
        style={{
          top: `${playerY}%`,
          left: `${playerX}%`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default Map;
