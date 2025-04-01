import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col bg-[#D5D5D5] items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">BIENVENUE à notre projet 48h</h1>
      <a
        href="/comissariat"
        className="px-8 py-4 bg-blue-600 text-white text-2xl font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Jouer
      </a>
    </div>
  );
}
