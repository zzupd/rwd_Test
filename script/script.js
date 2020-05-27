// 자동슬라이드쇼 중지
$("#slideMain .arrowIcon").mouseover(function(){
      clearInterval(chk);          
});


// 이전 슬라이드쇼 이동(왼쪽버튼)
$("#prevIcon").click(function(){

      var animateChk = $("#slideCellMain>#slideShuttleFrame").is(":animated");

      if ( !animateChk ) {
            
            $("#slideCellMain>#slideShuttleFrame").css({"margin-left": "-294px"});
            $("#slideShuttleFrame>li.frameLi:last-child").clone()
                                    .insertBefore("#slideShuttleFrame>li.frameLi:first-child");
      
            $("#slideCellMain>#slideShuttleFrame")
                              .animate({"margin-left": "0px"},
                                    1000,
                                    function(){
                                          $(this).children("li.frameLi:last-child").remove();
                                    });
      }

});


// 다음 슬라이드쇼 이동(오른쪽버튼)
$("#nextIcon").on("click", function(){

      var animateChk = $("#slideCellMain>#slideShuttleFrame").is(":animated");
      if ( !animateChk ) fnSlide();

});
/*
30번줄의 내용은 아래처럼 변경가능함.
$("#nextIcon").click(function(){ ... });
=>  $("#nextIcon").on("click",  function(){ ... });

*/



/* ////////////////////// 자동 슬라이드 쇼 시작 /////////////////////// */
var now=0;
var imgCnt=3;

var chk;
fnSlideStart();
function fnSlideStart() {
      chk = setInterval("fnSlide()", 5000);    
}

function fnSlide() {

    $("#slideShuttleFrame>li.frameLi:first-child").clone()
                              .insertAfter("#slideShuttleFrame>li.frameLi:last-child");
    
    $("#slideCellMain>#slideShuttleFrame")
                    .animate({"margin-left": "-294px"},
                                   1000,
                                   function(){
                                         $(this).children("li.frameLi:first-child").remove();
                                         $(this).css({"margin-left": "0"});
                                   });
    
}

/* ////////////////////// 자동 슬라이드 쇼 끝 /////////////////////// */


