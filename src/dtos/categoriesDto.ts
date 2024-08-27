
export class CategoryDto {
    id: number;
    name: string;
    description: string;
    isDeleted: boolean;
    createdDate: Date;
    updatedDate: Date;
    createdBy: string;
    updatedBy: string;

    constructor() {
        this.id = 0;
        this.name = '';
        this.description = '';
        this.isDeleted = false;
        this.createdDate = new Date();
        this.updatedDate = new Date();
        this.createdBy = '';
        this.updatedBy = '';
    }
}