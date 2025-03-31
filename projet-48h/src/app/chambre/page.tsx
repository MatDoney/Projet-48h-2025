

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

export default function Chambre() {
    return (
        <div className="h-screen w-screen bg-[url(/assets/image/chambre.png)] bg-no-repeat bg-contain bg-center bg-[#D5D5D5]">
            <Dialog>
                <DialogTrigger className="absolute w-[50px] h-[50px] right-[59%] top-[40%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
                <DialogContent className="top-[20%] w-[80%] h-[20%]">
                    <DialogHeader>
                        <DialogTitle>Main Ensanglantée</DialogTitle>
                        <DialogDescription>
                            Une trace de main est dessinée avec du sang, à qui peut elle appartenir ?
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
                            On dirait qu'on à trainé le corps, il a donc été déplacé
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
                            Le coffre est verrouillé, il y a des traces de tentative d'effraction
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
                <InputOTP maxLength={6}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
            </Dialog>
        </div>
    );
}