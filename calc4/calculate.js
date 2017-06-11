function calculate()
{
	var title="";
	var numPages;
	var pageWght;
	var cover;
	var coverWght;
	var size;
	var sizeWght;
	var totalWght;
	var shippingCost;
	var finalEst;

//accept & return Title
	title = document.mediamail.title.value;

	if(title.length > 0){
		document.getElementById("p1").innerHTML = title;					
	}else{
		title = "this book"
	}



//calculate total ounces based on user input
	//assign User input
	numPages = parseFloat(document.mediamail.pageCount.value);
	cover = document.mediamail.cover.value;
	size = parseFloat(document.mediamail.size.value);

//calculate weight from variables

	// coverWght;
	function calcCoverWght(){
		if(cover == 'h'&& size === 0){
				coverWght = 2.5;				
			}
		else if(cover == 'h' && size === 1){
				coverWght = 4;
			}
		else if(cover == 'h' && size === 2){
				coverWght = 7;
			}
		else{
				coverWght = 0;
			}

		return coverWght;
		}

	// sizeWght;
	
	function calcSizeWght (){
		if (size === 0) {
			sizeWght = 0.04;
		} else if(size === 1){
			sizeWght = 0.061
		} else if (size === 2){
			sizeWght = 0.103
		} else {
			sizeWght = NaN;
		}
		return sizeWght;
	}
	
	//pageWght
		function calcPageWght(){
			pageWght = numPages * sizeWght;
			return pageWght
		}

//Call calculation functions
calcCoverWght();
calcSizeWght();	
calcPageWght();


//calculate total weight

	function calcShipping(){
		totalWght = pageWght + coverWght;
		
		if (totalWght <= 16){
			shippingCost = 2.63;
		} else {
			shippingCost = (2.63 + ((totalWght - 16)/16) * 0.49);
		}
	  return shippingCost;
	}

//calculate total cost

	function currency(){
		finalEst=shippingCost.toFixed(2);
		return finalEst;
	}

calcShipping();
currency();


	if(isNaN(totalWght)){
		document.getElementById("p1").innerHTML = "Please fill out all fields";
		document.getElementById("s1").innerHTML = '';	
	} else {
		document.getElementById("p1").innerHTML = "The estimated cost to ship " + title + " is";
		document.getElementById("s1").innerHTML = "$"+finalEst;		
	}
		
//test
	console.log(title + " has " + numPages + " pages and weighs " + totalWght + " ounces.")
	console.log("Cover weight: "+coverWght);
	console.log("Size weight: "+sizeWght);
	console.log("Page weight: "+pageWght);
	console.log("Shipping cost: "+shippingCost);

function showDiv() {
   		document.getElementById("result").style.display = "block";
	}
	
showDiv();

//Clear fields:
	document.mediamail.title.value="";
	document.mediamail.pageCount.value="";
	document.getElementById("option2").checked=false;
	document.getElementById("option1").checked=false;
	document.getElementById("optionA").checked=false;
	document.getElementById("optionB").checked=false;
	document.getElementById("optionC").checked=false;
}