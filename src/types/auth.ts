export type UserRole = 'patient' | 'doctor';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  identifier: string; // phone number or staff email
  abhaId?: string;
  isStaff?: boolean;
  department?: string;
  token?: string;
}

export interface AuthContextType {
  user: User | null;
  role: UserRole;
  isAuthenticated: boolean;
  loginPatient: (identifier: string, name?: string, isGuest?: boolean) => void;
  loginDoctor: (staffId: string, staffName?: string) => void;
  logout: () => void;
  setRole: (role: UserRole) => void;
  loadDemoMode: (demoId: string, targetRole?: UserRole) => void;
}
