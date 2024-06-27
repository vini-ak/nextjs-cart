import styled from "styled-components";

export const Card = styled.div`
    height: 348px;
    width: 240px;
    background-color: #f4f4f4;
    border-radius: 3px;
    box-shadow: 1px 2px #d8d2d2;
    display: flex;
    flex-flow: column nowrap;
    padding: 1rem;
    cursor: pointer;
    transition: ease-out .3s;

    & > img {
        width: 100%;
        align-self: center;
    }
    
    & > .content {
        align-self: flex-start;
        margin-top: 1.5rem;
    }

    & .item-card {
        &-title {
            font-size: 1.25rem;
            font-weight: bolder;
            margin-bottom: .5rem;
        }
        &-price {
            font-size: 1.5rem;
            font-weight: bolder;
            color: #009600;
            &::before {
                content: 'R$';
                padding-right: .3rem;
            }
        }
    }

    & .item-quantity {
        margin-top: .5rem;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    &:hover {
        background-color: #d8d2d2;
        transform: scale(1.01);
    }
`;

export const AddToCartButton = styled.button`
    border: none;
    border-radius: 7px;
    background-color: red;
    color: white;
    height: 64px;
    margin-top: 1rem;
`;

export const InputField = styled.input `
    margin: 0 .5rem;
    width: 50px;
`;

export const InputButton = styled.button`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    cursor: pointer;
    color: white;
    font-size: 1.25rem;

    &.plus {
        background-color: green;
    }

    &.minus {
        background-color: #941b1b;
    }
`;
