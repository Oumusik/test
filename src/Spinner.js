import React from "react";

const Spinner = () =>{
    return(
        <div className="ui active dimmer">
            <div className="ui text loader">
                Ładowanie danych...
            </div>
        </div>
    )
}

export default Spinner