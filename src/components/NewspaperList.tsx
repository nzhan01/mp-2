import styled from "styled-components";
import {Newspaper} from "../interfaces/Newspaper.ts";


const FullDiv = styled.div`
    display: flex;
    flex-direction: column;
    
    `;

const PaperDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
        
    max-width: 60%;
    padding: 2%;
    margin: 1%;
    border: 5px cornflowerblue solid;
    font-family: "Times New Roman", Helvetica, sans-serif;
    text-align: center;
    background-color: wheat;
    font-size: 0.75vw;
    `;
const TitleDiv = styled.div`
    text-align: center;
    font-size: 2vw;
`;


export default function NewspaperList(props: {data:Newspaper[] }) {

    return(
        <FullDiv>
            <TitleDiv>
                <h1>Newspapers </h1>
            </TitleDiv>
            {
            props.data.map((paper:Newspaper) =>
                <PaperDiv key = {paper.state}>
                    <h1>{paper.title}</h1>
                    <h1>State: {paper.state}</h1>
                    <h1>lccn: {paper.lccn}</h1>
                    <h1>URL: {paper.url}</h1>
                </PaperDiv>


             )
                }
        </FullDiv>


        );
}