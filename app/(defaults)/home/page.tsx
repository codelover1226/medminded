import { Metadata } from 'next';
import React from 'react';
import IconEditNote from '@/components/icon/home/icon-edit-note';
import IconBook4 from '@/components/icon/home/icon-book4';

export const metadata: Metadata = {
    title: 'Home',
};

const Page = () => {
    return (
        <div>
            <div className='h-[20vh]'></div>
            <div className='text-4xl mx-auto w-fit'>Advancing medical intelligence</div>
            <div className='max-w-[940px] flex justify-between mx-auto'>
                <div className='bg-[#F0EFED] flex items-center justify-between gap-1 p-1 rounded-md'>
                    <IconBook4/> Docs Search
                </div>
                <div className='bg-[#F0EFED] flex items-center justify-between gap-1 p-1 rounded-md'>
                    <IconEditNote/> Length
                </div>
            </div>
        </div>
    );
};

export default Page;
