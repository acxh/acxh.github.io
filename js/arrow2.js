//绘制一个箭头的js
function Arrow(){  
    this.x=200;  
    this.y=200;  
    // this.color="#ffff00";  
    // this.rotation=0;
}
Arrow.prototype.draw=function(ctx){ 
    var img = new Image(); 
    img.src = "image2/bullet6.png";
    ctx.save();  
    ctx.translate(this.x,this.y);  
    ctx.rotate(this.rotation);  
    ctx.drawImage(
                  img,
                  0,0,30,44,
                  185,178,30,44
                ) 
    ctx.stroke();  
    ctx.restore(); 

    //  ctx.save();
    // ctx.translate(200,200)
    // ctx.rotate(img.rotation)    
    //  ctx.translate(-200,-200)
    
    //   ctx.restore(); 
};
// Arrow.prototype.loadImgs=function(arr, fnSucc)
//     {
//     	var loaded=0;
//     	var json={};
//         for(var i=0;i<arr.length;i++)
//         {
//         	var oImg=new Image();
//         	oImg.onload=function()
//         	{

//         		loaded++;
//         		if(loaded==arr.length)
//         		{
//         		    fnSucc(json);
//         		}
//         	};
//         	oImg.src=arr[i];
//         	var name=(arr[i].split("/")[1]).split(".")[0];

//         	json[name]=oImg;
//         }
//     }