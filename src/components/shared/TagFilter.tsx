'use client'
import Image from "next/image"
import alltags from "../../assets/data/alltagdata.json"
import { RxMixerHorizontal } from "react-icons/rx";
import { useBooking } from "@/context/BookingContext";
import FilterModal from "../ui/FilterModal";
import { useEffect, useState } from "react";
import { useRef } from 'react';

const TagFilter = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const { state, dispatch } = useBooking();
    const [isChecked, setIsChecked] = useState(false);
    const handleTagClick = (tagValue: string) => {
        dispatch({ type: "SET_TAG", payload: tagValue });
    };
    const handleButtonClick = () => {
        setIsChecked(!isChecked);
    };
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -200, // Scroll 200px to the left
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 200, // Scroll 200px to the right
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        dispatch({ type: "SET_DISPLAY_BEFORE_TAXES", payload: isChecked });
    }, [isChecked])

    return (
        <div className=" flex justify-between items-center gap-4 text-softText">
            {/* tag */}
            <div className="relative flex justify-center items-center w-[70%]">
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 border border-grayBorder p-2 h-10 w-10 rounded-full  text-sm"
                >
                    &lt; {/* Left Arrow */}
                </button>
                <div ref={scrollContainerRef} className=" flex justify-center items-center w-[90%] scroll-smooth scrollbar-hide overflow-x-hidden">

                    <div className="w-full flex justify-between items-center px-6 py-4 gap-8 text-xs  ">
                        {
                            alltags.map((item,index) => {
                                return (
                                    <div key={index} onClick={() => { handleTagClick(item.title_tag) }} className={` p-2 flex flex-col justify-center items-center gap-1 text-nowrap hover:shadow-md hover:text-primaryText ${item.title_tag == state.tagg ? "border-b-2 border-gray-800" : ""}
                                `}>
                                        {/* ${item.title_tag == state.tagg ? "drop-shadow-customTag" : "" */}
                                        <Image
                                            src={item.image_src}
                                            height={36}
                                            width={36}
                                            alt={item.title_tag}
                                            className="h-9 w-9"
                                        />
                                        <h1 className={`${item.title_tag == state.tagg ? "border-b-2 text-primaryText" : "text-softText"}`}>{item.title}</h1>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 border border-grayBorder p-2 rounded-full h-10 w-10 text-sm"
                >
                    &gt; {/* Right Arrow */}
                </button>
            </div>


            {/* filter */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <div className="w-[30%] flex justify-center items-center gap-4">
                {/* <button className="btn btn-outline hover:bg-white text-primaryText hover:text-primaryText border-grayBorder flex justify-center items-center gap-2" onClick={() => document.getElementById('my_modal_3').showModal()}><RxMixerHorizontal /> Filter</button> */}
                {/* nw */}
                <button
                    className="btn btn-outline hover:bg-white text-primaryText hover:text-primaryText border-grayBorder flex justify-center items-center gap-2"
                    onClick={() => {
                        const modal = document.getElementById('my_modal_3') as HTMLDialogElement | null;
                        if (modal) {
                            modal.showModal(); // Only call showModal if modal exists and is of type HTMLDialogElement
                        }
                    }}
                >
                    <RxMixerHorizontal /> Filter
                </button>
                {/* nw */}
                <dialog id="my_modal_3" className="modal ">
                    <div className="modal-box w-[40vw] h-[75vh]">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <FilterModal />
                    </div>
                </dialog>
                <button
                    className="btn btn-outline hover:bg-white text-primaryText hover:text-primaryText border-grayBorder flex justify-center items-center gap-2"
                    onClick={handleButtonClick}
                >
                    Display total before taxes
                    <input
                        type="checkbox"
                        className="toggle toggle-sm"
                        checked={isChecked}
                        onChange={handleButtonClick} // This keeps it in sync with the button click
                    />
                </button>            </div>

        </div>
    )
}

export default TagFilter