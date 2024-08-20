export interface Product{
    
    id: number;
name: string;
description: string;
sku: string;
price: number;
deliveryTimeSpan: string;
quantity: number;
imageUrl: string;
isAvailable: boolean;
isOnSale: boolean;
categoryId: number;
userId: string;
createdAt: Date;
updatedAt: Date;
modifiedAt: Date;
}

