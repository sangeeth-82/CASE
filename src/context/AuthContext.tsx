import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole, AuthContextType } from '../types/auth';
import { DEMO_PATIENTS } from '../data/demoPatients';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRoleState] = useState<UserRole>(() => {
    return (localStorage.getItem('medikiosk_role') as UserRole) || 'patient';
  });

  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('medikiosk_user');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return {
      id: 'demo-pt-1',
      name: 'Rajesh Sharma',
      role: 'patient',
      identifier: '+91 98401 23456',
      abhaId: '91-4458-1290-7761'
    };
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  useEffect(() => {
    localStorage.setItem('medikiosk_role', role);
    if (user) {
      localStorage.setItem('medikiosk_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('medikiosk_user');
    }
  }, [role, user]);

  const loginPatient = (identifier: string, name: string = 'New Patient', isGuest: boolean = false) => {
    const newUser: User = {
      id: `pt-${Date.now()}`,
      name: isGuest ? 'Guest Patient' : name,
      role: 'patient',
      identifier,
      abhaId: '91-9921-3841-5502'
    };
    setUser(newUser);
    setRoleState('patient');
    setIsAuthenticated(true);
  };

  const loginDoctor = (staffId: string, staffName: string = 'Dr. Anand Raman, MD') => {
    const newDoc: User = {
      id: staffId,
      name: staffName,
      role: 'doctor',
      identifier: staffId,
      isStaff: true,
      department: 'General Internal Medicine & Triage'
    };
    setUser(newDoc);
    setRoleState('doctor');
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const setRole = (newRole: UserRole) => {
    setRoleState(newRole);
    if (newRole === 'doctor' && (!user || user.role !== 'doctor')) {
      setUser({
        id: 'DOC-AI-902',
        name: 'Dr. Anand Raman, MD',
        role: 'doctor',
        identifier: 'anand.raman@hospital.org',
        isStaff: true,
        department: 'Acute Care & Outpatient Triage'
      });
    } else if (newRole === 'patient' && (!user || user.role !== 'patient')) {
      setUser({
        id: 'demo-pt-1',
        name: 'Rajesh Sharma',
        role: 'patient',
        identifier: '+91 98401 23456',
        abhaId: '91-4458-1290-7761'
      });
    }
  };

  const loadDemoMode = (demoId: string, targetRole?: UserRole) => {
    const demo = DEMO_PATIENTS[demoId];
    if (demo) {
      const demoUser: User = {
        id: demo.patientId,
        name: demo.demographics.name.value,
        role: targetRole || role,
        identifier: demo.demographics.phone.value,
        abhaId: demo.demographics.abhaId?.value
      };
      setUser(demoUser);
      if (targetRole) {
        setRoleState(targetRole);
      }
      setIsAuthenticated(true);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isAuthenticated,
        loginPatient,
        loginDoctor,
        logout,
        setRole,
        loadDemoMode
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
