"use client"
import ResponsiveDiv from "./ResponsiveDiv"
import { IoClose, IoSearch } from "react-icons/io5";
import { useState } from 'react';
import DateRangePicker from "../ui/DateRangePicker";
import { format } from 'date-fns';
import LocationPicker from "../ui/LocationPicker";
import Guests from "../ui/Guests";
import { useBooking } from "@/context/BookingContext";

interface DateRange {
    checkIn: Date | null;
    checkOut: Date | null;
}

const FirstFilter = () => {
    // in
    const [checkInDate, setcheckInDate] = useState("")
    const [checkOutDate, setcheckOutDate] = useState("")
    const [country, setcountry] = useState("")
    const [adults, setadults] = useState(0)
    const [children, setchildren] = useState(0)
    const [pets, setpets] = useState(0)

    // out
    const handleSearch = () => {
        dispatch({ type: "SET_CHECKIN_DATE", payload: checkInDate });
        dispatch({ type: "SET_CHECKOUT_DATE", payload: checkOutDate });
        dispatch({ type: "SET_COUNTRY", payload: country });
        dispatch({ type: "SET_ADULTS", payload: adults })
        dispatch({ type: "SET_CHILDREN", payload: children }) 
        dispatch({ type: "SET_PETS", payload: pets }) 
    }

    const [dateText, setdateText] = useState("When Do You Wanna Stay")
    const [isActive, setIsActive] = useState(false);
    const [dates, setDates] = useState<DateRange>({
        checkIn: null,
        checkOut: null,
    });
    const handleActivate = () => {
        setIsActive(true);
    };
    const handleDeactivate = () => {
        
        setIsActive(false);
    };

    const { state, dispatch } = useBooking();

    const handleDateChange = (range: { startDate: Date; endDate: Date }) => {
        setDates({
            checkIn: range.startDate,
            checkOut: range.endDate,
        });
        const newCheckIn = format(range.startDate as Date, 'MM/dd/yyyy')
        const newCheckOut = format(range.endDate as Date, 'MM/dd/yyyy')

        setcheckInDate(newCheckIn)
        setcheckOutDate(newCheckOut)


        setdateText(`${format(range.startDate as Date, 'MM/dd/yyyy')}-${format(range.endDate as Date, 'MM/dd/yyyy')}`)
    };

    const handleClearDate =()=>{
        setcheckInDate("")
        setcheckInDate("")
    }

    return (
        <ResponsiveDiv>
            <div className="w-full flex justify-center items-center text-xs ">
                {/* outer container */}
                <form onClick={handleActivate}
                    onBlur={handleDeactivate} className={`${isActive && "bg-[#EBEBEB]"} flex justify-between items-center px-2 py-2 rounded-full border-grayBorder border `} >
                    {/* location */}
                    <div className="dropdown " >
                        <div tabIndex={0} role="button" className="flex justify-between items-center gap-2 px-6 py-1 rounded-full focus:bg-white hover:bg-btn-hover w-[230px] ">
                            <div className="flex flex-col justify-start items-start w-full">
                                <h1>Where</h1>
                                {
                                    country ? <p>{country}</p> : <input className="bg-transparent text-primaryText focus:outline-none focus:ring-0 border-none text-sm" type="text" name="place" id="" placeholder="search destinations" />
                                }
                            </div>
                            <div onClick={()=>{setcountry("")}} className={`${country==""?"hidden":"flex"} justify-center items-center`}>
                                <IoClose />
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="dropdown-content card card-compact bg-white text-primaryText z-[1] w-auto p-2 shadow">
                            <div className="card-body">
                                <LocationPicker country={country} setcountry={setcountry} />
                            </div>
                        </div>
                    </div>

                    {/* checkin & checkout */}

                    <div className="dropdown">
                        <div tabIndex={1} role="button" className="flex justify-center items-center gap-2 px-6 py-1 rounded-full  hover:bg-btn-hover">
                            <div className="flex flex-col justify-start items-start ">
                                <h1>Check In - Check Out</h1>
                                <p className=" text-softText text-sm">{dateText}</p>
                            </div>
                            <div onClick={handleClearDate} className={`${country==""?"hidden":"flex"} justify-center items-center`}>
                                <IoClose />
                            </div>
                        </div>
                        <div
                            tabIndex={1}
                            className="dropdown-content card card-compact bg-white text-primaryText z-[1] w-auto p-2 shadow">
                            <div className="card-body">
                                <DateRangePicker onDateChange={handleDateChange} />
                            </div>
                        </div>
                    </div>

                    {/* Guests */}

                    <div className="dropdown">
                        <div tabIndex={2} role="button" className="flex justify-between items-center gap-2 px-6 py-1 rounded-full  hover:bg-btn-hover w-[340px] z-10">
                            <div className="flex flex-col justify-start items-start text-nowrap overflow-hiddden">
                                <h1>Who</h1>
                                {
                                    adults > 0 ? <p className=" text-softText text-sm">{adults} Adult, {children} Children,{pets} Pets </p> : <p className=" text-softText text-sm">Add Guests</p>
                                }
                            </div>
                            {/* search */}
                            <div onClick={handleSearch}  className={`${isActive?"w-44":"w-12"} border-none h-12 z-20  flex justify-center items-center  rounded-full bg-primary hover:bg-accent`}>
                                <IoSearch className="text-white size-6" />
                                <p className={`${isActive?"flex":"hidden"} text-lg text-white`}>Search</p>
                            </div>
                        </div>
                        <div
                            tabIndex={2}
                            className="dropdown-content card card-compact bg-white text-primaryText z-[1] w-auto p-2 shadow">
                            <div className="card-body">
                                <Guests adults={adults} setadults={setadults} children={children} setchildren={setchildren} pets={pets} setpets={setpets}/>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </ResponsiveDiv>
    )
}

export default FirstFilter