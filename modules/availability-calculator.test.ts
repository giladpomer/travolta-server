import { DateSpan } from '../types/date-span';

import AvailabilityCalculator = require('./availability-calculator');

test('is available based on availability and timeframe', () => {
    const availability: DateSpan[] = [
        {
            from: new Date(2022, 6, 1),
            until: new Date(2022, 8, 1)
        },
        {
            from: new Date(2022, 9, 1),
            until: new Date(2022, 11, 1)
        }
    ];

    const timeframe: DateSpan = {
        from: new Date(2022, 9, 1),
        until: new Date(2022, 10, 1)
    };

    const isAvailable: boolean = AvailabilityCalculator.calculateIsAvailableInTimeframe(
        availability,
        timeframe);

    expect(isAvailable).toBe(true);
});

test('is not available based on availability and timeframe, when timeframe is streching between more than one overlapping availability timeframes, which will not be continuous', () => {
    const availability: DateSpan[] = [
        {
            from: new Date(2022, 6, 1),
            until: new Date(2022, 8, 1)
        },
        {
            from: new Date(2022, 7, 1),
            until: new Date(2022, 11, 1)
        }
    ];

    const timeframe: DateSpan = {
        from: new Date(2022, 6, 1),
        until: new Date(2022, 9, 1)
    };

    const isAvailable: boolean = AvailabilityCalculator.calculateIsAvailableInTimeframe(
        availability,
        timeframe);

    expect(isAvailable).toBe(false);
});

test('is not available based on availability and timeframe, when timeframe is partially overlapping an availability timeframe', () => {
    const availability: DateSpan[] = [
        {
            from: new Date(2022, 6, 1),
            until: new Date(2022, 8, 1)
        },
        {
            from: new Date(2022, 9, 1),
            until: new Date(2022, 11, 1)
        }
    ];

    const timeframe: DateSpan = {
        from: new Date(2022, 7, 1),
        until: new Date(2022, 8, 15)
    };

    const isAvailable: boolean = AvailabilityCalculator.calculateIsAvailableInTimeframe(
        availability,
        timeframe);

    expect(isAvailable).toBe(false);
});

test('is not available based on availability and timeframe, when timeframe is bigger than an availability timeframe', () => {
    const availability: DateSpan[] = [
        {
            from: new Date(2022, 1, 1),
            until: new Date(2023, 1, 1)
        }
    ];

    const timeframe: DateSpan = {
        from: new Date(2020, 1, 1),
        until: new Date(2024, 1, 1)
    };

    const isAvailable: boolean = AvailabilityCalculator.calculateIsAvailableInTimeframe(
        availability,
        timeframe);

    expect(isAvailable).toBe(false);
});