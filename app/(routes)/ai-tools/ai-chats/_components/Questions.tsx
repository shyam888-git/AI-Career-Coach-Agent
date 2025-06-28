import React from 'react'

interface Props{
    selectedQuestion:(question:string)=> any;
}
export const questionList = [
    "What skills do i need for front-end role ?",
    "How do i switch career to data analyst ?"
]

const Questions = ({selectedQuestion}:Props) => {
    return (
        <div>
            <h2 className='font-bold text-black text-xl text-center'>Ask Anything to AI Career Agent</h2>
            {questionList?.map((question, index) => (
                <div key={index} onClick={()=>selectedQuestion(question!)} className='grid justify-center mx-auto items-center my-2 p-4 border hover:border border-gray-400  w-[80%] cursor-pointer'>
                    <span className='text-[18px]'>{question}</span>
                </div>
            ))}
        </div>
    )
}

export default Questions