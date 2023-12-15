import React, { useEffect, useState, memo } from "react";

function HandleApi() {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);


    const fetchData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            const result = await response.json();
            console.log(result);
            setData(result);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <>
            <h1>Data from API</h1>
            <ul>
                {Object.entries(data).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}:</strong> {value.toString()}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default memo(HandleApi);
