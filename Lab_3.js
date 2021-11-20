function onClick() 
{
	let n1 = parseFloat(document.getElementById("input1").value);
	let n2 = parseFloat(document.getElementById("input2").value);
	
    let op = document.getElementById("operation"), res;
	switch(op.value) {
		case '+' : res = n1 + n2; break;
		case '-' : res = n1 - n2; break;
		case '*' : res = n1 * n2; break;
		case '/' : res = n1 / n2; break;
	}

    if(!isFinite(res)) {
        alert("Вычисление привело к результату, которое не является числом!");
        document.getElementById("resText").firstChild.nodeValue = ("= ___");
        document.getElementById("input1").value="";
        document.getElementById("input2").value="";
        return;
    }
	document.getElementById("resText").firstChild.nodeValue = (" = " + res);
}