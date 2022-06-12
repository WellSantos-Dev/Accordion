import { useState } from "react"

export const Question = ({question}) => {
  const [ seeContent, setSeeContent ] = useState(false)

  return (
    <div className="p-4 shadow-lg mb-2 cursor-pointer w-full" onClick={() => setSeeContent(!seeContent)}>
      <h1 className="font-bold text-1xl">{question.title}</h1>
      {seeContent && <p className="pt-7 text-sm transition-all ease-in text-gray-500">{question.content}</p>}
    </div>
  )
}