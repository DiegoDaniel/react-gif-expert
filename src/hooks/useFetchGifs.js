import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getNewImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    }

    useEffect( () => {
        getNewImages();
    }, [] ) //Al dejar vacio el array de dependencias, lo que esté adentro solo se 
    

    return {
        images,
        isLoading,
    }
}
