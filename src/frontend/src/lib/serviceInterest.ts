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
    backendValue: ServiceInterest.cctv,
  },
  {
    value: 'workstations',
    label: 'Workstations',
    backendValue: ServiceInterest.workstations,
  },
  {
    value: 'networking',
    label: 'Networking Solutions',
    backendValue: ServiceInterest.networking,
  },
  {
    value: 'laptops',
    label: 'Laptops',
    backendValue: ServiceInterest.laptops,
  },
  {
    value: 'computers',
    label: 'Desktop Computers',
    backendValue: ServiceInterest.computers,
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
  return option?.label || 'Other / General Inquiry';
}
