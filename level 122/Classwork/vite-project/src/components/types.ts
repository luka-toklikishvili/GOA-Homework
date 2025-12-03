export type User = {
  name: string;
  age: number;
  city: string;
};

export type Social = {
  github: string;
  twitter: string;
};

export type ProfileProps = {
  user: User;
  social: Social;
};
