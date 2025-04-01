export default function Success() {
    return (
        <div className="h-screen w-screen bg-[url(/assets/image/fail.jpg)] bg-no-repeat bg-contain bg-center bg-white flex items-center justify-center">
            <div className="bg-gray-800 text-white text-center p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold">Perdu! <a href="/">Cliquez ici pour recommencer</a></h1>
            </div>
        </div>
    );
}