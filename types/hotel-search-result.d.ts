import { HotelInfo } from './hotel-info'

export interface HotelSearchResult {
    hotelInfo: HotelInfo,
    price_of_stay: number,
    is_available: boolean
}