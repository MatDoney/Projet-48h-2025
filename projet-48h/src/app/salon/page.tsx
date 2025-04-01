import { LinkButton } from "@/components/LinkButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
              La table à été dressé pour 4, mais la vaisselle ne semble pas
              utilisé.
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

      <Dialog>
        <DialogTrigger className="absolute w-[200px] h-[230px] right-[56%] top-[42%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
        <DialogContent className="top-[20%] w-[80%] h-[20%]">
          <DialogHeader>
            <DialogTitle>La victime</DialogTitle>
            <DialogDescription>
              Bernard Grignon est étendu sur le sol, du sang autour de lui, il a plusieurs plaie et contusion partout sur son torse et son abdomen. 
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>


      <Dialog>
        <DialogTrigger className="absolute w-[80px] h-[100px] right-[85%] top-[33%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
        <DialogContent className="top-[20%] w-[80%] h-[20%]">
          <DialogHeader>
            <DialogTitle>Peinture</DialogTitle>
            <DialogDescription>
              Une peinture représentant le cri de Munch est accroché au mur.
              Sa qualité est telle qu'on dirait l'orignal !!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger className="absolute w-[80px] h-[80px] right-[22%] top-[30%] cursor-pointer hover:bg-red-600 opacity-20"></DialogTrigger>
        <DialogContent className="top-[50%] w-[80%] h-[40%]">
          <DialogHeader>
            <DialogTitle>Ordinateur</DialogTitle>
            <DialogDescription>
              L'ordinateur est dévérouillé, on peut y voir un article du perigueux Times : 
                <br /> <strong>Le cri de Munch dérobé au musée Munch d'Oslo</strong>
                <br /> <br /> En effet le celebre tableau de Munch a été volé au musée d'Oslo par 2 individus.
                <br /> <br /> Le tableau original est estimé à 120 millions de dollars.
                <br /> <br /> Un Guarde à été blessé par balle à l'épaule en tentant de retenir un des malfrats.
                <br /> <br /> La police norvégienne a ouvert une enquête pour les retrouver, une personne a été arrêté après une denonciation anonyme, mais à été relaché.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );

}
