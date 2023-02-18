import styled from 'styled-components';

export const Card = styled.section`
width: 350px;
height: 160px;
margin-left: auto;
margin-right: auto;
border-radius: 6px;
display: flex;
flex-direction: column;
background-color: #ffffff;
text-align: center;
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`;

export const Title = styled.h2`
height: 100px;
margin: 0;
margin-top: 5%;
text-shadow: 7px 5px 3px rgba(0,0,0,0.33)
`;

export const StatsList = styled.ul`
list-style-type: none;
display: flex;
margin: 0;
height: 100%;
width: 100%;
padding: 0;
border-bottom-right-radius: 6px;
border-bottom-left-radius: 6px;
 color: #ffffff;
`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0;
height: 100%;
width: 100%;
border-top-right-radius: 5px;
border-top-left-radius: 2px;

&:not(:last-child){
    box-shadow: 19px 4px 28px -8px rgba(0,0,0,0.89);
}
&:first-child {
    border-bottom-left-radius: 6px;
    background-color: #4fc4f7;
    z-index: 4;
}
&:nth-child(2){
    background-color: #a43cf2;
    z-index: 3;
}
&:nth-child(3){
    background-color: #4ab04c;
    z-index: 2;
}
&:nth-child(4){
    background-color: #e54c68;
    z-index:1;
}
&:last-child {
    border-bottom-right-radius: 6px;
    background-color: #21b8c5;
}
& span:last-child{
    margin-top: 6px;
    font-size: 18px;
    font-weight: 700;
}
`;