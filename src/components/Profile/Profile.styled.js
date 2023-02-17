import styled from 'styled-components';

export const Card = styled.div`
width: 300px;
height: 500px;
border: 2px solid black;
margin-left: auto;
margin-right: auto;
border-radius: 3px;
`;

export const Description = styled.div`
width: 100%;
height: 400px;
border: 2px solid black;
text-align: center;
padding: 25px;
`;

export const Img = styled.img`
display: block;
width: 100%;
height: auto;
margin: 0;
`;

export const CardName = styled.p`
color: black;
font-size: medium;
font-weight: 500;
`;

export const CardTag = styled.p`
color: gray;
font-size: medium;
font-weight: 400;
`;

export const CardLocation = styled.p`
color: gray;
font-size: medium;
font-weight: 400;
`;

export const StatsList = styled.ul`
list-style-type: none;
display: flex;
`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
margin: 0;
border: 1px solid black;
height: 100%;
background-color: gray;
`;