import React from 'react';

export default function SalleDeBain() {
    return (
        <div className="h-screen w-screen bg-[url(/assets/image/couloir.png)] bg-no-repeat bg-contain bg-center bg-[#D5D5D5]">

            <a   href="/bureau" title='bureau' className="absolute w-[100px] h-[100px] right-[60.5%] top-[42%] cursor-pointer hover:bg-red-600 opacity-20"
            />
            <a   href="/salon" title='salon' className="absolute w-[100px] h-[100px] right-[46%] top-[2%] cursor-pointer hover:bg-red-600 opacity-20"
            />

<a   href="/cuisine" title="cuisine" className="absolute w-[80px] h-[80px] right-[34%] top-[23%] cursor-pointer hover:bg-red-600 opacity-20"
            />
        </div>
    );
}