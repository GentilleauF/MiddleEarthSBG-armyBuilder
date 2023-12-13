import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [myData, setMyData]= useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok) {
                throw Error('Could not fetch the data for that ressource');
                //Ici si l'url n'est pas joignable/quil nexiste pas on l'indique grace au msg d'erreur
            }
            return res.json();
        })
        .then(data => {
            setMyData(data);
            setIsLoading(false);
            setError(null);
        })
        .catch(err => {
            console.log(err.message);
            setError(err.message);
            setIsLoading(false);
        })
            
    }, [url] )

    return {myData, isLoading, error};
}
 
export default useFetch;