import styled from "styled-components";

export default function TabButton({children, tabActive, onClick}){  
    return (
        <Button onClick={onClick} tabactive={tabActive}>{children}</Button>
    )
}

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    background-color:${(props)=> props.tabactive? "#388E3C":"#E0E0E0"};
    color: ${(props)=> props.tabactive? "white":"#333"};
    box-shadow: ${(props)=> props.tabactive? "0 2px 5px rgba(0, 0, 0, 0.2)":"none"};
`;