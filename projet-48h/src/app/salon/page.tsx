export default function Salon() {
    return (
        <div className="h-screen w-screen bg-[url(/assets/image/salon.png)] bg-no-repeat bg-contain bg-center bg-[#D5D5D5]">
            <a href="/balcon" title="balcon" className="absolute w-[90px] h-[90px] right-[4%] top-[27%] cursor-pointer hover:  hover:bg-red-600 opacity-20"></a>
            <a href="/chambre" title="chambre" className="absolute w-[101px] h-[105px] right-[60%] top-[70%] cursor-pointer hover:bg-red-600 opacity-20"></a>
            <a href="/couloir" title='couloir' className="absolute w-[100px] h-[100px] right-[17%] top-[90%] cursor-pointer hover:bg-red-600 opacity-20"></a>
        </div>
    );
}