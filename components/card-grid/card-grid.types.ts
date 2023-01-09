export interface ICard {
  cards: Card[];
  sendQuery: (id: string) => void;
}

export interface Card {
  id: number;
  name: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  brand: string;
}
