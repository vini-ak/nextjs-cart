import { Cart } from "@/domain/cart";

export class CartService {
    API_URL: string;

    constructor() {
        this.API_URL = process.env.API_URL!;
    }

    public async addToCart(item: any) {
        const res = await fetch(`${this.API_URL}/cart/item`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        return res.json();
    }

    public async getCart(): Promise<Cart> {
        const res = await fetch(`${this.API_URL}/cart`);
        return res.json();
    }

    public async removeFromCart(id: string) {
        const res = await fetch(`${this.API_URL}/cart/item/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res.json();
    }
}