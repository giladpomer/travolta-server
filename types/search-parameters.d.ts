import { DateSpan } from './date-span';
import { Location } from './location';

export interface SearchParameters {
    destination: Location,
    timeframe: DateSpan,
    adultsAmount: number
}