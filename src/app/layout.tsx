import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Map from "@/components/Map"
import FormulaireEnquete from "@/components/FormulaireEnquete";
import { GameProvider } from "./context/GameContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Challenge 48h",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let i = 0;
  return (
    <html lang="en" className="overflow-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GameProvider>
        <audio
          src="/assets/sound/cosmic-cradle-314706.mp3"
          hidden
          autoPlay
          loop
        />
        <div className="absolute top-5 right-5 w-40 h-40 bg-gray-800 p-2 rounded-lg shadow-lg cursor-pointer hover:opacity-90">
            <Map />
          </div>
        <Drawer>
          <DrawerTrigger className="absolute left-10 bottom-10">
            <Button variant="outline">Rapport d'enquete</Button>
          </DrawerTrigger>
          <DrawerContent className="w-[25%] h-[40%]">
            <DrawerHeader>
              <DrawerTitle>Rapport d'enquete</DrawerTitle>
              <DrawerDescription>
              <FormulaireEnquete />
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        {children}
        </GameProvider>
      </body>
    </html>
  );
}
