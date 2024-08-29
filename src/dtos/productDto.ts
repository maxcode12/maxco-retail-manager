import { CurrencyPipe } from '@angular/common';
import { IsNotEmpty, IsString, IsNumber, IsBoolean, IsDate, IsDateString } from 'class-validator';
export class ProductDto {
    _id!: number;
    name!: string;
    description?: string;
    sku?: string;
    price?: number;
    deliveryTimeSpan!: string;
    quantity?: number;
    imageUrl!: string;
    isAvailable?: boolean;
    isOnSale?: boolean;
    categoryId?: number;
    categoryName?: string;
    userId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    modifiedAt?: Date;
    

   
}   // End of class ProductDto