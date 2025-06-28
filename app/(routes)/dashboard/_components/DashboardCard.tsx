import { Button } from '@/components/ui/button';
import React, { ReactNode } from 'react'
import clsx from 'clsx';
interface DashboardCardProps {
    title: string;
    subTitle: string;
    buttonTitle?: string;
    children?: ReactNode,
    className?: string,
    h3ClassName?: string,
    subTitleClassName?: string,

}
const DashboardCard = ({ title, subTitle, buttonTitle, children, className, h3ClassName, subTitleClassName }: DashboardCardProps) => {
    return (
        <>
            <div className={clsx(`grid justify-start items-center gap-1 shadow-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-4 py-2 rounded-lg`, className)}>
                <h3 className={clsx(`font-bold text-black text-xl`, h3ClassName)}>{title}</h3>
                <span className={clsx(`text-[18px]`, subTitleClassName)}>{subTitle}</span>
                {buttonTitle && (<Button className='mt-1 p-0 w-40 ' variant="secondary" size='lg' >{buttonTitle}</Button>)}

            </div>
            {children}

        </>
    )
}

export default DashboardCard