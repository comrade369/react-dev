import { useState } from "react";
import externalData from "./externalData.json";

function PersonalInfo() {

    const [data, setData] = useState(externalData);

    return (
        <>
            {
                data.map((obj) => {
                    return (
                        <div 
                            style={
                                {
                                    border: `2px solid black`,
                                    textAlign: `center`,
                                    margin: `10px`,
                                
                                }
                            } 
                            key={obj.id}>
                            <h3>Full Name: <em>{obj.first_name} {obj.last_name}</em></h3>
                            <h4>Email: <em>{obj.email}</em></h4>
                            <h4>Sex: <em>{obj.gender}</em></h4>
                            <h5>Address: <em>{obj.ip_address}</em></h5>
                        </div>
                    );
                })
            }
        </>
    );

}

export default PersonalInfo;