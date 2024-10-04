'use client'
import Image from "next/image"
import alltags from "../../assets/data/alltagdata.json"
import { RxMixerHorizontal } from "react-icons/rx";
import { useBooking } from "@/context/BookingContext";

const TagFilter = () => {
    const { state, dispatch } = useBooking();
    
    const handleTagClick = (tagValue: string) => {
        dispatch({ type: "SET_TAG", payload: tagValue });
    };

    return (
        <div className="flex justify-between items-center gap-4 text-softText">
            {/* tag */}
            <div className="flex justify-center items-center w-[70%] overflow-auto">
                <div className="w-full flex justify-between items-center px-6 py-4 gap-8 text-xs">
                    {
                        alltags.map((item) => {
                            return (
                                <div onClick={()=>{handleTagClick(item.title_tag)}} className={` p-2 flex flex-col justify-center items-center gap-1 text-nowrap hover:shadow-md hover:text-primaryText ${item.title_tag == state.tagg ? "border-b-2 border-gray-800" : ""}
                                `}>
                                 {/* ${item.title_tag == state.tagg ? "drop-shadow-customTag" : "" */}
                                    <Image
                                        src={item.image_src}
                                        height={36}
                                        width={36}
                                        alt={item.title_tag}
                                        className="h-9 w-9"
                                    />
                                    <h1 >{item.title}</h1>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* filter */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <div className="w-[30%] flex justify-center items-center gap-4">
                <button className="btn btn-outline hover:bg-white text-primaryText hover:text-primaryText border-grayBorder flex justify-center items-center gap-2" onClick={() => document.getElementById('my_modal_3').showModal()}><RxMixerHorizontal /> Filter</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click on ✕ button to close</p>
                    </div>
                </dialog>
                <button className="btn btn-outline hover:bg-white text-primaryText hover:text-primaryText border-grayBorder flex justify-center items-center gap-2" > Display total before taxes <input type="checkbox" className="toggle toggle-sm" /> </button>
            </div>

        </div>
    )
}

export default TagFilter