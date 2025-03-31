export default function Salon() {
    return (
        <div className="h-screen w-screen bg-[url(/assets/image/salon.png)] bg-no-repeat bg-contain bg-center bg-[#D5D5D5]">

            <a href="/chambre" className="absolute w-[101px] h-[105px] right-[60%] top-[70%] cursor-pointer hover:bg-red-600 opacity-20"></a>
            <a href="/couloir" className="absolute w-[100px] h-[100px] right-[17%] top-[90%] cursor-pointer hover:bg-red-600 opacity-20"></a>
        </div>
    );
}