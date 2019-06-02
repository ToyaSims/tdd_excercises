class Calculator{
	//default constructor
  constructor(){
      this.lastNum = 0;
      this.slot = [];
  }
  //accessor and mutator methods
  set_slot(number){
      this.slot[number] = this.lastNum;
  }
  get_slot(number){
      return this.slot[number];
  }
  
  //method for adding numbers
  addNum(){
      var sum = 0;
      for(let i = 0; i<arguments.length; i++){
          sum += arguments[i];
      }
      this.lastNum = sum;
      return sum;
  }
  
  //method for muiltiplying numbers
  multiplyNum(){
      var product = 1;
      for(let i = 0; i<arguments.length; i++){
          product *= arguments[i];
      }
      this.lastNum = product;
      return product;
  }
  
  //method for returning last
  last(){
      return this.lastNum;
  }
  
};
