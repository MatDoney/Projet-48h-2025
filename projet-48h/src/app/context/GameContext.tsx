"use client";

import { createContext, useContext, useEffect, useState } from "react";
import CryptoJS from "crypto-js";

const SECRET_KEY = "ma_clé_secrète";

type GameContextType = {
  progress: number;
  setProgress: (value: number) => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [progress, setProgress] = useState<number | undefined>(undefined);

  useEffect(() => {
    const savedProgress = localStorage.getItem("gameProgress");
    if (savedProgress !== null) {
      try {
        const bytes = CryptoJS.AES.decrypt(savedProgress, SECRET_KEY);
        const decryptedProgress = bytes.toString(CryptoJS.enc.Utf8);
        setProgress(Number(decryptedProgress));
      } catch (error) {
        console.error("Error decrypting progress:", error);
        setProgress(0);
      }
    } else {
      setProgress(0);
    }
  }, []);

  useEffect(() => {
    if (progress !== undefined) {
      const encryptedProgress = CryptoJS.AES.encrypt(
        progress.toString(),
        SECRET_KEY
      ).toString();
      localStorage.setItem("gameProgress", encryptedProgress);
    }
  }, [progress]);

  if (progress === undefined) {
    return <div>Chargement...</div>;
  }

  return (
    <GameContext.Provider value={{ progress, setProgress }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
