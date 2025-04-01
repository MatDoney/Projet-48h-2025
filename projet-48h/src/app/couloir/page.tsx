import { LinkButton } from '@/components/LinkButton';
import React from 'react';

export default function SalleDeBain() {
  return (
    <div className="h-screen w-screen bg-[url(/assets/image/couloir.png)] bg-no-repeat bg-contain bg-center bg-[#D5D5D5]">
      <LinkButton href="/bureau" title='bureau' className="absolute w-[100px] h-[100px] right-[60.5%] top-[42%]" />
      <LinkButton href="/salon" title='salon' className="absolute w-[100px] h-[100px] right-[46%] top-[2%]" />
      <LinkButton href="/toilette" title='toilette' className="absolute w-[100px] h-[100px] right-[60%] top-[25%]" />
      <LinkButton href="/cuisine" title="cuisine" className="absolute w-[80px] h-[80px] right-[34%] top-[23%]" />
    </div>
  );
}
