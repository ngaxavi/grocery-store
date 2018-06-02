export interface Roles {
  user?: boolean;
  admin?: boolean;
  anonymous?: boolean;
}

export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
  roles: Roles;
}
