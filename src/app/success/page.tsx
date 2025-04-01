export default function Success() {
    return (
        <div className="h-screen w-screen bg-[url(/assets/image/success.gif)] bg-no-repeat bg-contain bg-center bg-black flex items-center justify-center">
            <div className="bg-gray-800 text-white text-center p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold">BRAVO, vous avez résolu l'affaire avec brio <a href="/">Cliquez ici pour revenir au début</a></h1>
            </div>
        </div>
    );
}