import { useState, useEffect } from 'react'

import styled from "styled-components";
import {Newspaper} from "./interfaces/Newspaper.ts"
import NewspaperList from "./components/NewspaperList.tsx";


const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    
`;


export default function App() {

    const[data, setData] = useState<Newspaper[]>([]);

    useEffect(()=> {

        async function fetchData(){
            const rawData = await fetch("https://chroniclingamerica.loc.gov/newspapers.json");
            const {newspapers}: {newspapers:Newspaper[]} = await rawData.json();
            setData(newspapers);
            console.log("these are the newspapers: " + data);

        }
        fetchData()
            .then(() => console.log("successfully fetched data"))
            .catch((e: Error)=> console.log("this was the error " +e));
        }, [data.length]);


    return (
        <ParentDiv>
            <NewspaperList data={data}/>
        </ParentDiv>

    )
}


