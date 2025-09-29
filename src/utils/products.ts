import { product } from "../data/interfaces"

//Products (at least 15)




export const product1: product = {
    name: "Laptop",
    brand: "HP",
    quantity: 28,
    price: 2500000,
    currency: "COP",
    isActive: true,
    category: "Electronics",
    createdAt: new Date("2024-05-10"),
    tags: ["laptop", "electronics", "computers"],
    dimensions: { width: 35, height: 2, depth: 24 }
}

export const product2: product = {
    name: "Laptop",
    brand: "HP",
    quantity: 28,
    price: 2500000,
    currency: "COP",
    isActive: true,
    category: "Electronics",
    createdAt: new Date("2024-05-10"),
    tags: ["laptop", "electronics", "computers"],
    dimensions: { width: 35, height: 2, depth: 24 }
}




// export const products: product[] = [
//     {
//         name: "Laptop",
//         brand: "HP",
//         quantity: 28,
//         price: 2500000,
//         currency: "COP",
//         isActive: true,
//         category: "Electronics",
//         createdAt: new Date("2024-05-10"),
//         tags: ["laptop", "electronics", "computers"],
//         dimensions: { width: 35, height: 2, depth: 24 }
//     },
//     {
//         name: "PlayStation 5",
//         brand: "Sony",
//         quantity: 50,
//         price: 800,
//         currency: "USD",
//         isActive: false,
//         category: "Gaming",
//         createdAt: new Date("2024-06-01"),
//         tags: ["console", "gaming", "sony"],
//         dimensions: { width: 39, height: 10, depth: 26 }
//     },
//     {
//         name: "iPhone 15",
//         brand: "Apple",
//         quantity: 40,
//         price: 1200,
//         currency: "USD",
//         isActive: true,
//         category: "Mobile",
//         createdAt: new Date("2024-07-12"),
//         tags: ["smartphone", "apple", "mobile"],
//         dimensions: { width: 7, height: 0.7, depth: 15 }
//     },
//     {
//         name: "Samsung Smart TV 55”",
//         brand: "Samsung",
//         quantity: 18,
//         price: 3000000,
//         currency: "COP",
//         isActive: true,
//         category: "Electronics",
//         createdAt: new Date("2024-05-25"),
//         tags: ["tv", "electronics", "home"],
//         dimensions: { width: 123, height: 7, depth: 75 }
//     },
//     {
//         name: "Gaming Chair",
//         brand: "RacerX",
//         quantity: 12,
//         price: 950000,
//         currency: "COP",
//         isActive: true,
//         category: "Furniture",
//         createdAt: new Date("2024-06-05"),
//         tags: ["chair", "gaming", "comfort"],
//         dimensions: { width: 70, height: 120, depth: 70 }
//     },
//     {
//         name: "Bluetooth Speaker",
//         brand: "JBL",
//         quantity: 100,
//         price: 300,
//         currency: "USD",
//         isActive: true,
//         category: "Audio",
//         createdAt: new Date("2024-07-20"),
//         tags: ["speaker", "music", "portable"],
//         dimensions: { width: 25, height: 12, depth: 12 }
//     },
//     {
//         name: "Wireless Headphones",
//         brand: "Sony",
//         quantity: 60,
//         price: 500000,
//         currency: "COP",
//         isActive: true,
//         category: "Audio",
//         createdAt: new Date("2024-08-01"),
//         tags: ["headphones", "music", "wireless"],
//         dimensions: { width: 20, height: 18, depth: 10 }
//     },
//     {
//         name: "Mechanical Keyboard",
//         brand: "Logitech",
//         quantity: 35,
//         price: 150,
//         currency: "USD",
//         isActive: true,
//         category: "Accessories",
//         createdAt: new Date("2024-06-18"),
//         tags: ["keyboard", "gaming", "mechanical"],
//         dimensions: { width: 45, height: 4, depth: 15 }
//     },
//     {
//         name: "Wireless Mouse",
//         brand: "Logitech",
//         quantity: 70,
//         price: 120000,
//         currency: "COP",
//         isActive: true,
//         category: "Accessories",
//         createdAt: new Date("2024-07-08"),
//         tags: ["mouse", "wireless", "office"],
//         dimensions: { width: 6, height: 3, depth: 11 }
//     },
//     {
//         name: "Smartwatch Pro",
//         brand: "Huawei",
//         quantity: 25,
//         price: 400,
//         currency: "USD",
//         isActive: false,
//         category: "Wearables",
//         createdAt: new Date("2024-07-22"),
//         tags: ["smartwatch", "wearables", "fitness"],
//         dimensions: { width: 4, height: 1, depth: 4 }
//     },
//     {
//         name: "Tablet Air",
//         brand: "Apple",
//         quantity: 22,
//         price: 850,
//         currency: "USD",
//         isActive: true,
//         category: "Mobile",
//         createdAt: new Date("2024-08-10"),
//         tags: ["tablet", "apple", "mobile"],
//         dimensions: { width: 18, height: 0.6, depth: 25 }
//     },
//     {
//         name: "Drone X200",
//         brand: "DJI",
//         quantity: 8,
//         price: 2000,
//         currency: "USD",
//         isActive: true,
//         category: "Electronics",
//         createdAt: new Date("2024-07-29"),
//         tags: ["drone", "camera", "flying"],
//         dimensions: { width: 40, height: 12, depth: 40 }
//     },
//     {
//         name: "Coffee Maker Deluxe",
//         brand: "Nespresso",
//         quantity: 15,
//         price: 1200000,
//         currency: "COP",
//         isActive: true,
//         category: "Home Appliances",
//         createdAt: new Date("2024-06-11"),
//         tags: ["coffee", "kitchen", "appliances"],
//         dimensions: { width: 25, height: 30, depth: 20 }
//     },
//     {
//         name: "Refrigerator XL",
//         brand: "LG",
//         quantity: 10,
//         price: 5000000,
//         currency: "COP",
//         isActive: false,
//         category: "Home Appliances",
//         createdAt: new Date("2024-05-15"),
//         tags: ["refrigerator", "kitchen", "appliances"],
//         dimensions: { width: 90, height: 180, depth: 80 }
//     },
//     {
//         name: "Washing Machine Turbo",
//         brand: "Whirlpool",
//         quantity: 7,
//         price: 3500000,
//         currency: "COP",
//         isActive: true,
//         category: "Home Appliances",
//         createdAt: new Date("2024-04-30"),
//         tags: ["washing", "laundry", "appliances"],
//         dimensions: { width: 70, height: 100, depth: 70 }
//     }
// ];