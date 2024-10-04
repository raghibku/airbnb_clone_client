'use client'
import { useBooking } from "@/context/BookingContext"
import { useState } from "react"

interface GuestProps {
    adults: number;
    setadults: React.Dispatch<React.SetStateAction<number>>;
    children: number;
    setchildren: React.Dispatch<React.SetStateAction<number>>;
    pets: number;
    setpets: React.Dispatch<React.SetStateAction<number>>;
}

const Guests: React.FC<GuestProps> = ({ adults, setadults, children, setchildren, pets, setpets }) => {

    // const handleSetAdult = (tagValue: number) => {
    //     dispatch({ type: "SET_ADULTS", payload: tagValue });
    // };
    return (
        <div className="flex flex-col justify-between items-center w-[300px]">
            {/* adults */}
            <div className="flex justify-between items-center w-full py-2 border-b border-grayBorder">
                {/* left */}
                <div className="flex flex-col justify-start items-start gap-2">
                    <h1 className="text-primaryText">Adults</h1>
                    <p className="text-softText text-sm">13 or above</p>
                </div>
                {/* right */}
                <div className="flex justify-center items-center gap-2">
                    <div className={`btn btn-circle btn-sm bg-white  ${adults > 0 ? "" : "btn-disabled"}`} onClick={() => { setadults(adults - 1) }}>-</div>
                    <p>{adults}</p>
                    <div className="btn btn-circle btn-sm bg-white" onClick={() => { setadults(adults + 1) }}>+</div>
                </div>
            </div>
            {/* children */}
            <div className="flex justify-between items-center w-full py-2 border-b border-grayBorder">
                {/* left */}
                <div className="flex flex-col justify-start items-start gap-2">
                    <h1 className="text-primaryText">Children</h1>
                    <p className="text-softText text-sm">below 13</p>
                </div>
                {/* right */}
                <div className="flex justify-center items-center gap-2">
                    <div className={`btn btn-circle btn-sm bg-white  ${children > 0 ? "" : "btn-disabled"}`} onClick={() => { setchildren(children - 1) }}>-</div>
                    <p>{children}</p>
                    <div className="btn btn-circle btn-sm bg-white" onClick={() => { setchildren(children + 1) }}>+</div>
                </div>
            </div>
            {/* pets */}
            <div className="flex justify-between items-center w-full py-2 border-b border-grayBorder">
                {/* left */}
                <div className="flex flex-col justify-start items-start gap-2">
                    <h1 className="text-primaryText">Pets</h1>
                    <p className="text-softText text-sm">below 13</p>
                </div>
                {/* right */}
                <div className="flex justify-center items-center gap-2">
                    <div className={`btn btn-circle btn-sm bg-white   ${pets > 0 ? "" : "btn-disabled"}`} onClick={() => { setpets(pets - 1) }}>-</div>
                    <p>{pets}</p>
                    <div className="btn btn-circle btn-sm bg-white " onClick={() => { setpets(pets + 1) }}>+</div>
                </div>
            </div>

        </div>
    )
}

export default Guests