export type SportType = 'pickleball' | 'tennis' | 'badminton' | 'gym' | 'basketball' | 'soccer' | 'volleyball';

export type Facility = {
    id: string;
    name: string;
    phone: string;
    email: string;
    description: string;
    coordinate: {
        latitude: number;
        longitude: number;
    };
    sportType: SportType;
    address: string;
    openHours: string;
}

export const sampleFacilities: Facility[] = [
    {
        id: '1',
        name: 'Urban Pickleball Club',
        phone: '512-555-1234',
        email: 'info@urbanpickleball.com',
        description: 'A premier pickleball facility with multiple courts',
        coordinate: {
            latitude: 30.26725509491616,
            longitude: -97.74873768893336,
        },
        sportType: 'pickleball',
        address: '123 Main St, Austin, TX 78701',
        openHours: 'Mon - Fri: 8:00 AM - 10:00 PM, Sat - Sun: 8:00 AM - 6:00 PM',
    },

    {
        id: '2',
        name: 'Badminton Center',
        phone: '512-555-1235',
        email: 'info@austinbadminton.com',
        description: 'A premier badminton facility with multiple courts',
        coordinate: {
            latitude: 30.306666,
            longitude: -97.733330,
        },
        sportType: 'badminton',
        address: '123 Main St, Austin, TX 78701',
        openHours: 'Mon - Fri: 8:00 AM - 10:00 PM, Sat - Sun: 8:00 AM - 6:00 PM',
    }
]