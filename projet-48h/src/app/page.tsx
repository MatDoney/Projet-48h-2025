import { Navigation } from "@/components/Navigation";
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from "@/components/ui/dialog";

export default function Home() {
  return (
    <div>
      <Navigation to="feur" />

      <Dialog>
        <DialogTrigger>Feur</DialogTrigger>
        <DialogContent>
          <DialogDescription>
            Lorem ipsum hahahah hehhehe ah hah ahahah haha 
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  )
}
