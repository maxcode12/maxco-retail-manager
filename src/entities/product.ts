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
    isPOS: boolean;
    isOnline: boolean;
    locationId: number;
    categoryId: number;
    categoryName: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    modifiedAt: Date;
}