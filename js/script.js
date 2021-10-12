$(document).ready(function(){
    //test_01
    //#1. 배열 데이터를 구성한다.
       //배열 구성 순서 = ["이미지 파일", "이미지 타이틀"]
        var $arr_01 = [
            ["img_01.jpg", "마이펫 삼총사"],
            ["img_02.jpg", "마이펫 나들이"],
            ["img_03.jpg", "마이펫 휴식"],
            ["img_04.jpg", "마이펫 엔딩 스토리"],
            ["img_05.jpg", "마이펫 베이비?"],
            ["img_06.jpg", "마이펫 히어로 등장"],
            ["img_07.jpg", "마이펫 작은 협상"],
            ["img_08.jpg", "마이펫 변신"]
       ];
    
    //#2. 패턴으로 구성할 수 있는 항목을 나열(`템플릿 리터럴`)
        var $box_01 = `
        <div class="box">
            <div class="img_box"></div>
            <h4>title</h4>
        </div>
        `;
    
    //#3. index.html 내부에 패턴을 돌려서 구조를 구성(for문과 append()메서드)
    for(i=0; i<$arr_01.length; i++){
        $("#ex_01 .cover").append($box_01);
    }
    
    //#4. 각 패턴 항목으로 접근하여 구성요소에 대한 데이터 값을 배치(each문)
    $("#ex_01 .cover .box").each(function(index){
        $(this).find(".img_box").css("background-image", "url(./img/"+$arr_01[index][0]+")");
        $(this).find("h4").text($arr_01[index][1]);
    });
    
    //#5. 4개의 박스만 보여주고 나머지를 모두 감춘다.
    $("#ex_01 .cover .box").eq(3).nextAll().hide();
    
    //#6. "+더보기" 버튼 클릭시 숨겨진 콘텐츠를 모두 보여준다.
    $("#ex_01 button").click(function(){
        $(this).hide();
        $("#ex_01 .cover .box").show();
    });
    
    
    //===================================================
    
    //test_02
    //#1. 배열 데이터를 구성한다.
       //배열 구성 순서 = ["상단 텍스트", "하단 텍스트"]
        var $arr_02 = [
            ["호텔을 예약하는 방법", "트리바고는 광범위한 호텔 검색을 기반으로 하는 호텔 요금 비교 사이트입니다. 호텔 요금은 전 세계 호텔과 호텔 예약 사이트로부터 전달되는데요, 트리바고에서 검색 조건에 가장 잘 맞는 호텔을 선택하시면 예약은 각 호텔 예약 사이트(트리바고와 링크로 연결된 웹사이트)에서 하시게 됩니다. “선택” 버튼을 클릭하시면 해당 예약 사이트로 바로 이동되며, 해당 사이트에서 트리바고에서 찾은 호텔을 예약하실 수 있어요."],
            ["트리바고(trivago)에서 저렴한 호텔 찾기", "트리바고에서 여러 웹사이트를 한눈에 비교하고 원하는 호텔을 쉽고 저렴하게 찾으실 수 있습니다. 가고 싶은 여행지와 날짜를 선택하시면 스마트한 트리바고 검색 엔진이 자동으로 호텔 요금을 비교해 드립니다. 좀 더 자세한 검색 결과를 원하신다면 요금, 거리(예: 도심에서 거리), 호텔 등급, 고객 평점 등을 기준으로 결과를 보실 수도 있습니다."],
            ["원하는 호텔을 찾는 데 도움이 되는 후기", "1억 7천5백만 개가 넘는 트리바고의 통합 호텔 후기와 1천9백만 장 이상의 사진이 여행지에 대해 더욱 풍부한 정보를 제공해 드립니다. 또한, 호텔에 대한 객관적인 정보를 드리기 위해 트리바고는 익스피디아(Expedia), 호텔스닷컴(Hotels.com) 등 다른 호텔 예약 사이트의 다양한 후기와 평점을 함께 보여드립니다."],
            ["트리바고(trivago) - 호텔 요금 비교 사이트", "트리바고는 단 몇 번의 클릭만으로 전 세계 400개 이상의 호텔 예약 사이트, 190여 개국의 300만여 개 호텔을 검색해 비교 결과를 보여드립니다. 연간 14억 명이 방문하는 저희 트리바고 사이트에서 호텔 비교 기능을 이용하여 같은 도시의 특가 상품을 간편하게 비교하실 수 있습니다."]
       ];
    //#2. 패턴으로 구성할 수 있는 항목을 나열(`템플릿 리터럴`)
        var $box_02 = `
        <div class="box">
            <div class="top">
                <h4>호텔을 예약하는 방법</h4>
                <span>+</span>
            </div>
            <div class="bottom">
                <p>트리바고는 광범위한 호텔 검색을 기반으로 하는 호텔 요금 비교 사이트입니다.</p>
            </div>
        </div>
        `;
    
    //#3. index.html 내부에 패턴을 돌려서 구조를 구성(for문과 append()메서드)
        for(i=0; i<$arr_02.length; i++){
            $("#ex_02 article").append($box_02);
        }
    
    //#4. 각 패턴 항목으로 접근하여 구성요소에 대한 데이터 값을 배치(each문)
        $("#ex_02 .box").each(function(index){        
            $(this).find("h4").text($arr_02[index][0]);
            $(this).find("p").text($arr_02[index][1]);
        });
    
    //#5. 하단 부분을 숨긴다.
        $("#ex_02 .bottom").hide();
    
    //#6. 사용자가 클릭한 곳의 연관된 하단파트만 보여준다.
    //클릭 매개체가 하나일 경우, hasClass("plus") 검사후 true / false 의 결과 값에 따라서 "+", "-"라는 텍스트를 넣어준다. (addClass("plus"), removeClass("plus"))
    //엘리베이터 버튼...
    
        //개별요소로 접근하는 방법(아코디언 방식만 적용)
        /*
        $("#ex_02 span").addClass("plus");    
        $("#ex_02 .box:eq(0) .plus").click(function(){
            $("#ex_02 .bottom").slideUp();
            $("#ex_02 .box:eq(0) .bottom").slideDown();
            $("#ex_02 .box span").removeClass("minus").addClass("plus").text("＋");
            $(this).removeClass("plus").addClass("minus").text("－");
        });
        $("#ex_02 .box:eq(1) .plus").click(function(){
            $("#ex_02 .bottom").slideUp();
            $("#ex_02 .box:eq(1) .bottom").slideDown();
            $("#ex_02 .box span").removeClass("minus").addClass("plus").text("＋");
            $(this).removeClass("plus").addClass("minus").text("－");
        });
        $("#ex_02 .box:eq(2) .plus").click(function(){
            $("#ex_02 .bottom").slideUp();
            $("#ex_02 .box:eq(2) .bottom").slideDown();
            $("#ex_02 .box span").removeClass("minus").addClass("plus").text("＋");
            $(this).removeClass("plus").addClass("minus").text("－");
        });
        $("#ex_02 .box:eq(3) .plus").click(function(){
            $("#ex_02 .bottom").slideUp();
            $("#ex_02 .box:eq(3) .bottom").slideDown();
            $("#ex_02 .box span").removeClass("minus").addClass("plus").text("＋");
            $(this).removeClass("plus").addClass("minus").text("－");
        });
        */
    
    
    /*
        //인접 관계를 기준으로 접근하는 방법
        $("#ex_02 span").click(function(){
            var $active = $(this).hasClass("active");  //true 또는 false
            if($active == false){  //#ex_02 span (오픈되지 않은 상태)
                $("#ex_02 span").removeClass("active").text("＋"); //전체 span태그에서 active라는 클래스를 제거한다.
                $(this).addClass("active").text("－");  //클릭한 곳만 active라는 클래스를 부여한다.
                $("#ex_02 .bottom").slideUp();  //전체를 닫는다.
                $(this).closest(".top").next().slideDown();  //클릭한 영역의 .bottom에만 펼치며 보여준다.
            }else{  //#ex_02 span.active (오픈된 상태)
                $(this).removeClass("active").text("＋");
                $(this).closest(".top").next().slideUp();
            }
        });
    */
        //인덱스 번호를 추출하여 접근하는 방법
        $("#ex_02 span").click(function(){
            var $originIndex = $("#ex_02 span.active").closest(".box").index();
            console.log($originIndex);
            var $bxIndex = $(this).closest(".box").index();
            console.log($bxIndex);  //0,1,2,3
    
            if($originIndex == $bxIndex){  //열려있는 곳의 span 이라는 요소를 클릭한 상태
                $(this).removeClass("active").text("＋");
                $("#ex_02 .box:eq("+$bxIndex+") .bottom").slideUp();
            }else{  //열려있는 곳의 span 이 아닌 다른 곳의 span을 클릭했을 때
                $("#ex_02 span").removeClass("active").text("＋");
                $(this).addClass("active").text("－");
                $("#ex_02 .bottom").slideUp();
                $("#ex_02 .box:eq("+$bxIndex+") .bottom").slideDown();
            }
        });  
    
    
    
    //===================================================
    
    //test_03
    //#1. 배열 데이터를 구성한다.
       //배열 구성 순서 = ["이미지 파일", "이미지 텍스트"]
        var $arr_03 = [
          ["pop-01.jpg", "독일 호수 체험"],
          ["pop-02.jpg", "파리 자유 여행"],
          ["pop-03.jpg", "런던 도심지 여행"],
          ["pop-04.jpg", "그리스 지중해 체험"]
       ];
    
    //#2. 패턴으로 구성할 수 있는 항목을 나열(`템플릿 리터럴`)
        var $box_03 = `
        <div class="box">
            <div class="img_box"></div>
            <h4>여행지</h4>
        </div>
        `;
    
    //#3. index.html 내부에 패턴을 돌려서 구조를 구성(for문과 append()메서드)
        for(i=0; i<$arr_03.length; i++){
            $("#ex_03 .cover_03").append($box_03);
        }
    
    //#4. 각 패턴 항목으로 접근하여 구성요소에 대한 데이터 값을 배치(each문)
        $("#ex_03 .box").each(function(index){
            $(this).find(".img_box").css("background-image", "url(./img/"+$arr_03[index][0]+")");;
            $(this).find("h4").text($arr_03[index][1])
        });
    
    //#5. 각 박스 영역을 클릭시, 해당하는 데이터를 인덱스번호를 통해서 팝업창에 뿌려주는 역할을 구성
        $("#ex_03 .box").click(function(){
            var $index = $(this).index();
            $(".popup_img").css("background-image", "url(./img/"+$arr_03[$index][0]+")");
            $(".popup h3").text($arr_03[$index][1]);
            $(".dark").addClass("active");
            $(".popup").addClass("active");
        });
    
    //#6. 팝업 닫기 구성
        $("#ex_03 .dark, #ex_03 .popup .close").click(function(){
            $(".dark").removeClass("active");
            $(".popup").removeClass("active");
        });
    
    //====================================================
    
    //test_04
    
    //#1. setInterval 구성(자동 슬라이드 기능(마우스 오버되었을 때 일시정지 기능) + 현재 보이는 슬라이드의 rel 값으로 연동한 네비게이터 구성)
    
        function slideNav(){
            var $rel = $("#ex_04 ul li").eq(1).attr("rel");  //0, 1, 2, 3
            $("#ex_04 ol li").removeClass("active");
            $("#ex_04 ol li").eq($rel).addClass("active");
        }
    
    
        //객체이동 파트 : 마지막 슬라이드를 첫번째 자리로 이동
        var $lastSlide = $("#ex_04 ul li").last();
        $("#ex_04 ul").prepend($lastSlide);
    
        setInterval(function(){
            var $hover = $("#ex_04").hasClass("hover");
            if($hover == false){
                var $first = $("#ex_04 ul li").first();
                $("#ex_04 ul").stop().animate({"margin-left":"-200%"}, 500, function(){
                    $("#ex_04 ul").append($first).css("margin-left", "-100%");
    
                    slideNav();
    
                });
            } 
        }, 2500);
    
        $("#ex_04").hover(function(){  //마우스 진입시 이벤트 발생
            $(this).addClass("hover");
        }, function(){  //마우스 이탈시 이벤트 발생
            $(this).removeClass("hover");
        });
    
    
    
    
    
    
    //#2. hover이벤트를 통한 클래스 부여
    
    
    
    });