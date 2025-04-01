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
                            MMMH BORGOR KING
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>


            <Dialog>
                <DialogTrigger className="absolute w-[40px] h-[40px] right-[26%] top-[53%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
                <DialogContent className="top-[20%] w-[80%] h-[20%]">
                    <DialogHeader>
                        <DialogTitle>Couteau Propre</DialogTitle>
                        <DialogDescription>
                            Un couteau très tranchant, etrange de le laisser sorti pour ne pas s'en servir
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <a href="/couloir" className="absolute w-[118px] h-[122px] top-[83.5%] right-[61%] hover:bg-red-700 opacity-20"/>
            <a href="/balcon" className="absolute w-[118px] h-[122px] top-[1.5%] right-[78%] hover:bg-red-700 opacity-20"/>
        </div>
    );
}