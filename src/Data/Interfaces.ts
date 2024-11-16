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

export interface InventoryItem {
cardid : number;
id : number;
quantity : number;
userid: number;
}
