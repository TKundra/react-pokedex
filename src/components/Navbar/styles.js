import styled from 'styled-components';
import { mobile } from '../../responsive';

const Container = styled.div`
    padding: 50px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({flexDirection: "column", padding: "20px", paddingTop: "50px"})};
`;

const SearchBox = styled.div`
    display: flex;
    flex: 1;
    ${mobile({paddingBottom: "20px"})};
`;

const Button = styled.button`
    width: 80px;
    height: 50px;
    padding: 10px;
    border-radius: 10px;
    margin-left: 10px;
    background-color: #008CBA;
    border: none;
    color: white;
    cursor: pointer;
    &:hover{
        background-color: #098DAB;
    }
`;

const SearchBar = styled.input`
    type: text;
    border-radius: 10px;
    border: none;
    resize: horizontal;
    border: 1px solid #ccc;
    padding: 15px 20px;
    width: 70%;
`;

const OptionBox = styled.div`
    width: 20%
`;

export {
    Container, SearchBar, OptionBox, SearchBox, Button
}