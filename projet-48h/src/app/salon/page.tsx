import { LinkButton } from "@/components/LinkButton";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
export default function Salon() {
    return (
        <div className="h-screen w-screen bg-[url(/assets/image/salon.png)] bg-no-repeat bg-contain bg-center bg-[#D5D5D5]">
            <LinkButton href="/balcon" title="balcon" className="absolute w-[90px] h-[90px] right-[4%] top-[27%]"/>
            <LinkButton href="/chambre" title="chambre" className="absolute w-[101px] h-[105px] right-[60%] top-[70%]"/>
            <LinkButton href="/couloir" title='couloir' className="absolute w-[100px] h-[100px] right-[17%] top-[90%]"/>

            <Dialog>
                <DialogTrigger className="absolute w-[250px] h-[100px] right-[70%] top-[40%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
                <DialogContent className="top-[20%] w-[80%] h-[20%]">
                    <DialogHeader>
                        <DialogTitle>Table</DialogTitle>
                        <DialogDescription>
                            La table à été dressé pour 4, mais la vaisselle ne semble pas utilisé.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            <Dialog>
                <DialogTrigger className="absolute w-[80px] h-[80px] right-[22%] top-[30%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
                <DialogContent className="top-[20%] w-[80%] h-[20%]">
                    <DialogHeader>
                        <DialogTitle>Ordinateur</DialogTitle>
                        <DialogDescription>
                            L'ordinateur est dévérouillé, sur un forum de discussion autour des étoiles.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}
