import ShadowBox from '@/app/_components/DivCard'
import React from 'react'
import DashboardCard from './DashboardCard'
import Light from '@/../../public/idea.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
const History = () => {
    return (
        <ShadowBox>
            <DashboardCard title='Previous History' subTitle='What Your Previously Work on, You can find here'
                subTitleClassName='text-black'
                className=' bg-clip-text  shadow-none'
            >
                <div className='grid justify-center items-center gap-4'>
                    <Image src={Light} width={100} height={100} alt="idea" className='text-center px-4' />
                    <span className='text-[18px] '>You donot have any history</span>
                    <Button className='bg-black text-white'>Get's Started</Button>

                </div>
            </DashboardCard>
        </ShadowBox>
    )
}

export default History