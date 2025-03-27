export interface IUser {
    staffId?: string;
    name: string;
    phone: string;
    email: string;
    address: string;
    height: number;
    weight: number;
    membershipPlan: string;
    dietPlan?: string;
    schedulePlan?: string;
    membershipStatus?: "Active" | "Expired" | "Pending";
    startDate: string;
    endDate?: string;
    membershipDuration: number;
    attendedDates?: string[];
    role?: "Admin" | "Staff" | "Member";
    accountStatus?: "Active" | "Inactive";
    payment?: {
      amount: number;
      status?: "Paid" | "Pending" | "Overdue";
      method?: "Cash" | "Card" | "Online";
    };
  }
  