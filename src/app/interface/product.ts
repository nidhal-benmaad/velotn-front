export interface Promo {
    rate: number;
    price: number;

}
export interface category {
    name: string;

}

export interface Product {
    _id:string,
    title:string ,
    code: string ,
    price:number ,
    stock: number,
    promo: Promo ,
    imageUrl:string  ,
    description:string  ,
     categorie:category,
    new: boolean,
    state: string  ,
    created:Date , 
}