function utils(){};
utils.captureMouse=function(element){//CaptureMouse顾名思义是捕捉鼠标，计算mouse相对于容器的x,y坐标偏移，
                                    //本质是判断鼠标在浏览器中的鼠标偏移，之后对浏览器中容器宽度和高度进行再次偏移。
   var mouse={x:0,y:0}; 
   element.addEventListener('mousemove',function(event){     //addEventListener是一个侦听事件
      var x,y;
      if(event.pageX || event.pageY)//event.pageX 属性返回鼠标指针的位置，相对于文档的左边缘
      {  
         x=event.pageX;
         y=event.pageY;
      }
      else
      {
         x=event.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;//event.clientX返回事件发生时,mouse相对于客户窗口的X坐标
         y=event.clientY+document.body.scrollTop+document.documentElement.scrollTop;
      }
      x -= element.offsetLeft;
      y -= element.offsetTop;
    
      mouse.x=x;
      mouse.y=y;
  },false);//false 启用起泡,true 取消该事件起泡
   
  
  return mouse;
};
