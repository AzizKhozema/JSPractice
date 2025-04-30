/*

4. Calculate Area of Triangle (Sides: 5, 6, 7)

Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 
 
*/

function Area (a,b,c) {

    let s = (a + b + c)/2
    console.log(`Area of Triangle(${a},${b},${c}) ${Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2)}`);
}

Area(5,6,7)