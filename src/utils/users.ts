import { User } from "../data/interfaces"

// at least 5 users
export const users: User[] = [
    {
        name: "Mateo Guerra",
        password: "mateo123",
        phone: "3216549870",
        cc: 1223498523,
        email: "mateito@example.com",
        address: {
            street: "Calle 45 #12-34",
            city: "Medellín",
            country: "Colombia"
        }
    },
    {
        name: "David López",
        cc: 1029384756,
        email: "david@example.com",
        phone: "3109876543",
        password: "holi123",
        address: {
            street: "Carrera 10 #45-67",
            city: "Bogotá",
            country: "Colombia",
            postalCode: "110111"
        }
    },
    {
        name: "Daniela Torres",
        cc: 9876543210,
        email: "dani@example.com",
        phone: "3004567891",
        password: "zorris123",
        address: {
            street: "Av. Siempre Viva 742",
            city: "Cali",
            country: "Colombia"
        }
    },
    {
        name: "Sofía Martínez",
        cc: 1231231234,
        email: "sofi@example.com",
        phone: "3201234567",
        password: "sofi2025",
        address: {
            street: "Calle Luna 123",
            city: "Barranquilla",
            country: "Colombia",
            postalCode: "080001"
        }
    },
    {
        name: "Andrés Pérez",
        cc: 4567891230,
        email: "andres@example.com",
        phone: "3112223344",
        password: "andresPass",
        address: {
            street: "Cra Sol 56",
            city: "Cartagena",
            country: "Colombia"
        }
    }
]


