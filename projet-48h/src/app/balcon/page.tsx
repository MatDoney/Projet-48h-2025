import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

export default function Balcon() {
    return (
        <div className="h-screen w-screen bg-[url(/assets/image/balcon.png)] bg-no-repeat bg-contain bg-center bg-[#D5D5D5]">
            <Dialog>
            <DialogTrigger className="absolute w-[120px] h-[85px] right-[44%] top-[68%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
            <DialogContent className="top-[20%] w-[80%] h-[20%]">
                <DialogHeader>
                <DialogTitle>le chien</DialogTitle>
                <DialogDescription>
                    le fameux chien du balcon
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
            </Dialog>

            <Dialog>
            <DialogTrigger className="absolute w-[180px] h-[170px] right-[32%] top-[51%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
            <DialogContent className="top-[20%] w-[80%] h-[20%]">
                <DialogHeader>
                <DialogTitle>un transat</DialogTitle>
                <DialogDescription>
                    peut être l'heure de la pause ?
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
            </Dialog>
        </div>
    );
  }