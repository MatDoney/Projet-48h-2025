import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function Cuisine() {
    return (
        <div className="h-screen w-screen bg-[url(/assets/image/cuisine.png)] bg-no-repeat bg-contain bg-center bg-[#D5D5D5]">

            <Dialog>
                <DialogTrigger className="absolute w-[40px] h-[40px] right-[43.5%] top-[49%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
                <DialogContent className="top-[20%] w-[80%] h-[20%]">
                    <DialogHeader>
                        <DialogTitle>Hamburger</DialogTitle>
                        <DialogDescription>
                            
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}