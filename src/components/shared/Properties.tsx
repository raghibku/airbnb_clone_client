'use client'
import ResponsiveDiv from "./ResponsiveDiv"
// import properties from "../../assets/data/propertydata.json"
import PropertyCard from "../ui/PropertyCard"

import { useProperty } from "@/context/PropertyContext";
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

const Properties = () => {

    const {state}=useProperty()
    console.log(state.loading)

    return (
        <ResponsiveDiv>
            <div className="w-full grid grid-cols-4 gap-6 text-sm my-8" >
                {
                    state.loading?<p>Loading</p>:
                    state.properties && state.properties.map((property:Property) => <PropertyCard key={property._id} property={property} />)
                }
            </div>
        </ResponsiveDiv>
    )
}

export default Properties