export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }

  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building')
      throw new Error(
        'Class extending Building must override evacuationWarningMessage'
      );
  }
}
