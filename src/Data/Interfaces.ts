export interface Card {
  id: number;
  pokemonid: number;
  pokemontypeid: number;
  setid: number;
  tcgplayerurl: string;
  cardnumber: string;
  imageurl: string;
  cardname: string;
}

export interface Sets {
  id: number;
  setname: string;
  ticker: string;
  seriesId: number;
  legalmark: string;
  releaseDate: string;
  imageurl: string;
  printedTotal: number;
  specialsCount: number;
}

export interface Card_Inventory {
  id: number;
  pokemonid: number;
  pokemontypeid: number;
  setid: number;
  tcgplayerurl: string;
  cardnumber: string;
  imageurl: string;
  cardname: string;
  inventories: InventoryItem[];
}

export interface CardWithQuantity { 
  card: Card;
  quantity: number;
}

export interface InventoryItem {
cardid : number;
id : number;
quantity : number;
userid: number;
}

export interface InventoryDTO {
  userId: number;
  cardId: number;
  quantity: number;
}

export interface Inventory {
  Id: number;
  Userid: number;
  Cardid: number;
  Quantity: number;
}

export interface User {
  id: number;
  forename: string;
  surname: string;
  email: string;
  username: string;
}

export interface UserDTO {
  forename: string;
  surname: string;
  email: string;
  username: string;
}

export interface Deck {
  id: number;
  deckname: string;
  highlightcardid: number;
  userid: number;
  cards: Card[];
}