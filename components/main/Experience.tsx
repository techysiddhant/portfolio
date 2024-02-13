import ExpItem from "../sub/ExpItem"
const data = [
 {
  duration: "Aug 2023 - Dec 2023",
  institution: "Firststore , Kolkata, India",
  role: "Front-End Developer Intern (Remote)",
 },
 {
  duration: "Feb 2023 - Jul 2023",
  institution: "Tutorang, Texas ,USA",
  role: "Web Developer Intern (Remote)",
 },
 {
  duration: "Aug 2019 - Jul 2023",
  institution: "United College of Engineering and Research,Greater Noida",
  role: "B.Tech (Computer Science and Engineering)",
 },
]
const Experience = () => {
 return (
  <section className="px-10 py-10 md:my-28 h-full" id="about">
   <div className="max-w-[1000px] w-full m-auto flex flex-wrap relative before:absolute before:w-1 before:h-full before:bg-slate-600 before:left-[7px] md:before:left-[calc(50%-1px)]">
    {
     data.map((item, index) => (
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