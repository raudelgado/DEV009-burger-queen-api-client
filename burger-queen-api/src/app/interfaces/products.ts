export interface ProductsList {
    accessToken: string;
    products: {
    id: number;
    name: string;
    price: number;
    image: string;
    type: string;
    dateEntry: string;
}
}