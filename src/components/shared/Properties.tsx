'use client'
import ResponsiveDiv from "./ResponsiveDiv"
// import properties from "../../assets/data/propertydata.json"
import PropertyCard from "../ui/PropertyCard"

import { useProperty } from "@/context/PropertyContext";


const Properties = () => {

    const {state}=useProperty()
    console.log(state.loading)

    return (
        <ResponsiveDiv>
            <div className="w-full grid grid-cols-4 gap-6 text-sm my-8" >
                {
                    state.loading?<p>Loading</p>:
                    state.properties && state.properties.map((property, index) => <PropertyCard key={index} property={property} />)
                }
            </div>
        </ResponsiveDiv>
    )
}

export default Properties