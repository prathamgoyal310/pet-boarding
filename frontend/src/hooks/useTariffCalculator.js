import { useState } from 'react';
import { TARIFF_PLANS } from '../constants/pricing';

/**
 * Custom hook for tariff calculations and package switching
 */
export function useTariffCalculator() {
  const [selectedDays, setSelectedDays] = useState(1);

  const activePlan = TARIFF_PLANS.find((p) => p.days === selectedDays) || TARIFF_PLANS[0];

  const handleSelectDays = (days) => {
    setSelectedDays(days);
  };

  return {
    selectedDays,
    activePlan,
    handleSelectDays,
    plans: TARIFF_PLANS
  };
}
