//Xpace JS with all the functions in the same file


//MATH BASICS

//Sum
export class X_Sum
{
    constructor(num1 = 0,num2 = 0,num3 = 0,num4 = 0,num5 = 0)
    {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.num4 = num4;
        this.num5 = num5;
    }
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

}

//Substraction
export class X_Subtraction
{
    constructor(num1 = 0,num2 = 0,num3 = 0,num4 = 0,num5 = 0)
    {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.num4 = num4;
        this.num5 = num5;
    }
    //add two numbers
    Subs2(){
        const result = parseInt(this.num1 - this.num2);
        return result;
    }
    //add three numbers
    Subs3(){
        const result = parseInt(this.num1 - this.num2 - this.num3);
        return result;
    }
    //add four numbers
    Subs4(){
        const result = parseInt(this.num1 - this.num2 - this.num3 - this.num4);
        return result;
    }
    //add five numbers
    Subs5(){
        const result = parseInt(this.num1 - this.num2 - this.num3 - this.num4 - this.num5);
        return result;
    }

}

//Multiplication
export class X_Multiplication
{
    constructor(num1 = 0,num2 = 0,num3 = 0,num4 = 0,num5 = 0)
    {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.num4 = num4;
        this.num5 = num5;
    }
    //add two numbers
    Multi2(){
        const result = parseInt(this.num1 * this.num2);
        return result;
    }
    //add three numbers
    Multi3(){
        const result = parseInt(this.num1 * this.num2 * this.num3);
        return result;
    }
    //add four numbers
    Multi4(){
        const result = parseInt(this.num1 * this.num2 * this.num3 * this.num4);
        return result;
    }
    //add five numbers
    Multi5(){
        const result = parseInt(this.num1 * this.num2 * this.num3 * this.num4 * this.num5);
        return result;
    }

}

//Division
export class X_Division
{
    constructor(num1 = 0,num2 = 0,num3 = 0,num4 = 0,num5 = 0)
    {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.num4 = num4;
        this.num5 = num5;
    }
    //add two numbers
    Divi2(){
        const result = parseInt(this.num1 / this.num2);
        return result;
    }
    //add three numbers
    Divi3(){
        const result = parseInt(this.num1 / this.num2 / this.num3);
        return result;
    }
    //add four numbers
    Divi4(){
        const result = parseInt(this.num1 / this.num2 / this.num3 / this.num4);
        return result;
    }
    //add five numbers
    Divi5(){
        const result = parseInt(this.num1 / this.num2 / this.num3 / this.num4 / this.num5);
        return result;
    }

}

//MATH BASICS (FLOAT)

//Sum Float
export class X_SumF
{
    constructor(num1 = 0,num2 = 0,num3 = 0,num4 = 0,num5 = 0)
    {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.num4 = num4;
        this.num5 = num5;
    }
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

}

//Substraction Float
export class X_SubstractionF
{
    constructor(num1 = 0,num2 = 0,num3 = 0,num4 = 0,num5 = 0)
    {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.num4 = num4;
        this.num5 = num5;
    }
    //add two numbers
    Subs2(){
        const result = parseFloat(this.num1 - this.num2);
        return result;
    }
    //add three numbers
    Subs3(){
        const result = parseFloat(this.num1 - this.num2 - this.num3);
        return result;
    }
    //add four numbers
    Subs4(){
        const result = parseFloat(this.num1 - this.num2 - this.num3 - this.num4);
        return result;
    }
    //add five numbers
    Subs5(){
        const result = parseFloat(this.num1 - this.num2 - this.num3 - this.num4 - this.num5);
        return result;
    }

}

//Multiplication Float
export class X_MultiplicationF
{
    constructor(num1 = 0,num2 = 0,num3 = 0,num4 = 0,num5 = 0)
    {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.num4 = num4;
        this.num5 = num5;
    }
    //add two numbers
    Multi2(){
        const result = parseFloat(this.num1 * this.num2);
        return result;
    }
    //add three numbers
    Multi3(){
        const result = parseFloat(this.num1 * this.num2 * this.num3);
        return result;
    }
    //add four numbers
    Multi4(){
        const result = parseFloat(this.num1 * this.num2 * this.num3 * this.num4);
        return result;
    }
    //add five numbers
    Multi5(){
        const result = parseFloat(this.num1 * this.num2 * this.num3 * this.num4 * this.num5);
        return result;
    }

}

//Division Float
export class X_DivisionF
{
    constructor(num1 = 0,num2 = 0,num3 = 0,num4 = 0,num5 = 0)
    {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.num4 = num4;
        this.num5 = num5;
    }
    //add two numbers
    Divi2(){
        const result = parseFloat(this.num1 / this.num2);
        return result;
    }
    //add three numbers
    Divi3(){
        const result = parseFloat(this.num1 / this.num2 / this.num3);
        return result;
    }
    //add four numbers
    Divi4(){
        const result = parseFloat(this.num1 / this.num2 / this.num3 / this.num4);
        return result;
    }
    //add five numbers
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

