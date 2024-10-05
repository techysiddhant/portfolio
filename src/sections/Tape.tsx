const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
]
import StarIcon from "@/assets/icons/star.svg"
export const TapeSection = () => {
  return <section className="py-16 lg:py-24 overflow-x-clip">
    <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex flex-none gap-4 py-3">
          {words.map((word, index) =>
          (<div className="inline-flex gap-4 items-center" key={word + index}>
            <span className="text-gray-900 text-sm uppercase font-extrabold">{word}</span>
            <StarIcon className="size-6 text-gray-900 -rotate-12" />
          </div>))}
        </div>
      </div>
    </div>

  </section>;
};
