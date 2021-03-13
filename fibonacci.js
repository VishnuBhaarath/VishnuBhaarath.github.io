var fb=[1,2,3,5];
fb.push(6);
for(i=0;i<30;i++){
	var k=fb.length;
	var sum=fb[k-1]+fb[k-2];
	fb.push(sum);
}
document.getElementById("sequence").innerHTML=fb;

document.getElementById("b1").onclick=function(){
	fun()
};
function fun(){
	
	var num=document.getElementById("miles").value;
	var ans=num*1.60934;
	alert(ans);
	document.getElementById("kilometers").innerHTML=ans


}