import { ServiceInterest } from '../backend';

export interface ServiceInterestOption {
  value: string;
  label: string;
  backendValue: ServiceInterest;
}

export const serviceInterestOptions: ServiceInterestOption[] = [
  {
    value: 'cctv',
    label: 'CCTV Surveillance',
    backendValue: ServiceInterest.energyTransition,
  },
  {
    value: 'workstations',
    label: 'Workstations',
    backendValue: ServiceInterest.renewableEnergyConsulting,
  },
  {
    value: 'networking',
    label: 'Networking Solutions',
    backendValue: ServiceInterest.solarDevelopment,
  },
  {
    value: 'laptops',
    label: 'Laptops',
    backendValue: ServiceInterest.energyStorage,
  },
  {
    value: 'computers',
    label: 'Desktop Computers',
    backendValue: ServiceInterest.energyPurchasingAnalysis,
  },
  {
    value: 'other',
    label: 'Other / General Inquiry',
    backendValue: ServiceInterest.other,
  },
];

export function mapToBackendServiceInterest(value: string): ServiceInterest {
  const option = serviceInterestOptions.find((opt) => opt.value === value);
  return option?.backendValue || ServiceInterest.other;
}

export function getServiceInterestLabel(backendValue: ServiceInterest): string {
  const option = serviceInterestOptions.find((opt) => opt.backendValue === backendValue);
  return option?.label || 'Other';
}
