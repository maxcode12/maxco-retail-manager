
export class InventoryDto {
    
    id: number;
    productId: number;
    quantity: number;
    createdDate: Date;
    updatedDate: Date;
    createdBy: string;
    updatedBy: string;

    constructor() {
        this.id = 0;
        this.productId = 0;
        this.quantity = 0;
        this.createdDate = new Date();
        this.updatedDate = new Date();
        this.createdBy = '';
        this.updatedBy = '';
    }
}