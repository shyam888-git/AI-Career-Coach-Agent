import React from 'react'
import DashboardCard from './_components/DashboardCard'
import AITools from './_components/AITools'

const DashboardPage = () => {
    return (
        <div>
            <DashboardCard title='AI Career Coach Agent' subTitle='Smarter career decisions start here- get  tailored advice.'
                buttonTitle="Let's Get Started" />
            <AITools />
        </div>
    )
}

export default DashboardPage