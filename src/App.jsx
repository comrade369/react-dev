// import { useState } from "react";
import SearchQuery2 from "./SearchQuery2";
// Build search filter in reactjs.
function App() {

    // SMALL SEARCH QUERY.
    // const list = [
    //     "Banana", "Apple", "Orange", "Mango",
    //     "Pineapple", "Watermelon",
    // ];

    // const [filterList, setFilterList] = useState(list);

    // const handleChange = (event) => {
        
    //     if (event.target.value === "") {
    //         setFilterList(list);
    //         return;
    //     }

    //     const filteredValues = list.filter(
    //         (item) => item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    //     );
    //     setFilterList(filteredValues);
    // }

    // return (
    //     <>
    //         <div>
    //             Search: <input type="text" name="query"
    //                 onChange={(event) => handleChange(event)} />
    //         </div>

    //         {
    //             /* Displaying each item in list. */
    //             filterList && 
    //                 filterList.map((item, index) => (
    //                     <div key={index}>
    //                         {item} 
    //                     </div>
    //                 ))
    //         }
            
    //     </>
    // );

    return (
        <>
            <SearchQuery2 />
        </>
    );
}

export default App;