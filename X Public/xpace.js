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

//AREAS
export class X_Area
{
    constructor(base,height,radius,DM,Dm) 
    {
        this.base = base;
        this.height = height;
        this.radius = radius;
        this.DM = DM;
        this.Dm = Dm;
    }

    SquareArea()
    {
       const root = Math.pow(this.number,(1 / 2));
       return root;
    }

    CircleArea()
    {
       const root = Math.pow(this.number,(1 / 3));
       return root;
    }

    DiamondArea()
    {
        const root = Math.pow(this.number,(1 / 4));
        return root;
    }

    TriangleArea()
    {
        const root = Math.pow(this.number,(1 / 5));
        return root;
    }
}

