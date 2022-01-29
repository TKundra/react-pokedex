import styled from 'styled-components';

const Container = styled.div`
    padding: 50px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    Container, SearchBar, OptionBox
}