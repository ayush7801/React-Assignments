import React from "react";
import Name from "./Name";

function Navbar(){
    return (
        <div className="navbar">
            <Name/>
            <div className="greet">Namaste World</div>
        </div>
    );
}

export default Navbar;