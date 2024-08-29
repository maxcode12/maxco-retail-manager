import { Expose } from 'class-transformer';
import { Equals } from 'class-validator';

export class Product{
    @Expose()
    _id!: number;
    createdAt!: Date;
    modifiedAt!: Date;
    name!: string;
    description?: string;
    sku!: string;
    price?: number;
    deliveryTimeSpan?: string;
    imageUrl?: string;

    @Expose()
    @Equals(true)
    isAvailable?: boolean;

    @Expose()
    @Equals(true)
    isOnSale?: boolean;

    @Expose()
    @Equals(true)
    isSellOnPOS?: boolean;
    quantity!: number;

    @Expose()
    @Equals(true)
    isSellOnline?: boolean;
    userId!: string;
    categoryId!: number;
    categoryName!: string;
    locationId!: number;
}

