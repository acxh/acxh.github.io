//绘制一个箭头的js
function Arrow(){  
	this.x=0;  
	this.y=0;  
	this.color="#ffff00";  
	this.rotation=0;
}
//熟悉AS的Graphics 的coder一定很快能熟悉使用JS的绘图API
Arrow.prototype.draw=function(context){  
	context.save();  
	context.translate(this.x,this.y);  
	context.rotate(this.rotation);  
	context.lineWidth=2;  
	context.fillStyle=this.color;  
	context.beginPath();  
	context.moveTo(-50,-25);  
	context.lineTo(0,-25);  
	context.lineTo(0,-50);  
	context.lineTo(50,0);  
	context.lineTo(0,50);  
	context.lineTo(0,25);  
	context.lineTo(-50,25);  
	context.lineTo(-50,-25); 
	context.closePath();  
	context.stroke();  
	context.restore(); 
};