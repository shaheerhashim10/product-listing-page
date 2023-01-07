export interface ICard {
  cards: Card[];
}

export interface Card {
  id: number;
  name: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  brand: string;
}
