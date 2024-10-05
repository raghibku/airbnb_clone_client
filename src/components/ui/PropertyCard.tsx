import { useBooking } from "@/context/BookingContext";
import Image from "next/image"
import { IoIosStar } from "react-icons/io";

interface Property {
    _id: string;
    property_name: string;
    property_images: string[];
    country_location: string;
    property_location: string;
    vacancy_start: string;
    vacancy_end: string;
    max_adult: number;
    max_baby: number;
    max_pet: number;
    tags: string[];
    type_of_place: string;
    price: number;
    property_type: string;
    rating:number;
}

interface PropertyCardProps {
    property: Property;
}

const PropertyCard:React.FC<PropertyCardProps> = ({ property }) => {
    const {state} = useBooking()

    const { property_name, property_images, property_location, vacancy_start, vacancy_end, price, rating } = property
    return (
        <div className="flex flex-col justify-between items-start ">
            {/* carousel start */}
            <div className="carousel w-full group">
                <div id={property_images[0]} className="carousel-item relative w-full">
                    <Image
                        src={property_images[0]}
                        width={300}
                        height={0}
                        alt={property_name}
                        className="h-[290px] w-[300px] object-cover rounded-md"
                    />
                    <div className="absolute  right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href={`#${property_images[1]}`} className="btn btn-sm btn-circle opacity-0 group-hover:opacity-100">❯</a>
                    </div>
                </div>
                <div id={property_images[1]} className="carousel-item relative w-full">
                    <Image
                        src={property_images[1]}
                        width={300}
                        height={0}
                        alt={property_name}
                        className="h-[290px] w-[300px] object-cover rounded-md"
                    />
                    <div className="absolute left-5  top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href={`#${property_images[0]}`} className="btn btn-sm btn-circle opacity-0 group-hover:opacity-100">❮</a>

                    </div>
                </div>
            </div>
            {/* carousel end */}

            {/* title and ratingg */}
            <div className="flex justify-between items-center w-full">
                <h1 className="font-semibold">{property_name}</h1>
                <div className="flex justify-center items-center gap-1">
                    <IoIosStar />
                    <p>{rating}</p>
                </div>
            </div>
            {/* location */}
            <h2 className="text-softText">{property_location}</h2>
            {/* chk in out */}
            <p className="text-softText">{vacancy_start}-{vacancy_end}</p>
            {/* price */}
            <p><span className="font-semibold">${state.display_before_taxes?price:(price+price*0.15)}</span> night</p>

        </div>
    )
}

export default PropertyCard