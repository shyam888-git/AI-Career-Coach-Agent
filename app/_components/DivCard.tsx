
import React from 'react';
import clsx from 'clsx';

interface ShadowBoxProps {
    children: React.ReactNode;
    className?: string;
}

const ShadowBox: React.FC<ShadowBoxProps> = ({ children, className }) => {
    return (
        <div className={clsx('p-2 my-2 border border-gray-200 rounded-md', className)}>
            {children}
        </div>
    );
};

export default ShadowBox;
