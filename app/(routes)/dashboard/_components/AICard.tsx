'use client'
import { Button } from '@/components/ui/button';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
export interface IAiProps {
  icon: StaticImageData,
  title: string;
  subTitle: string;
  buttonTitle: string;
  link: string;
}
const AICard = ({ icon, title, subTitle, buttonTitle, link }: IAiProps) => {
  const router = useRouter();
  const onButtonClick = () => {
    router.push(`${link}`);
  }
  return (
    <div className='grid justify-center items-center gap-1  border border-gray-200 px-3 py-2 '>
      <Image src={icon} width={45} height={45} alt="tools" />
      <span className='text-xl font-bold'>{title}</span>
      <span className='text-sm'>{subTitle}</span>
      <Button className='bg-black text-white' onClick={onButtonClick}>{buttonTitle}</Button>
    </div>
  )
}

export default AICard