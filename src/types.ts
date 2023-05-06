export interface Product {
    ProductId: number;
    id: string;
    name: string;
    thumbnailPath: string;
    imagePath: string;
    createdDate: string;
    modifiedDate: string;
    importedFrom: string;
}

export interface IGetProductsParams {
    to?: number;
    from?: number;
    searchString?: string;
}