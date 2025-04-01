import { LinkButton } from "@/components/LinkButton";
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
            <DialogTrigger className="absolute w-[100px] h-[100px] right-[43%] top-[68%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
            <DialogContent className="top-[20%] w-[80%] h-[20%]">
                <DialogHeader>
                <DialogTitle>le chien</DialogTitle>
                <DialogDescription>
                    le fameux chien du balcon, sur son collier il est écrit "Paul"
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
            </Dialog>

            <Dialog>
            <DialogTrigger className="absolute w-[200px] h-[200px] right-[28%] top-[51%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
            <DialogContent className="top-[20%] w-[80%] h-[20%]">
                <DialogHeader>
                <DialogTitle>un transat</DialogTitle>
                <DialogDescription>
                    peut être l'heure de la pause ?
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
            </Dialog>

            <LinkButton href="/cuisine" title='cuisine' className="absolute w-[105px] h-[95px] top-[18%] right-[70.5%]"/>
            <LinkButton href="/salon" title='salon' className="absolute w-[118px] h-[95px] top-[7%] right-[37.5%]"/>
        </div>
    );
  }
