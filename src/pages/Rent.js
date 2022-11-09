import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Card from './Card';

function Rent() {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/houses")
            .then((r) => r.json())
            .then((data) => setHouses(data));
    }, [])
    console.log(houses)

    return (
        <div>
            <h1>Rental Listings</h1>
            <ul>
                Looking for a House to Rent? Search here for your taste...
                <div className="search">
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        label="Search"
                    />
                </div>
            </ul>
            <div>
                <div>
                    <h1>Popular Houses</h1>
                    {houses.map((house) =>
                        <Card house={house} key={house.id} />
                    )}
                </div>
            </div>

        </div>

    );
}
export default Rent;