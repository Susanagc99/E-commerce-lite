
//interfaz para productos con propiedades extra
export interface product {
    name: string;
    brand: string;
    quantity: number;
    price: number;
    currency: 'COP' | 'USD';
    isActive: boolean;
    // propiedades extra
    category: string;
    createdAt: Date;
    tags: string[];
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
}

//Interfaz anidada
export interface Address {
    street: string;
    city: string;
    country: string;
    postalCode?: string;
}

export interface User {
    name: string;
    password: string;
    cc: number;
    email: string;
    phone: string;
    address: Address;
}






