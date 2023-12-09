import { useState } from "react";

function Accordion() {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <>
            <button onClick={() => handleClick()}>
                {open ? "Close Accordion" : "Open Accordion"}
            </button>
            {
                open && <p>Accordion is open, it shows inner details.</p>
            }

        </>
    );
}

export default Accordion;