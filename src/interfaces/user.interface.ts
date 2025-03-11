interface IUser {
  name: string;
  email: string;
  age: number;
  photo: string;
  role: "user" | "admin";
  userStatus: "active" | "inActive";
}

export { IUser };
