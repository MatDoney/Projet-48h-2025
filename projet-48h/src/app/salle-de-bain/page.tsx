import React from 'react';

export default function SalleDeBain() {
    return (
        <div className="h-screen w-screen bg-[url(/assets/image/salle-de-bain.png)] bg-no-repeat bg-contain bg-center bg-[#D5D5D5]">
            <a href="/chambre" className="absolute w-[110px] h-[110px] right-[67%] top-[36%] cursor-pointer hover:bg-red-600 opacity-20"></a>
            <a href="/bureau" className="absolute w-[100px] h-[100px] right-[35.5%] top-[91%] cursor-pointer hover:bg-red-600 opacity-20"></a>
        </div>
    );
  }