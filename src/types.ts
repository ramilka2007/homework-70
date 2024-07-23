export interface Person {
  id: string;
  name: string;
  phone: string;
  email: string;
  image: string;
}

export type ApiPerson = Omit<Person, 'id'>;

export interface ApiPeople {
  [id: string]: ApiPeople;
}
