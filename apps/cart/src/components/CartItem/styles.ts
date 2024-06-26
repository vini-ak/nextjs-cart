import styled from "styled-components";

export const Card = styled.div`
    background-color: #F4F4F4;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem;
    border-radius: 7px;
    width: 50vw;
    max-width: 500px;
    margin-bottom: 2rem;

    & > .content {
        display: flex;
        flex-direction: column;
        align-items: start;

        & > * {
            margin-bottom: 1rem;
        }
    }

    & > .actions {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        & > * {
            margin-bottom: 1.25rem;
        }
    }
`;