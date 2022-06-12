import { ContentAccordion } from "./ContentAccordion"
import { HeaderAccordion } from "./HeaderAccordion"

export const Accordion = () => {
  return (
    <div className="p-16 bg-white rounded-md shadow-xl">
      <HeaderAccordion />
      <ContentAccordion />
    </div>
  )
}