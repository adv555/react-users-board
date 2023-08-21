export interface User {
  id?: number;
  carColorId: number;
  name: string;
}

export interface Color {
  id: number;
  name: string;
}

export interface UserWithColor extends User {
  carColor?: Color;
}
