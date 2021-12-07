import * as React from "react";
import { AuthProvider } from "context/auth-context";
const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProviders;
