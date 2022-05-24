// export interface User {
//   username: string,
//   email: string,
//   password: string
// }

export interface User {
  username: string,
  email: string,
  password: string,
  address: UserAddress
}

export interface UserAddress {
  country: string,
  city: string,
  street: string,
  number: number
}
