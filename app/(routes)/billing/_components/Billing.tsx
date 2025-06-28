import React from 'react'
import DashboardCard from '../../dashboard/_components/DashboardCard'
import { PricingTable } from '@clerk/nextjs'

const Billing = () => {
    return (
        <div>
            <DashboardCard title='Choose Your Plan' h3ClassName='text-white' subTitle='Select a subscription bundle to get all AI Tools Access'>
                <div className='my-2'>
                    <PricingTable />

                </div>
            </DashboardCard>

        </div>
    )
}

export default Billing