import React from 'react'

function Locations({houses, displayedHouses}){

    // Get uniq locations
    const location_info = houses.map(house => {
        return {value: house.location}
    })

    const uniq_locations = []

    location_info.forEach(location => {
        if(!uniq_locations.find(uniq_location => uniq_location.value === location.value)){
            uniq_locations.push(location)
        }
    })

    console.log("categories: ", uniq_locations)
    // Use the uniq locations to create options
    const location_options = uniq_locations.map(location => {
        return <option value={location.value} key= {location.id}>{location.value}</option>
    })

    return (
        <>
            {location_options}
        </>
    )
}

export default Locations