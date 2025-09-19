
export interface product {
    name: string;
    brand: string;
    quantity: number;
    price: number;
    currency: 'COP' | 'USD';
    isActive: boolean;
}


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






