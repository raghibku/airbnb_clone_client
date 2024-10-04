import { useBooking } from "@/context/BookingContext";
import Image from "next/image"
import { useState } from "react"

const locations = [
    {
        country: "USA",
        image: "/images/usa.jpg",
    },
    {
        country: "Canada",
        image: "/images/canada.jpg",
    },
    {
        country: "UK",
        image: "/images/uk.jpg",
    },

]

interface LocationPickerProps {
    country: string;
    setcountry: React.Dispatch<React.SetStateAction<string>>; // The type of setcountry
}

const LocationPicker: React.FC<LocationPickerProps> = ({ country, setcountry }) => {
    

    const handleSelectCountry = (countryValue: string) => {
        setcountry(countryValue)
    };

    return (
        <div className="grid grid-cols-3 gap-3 w-[340px]">
            {
                locations.map((item) => {
                    return (
                        <div onClick={()=>{handleSelectCountry(item.country)}}
                            className="flex flex-col justify-center items-center gap-2 hover:bg-grayBorder p-2 rounded-md">
                            <Image
                                src={item.image}
                                height={200}
                                width={200}
                                className="h-[90px] w-[90px] object-fill rounded-md"
                                alt=""
                            />
                            <h1>{item.country}</h1>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default LocationPicker