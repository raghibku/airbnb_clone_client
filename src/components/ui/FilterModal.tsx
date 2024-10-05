import {  useState } from "react"
import PriceRangeSlider from "./PriceRangeVisuals"
import { useBooking } from "@/context/BookingContext"

const placeTypes = [
    {
        id: 1,
        name: "Any Type",
        tag: "",
    },
    {
        id: 2,
        name: "Room",
        tag: "room",
    },
    {
        id: 3,
        name: "Entire Home",
        tag: "entire_home"
    }
]
// setType_of_place(item.tag)
const FilterModal = () => {
    const  {state,dispatch}=useBooking()

    const [type_of_place, setType_of_place] = useState("")
    const [values, setValues] = useState([0, 10000]);

    const handleShow = () => {
        dispatch({ type: "SET_TYPE_OF_PLACE", payload: type_of_place });
        dispatch({ type: "SET_MIN_PRICE", payload: values[0] });
        dispatch({ type: "SET_MAX_PRICE", payload: values[1] });
        
    }

    return (
        <div className="w-full h-full overflow-y-auto text-primaryText relative">
            <div className="w-full flex flex-col justify-between items-start p-4 gap-4">
                {/* Type of Place */}
                <div className="w-full flex flex-col justify-between items-start gap-4 ">
                    <h1 className="font-semibold text-xl">Type of Place</h1>
                    <div className="grid grid-cols-3 p-1 border-grayBorder gap-1">
                        {/* any type */}
                        {
                            placeTypes.map((item, index) => {
                                return (
                                    <button onClick={() => { setType_of_place(item.tag) }} key={index} className={`${type_of_place == item.tag ? "border-black" : "border-grayBorder"} border-2 flex justify-center items-center px-4 py-2 `}
                                    >
                                        {item.name}
                                    </button>
                                )
                            })
                        }

                    </div>
                </div>
                {/* price range  */}
                <div className="w-full flex flex-col justify-between items-start gap-2">
                    <h1 className="font-semibold text-xl">Price Range</h1>
                    <PriceRangeSlider values={values} setValues={setValues} />
                </div>



            </div>
            <button onClick={handleShow} className="absolute bottom-4 right-4 btn bg-[#222222] text-white font-semibold text-lg">Show</button>
        </div>
    )
}

export default FilterModal