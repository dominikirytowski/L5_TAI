class Complex {
	private real: number;
	private	imaginary: number;
	
	constructor(real: number, imaginary: number){
		this.real = real;
		this.imaginary = imaginary;
	}
	
	add(obj: Complex): Complex{
		return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
	}
	
	substract(obj: Complex): Complex{
		return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
	}
	
	modul(obj: Complex): number{
		return (Math.sqrt((Math.pow(this.real, 2)) + (Math.pow(this.imaginary, 2))));
	}
	
	toString(){
		console.log('RE: ', this.real, ' IM: ', this.imaginary);
	}
	
	
}

let a = new Complex(2, 3);
let b = new Complex(4, 5);

let c = a.add(b);
c.toString();

let d = c.substract(new Complex(3, 3));
d.toString();

let m = d.modul(d);
console.log('Modul jest rowny: ', m);


