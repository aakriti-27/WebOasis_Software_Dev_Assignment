/*Assume an array of JSON objects where the objects are of some products in an e-commerce
platform, containing name, price, description, reviews etc. Write a JS function to search
within that array and list the searches when the query is 50% similar or more. (Search query
can be by "name" or "type of the product")*/

function product_search() 
{
	var p = {
		blue_dial_analog_watch_men : {name: 'fossil blue dial analog watch men', category: ['watches','accessories','men'], price: 10000 },
		boat_bassheads_900_wired_headphones : {name: 'boat bassheads 900 wired headphones', category: ['headphone','wired'], price: 600 },
		swisstone_green_dial_analog_watch_women : {name: 'swisstone green dial analog watch women', category: ['watches','accessories','women'],price: 1000 },
	    boat_rockerz_450_wireless_headphones : {name: 'boat rockerz 450 wireless headphones', category: ['headphone','wireless'], price: 2500},
	    boult_audio_airbass_powerbuds_earbuds : {name: 'boult audio airbass powerbuds earbuds', category: ['earbuds','wireless'], price: 6000},
	}   

    var products = [];
	for(var key in p) 
	{
		products.push(p[key]);  //array of JSON objects
	}
	
	var to_search=document.getElementById("search").value;  //getting the product to be searched from html page
	var ts=to_search.split(' ');
	
	var arr=[],c=0;
	
	for (var y in products)
	{
		var count=0;
		var n= products[y].name.split(' ');
		var c= products[y].category;
		for (var x in ts)
		{		
			if ( n.includes(ts[x]) || c.includes(ts[x]))  //to check if the product to be searched is present
			{
				count=count+1;
			}
		}
		var perc = (count*100)/(ts.length);  //calculating percentage of query matched
		c=c+1;
		if (perc >=50)
		{                 //printing the products if query matched more than 50 percent
			document.getElementById("heading").style.display = "block";
			document.getElementById("div_products").innerHTML += "<b>Product_Name : </b>" + products[y].name + " ";
			document.getElementById("div_products").innerHTML += "<b>Cost : </b>" + products[y].price + " <br>";
			console.log(products[y]);
		}
	}	
	if (c!=0)
	{
		document.getElementById("div_products").innerHTML += "No product found!!";
	}
}