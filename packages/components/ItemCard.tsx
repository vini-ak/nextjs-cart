"use client"
import { Product } from "@/domain";
import { useCart } from "@/states/hooks/useCart";
import Image from "next/image";
import { useCallback, useState } from "react";
import styled from "styled-components";

const Card = styled.div`
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

    &:hover {
        background-color: #d8d2d2;
        transform: scale(1.01);
    }
`;

const AddToCartButton = styled.button`
    border: none;
    border-radius: 7px;
    background-color: red;
    color: white;
    height: 64px;
    margin-top: 1rem;

`;
export const ItemCard = (product: Product) => {
    const { addToCart } = useCart();
    const [itemQuantity, setItemQuantity] = useState<number>(0);

    const onAddToCart = useCallback(() => {
        addToCart(product, itemQuantity);
        setItemQuantity(0);
    }, [itemQuantity])

    const onChangeQuantity = useCallback((action: 'add' | 'remove') => {
        if(action === 'add') {
            setItemQuantity(itemQuantity + 1);
        } else if(action === 'remove' && itemQuantity > 0) {
            setItemQuantity(itemQuantity - 1);
        }
    }, [itemQuantity]);

    return (
        <Card>
            <Image 
                src={product.photo} 
                alt={product.name}
                // blurDataURL={undefined}
                // placeholder="blur" 
                width={500}
                height={300}
              />
            <div className="content">
                <p className="item-card-title">{product.name}</p>
                <span className="item-card-price">{product.price.toFixed(2).replace('.', ',')}</span>
            </div>

            <div className="item-quantity">
                <button className="minus" disabled={itemQuantity === 0} 
                    onClick={() => onChangeQuantity('remove')}>-</button>
                <input value={itemQuantity} onChange={(e) => { onChangeQuantity('add') }} type="number" name="qtd"/>
                <button className="plus"
                    onClick={() => onChangeQuantity('add')}>+</button>
            </div>

            <AddToCartButton className="add-to-cart" onClick={onAddToCart}>Adicionar ao carrinho</AddToCartButton>
        </Card>
    )
}