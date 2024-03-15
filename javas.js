//# sourceURL=javas.js

// float

//获取图片的对象
var img = document.getElementById("floaticon");

//设置图片的起始点坐标
var x = 0,
  y = 0;
//设置图片的行进速度
var xSpeed = 3; //横坐标的行进速度
var ySpeed = 3; //纵坐标的行进速度
var imgHeight = 25,
  imgWidth = 100; //图片宽度和高度
//设置图片的最大移动范围
var w =
  Math.max(document.documentElement.clientWidth, document.body.clientWidth) -
  imgWidth; //横向移动的最大范围
var h =
  Math.max(document.documentElement.clientHeight, document.body.clientHeight) -
  imgHeight; //纵向移动的最大范围
window.onresize = function () {
  //窗体大小变化，更新可移动范围
  w =
    Math.max(document.documentElement.clientWidth, document.body.clientWidth) -
    imgWidth; //横向移动的最大范围
  h =
    Math.max(
      document.documentElement.clientHeight,
      document.body.clientHeight
    ) - imgHeight; //纵向移动的最大范围
};
function floatimg() {
  //判断图片是否达到了边界
  //1、如果达到了,那我们就改变图片的方向
  //2、如果没有达到，设置坐标值为  起始坐标+速度
  if (x > w || x < 0) {
    x = x < 0 ? 0 : w;
    xSpeed = -xSpeed;
  } else x += xSpeed;
  if (y > h || y < 0) {
    y = y < 0 ? 0 : h;
    ySpeed = -ySpeed;
  } else y += ySpeed;
  //使图片按规定坐标移动
  img.style.left = x + "px";
  img.style.top = y + "px";
  //设置图片移动的时间间隔
  setTimeout(floatimg, 50);
}
floatimg();


function togglePanel(panelId) {
  var x = document.getElementById(panelId);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


// hover出现图片

window.onload = function () {
  //creativecomputational
  document.getElementById("cCom").onmouseover = function () {
    document.getElementById("cCom").style.zIndex = "9999";
    document.getElementById("creative").style.display = "block";
    document.getElementById("creative").style.width = "50vw";
    document.getElementById("creative").style.height = "auto";
    document.getElementById("creative").style.top = "50%";
    document.getElementById("creative").style.left = "50%";
    document.getElementById("creative").src = "assets/2023/creative.mp4";
  };
  document.getElementById("cCom").onmouseout = function () {
    document.getElementById("cCom").style.zIndex = "auto";
    document.getElementById("creative").style.display = "none";
  };

  //zywebsite
  document.getElementById("zyweb").onmouseover = function () {
    document.getElementById("zyweb").style.zIndex = "9999";
    document.getElementById("zywebsite").style.display = "block";
    document.getElementById("zywebsite").style.width = "40vw";
    document.getElementById("zywebsite").style.height = "auto";
    document.getElementById("zywebsite").style.top = "50%";
    document.getElementById("zywebsite").style.left = "50%";
    document.getElementById("zywebsite").src = "assets/2023/zywebsite";
  };
  document.getElementById("zyweb").onmouseout = function () {
    document.getElementById("zyweb").style.zIndex = "auto";
    document.getElementById("zywebsite").style.display = "none";
  };

  //fine
  document.getElementById("imfine").onmouseover = function () {
    document.getElementById("imfine").style.zIndex = "9999";
    document.getElementById("fine").style.display = "block";
    document.getElementById("fine").style.width = "50vw";
    document.getElementById("fine").style.height = "auto";
    document.getElementById("fine").style.top = "50%";
    document.getElementById("fine").style.left = "50%";
    document.getElementById("fine").src = "assets/2023/fine.mp4";
  };
  document.getElementById("imfine").onmouseout = function () {
    document.getElementById("imfine").style.zIndex = "auto";
    document.getElementById("fine").style.display = "none";
  };

  //joann
  document.getElementById("joann").onmouseover = function () {
    document.getElementById("joann").style.zIndex = "9999";
    document.getElementById("joannp").style.display = "block";
    document.getElementById("joannp").style.width = "70vw";
    document.getElementById("joannp").style.height = "auto";
    document.getElementById("joannp").style.top = "50%";
    document.getElementById("joannp").style.left = "50%";
    document.getElementById("joannp").src = "assets/2022/Garden/1.png";

    document.getElementById("joannp2").style.display = "block";
    document.getElementById("joannp2").style.width = "20vw";
    document.getElementById("joannp2").style.height = "auto";
    document.getElementById("joannp2").style.top = "15%";
    document.getElementById("joannp2").style.left = "10%";
    document.getElementById("joannp2").src = "assets/2022/Garden/IMG_3014.jpg";

    document.getElementById("joannp3").style.display = "block";
    document.getElementById("joannp3").style.width = "15vw";
    document.getElementById("joannp3").style.height = "auto";
    document.getElementById("joannp3").style.top = "75%";
    document.getElementById("joannp3").style.left = "88%";
    document.getElementById("joannp3").src = "assets/2022/Garden/IMG_3020.jpg";

    document.getElementById("joannp4").style.display = "block";
    document.getElementById("joannp4").style.width = "18vw";
    document.getElementById("joannp4").style.height = "auto";
    document.getElementById("joannp4").style.top = "78%";
    document.getElementById("joannp4").style.left = "15%";
    document.getElementById("joannp4").src = "assets/2022/Garden/2.png";
  };
  document.getElementById("joann").onmouseout = function () {
    document.getElementById("joann").style.zIndex = "auto";
    document.getElementById("joannp").style.display = "none";
    document.getElementById("joannp2").style.display = "none";
    document.getElementById("joannp3").style.display = "none";
    document.getElementById("joannp4").style.display = "none";
  };

  // unearthed
  document.getElementById("unearthed").onmouseover = function () {
    document.getElementById("unearthed").style.zIndex = "9999";
    document.getElementById("unearthedp").style.display = "block";
    document.getElementById("unearthedp").style.width = "70vw";
    document.getElementById("unearthedp").style.height = "auto";
    document.getElementById("unearthedp").style.top = "50%";
    document.getElementById("unearthedp").style.left = "50%";
    document.getElementById("unearthedp").src =
      "assets/2022/unearthed/video.mp4";
  };
  document.getElementById("unearthed").onmouseout = function () {
    document.getElementById("unearthed").style.zIndex = "auto";
    document.getElementById("unearthedp").style.display = "none";
  };

  // texts
  document.getElementById("texts").onmouseover = function () {
    document.getElementById("texts").style.zIndex = "9999";
    document.getElementById("textsp").style.display = "block";
    document.getElementById("textsp").style.width = "70vw";
    document.getElementById("textsp").style.height = "auto";
    document.getElementById("textsp").style.top = "50%";
    document.getElementById("textsp").style.left = "50%";
    document.getElementById("textsp").src = "assets/2022/Textsor/video.mp4";
  };
  document.getElementById("texts").onmouseout = function () {
    document.getElementById("texts").style.zIndex = "auto";
    document.getElementById("textsp").style.display = "none";
  };

  // yellow
  document.getElementById("yellow").onmouseover = function () {
    document.getElementById("yellow").style.zIndex = "9999";
    document.getElementById("yellowv").style.display = "block";
    document.getElementById("yellowv").style.width = "60vw";
    document.getElementById("yellowv").style.height = "auto";
    document.getElementById("yellowv").style.top = "50%";
    document.getElementById("yellowv").style.left = "50%";
    document.getElementById("yellowv").src = "assets/2022/YS/IMG_5853.JPG";

    document.getElementById("yellowv2").style.display = "block";
    document.getElementById("yellowv2").style.width = "25vw";
    document.getElementById("yellowv2").style.height = "auto";
    document.getElementById("yellowv2").style.top = "20%";
    document.getElementById("yellowv2").style.left = "20%";
    document.getElementById("yellowv2").src = "assets/2022/YS/viwer0.jpg";

    document.getElementById("yellowv3").style.display = "block";
    document.getElementById("yellowv3").style.width = "18vw";
    document.getElementById("yellowv3").style.height = "auto";
    document.getElementById("yellowv3").style.top = "43%";
    document.getElementById("yellowv3").style.left = "88%";
    document.getElementById("yellowv3").src = "assets/2022/YS/poster.png";
  };
  document.getElementById("yellow").onmouseout = function () {
    document.getElementById("yellow").style.zIndex = "auto";
    document.getElementById("yellowv").style.display = "none";
    document.getElementById("yellowv2").style.display = "none";
    document.getElementById("yellowv3").style.display = "none";
  };

  // i think who i am
  // document.getElementById("ii").onmouseover = function () {
  //   document.getElementById("ii").style.zIndex = "9999";
  //   document.getElementById("ip").style.display = "block";
  //   document.getElementById("ip").style.width = "50vw";
  //   document.getElementById("ip").style.height = "auto";
  //   document.getElementById("ip").style.top = "50%";
  //   document.getElementById("ip").style.left = "40%";
  //   document.getElementById("ip").src = "assets/2021/I/0.jpg";

  //   document.getElementById("ip2").style.display = "block";
  //   document.getElementById("ip2").style.width = "20vw";
  //   document.getElementById("ip2").style.height = "auto";
  //   document.getElementById("ip2").style.top = "70%";
  //   document.getElementById("ip2").style.left = "70%";
  //   document.getElementById("ip2").src = "assets/2021/I/1.jpg";

  //   document.getElementById("ip3").style.display = "block";
  //   document.getElementById("ip3").style.width = "20vw";
  //   document.getElementById("ip3").style.height = "auto";
  //   document.getElementById("ip3").style.top = "20%";
  //   document.getElementById("ip3").style.left = "10%";
  //   document.getElementById("ip3").src = "assets/2021/I/3.jpg";

  //   document.getElementById("ip4").style.display = "block";
  //   document.getElementById("ip4").style.width = "15vw";
  //   document.getElementById("ip4").style.height = "auto";
  //   document.getElementById("ip4").style.top = "15%";
  //   document.getElementById("ip4").style.left = "85%";
  //   document.getElementById("ip4").src = "assets/2021/I/5.jpg";
  // };
  // document.getElementById("ii").onmouseout = function () {
  //   document.getElementById("ii").style.zIndex = "auto";
  //   document.getElementById("ip").style.display = "none";
  //   document.getElementById("ip2").style.display = "none";
  //   document.getElementById("ip3").style.display = "none";
  //   document.getElementById("ip4").style.display = "none";
  // };

  // digital fold
  document.getElementById("d").onmouseover = function () {
    document.getElementById("d").style.zIndex = "9999";
    document.getElementById("dg").style.display = "block";
    document.getElementById("dg").style.width = "50vw";
    document.getElementById("dg").style.height = "auto";
    document.getElementById("dg").style.top = "50%";
    document.getElementById("dg").style.left = "50%";
    document.getElementById("dg").src = "assets/2021/digital/1.jpg";

    document.getElementById("dg2").style.display = "block";
    document.getElementById("dg2").style.width = "20vw";
    document.getElementById("dg2").style.height = "auto";
    document.getElementById("dg2").style.top = "20%";
    document.getElementById("dg2").style.left = "80%";
    document.getElementById("dg2").src = "assets/2021/digital/4.jpg";

    document.getElementById("dg3").style.display = "block";
    document.getElementById("dg3").style.width = "20vw";
    document.getElementById("dg3").style.height = "auto";
    document.getElementById("dg3").style.top = "40%";
    document.getElementById("dg3").style.left = "20%";
    document.getElementById("dg3").src = "assets/2021/digital/6.jpg";

    document.getElementById("dg4").style.display = "block";
    document.getElementById("dg4").style.width = "15vw";
    document.getElementById("dg4").style.height = "auto";
    document.getElementById("dg4").style.top = "85%";
    document.getElementById("dg4").style.left = "65%";
    document.getElementById("dg4").src = "assets/2021/digital/IMG_2255.jpg";
  };
  document.getElementById("d").onmouseout = function () {
    document.getElementById("d").style.zIndex = "auto";
    document.getElementById("dg").style.display = "none";
    document.getElementById("dg2").style.display = "none";
    document.getElementById("dg3").style.display = "none";
    document.getElementById("dg4").style.display = "none";
  };

  // // interview
  // document.getElementById("interview").onmouseover = function () {
  //   document.getElementById("interview").style.zIndex = "9999";
  //   document.getElementById("interviewv").style.display = "block";
  //   document.getElementById("interviewv").style.width = "60vw";
  //   document.getElementById("interviewv").style.height = "auto";
  //   document.getElementById("interviewv").style.top = "50%";
  //   document.getElementById("interviewv").style.left = "50%";
  //   document.getElementById("interviewv").src = "assets/2021/interview/3.png";
  // };
  // document.getElementById("interview").onmouseout = function () {
  //   document.getElementById("interview").style.zIndex = "auto";
  //   document.getElementById("interviewv").style.display = "none";
  // };

  //piano
  document.getElementById("piano").onmouseover = function () {
    document.getElementById("piano").style.zIndex = "9999";
    document.getElementById("pianoimg").style.display = "block";
    document.getElementById("pianoimg").style.width = "900px";
    document.getElementById("pianoimg").style.height = "auto";
    document.getElementById("pianoimg").style.top = "50%";
    document.getElementById("pianoimg").style.left = "50%";
    document.getElementById("pianoimg").src = "assets/2021/piano/1.png";
  };
  document.getElementById("piano").onmouseout = function () {
    document.getElementById("piano").style.zIndex = "auto";
    document.getElementById("pianoimg").style.display = "none";
  };

  // pump
  document.getElementById("pump").onmouseover = function () {
    document.getElementById("pump").style.zIndex = "9999";
    document.getElementById("pumpimg").style.display = "block";
    document.getElementById("pumpimg").style.width = "40vw";
    document.getElementById("pumpimg").style.height = "auto";
    document.getElementById("pumpimg").style.top = "50%";
    document.getElementById("pumpimg").style.left = "50%";
    document.getElementById("pumpimg").src = "assets/2021/pump/2.png";

    document.getElementById("pumpimg2").style.display = "block";
    document.getElementById("pumpimg2").style.width = "24vw";
    document.getElementById("pumpimg2").style.height = "auto";
    document.getElementById("pumpimg2").style.top = "73%";
    document.getElementById("pumpimg2").style.left = "25%";
    document.getElementById("pumpimg2").src = "assets/2021/pump/3.jpg";

    document.getElementById("pumpimg3").style.display = "block";
    document.getElementById("pumpimg3").style.width = "22vw";
    document.getElementById("pumpimg3").style.height = "auto";
    document.getElementById("pumpimg3").style.top = "25%";
    document.getElementById("pumpimg3").style.left = "75%";
    document.getElementById("pumpimg3").src = "assets/2021/pump/5.jpg";
  };
  document.getElementById("pump").onmouseout = function () {
    document.getElementById("pump").style.zIndex = "auto";
    document.getElementById("pumpimg").style.display = "none";
    document.getElementById("pumpimg2").style.display = "none";
    document.getElementById("pumpimg3").style.display = "none";
  };
};