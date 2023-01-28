export interface Item {
    id: string;
    productName: string;
    description: string;
    unitPrice: number;
    category: string;
    imageUrl: string;
}

export interface ItemPayload extends Item {
    count: number;
}

