import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
export default function SalleDeBain() {
    return (
        <div className="h-screen w-screen bg-[url(/assets/image/salle-de-bain.png)] bg-no-repeat bg-contain bg-center bg-[#D5D5D5]">
            <a href="/chambre" title='chambre' className="absolute w-[110px] h-[110px] right-[67%] top-[36%] cursor-pointer hover:bg-red-600 opacity-20"></a>
            <a href="/bureau" title='bureau' className="absolute w-[100px] h-[100px] right-[35.5%] top-[91%] cursor-pointer hover:bg-red-600 opacity-20"></a>
        
            <Dialog>
                <DialogTrigger className="absolute w-[250px] h-[60px] right-[38%] top-[40%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
                <DialogContent className="top-[20%] w-[80%] h-[20%]">
                    <DialogHeader>
                        <DialogTitle>Traces de sang</DialogTitle>
                        <DialogDescription>
                            Des traces de sang séchés sur le fond de la baignoire, comme si on y avait nettoyé quelque chose de sanguinolant.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        
        
        </div>
    );
  }