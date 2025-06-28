import React from 'react'
import DashboardCard from '../../dashboard/_components/DashboardCard'
import Chat from './_components/Chat'

const page = () => {
    return (
        <>
            <DashboardCard title='AI Career Q/A Chat' h3ClassName='text-white' subTitle='Smarter career decisions start here- get  tailored advice.'
                buttonTitle="+ New Chat" >
                <Chat />
            </DashboardCard>
        </>
    )
}

export default page