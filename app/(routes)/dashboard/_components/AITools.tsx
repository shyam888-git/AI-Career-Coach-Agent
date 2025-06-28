import React from 'react'
import DashboardCard from './DashboardCard'
import AICard, { IAiProps } from './AICard'
import Chat from '@/../../public/chatbot.png';
import Resume from '@/../../public/resume.png'
import RoadMap from '@/../../public/roadmap.png';
import Cover from '@/../../public/cover.png'
import ShadowBox from '@/app/_components/DivCard';

export const AIToolsData: IAiProps[] = [
    {
        icon: Chat,
        title: "AI Career Q&A Chat",
        subTitle: "Chat With AI Agent",
        buttonTitle: "Ask Now",
        link: '/ai-tools/ai-chats'
    },
    {
        icon: Cover,
        title: "Cover Letter Generator",
        subTitle: "Chat With AI Agent",
        buttonTitle: "Create Now",
        link: '/ai-tools/ai-chats'

    },



    {
        icon: Resume,
        title: "AI Resume Analyzer",
        subTitle: "Chat With AI Agent",
        buttonTitle: "Analyze Now",
        link: '/ai-tools/ai-chats'

    },

    {
        icon: RoadMap,
        title: "Learning RoadMap",
        subTitle: "Chat With AI Agent",
        buttonTitle: "Generate Now",
        link: '/ai-tools/ai-chats'

    },


]
const AITools = () => {
    return (
        <ShadowBox>
            <DashboardCard className='bg-clip-text  shadow-none'
                title='Available AI Tools' h3ClassName='text-black' subTitleClassName='text-black' subTitle='Start building and shape your career with executive AI Tools'>
                <div className="flex justify-start items-center px-4 gap-4">
                    {AIToolsData?.map((item, index) => (
                        <div key={index} className="flex-1 min-w-[200px] max-w-[250px]">
                            <AICard
                                icon={item.icon}
                                title={item.title}
                                subTitle={item.subTitle}
                                buttonTitle={item.buttonTitle}
                                link={item?.link}
                            />
                        </div>
                    ))}
                </div>

            </DashboardCard>
        </ShadowBox>
    )
}

export default AITools