export class Beer {
  public pintsRemaining: number = 124;
  public setLevels = false;
  constructor(public brand: string, public name: string, public price: number, public abv: number, public flavorNotes: string) { }
}
