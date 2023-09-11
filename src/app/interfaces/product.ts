export interface Product {
    id: number,
    title: string,
    description: string,
    price: any,
    discountPercentage: any,
    rating: any,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: Array<string>,
    createdAt: string | Date,
}

//"https://static.cloud.noroff.dev/public/gamehub/7-boxer.jpg"