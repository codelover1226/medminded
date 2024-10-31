'use client'

import React from 'react';
import IconEditNote from '@/components/icon/home/icon-edit-note';
import IconBook4 from '@/components/icon/home/icon-book4';
import Dropdown from '@/components/dropdown';
import ResponseLength from '@/components/home/response-length';
import QuestionInput from '@/components/home/question-input';
import { IRootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './page.css';

const Page = () => {
    const [responseLength, setResponseLength] = useState<string>('standard');
    const [mode, setMode] = useState<string>('standard');

    return (
        <div>
            <div className='h-[18vh]'></div>
            <div className='text-4xl mx-auto w-fit pb-20'>Advancing medical intelligence</div>
            <div className='max-w-[940px] flex justify-between mx-auto'>
                <div className='text-base px-4 bg-[#F0EFED] hover:bg-[#ECF1FF] cursor-pointer flex items-center justify-between gap-1 p-1 rounded-md'>
                    <IconBook4/> Docs Search
                </div>
                <ResponseLength responseLength={responseLength} setResponseLength={setResponseLength}/>
            </div>
            <div className='max-w-[940px] mx-auto pt-6'>
                <QuestionInput 
                    responseLength={responseLength} setResponseLength={setResponseLength}
                    mode={mode} setMode={setMode}    
                />
            </div>
        </div>
    );
};

export default Page;
