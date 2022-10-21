import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

let Context = createContext();

function Provider({children}){
    let notifications = [
        {
            id: 1,
            username: 'Rufet Nuriyev',
            image: 'avatar-angela-gray.webp',
            move: 'followed you',
            note: 'Chess club',
            date: '5m ago',
            readable: false,
            message: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil voluptates necessitatibus accusantium numquam, assumenda aliquid consectetur. Eaque porro sunt vero, ad tempora excepturi eligendi quo quae aut nobis minima? Debitis'
        },
        {
            id: 2,
            username: 'Muxtar Bayramov',
            image: 'avatar-jacob-thompson.webp',
            move: 'followed you',
            note: 'Chess club',
            date: '5m ago',
            readable: true,
            message: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil voluptates necessitatibus accusantium numquam, assumenda aliquid consectetur. Eaque porro sunt vero, ad tempora excepturi eligendi quo quae aut nobis minima? Debitis'
        },
        {
            id: 3,
            username: 'Aysel Quliyeva',
            image: 'avatar-nathan-peterson.webp',
            move: 'followed you',
            note: 'Chess club',
            date: '5m ago',
            readable: true,
            message: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil voluptates necessitatibus accusantium numquam, assumenda aliquid consectetur. Eaque porro sunt vero, ad tempora excepturi eligendi quo quae aut nobis minima? Debitis'
        },
        {
          id: 4,
          username: 'Aysel Quliyeva',
          image: 'avatar-nathan-peterson.webp',
          move: 'followed you',
          note: 'Chess club',
          date: '5m ago',
          readable: true,
          message: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil voluptates necessitatibus accusantium numquam, assumenda aliquid consectetur. Eaque porro sunt vero, ad tempora excepturi eligendi quo quae aut nobis minima? Debitis'
      }
    ]

    let [data, setData] = useState([])


    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/').then(response => response.json()).then(data => {
                setData(data);
            });

    }, [])

    return(
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )

}

export {Context};
export default Provider;