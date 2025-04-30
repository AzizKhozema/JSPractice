/*
3. Get Current Date in Various Formats

Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

// let date = today.getDate();
// let month = today.getMonth();
// let year = today.getFullYear();

// console.log(date + "-" + month + "-" + year);

let today = new Date();

class D {
    date = String(today.getDate()).padStart(2, "0");
    month = String(today.getMonth() + 1).padStart(2, "0");
    year = today.getFullYear();
    

    ft1() {
        console.log(this.date + "-" + this.month + "-" + this.year);
    }
    ft2() {
        console.log(this.date + "/" + this.month + "/" + this.year);
    }
    ft3() {
        console.log(this.month + "-" + this.date + "-" + this.year);
    }
}

let f = new D()

f.ft1();
f.ft2();
f.ft3();

