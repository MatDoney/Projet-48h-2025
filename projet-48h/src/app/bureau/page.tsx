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
  // Remplacez les \n par <br /> dans texteForum
  var texteForum = "<br />StarLover69 :Bernard, t’es vraiment le propriétaire de J18365633+3847012 ? C’est l’étoile la plus fascinante que j’ai jamais vue ! Comment t’as pu acquérir un tel trésor cosmique ?<br /><br />BernardNebuleuse :<br />Oui, je l’ai acquise lors d’une vente intergalactique. J’ai même un titre de propriété officiel signé au crayon, que je garde bien au chaud dans un coffre-fort sécurisé. 😎";

  return (
    <div className="h-screen w-screen bg-[url(/assets/image/bureau.png)] bg-no-repeat bg-contain bg-center bg-[#D5D5D5] ">
      <Dialog>
        <DialogTrigger className="absolute w-[70px] h-[60px] right-[48%] top-[40%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
        <DialogContent className="top-[50%] w-[80%] h-[50%]">
          <DialogHeader>
            <DialogTitle>Ordinateur portable</DialogTitle>
            <DialogDescription
              dangerouslySetInnerHTML={{
                __html: isUnlocked
                  ? "Ordinateur déverrouillé \n Une page est ouverte sur une discussion entre la victime et StarLover69.<br> " + texteForum
                  : "L'ordinateur est verrouillé, il y a un chien en fond d'écran. Veuillez entrer le mot de passe.",
              }}
            />
          </DialogHeader>
          {!isUnlocked && (
            <InputOTP maxLength={4} value={otp} onChange={handleChange}>
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

      <Dialog>
        <DialogTrigger className="absolute w-[70px] h-[40px] right-[41%] top-[45%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
        <DialogContent className="top-[20%] w-[80%] h-[20%]">
          <DialogHeader>
            <DialogTitle>Tirroir</DialogTitle>
            <DialogDescription>
              Dans le tiroir, on voit un pistolet, un chargeur et une carte de
              crédit.
              <br />
              Le pistolet est chargé, mais il manque une balle dans le chargeur.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <a
        href="/couloir"
        className="absolute w-[118px] h-[105px] top-[87%] right-[59.5%] hover:bg-red-700 opacity-20"
      />
      <a
        href="/salle-de-bain"
        className="absolute w-[100px] h-[100px] top-[83%] right-[36%] hover:bg-red-700 opacity-20"
      />
    </div>
  );
}
