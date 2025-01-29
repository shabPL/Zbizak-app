export interface Place {
  id: number;
  name: string;
  type: string;
  location: string;
  stamps: number;
}

export interface Filters {
  location: string;
  type: string;
}
