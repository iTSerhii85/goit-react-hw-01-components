import styled from 'styled-components';

export const Table = styled.table`
margin-left: auto;
margin-right: auto;
width: 950px;
box-shadow: 4px 5px 18px 10px rgba(0,0,0,0.75);
`;

export const Thead = styled.thead`
background-color: #00bcd5;
color: #ffffff;
text-shadow: 7px 5px 3px rgba(0,0,0,0.33);
font-size: 25px;
height: 50px;
`;

export const Tbody = styled.tbody`
background-color: #ffffff;
text-align: center;
font-size: 20px;
`;

export const String = styled.tr`
height: 40px;
    &:nth-child(even){
        background-color: #ecf1f4;
    }
`