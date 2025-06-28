'use client'
import React, { useState } from 'react'
import ShadowBox from '@/app/_components/DivCard'
import Questions from './Questions'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'

const Chat = () => {
    const [userInput, setSelectedInput] = useState<string>('');

    return (
        <ShadowBox>
            {/* QUestion List */}
            <div className='h-[50vh]'>
                <Questions selectedQuestion={(question) => setSelectedInput(question)} />
            </div>
            {/* chat */}
            <div className='flex justify-between items-center gap-2'>
                <Input type='text' placeholder='Ask anything' className='h-12' value={userInput} onChange={(e) => setSelectedInput(e.target.value)} />
                <Send className='bg-black text-white rounded-md w-12 h-7 cursor-pointer py-1' />
            </div>
        </ShadowBox>
    )
}

export default Chat