var a=[];
var b=[];
var result=[];
var size=parseInt(prompt("Enter the size of value"));
for(let n=0; n<size; n++)
{
	a[n]=parseInt(prompt("Enter the first combine array"+(n+1)));
}
for(let k=0; k<size; k++ )
{
	b[k]=parseInt(prompt("Enter the second combine array"+(k+1)));
}
document.write("input array value 1 is" +a);
document.write("<br>");
document.write("input array value 2 is" +b)
document.write("<br>")
for(let i=0; i<=a.length; i++)
{
	result.push(a[i])
}
	for(let j=i+1;j<=a.length;j++)
	{
	result.push(b[j])
	}
	document.write("combine array is "+result)
