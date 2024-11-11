export const generateSampleData = (months: number = 12) => {
  return Array.from({ length: months }, (_, i) => ({
    name: new Date(2024, i).toLocaleString('default', { month: 'short' }),
    revenue: Math.floor(Math.random() * 10000) + 5000,
    profits: Math.floor(Math.random() * 5000) + 2000,
    customers: Math.floor(Math.random() * 500) + 100
  }));
};


interface NNPCData {
    month: string;
    'Total Consumption': number;
}

interface LineGraphData {
    month: string;
    'Direct Consumption': number;
    'UJV Consumption': number;
    'Daily Volume Target': number;
}

/**
 * Generates sample NNPC consumption data
 * @param months Number of months to generate data for (default: 12)
 * @param baseConsumption Base consumption value to calculate around (default: 250)
 * @param variance Maximum random variance from base consumption (default: 100)
 */
export const generateNNPCData = (
    months: number = 12,
    baseConsumption: number = 250,
    variance: number = 100
): NNPCData[] => {
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    return Array.from({ length: months }, (_, i) => ({
        month: monthNames[i % 12],
        'Total Consumption': Math.floor(
            baseConsumption + (Math.random() * 2 - 1) * variance
        )
    }));
};

/**
 * Generates sample line graph data with Direct Consumption, UJV Consumption, and Daily Volume Target
 * @param months Number of months to generate data for (default: 12)
 * @param targetVolume Fixed daily volume target (default: 130)
 * @param baseConsumption Base consumption value for both Direct and UJV (default: 130)
 * @param variance Maximum random variance from base consumption (default: 40)
 */
export const generateLineGraphData = (
    months: number = 12,
    targetVolume: number = 130,
    baseConsumption: number = 130,
    variance: number = 40
): LineGraphData[] => {
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    return Array.from({ length: months }, (_, i) => ({
        month: monthNames[i % 12],
        'Direct Consumption': Math.floor(
            baseConsumption + (Math.random() * 2 - 1) * variance
        ),
        'UJV Consumption': Math.floor(
            baseConsumption + (Math.random() * 2 - 1) * variance
        ),
        'Daily Volume Target': targetVolume
    }));
};

/**
 * Generates sample business metrics data
 * @param months Number of months to generate data for (default: 12)
 */
export const generateBusinessData = (months: number = 12) => {
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    return Array.from({ length: months }, (_, i) => ({
        name: monthNames[i % 12],
        revenue: Math.floor(Math.random() * 10000) + 5000,
        profits: Math.floor(Math.random() * 5000) + 2000,
        customers: Math.floor(Math.random() * 500) + 100
    }));
};

