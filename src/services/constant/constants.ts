import { METHODS } from "http";

export const Constant = {
    API_END_POINT: 'https://localhost:7064/api/Auth/',
    API_END_POINT_PRODUCT: 'https://localhost:7064/api/Product/',
    API_END_POINT_CATEGORY: 'https://localhost:7064/api/Category/',
    API_END_POINT_INVENTORY: 'https://localhost:7064/api/Inventory/',
    API_END_POINT_SALES: 'https://localhost:7064/api/Sale/',
    API_END_POINT_PURCHASE: 'https://localhost:7064/api/Purchase/',
    API_END_POINT_SALESDETAILS: 'https://localhost:7064/api/SalesDetail/',
    API_END_POINT_PURCHASEDETAILS: 'https://localhost:7064/api/PurchaseDetails/',
    API_END_POINT_USERS: 'https://localhost:7064/api/User/',



    METHODS: {
        GET_ALL_PRODUCT: 'GetAllProduct',
        GET_ALL_PRODUCT_BY_ID: 'GetAllProductById',
        GET_ALL_CATEGORY: 'GetAllCategory',
        GET_ALL_CATEGORY_BY_ID: 'GetAllCategoryById',
        GET_ALL_INVENTORY: 'GetAllInventory',
        GET_ALL_INVENTORY_BY_ID: 'GetAllInventoryById',
        GET_ALL_SALES: 'GetAllSales',
        GET_ALL_SALES_BY_ID: 'GetAllSalesById',
        GET_ALL_PURCHASE: 'GetAllPurchase',
        GET_ALL_PURCHASE_BY_ID: 'GetAllPurchaseById',
        GET_ALL_SALESDETAILS: 'GetAllSalesDetails',
        GET_ALL_SALESDETAILS_BY_ID: 'GetAllSalesDetailsById',
        GET_ALL_PURCHASEDETAILS: 'GetAllPurchaseDetails',
        
        GET_ALL_USERS: 'GetAllUser',


        POST_Create_PRODUCT: 'CreateProduct',
        POST_Create_CATEGORY: 'CreateCategory',
        POST_Create_INVENTORY: 'CreateInventory',
        POST_Create_SALES: 'CreateSale',
        POST_Create_PURCHASE: 'CreatePurchase',
        POST_Create_SALESDETAILS: 'CreateSalesDetail',
        POST_Create_PURCHASEDETAILS: 'CreatePurchaseDetails',
        POST_Create_USER: 'CreateUser',

        PUT_UPDATE_PRODUCT: 'UpdateProduct',
        PUT_UPDATE_CATEGORY: 'UpdateCategory',
        PUT_UPDATE_INVENTORY: 'UpdateInventory',
        PUT_UPDATE_SALES: 'UpdateSale',
        DELETE_PRODUCT: 'DeleteProduct',
    }
}