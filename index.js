
document.write("exercise 1 " + "<br>" + "<br>");


var n = prompt("Write one of the numbers between 0-9, to see a visual representation of that number inside the axis (10x16).");

function numbers(n){
	for (var x = 0; x < 10; x++) { // row
		for (var y = 0; y < 16; y++) { // col


		// n == 0
			if (n == 0) {
				if ( (x==0 && y>5 && y<11) || (y==6 && x>=0 && x<=9) || (y==10 && x>=0 && x<=9) || (x==9 && y>5 && y<=10)) {
					document.write(0+"-"+0+" ");
				}
				else{
					document.write("*"+"-"+"*"+" ");	
				}
			}

		// n == 1
			if (n == 1) {
				if ((x < 4 && x + y == 8) || y == 8) {
					document.write(1+"-"+1+" ");
				}
				else{
					document.write("*"+"-"+"*"+" ");	
				}
			}
		
		// n == 2
			if (n == 2) {
				if ( (x==0 && y>5 && y<11) || (y==10 && x>=0 && x<5 ) || (x==4 && y>5 && y<11) || (y==6 && x>4 && x<=9) || (x==9 && y>5 && y<=10) ) {
					document.write(2+"-"+2+" ");
				}
				else{
					document.write("*"+"-"+"*"+" ");	
				}
			}

		// n == 3
			if (n == 3) {
				if ( (x==0 && y>5 && y<11) || (y==10 && x>=0 && x<=9) || (x==4 && y>5 && y<11) || (x==9 && y>5 && y<=10) ) {
					document.write(3+"-"+3+" ");
				}
				else{
					document.write("*"+"-"+"*"+" ");	
				}
			}	

		// n == 4
			if (n == 4) {
				if ( (y==6 && x>=0 && x<5) || (x==4 && y>5 && y<11) || (y==10 && x>=0 && x<=9) ) {
					document.write(4+"-"+4+" ");
				}
				else{
					document.write("*"+"-"+"*"+" ");	
				}
			}

		// n == 5
			if (n == 5) {
				if ( (x==0 && y>5 && y<11) || (y==6 && x>=0 && x<5) || (x==4 && y>5 && y<11) || (y==10 && x>4 && x<=9) || (x==9 && y>5 && y<=10)) {
					document.write(5+"-"+5+" ");
				}
				else{
					document.write("*"+"-"+"*"+" ");	
				}
			}

		// n == 6
			if (n == 6) {
				if ( (x==0 && y>5 && y<11) || (y==6 && x>=0 && x<=9) || (x==4 && y>5 && y<11) || (y==10 && x>4 && x<=9) || (x==9 && y>5 && y<=10)) {
					document.write(6+"-"+6+" ");
				}
				else{
					document.write("*"+"-"+"*"+" ");	
				}
			}

		// n == 7
			if (n == 7) {
				if ( (x==0 && y>5 && y<11) || (y==10 && x>=0 && x<=9) || (x==3 && y>8 && y<12)) {
					document.write(7+"-"+7+" ");
				}
				else{
					document.write("*"+"-"+"*"+" ");	
				}
			}

		// n == 8
			if (n == 8) {
				if ( (x==0 && y>5 && y<11) || (y==6 && x>=0 && x<=9) || (x==4 && y>5 && y<11) || (y==10 && x>=0 && x<=9) || (x==9 && y>5 && y<=10)) {
					document.write(8+"-"+8+" ");
				}
				else{
					document.write("*"+"-"+"*"+" ");	
				}
			}

		// n == 9
			if (n == 9) {
				if ( (x==0 && y>5 && y<11) || (y==6 && x>=0 && x<=4) || (x==4 && y>5 && y<11) || (y==10 && x>=0 && x<=9) || (x==9 && y>5 && y<=10)) {
					document.write(9+"-"+9+" ");
				}
				else{
					document.write("*"+"-"+"*"+" ");	
				}
			}

		}

	// change row from x = 16
		document.write("<br>");
	}
}
// write a number
numbers(n);








		document.write("exercise 2 " + "<br>" + "<br>");


var symbhol = prompt("write some of (,{,[,],} or ) symbols");
var arr = symbhol.split("");
function check(arr){

	var arrcheck = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == "(" || arr[i] == "{" || arr[i] == "[") {
			arrcheck.push(arr[i]);
		}
		else if (arr[i] == ")" || arr[i] == "}" || arr[i] == "]") {
			if (arr[i] == ")" && arrcheck[i-1] == "(") {
				arrcheck.pop();
			}
			else if (arr[i] == "}" && arrcheck[i-1] == "{") {
				arrcheck.pop();
			}
			else if (arr[i] == "]" && arrcheck[i-1] == "[") {
				arrcheck.pop();
			}
			else{
				document.write("input string is invalid");
				break;
			}
		document.write("input string is valid");
		break;
		}
		else{
			document.write("wrong symbhol");
			break;
		}
	}	
}

check(arr);

































































