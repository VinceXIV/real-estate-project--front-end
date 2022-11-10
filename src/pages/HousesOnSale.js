import React, {useState} from 'react'
import Card from './Card'

function HousesOnSale({houses}){
    console.log("houses: ", houses)
    const house_components = houses.map(house => {
        return <Card key={house.id} house={house}/>
    })
    console.log("house components: ", house_components)
    return (
        <div className="flex w-full justify-around flex-wrap">
            {house_components}
        </div>
    )        
}

export default HousesOnSale

