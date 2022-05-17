function f(){
	console.log("hehhe");
	var elect = document.getElementById("electric").value;
	var vehicle = document.getElementById("vehicle").value;
	var numvehicle = document.getElementById("numvehicle").value;
	var lpg = document.getElementById("lpg").value;
	console.log(elect);
	console.log(vehicle);
	console.log(numvehicle);
	console.log(lpg);
	var news = document.getElementById("newspaper").value;
	news=news.toLowerCase();
	var ns=0;
	if(news=="no"){
		ns=118;
	}
	var all = document.getElementById("Aluminium").value;
	all=all.toLowerCase();
	var a=0;
	if(all=="no"){
		a=215;
	}
	console.log(elect*105);
	var sum = Number(elect*105)+Number(lpg*113)+Number(vehicle*numvehicle*80)+Number(ns)+Number(a)
	;
	console.log(sum);

	document.getElementById("data").innerText+=sum;
	if(sum<=15000){
		document.getElementById("data").innerText+="\n Hoorray!!";
		document.getElementById("data").innerText+="\n Your carbon footprint lies in the minimal range.";
		document.getElementById("data").innerText+="\n Keep up the good work, Plant a tree";
	}
	else if(sum>=22000){
		document.getElementById("data").innerText+="\n Your carbon footprint lies in a very critical range.";
		document.getElementById("data").innerText+="\n Your electricity and LPG consumption is very high. You can try reducing it";
		document.getElementById("data").innerText+="\n Use only a single vehicle for transportation";
		document.getElementById("data").innerText+="\n You can start recycling paper based waste, It's never too late to start recycling.";
	}
	else{
		document.getElementById("data").innerText+="\n Your carbon footprint lies in an average range, but you can do better to improve your carbon emmision";
		document.getElementById("data").innerText+="\n Start recycling";
		document.getElementById("data").innerText+="\n Minimize your electrical consumption, Plant a tree";
	}

}