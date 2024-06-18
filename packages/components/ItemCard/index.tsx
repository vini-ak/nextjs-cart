import { Product } from "../../domain";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import * as Styles from "./styles";
import React from "react";

interface ItemCardProps {
    product: Product;
    addToCart(product: Product, quantity: number): void;
}

const inter = Inter({ subsets: ["latin"] });

export const ItemCard = ({ addToCart, product }: ItemCardProps) => {
    const [itemQuantity, setItemQuantity] = useState<number>(0); 
    const [isClient, setIsClient] = useState(false)
    
    useEffect(() => {
        // fixing hydration error
        setIsClient(true)
    }, [])

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
        <Styles.Card className={inter.className}>
            {
                isClient && <>
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
                        <p className="item-card-price">{product.price.toFixed(2).replace('.', ',')}</p>
                    </div>

                    <div className="item-quantity">
                        <Styles.InputButton className="minus" disabled={itemQuantity === 0} 
                            onClick={() => onChangeQuantity('remove')}><span>-</span></Styles.InputButton>
                        <Styles.InputField value={itemQuantity} onChange={(e) => { onChangeQuantity('add') }} type="number" name="qtd"/>
                        <Styles.InputButton className="plus"
                            onClick={() => onChangeQuantity('add')}><span>+</span></Styles.InputButton>
                    </div>

                    <Styles.AddToCartButton className="add-to-cart" onClick={onAddToCart}>Adicionar ao carrinho</Styles.AddToCartButton>
                </>
            }
        </Styles.Card>
    )
}