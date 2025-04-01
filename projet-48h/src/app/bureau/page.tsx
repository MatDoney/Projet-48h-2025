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

export default function Bureau() {
    const [otp, setOtp] = useState(""); // Utilisation d'une seule chaîne pour l'OTP
    const [isUnlocked, setIsUnlocked] = useState(false);

    const handleChange = (value: string) => {
        setOtp(value);

        // Vérifie si l'OTP complet est correct
        if (value === "paul" || value === "Paul" || value === "PAUL") {
            setIsUnlocked(true);
        }
    };

    return (
        <div className="h-screen w-screen bg-[url(/assets/image/bureau.png)] bg-no-repeat bg-contain bg-center bg-[#D5D5D5] ">
            <Dialog>
                <DialogTrigger className="absolute w-[70px] h-[60px] right-[48%] top-[40%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
                <DialogContent className="top-[20%] w-[80%] h-[20%]">
                    <DialogHeader>
                        <DialogTitle>Ordinateur portable</DialogTitle>
                        <DialogDescription>
                            {isUnlocked
                                ? "Ordinateur déverrouillé ! Bienvenue."
                                : "Entrez le mot de passe pour déverrouiller l'ordinateur"}
                        </DialogDescription>
                    </DialogHeader>
                    {!isUnlocked && (
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

            <a
                href="/couloir" title='couloir'
                className="absolute w-[118px] h-[105px] top-[87%] right-[59.5%] hover:bg-red-700 opacity-20"
            />
            <a
                href="/salle-de-bain" title='salle de bain'
                className="absolute w-[100px] h-[100px] top-[83%] right-[36%] hover:bg-red-700 opacity-20"
            />
        </div>
    );
}