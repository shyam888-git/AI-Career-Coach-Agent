import React from 'react'
import DashboardCard from './_components/DashboardCard'
import AITools from './_components/AITools'
import History from './_components/History'

const DashboardPage = () => {
    return (
        <div>
            <DashboardCard title='AI Career Coach Agent' h3ClassName='text-white' subTitle='Smarter career decisions start here- get  tailored advice.'
                buttonTitle="Let's Get Started" />
            <AITools />
            <History />
        </div>
    )
}

export default DashboardPage