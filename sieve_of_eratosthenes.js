/*
    *******  SIEVES OF ERATOSTHENES  *********
    Generating random prime number in a scope.

    This source code created by Ookami.
    github: https://github.com/TheForwarding/Homomorphic-Encryption.git
*/

module.exports = class Eratosthenes {

    //  Constructor get all the information of generating random prime number.
    constructor(min_num, max_num) {
        this.min_num = min_num;
        this.max_num = max_num;
        this.lists = Array((this.max_num - this.min_num) + 1).fill(0);
        this.prime_list = [];
    }

    //  Generating a list for later using.
    //  [ min_number ====> (n1, n2, n3, n4,...) =====> max_number ];
    generating_list(min_val, max_val) {
        /*
        for(let i = 0; i <= max_val; i++)
        {
            this.lists[i] = i;
        }
        */
        //  Interatively increment a value
        let i = 0;
        while (i <= (max_val - min_val)) {
            this.lists[i] = min_val + i;    //  Keep incrementing 1. => 
            i++;
        }
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
        */
        let x = 0;
        let is_over = false;
        while (true) {
            let i = 1;
            this.prime_list[x] = this.lists[0];
            let composite_num = 0;
            while (composite_num <= this.lists[this.lists.length - 1]) {
                composite_num = this.prime_list[x] * i;
                for (let y = 0; y < this.lists.length; y++) {
                    if (composite_num == this.lists[y]) {
                        this.lists.splice(y, 1);
                        is_over = false;
                        break;
                    }
                    else {
                        is_over = true;
                    }
                }
                i++;
            }
            if (is_over === true) {
                for(let z = 0; z < this.lists.length; z++) {
                    this.prime_list.push(this.lists[z]);
                }
                break;
            }
            x++;
        }
    }

    out_put() {
        this.splice_composite();
        console.log(this.lists);
        console.log(this.prime_list);
    }
}