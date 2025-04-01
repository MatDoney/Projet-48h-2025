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
        <div className="h-screen w-screen bg-[url(/assets/image/toilette.png)] bg-no-repeat bg-contain bg-center bg-[#D5D5D5]">
            <a href="/couloir" title='couloir' className="absolute w-[100px] h-[100px] right-[36%] top-[32%] cursor-pointer hover:bg-red-600 opacity-20"
            />

            <Dialog>
                <DialogTrigger className="absolute w-[70px] h-[200px] right-[57%] top-[70%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
                <DialogContent className="top-[20%] w-[80%] h-[20%]">
                    <DialogHeader>
                        <DialogTitle>Batte de baseball</DialogTitle>
                        <DialogDescription>
                            Etrange endroit pour retrouver une batte de baseball, mais bon, peut être que la victime s'entrainait sur le trône.
                            <br></br>
                            La batte est poussieuse, elle n'a pas du être utilisée depuis longtemps. 
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>


            <Dialog>
                <DialogTrigger className="absolute w-[50px] h-[50px] right-[52%] top-[51%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
                <DialogContent className="top-[20%] w-[80%] h-[20%]">
                    <DialogHeader>
                        <DialogTitle>Un rouleau de PQ</DialogTitle>
                        <DialogDescription>
                            Sous le rouleau de PQ, vous voyez une suite de chiffres, 567882, La victime était vraiment quelqu'un d'étrange
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}