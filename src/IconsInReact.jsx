// installing icons in react using npm install react-icons --save
// importing icons like this:
import {FaReact} from "react-icons/fa";
import {MdAlarm} from "react-icons/md";
// import icon context to provide all same attributes to every component.
import { IconContext } from "react-icons";

function IconsInReact() {

    return (
        // wrapping icon context component around all icons components like this and pass
        // value a object, this way values of object applies all the components inside it.
        <IconContext.Provider value={{color: "Blue", size: "5rem"}}>
            <>
                {/*place react icons component like this,
                and it has attributes like color, size etc... */}
                <FaReact color="green" size="10rem" /> {/*Inline precedence comes first*/}
                <MdAlarm />
            </>
        </IconContext.Provider>
    );
}

export default IconsInReact;