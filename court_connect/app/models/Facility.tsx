export type SportType = 'pickleball' | 'tennis' | 'badminton' | 'gym' | 'basketball' | 'soccer' | 'volleyball';

export type Facility = {
    id: string;
    name: string;
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
        description: 'A premier pickleball facility with multiple courts',
        coordinate: {
            latitude: 30.26725509491616,
            longitude: -97.74873768893336,
        },
        sportType: 'pickleball',
        address: '123 Main St, Austin, TX 78701',
        openHours: 'Mon - Fri: 8:00 AM - 10:00 PM, Sat - Sun: 8:00 AM - 6:00 PM',
    },
]