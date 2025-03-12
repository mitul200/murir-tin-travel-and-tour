interface IUser {
  name: string;
  email: string;
  age: number;
  photo: string;
  role: "user" | "admin";
  userStatus: "active" | "inActive";
}

export { IUser };


// mongodb+srv://<db_username>:<db_password>@cluster0.bsnes.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0  

// murirtin

// murirtin123