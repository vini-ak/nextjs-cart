import styled from "styled-components";

export const Wrapper = styled.nav`
    width: 100vw;
    max-width: 100vw;
    height: 4rem;
    z-index: 1;
    display: flex;
    flex-flow: row nowrap;
    box-shadow: 1px 1px #333;
    background-color: green;
    color: white;
    justify-content: flex-end;
    align-items: center;
    padding: .25rem 4rem;
    position: fixed;
    top: 0;

    & > .cart {
        position: relative;
        width: 2.7rem;
        height: 2.7rem;
        background-color: #ffffff;
        border: solid 2px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 2px;
        cursor: pointer;

        & > .total-items {
            position: absolute;
            top: -8px;
            right: -8px;
            background-color: red;
            width: 1.2rem;
            text-align: center;
            font-size: .75rem;
            padding: .25rem;
            border-radius: 50%;
        }
    }
`;
