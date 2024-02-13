import {
 RxGithubLogo,
 RxInstagramLogo,
 RxTwitterLogo,
 RxLinkedinLogo,
} from "react-icons/rx";
import Link from 'next/link';
const Footer = () => {
 return (
  <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-50 relative">
   <div className="w-full flex flex-col items-center justify-center m-auto">
    <div className="flex items-center justify-center gap-4 my-2">
     <Link href='https://www.linkedin.com/in/techysiddhant/' className=" block ">
      <RxLinkedinLogo size={32} className=" hover:text-[#6ee7b7] hover:scale-110 transition-all ease-in-out duration-300" />
     </Link>
     <Link href='https://twitter.com/Techysiddhant'>
      <RxTwitterLogo size={32} className=" hover:text-[#6ee7b7] hover:scale-110 transition-all ease-in-out duration-300" />
     </Link>
     <Link href='https://www.instagram.com/techysiddhant/'>
      <RxInstagramLogo size={32} className=" hover:text-[#6ee7b7] hover:scale-110 transition-all ease-in-out duration-300" />
     </Link>
     <Link href='https://github.com/techysiddhant'>
      <RxGithubLogo size={32} className=" hover:text-[#6ee7b7] hover:scale-110 transition-all ease-in-out duration-300" />
     </Link>
    </div>
    <div className="mb-[20px] text-[15px] text-center">
     &copy; Siddhant Jain 2023 Inc. All rights reserved
    </div>
   </div>
  </div>
 )
}

export default Footer