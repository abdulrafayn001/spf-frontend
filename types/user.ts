import { FinancialProfile } from "./financialProfile";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  occupation: string;
};

export type UpdateUserPayload = Omit<Partial<User>, "id">;

export interface UserProfile extends User {
  createdAt: string;
  updatedAt: string;
  financialProfile: FinancialProfile | null;
}
