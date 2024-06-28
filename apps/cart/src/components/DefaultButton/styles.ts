import styled from "styled-components";
import { ButtonStyleProps, Size } from "./types";

const setWidth = (size?: Size) => {
    switch (size) {
        case 'sm':
            return '42px';
        case "lg":
            return '80px';
        case "xg":
            return '120px';
        case "md":
        default:
            return '58px';
    }
}

const setPadding = (size?: Size) => {
    return size === "lg" || size === "xg"
        ? "1.5rem 3rem" 
        : ".75rem 1.5rem";
}

export const Button = styled.button<ButtonStyleProps>`
    border: none;
    box-direction: none;
    border-radius: 5px;
    width: ${props => setWidth(props?.$size)};
    background-color: ${props => props?.$bgColor ?? 'red'};
    padding: ${props => setPadding(props?.$size)};
    color: ${props => props.$color ?? 'white'};
`;