import styled from "styled-components";

export const Section = styled.section`
    background-color: #F4F4F4;
    border-radius: 15px;
    width: 30vw;
    max-width: 420px;
    padding: 1.5rem 2rem;
    max-height: 600px;
    height: 70vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: start;
    justify-content: center;
    position: fixed;
    right: 2rem;
    top: 2rem;

    * > * {
        margin-bottom: 1.125rem;
    }

    & > .price {
        font-weight: bolder;
        font-size: 2rem;
    }
`;