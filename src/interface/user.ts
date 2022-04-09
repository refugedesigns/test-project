import { Sector } from "./sector";

export interface User {
  name: string;
  sector: Sector;
  checked: boolean;
  token: string;
}
