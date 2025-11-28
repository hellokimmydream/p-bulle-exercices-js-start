//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this._balance = 0;

    // false car pas ouvert
    this._isOpen = false;
  }


  open() {
    if (this._isOpen)
    {
      throw new ValueError();
    }
    this._isOpen = true;
    this._balance = 0;
  }


  close() {
    // si un compte est fermé sans etre ouvert ou deja fermé = error
    if (!this._isOpen)
    {
      throw new ValueError();
    }
    this._isOpen = false;
  }


  deposit(amount) {
        if (!this._isOpen)
    {
      throw new ValueError();
    }

        if (amount <= 0)
    {
      throw new ValueError();
    }

    this._balance += amount;
  }


  withdraw(amount) {
          if (!this._isOpen)
    {
      throw new ValueError();
    }

        if (amount <= 0)
    {
      throw new ValueError();
    }

          if (amount > this._balance)
    {
      throw new ValueError();
    }

    this._balance -= amount;
  }


  get balance() {
        if (!this._isOpen)
    {
      throw new ValueError();
    }

    return this._balance;
  }


  // lance une erreur sinon test passe pas
  set balance(_)
  {
    throw new Error('Balance cannot be set directly');
    
  }
}


export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}