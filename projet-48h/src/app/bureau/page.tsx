import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"

export default function Bureau() {
    return (
        <div className="h-screen w-screen bg-[url(/assets/image/bureau.png)] bg-no-repeat bg-contain bg-center bg-[#D5D5D5] ">
            <Dialog>
            <DialogTrigger className="absolute w-[70px] h-[60px] right-[48%] top-[40%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
            <DialogContent className="top-[20%] w-[80%] h-[20%]">
                <DialogHeader>
                <DialogTitle>Ordinateur portable</DialogTitle>
                <DialogDescription>
                    Entrez le mot de passe pour déverrouiller l'ordinateur
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
            </Dialog>

            <a href="/couloir" className="absolute w-[118px] h-[105px] top-[87%] right-[59.5%] hover:bg-red-700 opacity-20"/>
            <a href="/salle-de-bain" className="absolute w-[100px] h-[100px] top-[83%] right-[36%] hover:bg-red-700 opacity-20"/>
        </div>
    );
  }