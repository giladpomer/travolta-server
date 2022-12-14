import { DateSpan } from './date-span'
import { Location } from './location'

export interface HotelInfo {
    id: number,
    name: string,
    location: Location,
    price_per_night: number,
    availability: DateSpan[],
    photo_url: string
}