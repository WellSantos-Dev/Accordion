import data from '../data'
import { Question } from './Question'

export const ContentAccordion = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      {
        data.map((question) => {
          return <Question key={question.id} question={question}/>
        })
      }
    </div>
  )
}