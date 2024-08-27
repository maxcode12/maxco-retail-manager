
export class ProductDto {
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
    

    constructor() {
        this.id = 0;
        this.name = '';
        this.description = '';
        this.sku = '';
        this.price = 0;
        this.deliveryTimeSpan = '';
        this.quantity = 0;
        this.imageUrl = '';
        this.isAvailable = false;
        this.isOnSale = false;
        this.categoryId = 0;
        this.userId = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.modifiedAt = new Date();
    }
}   // End of class ProductDto