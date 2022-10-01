import { createContext, useContext } from "react";
import { useState } from "react";

let context = createContext();

function Context({children}){
    
    return(
        <>
            {children}
        </>
    )
}