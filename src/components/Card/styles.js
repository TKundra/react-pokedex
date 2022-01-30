import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Text = styled.span`
    color: black;
`;

const Wrapper = styled.div`
    width: 350px;
    height: 250px;
    margin: 10px;
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);
`;

const NetworkImage = styled.img`
    background-image: url(${props => props.url});

`;

const Bottom = styled.div`
    text-align: center;
    position: relative;
    top: -25px;
    background-color: #E5E4E2;
    padding: 2px;
    cursor: pointer;
`;

const Bar = styled.div`
    width: ${props => props.width};
    height: 20px;
    background-color: ${props => props.color};
`;

export {
    Container, Text, Wrapper, Bottom, Bar, NetworkImage
}