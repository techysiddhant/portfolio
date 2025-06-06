import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import Link from "next/link";
export const ContactSection = () => {
  return <section className="py-16 pt-12 lg:py-24 lg:pt-20">
    <div className="container mx-auto">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative md:text-left overflow-hidden z-0">
        <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl">Let&apos;s build something incredible together</h2>
            <p className="text-sm mt-2 md:text-base">Ready to turn your vision into reality? Get in touch, and let&apos;s explore how I can help bring your project to life.</p>
          </div>
          <div>
            <Link href="/contact" className="text-white w-max border border-gray-900 bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8">
              <span className="font-semibold">Contact Me</span>
              <ArrowUpRightIcon className="size-4" />
            </Link>
          </div>
        </div>

      </div>


    </div>

  </section >;
};
