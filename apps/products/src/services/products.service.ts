import { Product } from 'packages/domain';
import { faker } from '@faker-js/faker';
import { v4 } from 'uuid';

export class ProductsService {
    listProducts = (): Product[] => Array.from({ length: 25 }, (_, i) => this.generateProduct());

    private generateProduct(): Product {
        return {
            _id: v4(),
            name: faker.commerce.product(),
            price: Number(faker.commerce.price({min: 59.00, max: 9999.99})),
            photo: faker.image.url()
        }
    }
}