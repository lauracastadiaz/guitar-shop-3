export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

//hereda de Guitar
export type CartItem = Guitar &  {
    quantity : number
}