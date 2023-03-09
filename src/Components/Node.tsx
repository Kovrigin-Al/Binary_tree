import { forwardRef } from "react"
import { combineClasses } from "../utils/combineClasses";

type Props = {
  className?: string
  id?: string
  value: number
}
const Node = forwardRef<HTMLDivElement, Props>(({value, className, id}, ref) => {
  return (
    <div ref={ref} className={combineClasses(className || '', "h-16 w-10 border-2 px-6 rounded-full flex justify-center items-center")}>{value}</div>
  )
})
export default Node