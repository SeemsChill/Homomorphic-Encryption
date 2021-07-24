/*
    *******  SIEVES OF ERATOSTHENES  *********
    Generating random prime number in a scope.

    This source code created by SeemsChill.
    github: https://github.com/TheForwarding/Homomorphic-Encryption.git
*/

module.exports = class Eratosthenes {
  //  Constructor get all the information of generating random prime number.
  constructor(min_num, max_num) {
    //  Holding values of max and min value.
    this.min_num = min_num;
    this.max_num = max_num;

    //  Creating a serial of number filled with zero (0).
    this.lists = Array(this.max_num - this.min_num + 1).fill(0);

    //  Creating a prime list for latter using.
    this.prime_list = [];

    //  Concatonating the previous list filled with incrementing number from (min -> (max - min)).
    this.generating_list(this.min_num, this.max_num);
  }

  //  Generating a list for later using.
  //  [ min_number ====> (n1, n2, n3, n4,...) =====> max_number ];
  generating_list(min_val, max_val) {
    //  Interatively increment a value
    let i = 0;
    while (i <= max_val - min_val) {
      this.lists[i] = min_val + i; //  Keep incrementing 1. =>
      i++;
    }
  }

  //    check_prime method for each beginning value from the list.
  check_prime(val) {
    //  Checking whether the value is less than 3, %2, %3 == 0 if so, return false.
    if (val <= 3) {
      return val > 1;
    }
    if (val % 2 === 0 || val % 3 === 0) {
      return false;
    }
    let count = 5;
    //  Checking for %5 or not.
    while (Math.pow(count, 2) <= val) {
      if (val % count === 0 || val % (count + 2) === 0) {
        return false;
      }
      count += 6;
    }
    return true;
  }

  //  Remove every composite number when multiplying with the smallest prime number.
  splice_composite() {
    /*
        let i = 1;
        let x = 0;
        var composite_num = 1; 
        var least_num = this.min_num;
        while(composite_num <= this.max_num) {
            composite_num = least_num * i;
            for(let y = 0; y < this.lists.length; y++) {
                if(composite_num == this.lists[y]) {
                    
                    this.lists.splice(y, 1);
                    break;   
                }
            }
            i++;
        }

        ***** THIS CODE IS BASED TO BELOW CODES. *****
    */

    //      |=============== Looping Table ===============|
    //      |   2   3   4   5   6   7   8   9   10  11    |
    //      |   12  13  14  15  16  17  18  19  20  21    |
    //      |=============================================|   

    /*
        The purpose of the Sieve of Eratosthenes is delete every none-prime elements in
        the table. It keep looping and looping, flows with the algorithm. 
    */

    let x = 0;
    while (true) {
      let i = 1;
      //    Suppose the first value in the talbe is none-prime. That value gonna be swept
      //    out of the table and the new first value will be the next one => Looping.
      while (!this.check_prime(this.lists[0])) {
        this.lists.splice(0, 1);
      }

      //    If NULL then the process is completed!
      if (this.lists[0] == null) {
        break;
      }
      //    Pass the first value into prime list. 
      this.prime_list[x] = this.lists[0];
      //    Declare the composite number for multiplying.
      let composite_num = 0;
        //      Suppose the first prime value is 2 then the composite number will multiply by 2
        //      Then it will be [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22].
        //      |=============== Looping Table ===============|
        //      |   X   3   X   5   X   7   X   9   X  11     |
        //      |     X  13  X  15  X  17  X  19  X  21       |
        //      |=============================================|   
      while (composite_num <= this.lists[this.lists.length - 1]) {
        composite_num = this.prime_list[x] * i;
        //  After getting the composite number, tracking it.
        for (let y = 0; y < this.lists.length; y++) {
          if (composite_num == this.lists[y]) {
            this.lists.splice(y, 1);
            break;
          }
        }
        i++;
      }
      x++;
    }
  }

  //    Printing found prime list.
  print_prime() {
    console.log(this.prime_list);
  }
};
