'use client'
import React, { useState } from "react";
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
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";

export default function Chambre() {
    const [otp, setOtp] = useState(""); // Utilisation d'une seule chaîne pour l'OTP
    const [isUnlocked, setIsUnlocked] = useState(false);

    const handleChange = (value: string) => {
        setOtp(value);

        // Vérifie si l'OTP complet est correct
        if (value === "567882") {
            setIsUnlocked(true);
        }
    };

    return (
        <div className="h-screen w-screen bg-[url(/assets/image/chambre.png)] bg-no-repeat bg-contain bg-center bg-[#D5D5D5]">
            <Dialog>
                <DialogTrigger className="absolute w-[50px] h-[50px] right-[59%] top-[40%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
                <DialogContent className="top-[20%] w-[80%] h-[20%]">
                    <DialogHeader>
                        <DialogTitle>Main Ensanglantée</DialogTitle>
                        <DialogDescription>
                            Une trace de main est dessinée avec du sang, à qui peut-elle appartenir ?
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            <Dialog>
                <DialogTrigger className="absolute w-[180px] h-[110px] right-[48%] top-[48%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
                <DialogContent className="top-[20%] w-[80%] h-[20%]">
                    <DialogHeader>
                        <DialogTitle>Trainée de sang</DialogTitle>
                        <DialogDescription>
                            On dirait qu'on a traîné le corps depuis la chambre, il a donc été déplacé.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            <Dialog>
                <DialogTrigger className="absolute w-[90px] h-[67px] right-[45.5%] top-[35%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
                <DialogContent className="top-[20%] w-[80%] h-[20%]">
                    <DialogHeader>
                        <DialogTitle>Coffre Fort</DialogTitle>
                        <DialogDescription>
                            {isUnlocked
                                ? "Coffre déverrouillé ! Vous avez trouvé un indice."
                                : "Le coffre est verrouillé, il y a des traces de tentative d'effraction."}
                        </DialogDescription>
                    </DialogHeader>
                    {!isUnlocked && (
                        <InputOTP
                            maxLength={6}
                            value={otp}
                            onChange={handleChange}
                        >
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                                <InputOTPSlot index={6} />
                            </InputOTPGroup>
                        </InputOTP>
                    )}
                </DialogContent>
            </Dialog>

            <a
                href="/salle-de-bain" title='salle de bain'
                className="absolute w-[90px] h-[60px] right-[32%] top-[1%] cursor-pointer hover:bg-red-600 opacity-20"
            />
            <a
                href="/salon" title='salon'
                className="absolute w-[100px] h-[100px] right-[65.2%] top-[3%] cursor-pointer hover:bg-red-600 opacity-20"
            />
        </div>
    );
}