// src/clerk.d.ts or types/clerk.d.ts
declare module '@clerk/react' {
  // Add basic type declarations here
  export const ClerkProvider: React.ComponentType<any>;
  export const SignedIn: React.ComponentType<any>;
  export const SignedOut: React.ComponentType<any>;
  
  export const SignInButton: React.ComponentType<any>;
  export const SignOutButton: React.ComponentType<any>;
  export const useUser: () => any;
  export const useAuth: () => any;
}