import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    id: bigint;
    name: string;
    email: string;
    serviceInterest: ServiceInterest;
    message: string;
    timestamp: bigint;
    phoneNumber: string;
}
export enum ServiceInterest {
    laptops = "laptops",
    other = "other",
    cctv = "cctv",
    networking = "networking",
    computers = "computers",
    workstations = "workstations"
}
export interface backendInterface {
    getAllInquiries(): Promise<Array<Inquiry>>;
    getInquiriesByServiceInterest(serviceInterest: ServiceInterest): Promise<Array<Inquiry>>;
    getInquiryById(inquiryId: bigint): Promise<Inquiry>;
    submitInquiry(name: string, phoneNumber: string, email: string, serviceInterest: ServiceInterest, message: string): Promise<bigint>;
}
