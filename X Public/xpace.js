//Xpace JS with all the functions in the same file


//MATH BASICS
export class X_MathBasics
{
    constructor(num1 = 0,num2 = 0,num3 = 0,num4 = 0,num5 = 0)
    {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.num4 = num4;
        this.num5 = num5;
    }

    //SUM
    //add two numbers
    Sum2(){
        const result = parseInt(this.num1 + this.num2);
        return result;
    }
    //add three numbers
    Sum3(){
        const result = parseInt(this.num1 + this.num2 + this.num3);
        return result;
    }
    //add four numbers
    Sum4(){
        const result = parseInt(this.num1 + this.num2 + this.num3 + this.num4);
        return result;
    }
    //add five numbers
    Sum5(){
        const result = parseInt(this.num1 + this.num2 + this.num3 + this.num4 + this.num5);
        return result;
    }

    //SUBSTRACTION
    //substract two numbers
    Subs2(){
        const result = parseInt(this.num1 - this.num2);
        return result;
    }
    //substract three numbers
    Subs3(){
        const result = parseInt(this.num1 - this.num2 - this.num3);
        return result;
    }
    //substract four numbers
    Subs4(){
        const result = parseInt(this.num1 - this.num2 - this.num3 - this.num4);
        return result;
    }
    //substract five numbers
    Subs5(){
        const result = parseInt(this.num1 - this.num2 - this.num3 - this.num4 - this.num5);
        return result;
    }

    //MULTIPLICATION
    //multiplicate two numbers
    Multi2(){
        const result = parseInt(this.num1 * this.num2);
        return result;
    }
    //multiplicate three numbers
    Multi3(){
        const result = parseInt(this.num1 * this.num2 * this.num3);
        return result;
    }
    //multiplicate four numbers
    Multi4(){
        const result = parseInt(this.num1 * this.num2 * this.num3 * this.num4);
        return result;
    }
    //multiplicate five numbers
    Multi5(){
        const result = parseInt(this.num1 * this.num2 * this.num3 * this.num4 * this.num5);
        return result;
    }

    //DIVISION
    //divide two numbers
    Divi2(){
        const result = parseInt(this.num1 / this.num2);
        return result;
    }
    //divide three numbers
    Divi3(){
        const result = parseInt(this.num1 / this.num2 / this.num3);
        return result;
    }
    //divide four numbers
    Divi4(){
        const result = parseInt(this.num1 / this.num2 / this.num3 / this.num4);
        return result;
    }
    //divide five numbers
    Divi5(){
        const result = parseInt(this.num1 / this.num2 / this.num3 / this.num4 / this.num5);
        return result;
    }
}


//MATH BASICS (FLOAT)
export class X_MathBasicsF
{
    constructor(num1 = 0,num2 = 0,num3 = 0,num4 = 0,num5 = 0)
    {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.num4 = num4;
        this.num5 = num5;
    }

    //SUM
    //add two numbers
    Sum2(){
        const result = parseFloat(this.num1 + this.num2);
        return result;
    }
    //add three numbers
    Sum3(){
        const result = parseFloat(this.num1 + this.num2 + this.num3);
        return result;
    }
    //add four numbers
    Sum4(){
        const result = parseFloat(this.num1 + this.num2 + this.num3 + this.num4);
        return result;
    }
    //add five numbers
    Sum5(){
        const result = parseFloat(this.num1 + this.num2 + this.num3 + this.num4 + this.num5);
        return result;
    }

    //SUBSTRACTION
    //substract two numbers
    Subs2(){
        const result = parseFloat(this.num1 - this.num2);
        return result;
    }
    //substract three numbers
    Subs3(){
        const result = parseFloat(this.num1 - this.num2 - this.num3);
        return result;
    }
    //substract four numbers
    Subs4(){
        const result = parseFloat(this.num1 - this.num2 - this.num3 - this.num4);
        return result;
    }
    //substract five numbers
    Subs5(){
        const result = parseFloat(this.num1 - this.num2 - this.num3 - this.num4 - this.num5);
        return result;
    }

    //MULTIPLICATION
    //multiplicate two numbers
    Multi2(){
        const result = parseFloat(this.num1 * this.num2);
        return result;
    }
    //multiplicate three numbers
    Multi3(){
        const result = parseFloat(this.num1 * this.num2 * this.num3);
        return result;
    }
    //multiplicate four numbers
    Multi4(){
        const result = parseFloat(this.num1 * this.num2 * this.num3 * this.num4);
        return result;
    }
    //multiplicate five numbers
    Multi5(){
        const result = parseFloat(this.num1 * this.num2 * this.num3 * this.num4 * this.num5);
        return result;
    }

    //DIVISION
    //divide two numbers
    Divi2(){
        const result = parseFloat(this.num1 / this.num2);
        return result;
    }
    //divide three numbers
    Divi3(){
        const result = parseFloat(this.num1 / this.num2 / this.num3);
        return result;
    }
    //divide four numbers
    Divi4(){
        const result = parseFloat(this.num1 / this.num2 / this.num3 / this.num4);
        return result;
    }
    //divide five numbers
    Divi5(){
        const result = parseFloat(this.num1 / this.num2 / this.num3 / this.num4 / this.num5);
        return result;
    }
}


//ROOTS
export class X_Root
{
    constructor(number) {this.number = number;}

    SquareRoot()
    {
       const root = Math.pow(this.number,(1 / 2));
       return root;
    }

    CubeRoot()
    {
       const root = Math.pow(this.number,(1 / 3));
       return root;
    }

    FourthRoot()
    {
        const root = Math.pow(this.number,(1 / 4));
        return root;
    }

    FifthRoot()
    {
        const root = Math.pow(this.number,(1 / 5));
        return root;
    }
}   


//Square
export class X_Square
{
    constructor(base = 0,height = 0)
    {
        this.base = base;
        this.height = height;
    }

    area()
    {
        const area = this.base * this.height;
        return area;
    }

    perimeter()
    {
        const perimeter = parseInt(this.base+this.base+this.height+this.height);
        return perimeter;
    }
}

//Circle
export class X_Circle
{
    constructor(radius = 0,diameter = 0)
    {
        this.radius = radius;
        this.diameter = diameter;
    }

    areaR()
    {
        const pi = 3.14;
        const area = (pi*Math.pow(this.radius,2));
        return area;
    }

    areaD()
    {
        const pi = 3.14;
        const radius = (this.perimeter/2);
        const area = (pi * Math.pow(radius,2));
        return area;
    }

    perimeterR()
    {
        const pi = 3.14;
        const perimeter = (2 * pi * this.radius);
        return perimeter;
    }

    perimeterD()
    {
        const pi = 3.14;
        const radius = (this.diameter/2);
        const perimeter = (2*pi*radius);
        return perimeter;
    }
}

//Triangle
export class X_Triangle
{
    constructor(base = 0,altura = 0,a = 0,b = 0,c = 0)
    {
        this.base = base;
        this.height = height;
        this.a = a;
        this.b = b;
        this.c = c;
    }

    area()
    {
        const area = ((this.base*this.height)/2);
        return area;
    }

    perimeter()
    {
        const perimeter = parseInt(this.a + this.b + this.c);
        return perimeter;
    }

}

//Diamond
export class X_Diamond
{
    constructor(d1 = 0,d2 = 0,a = 0,b = 0)
    {
        this.d1 = d1;
        this.d2 = d2;
        this.a = a;
        this.b = b;
    }

    area()
    {
        const area=((this.d1 * this.d2)/2);
        return area;
    }

    perimeter()
    {
        const perimeter = (2 * this.a)+(2 * this.b);
        return perimeter;
    }
}

//Trapeze
export class X_Trapeze
{
    constructor(a = 0,b = 0,c = 0,d = 0)
    {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    area()
    {
        const area = (((this.a+this.b)/2)*2)
        return area;
    }

    perimeter()
    {
        const perimeter= parseInt(this.a + this.b + this.c + this.d);
        return perimeter;
    }
}

//Pentagon
export class X_Pentagon
{
    constructor(perimeter,apothem,a,b,c,d,e)
    {
        this.perimeter = perimeter;
        this.apothem = apothem;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
    }

    areaP()
    {
        const area= ((this.perimeter*this.apothem)/2);
        return area; 
    }

    area()
    {
        let perimeter= parseInt(this.a + this.b + this.c+this.d + this.e);
        const area = ((perimeter * this.apothem)/2);
        return area;
    }

    perimeter()
    {
        const perimeter = parseInt(this.a + this.b + this.c+this.d + this.e);
        return perimeter;
    }

}

    //3D Shapes

//Cylinder
export class X_cylinder
{
 constructor(height = 0, radius = 0)
    {
    this.height = height;
    this.radius =  radius;
    }
 
 volume()
 {
    const pi = 3.14;
    let volume = (pi * Math.pow(this.radius,2) * this.height);
    return volume;
 }
 
}

//Cone
export class X_cone
{
    constructor(generatrix=0, height=0, radius=0)
        {
        this.generatrix = generatrix;
        this.height = height;
        this.radius = radius;    
        }
    
    volume()
    {
        const pi = 3.14;
        let volume = ((1/3) * pi * Math.pow(this.radius,2) * this.height);
        return volume;
    }    
}

//Sphere
export class X_sphere
{
    constructor(radius=0)
    {
        this.radius = radius;
    }

    volume()
    {
        const pi = 3.14;
        let volume = ((4/3) * pi * Math.pow(this.radius,3));
        return volume;
    }
}

//Cube
export class X_cube
{
    constructor(l1=0,l2=0,h=0)
    {
        l1 = this.l1;
        l2 = this.l2;
        h =  this.h;
    }

    volume()
    {
        let area = (this.l1 * this.l2);
        let volume = area * this.h;
        return volume;
    }
}

//PROGRAMS
//Templates of programs 

export function X_Bonus(position=0, period=0) {
/*Program that calculates the bonus that corresponds to each employee depending on their position and their period in the company.
--If the person has been less than 5 years in the company, they receive a 10% bonus
--If the person is between 5 and 10 years old, they receive a 15% bonus
--If the person has been in the company for more than 10 years, they receive a 20% bonus*/     

    const  position1 = 2500;
    const  position2 = 1000;
    const  position3 = 800;
    let    bonus = 0;

    switch (position) {
        case 1:
                if (period < 5 ) {
                bonus = parseFloat(position1 * 0.1);
                return bonus;
                }
                if (period > 4 && period < 11 ) {
                    bonus = parseFloat(position1 * 0.15);
                    return bonus;
                }
                if (period > 10 ) {
                    bonus = parseFloat(position1 * 0.20);
                    return bonus;
                }
                break;
        case 2:
                if (period < 5 ) {
                bonus = parseFloat(position2 * 0.1);
                return bonus;
                }
                if (period > 4 && period < 11 ) {
                bonus = parseFloat(position2 * 0.15);
                return bonus;
                }
                if (period > 10 ) {
                bonus = parseFloat(position2 * 0.20);
                return bonus;
                }
                break;
        case 3:
                if (period < 5 ) {
                bonus = parseFloat(position3 * 0.1);
                return bonus;
                }
                if (period > 4 && period < 11 ) {
                bonus = parseFloat(position3 * 0.15);
                return bonus;
                }
                if (period > 10 ) {
                bonus = parseFloat(position3 * 0.20);
                return bonus;
                }    
                break;

        default:    
            bonus = 0;
            return bonus;
    }

}

