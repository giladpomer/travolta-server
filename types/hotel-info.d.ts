import { Location } from './location'

export interface HotelInfo {
    id: number,
    name: string,
    location: Location,
    price_per_night: number,
    photo_url: string
}