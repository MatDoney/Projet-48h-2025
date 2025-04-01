"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function FormulaireEnquete() {
  return (
    <form
      className="flex flex-col gap-4 mt-4"
      onSubmit={(e) => {
        e.preventDefault();
        const arme = (document.getElementById("arme") as HTMLSelectElement)
          .value;
        const lieu = (document.getElementById("lieu") as HTMLSelectElement)
          .value;
        const coupable = (
          document.getElementById("coupable") as HTMLSelectElement
        ).value;

        if (
          arme === "couteau" &&
          lieu === "cuisine" &&
          coupable === "Bernard"
        ) {
          window.location.href = "/success";
        } else {
          window.location.href = "/fail";
        }
      }}
    >
      {/* Arme du crime */}
      <div>
        <label
          htmlFor="arme"
          className="block text-sm font-medium text-gray-700"
        >
          Arme du crime
        </label>
        <select
          id="arme"
          name="arme"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="pistolet">Pistolet</option>
          <option value="poison">Poison</option>
          <option value="burger">Burger</option>
          <option value="couteau">Couteau</option>
          <option value="batte">Batte</option>
        </select>
      </div>

      {/* Lieu du meurtre */}
      <div>
        <label
          htmlFor="lieu"
          className="block text-sm font-medium text-gray-700"
        >
          Lieu du meurtre
        </label>
        <select
          id="lieu"
          name="lieu"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="cuisine">Cuisine</option>
          <option value="couloir">Couloir</option>
          <option value="salle-de-bain">Salle de bain</option>
          <option value="balcon">Balcon</option>
          <option value="salon">Salon</option>
          <option value="chambre">Chambre</option>
          <option value="bureau">Bureau</option>
        </select>
      </div>

      {/* Nom du coupable */}
      <div>
        <label
          htmlFor="coupable"
          className="block text-sm font-medium text-gray-700"
        >
          Nom du coupable
        </label>
        <select
          id="coupable"
          name="coupable"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="Emir">Emir Bourgrignon</option>
          <option value="drZ">Dr. Z</option>
          <option value="Bernard">Bernard Grignon</option>
          <option value="inconnu">Inconnu</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
      >
        Soumettre
      </button>
    </form>
  );
}
