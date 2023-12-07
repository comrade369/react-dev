import { useState } from "react";
import externalData from "./externalData.json";

function SearchQuery2() {

    const [data, setData] = useState(externalData);

    const handleSearch = (event) => {

        if (event.target.value === "") {
            setData(externalData);
        }

        const filterData = externalData.filter((val) => {
            if (val.email.toLowerCase().includes(event.target.value.toLowerCase())) {
                return val;
            }
        });

        setData(filterData);
    }

    return (
        <>
            <h4>Search LastName:</h4>
            <input type="text" placeholder="Search..." onChange={(event) => handleSearch(event)} />

            {
                data.map((val) => {
                    return (
                        <p key={val.id}>{val.email}</p>
                    );
                })
            }
        </>
    );

}

export default SearchQuery2;