import { useState } from "react";
import JSONDATA from "./externalData.json";

function SearchQuery() {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <h3>Search for first name:</h3>
            <input type="text" placeholder="Search..." onChange={(event) => {setSearchTerm(event.target.value)}}/>

            {
                /* Using filter method to filter json data */
                JSONDATA.filter((val) => {
                    // return val --> this returns every value.
                    if (searchTerm === "") {
                        return val; // returns every val obj in json data.
                    } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) { // Checks the val obj contains search term
                        return val; // then returns that val obj.
                    }
                }).map((val) => {
                    return (
                        <div key={val.id}>
                            <p>{val.first_name}</p>
                        </div>
                    );
                })
            }
        </>
    );
}

export default SearchQuery;