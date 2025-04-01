'use client'
import  { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";

export default function Comissariat() {
  const [otp, setOtp] = useState(""); // Utilisation d'une seule chaîne pour l'OTP
    const [isRemembered, setIsRemembered] = useState(false);

    const handleChange = (value: string) => {
        setOtp(value);

        // Vérifie si l'OTP complet est correct
        if (value === "7156") {
          setIsRemembered(true);
        }
    };
  return (
  <div className="h-screen w-screen bg-[url(/assets/image/comissariat.jpg)] bg-no-repeat bg-contain bg-center bg-[#D5D5D5]">  );
    <Dialog>
      <DialogTrigger className="absolute w-[395px] h-[288px] right-[43.5%] top-[14%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
      <DialogContent className="top-[20%] w-[80%] h-[22%]">
          <DialogHeader>
              <DialogTitle>Mur d'investigation</DialogTitle>
              <DialogDescription>
                  Il y a eu un meurtre dans un appartement du quartier, la victime est un homme dans la quarantaine, le consièrge nous à donner le code de l'appartement: 7156, je vais en avoir besoin pour entrer dans l'immeuble et enqêter sur l'affaire.
              </DialogDescription>
          </DialogHeader>
      </DialogContent>
    </Dialog>

    <Dialog>
    <DialogTrigger className="absolute w-[330px] h-[600px] right-[11.5%] top-[16%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
        <DialogContent className="top-[20%] w-[80%] h-[20%]">
            <DialogHeader>
                <DialogTitle>Aller sur le lieu de l'enquete</DialogTitle>
                <DialogDescription>
                    {isRemembered
                        ? <a href="/couloir" className="text-blue-500">Aller sur la scène de crime</a>
                        : "Je devrais être sur d'avoir bien retenu le code de l'interphone avant de partir."}
                </DialogDescription>
            </DialogHeader>
            {!isRemembered && (
                <InputOTP
                    maxLength={4}
                    value={otp}
                    onChange={handleChange}
                >
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                    </InputOTPGroup>
                </InputOTP>
            )}
        </DialogContent>
    </Dialog>
  </div>
  )
}
