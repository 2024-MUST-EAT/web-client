interface Restaurant {
  id: number;
  name: string;
  category: string;
  address: string;
  menus: string[];
  image: string;
}

export default interface Restaurants {
  count: number;
  results: Restaurant[];
}
