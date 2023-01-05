export interface ICard {
  cards: Card[];
}

export interface Card {
  id: number;
  name: string;
  imageSrc: string;
  price: string;
  brand: string;
}
