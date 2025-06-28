import React from 'react'
import DashboardCard from './DashboardCard'
import AICard, { IAiProps } from './AICard'
import Chat from '@/../../public/chatbot.png';
import Resume from '@/../../public/resume.png'
import RoadMap from '@/../../public/roadmap.png';
import Cover from '@/../../public/cover.png'

export const AIToolsData: IAiProps[] = [
    {
        icon: Chat,
        title: "AI Career Q&A Chat",
        subTitle: "Chat With AI Agent",
        buttonTitle: "Let's Chat"
    },
    {
        icon: Cover,
        title: "Cover Letter Generator",
        subTitle: "Chat With AI Agent",
        buttonTitle: "Let's Generate"
    },



    {
        icon: Resume,
        title: "AI Resume Analyzer",
        subTitle: "Chat With AI Agent",
        buttonTitle: "start"
    },

    {
        icon: RoadMap,
        title: "Learning RoadMap",
        subTitle: "Chat With AI Agent",
        buttonTitle: "Get's Started"
    },


]
const AITools = () => {
    return (
        <div className='shadow-md p-2 my-2'>
            <DashboardCard className='bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-none' h3ClassName='text-black' subTitleClassName='text-black' title='Available AI Tools' subTitle='Start building and shape your career with executive AI Tools'>
                <div className='flex justify-start items-center px-4 gap-4'>
                    {AIToolsData?.map((item, index) => (
                        <AICard key={index} icon={item?.icon} title={item?.title} subTitle={item?.subTitle} buttonTitle={item?.buttonTitle} />
                    ))}
                </div>
            </DashboardCard>
        </div>
    )
}

export default AITools