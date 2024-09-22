import Fridge from "./Fridge.jsx";
import Preferences from "./Preferences.jsx";
import Trash from "./Trash.jsx";
import './products.css';

function Input() {

    return(
        <>
            <Preferences />
            <Fridge />
            <Trash />
        </>
    );
}

export default Input;