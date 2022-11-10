import React, {useState} from 'react'
import Card from './Card'

function HousesOnSale({houses}){
    const house_components = houses.map(house => {
        return <Card key={house.id} house={house}/>
    })
    console.log("house components: ", house_components)
    
    return (
        <div className="flex flex-wrap">
            {house_components}
        </div>
    )        
}

export default HousesOnSale

