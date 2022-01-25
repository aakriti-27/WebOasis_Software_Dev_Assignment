//Write a JS function for binary addition using arrays only.

function input()
{
		var size = parseInt(prompt("Enter size of array "));  //to input size of an array
		var input_arr =[];
		for(var i=0; i<size; i++) 
		{
			input_arr[i] = parseInt(prompt('Enter element ' + (i+1)));  //to input array elements
		}
		return input_arr;
};
	
function binary_add(ar1,ar2,n)   //function for binary addition
{
	var count=1;
	while (count < n)
	{
		var result=[],carry = 0, temp = 0;
		while(ar1.length != ar2.length)   // checking if the length of both the array are same
		{
			if(ar1.length > ar2.length)
			{
				ar2.unshift(0);        //adding 0 at the starting to make the array of equal length
			}
			else 
			{
				ar1.unshift(0);     //adding 0 at the starting to make the array of equal length
			}
		}
		for(var i = (ar1.length - 1); i >= 0; i=i-1)      //reverse loop for accessing the array from last
		{
		  if(ar1[i] + ar2[i] + carry == 2)
		  {
			 temp = 0;
			 carry = 1;
		  }
		  else if(ar1[i] + ar2[i] + carry == 3)
		  {
			 temp = 1;
			 carry = 1;
		  }
		  else 
		  {
			 temp = ar1[i] + ar2[i] + carry;
			 carry = 0;
		  }
		  result.unshift(temp);
	   }
	   if(carry)
	   {
		  result.unshift(carry);          //adding the carry to result if there is carry after the addition of last bits
	   }
	   count=count+1;
	   if (count<n)
	   {
		   ar1=result;
		   ar2=input();    //to input the array if n>2
	   }
	}	
	alert("Result after Binary addition : "+result);    //to display the result 
	console.log(result);
};
while(true)
{
  var n= parseInt(prompt("Enter number of array to be added "));
  if (n<2)
  {
    alert("Atlest two array needed for addition");
    continue;
   }
   else
   {
     break;
   }
}  
var ar1=input();
var ar2=input();
binary_add(ar1,ar2,n);