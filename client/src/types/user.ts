export type User = {
  id: string;
  email: string;
  displayName: string;
  imageUrl?: string;
  token: string;
};

export type LoginCredentials = {
  email: string;
  password: string;
};

export type RegisterCredentials = {
  displayName: string;
  email: string;
  password: string;
};
