import React, { Fragment } from "react";
import LanguageIcon from "./LanguageIcon"
import { twMerge } from "tailwind-merge";

const ToolboxItems = ({ items, className, itemsWrapperClassName }: { items: { title: string; iconType: React.ElementType }[] | undefined; className?: string; itemsWrapperClassName?: string }) => {
    return (
        <div className={twMerge("flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
            <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemsWrapperClassName)}>
                {[...new Array(2)].fill(0).map((_, idx) => (
                    <Fragment key={idx}>
                        {
                            items?.map((item, ind) => <div className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg" key={ind}>
                                <LanguageIcon component={item?.iconType} />
                                <span className="font-semibold">{item?.title}</span>
                            </div>)
                        }
                    </Fragment>
                ))}

            </div>
        </div>
    )
}

export default ToolboxItems