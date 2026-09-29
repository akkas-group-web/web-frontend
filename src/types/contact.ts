export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  kvkkAccepted: boolean;
}

export interface ContactPhone {
  number: string;
  type: "phone" | "fax";
}

export interface ContactOffice {
  id: string;
  city: string;
  title: string;
  address?: string;
  phone?: string;
  phones?: ContactPhone[];
  email?: string;
  latitude?: number;
  longitude?: number;
  isMainOffice?: boolean;
}
