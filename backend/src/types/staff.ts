export interface IStaff {
    staffId?: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    role?: "Admin" | "Trainer" | "Receptionist" | "Cleaner";
    salary: number;
  }
  