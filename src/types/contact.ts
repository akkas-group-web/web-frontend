export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  kvkkAccepted: boolean;
}

export interface ContactOffice {
  id: string;
  city: string;
  title: string;
  address?: string;
  phone?: string;
  email?: string;
  latitude?: number;
  longitude?: number;
  isMainOffice?: boolean;
}
