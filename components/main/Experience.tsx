import ExpItem from "../sub/ExpItem"
import { experience_data } from "@/constants/index"
const Experience = () => {
 return (
  <section className="px-10 py-10 md:my-28 h-full" id="about">
   <div className="max-w-[1000px] w-full m-auto flex flex-wrap relative before:absolute before:w-1 before:h-full before:bg-slate-600 before:left-[7px] md:before:left-[calc(50%-1px)]">
    {
     experience_data.map((item, index) => (
      <ExpItem
       key={index}
       duration={item.duration}
       institution={item.institution}
       role={item.role}
       side={index % 2 === 0 ? 'left' : 'right'}
      />
     ))
    }
   </div>
  </section>
 )
}

export default Experience