
<<<<<<< HEAD
export class BankAccount{
  constructor(){
    this.accountStatus = false;
  }

  open(){
    if(this.accountStatus == false){
      this.accountStatus = true; 
      this.accountBalance = 0;
    }
    
    else{
      throw new ValueError("This account is opened.");
    }
  }


  close(){
    if(this.accountStatus == true){
      this.accountStatus = false; 
      this.accountBalance = null;
    }
    else{
      throw new ValueError("This account is closed.");
    }
  }


  deposit(value){
    if(this.accountStatus == true){
      if(value >= 0){
        this.accountBalance += value;
      }
      
      else{
        throw new ValueError("Deposit money cannot be negative.");
      }
    }
    else{
      throw new ValueError("This account is closed.");
    }
  }


  withdraw(value){
    if(this.accountStatus == true){
      
      if(value >= 0){
        if((this.accountBalance - value) >= 0){
          this.accountBalance -= value;
        }
        
        else{
          throw new ValueError("Not enaugh money.");
        }
      }
      
      else{
        throw new ValueError("Withdraw money cannot be negative.");
      }
    }
    
    else{
      throw new ValueError("This account is closed.");
    }
  }


  get balance(){
    if(this.accountStatus == true){
      return this.accountBalance;
    }
    
    else{
      throw new ValueError("This account is closed.");
    }
=======
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
    
>>>>>>> 83b6b0d656b2702d1a68970ac14255776bfe2ba5
  }
}


<<<<<<< HEAD
export class ValueError extends Error{
  constructor(){
=======
export class ValueError extends Error {
  constructor() {
>>>>>>> 83b6b0d656b2702d1a68970ac14255776bfe2ba5
    super('Bank account error');
  }
}
