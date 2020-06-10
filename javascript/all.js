$(document).ready(function(){
    

    let A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0 ;

    
    $('.start').on('click', function(e){
        e.preventDefault();
        $('#question').show();
        $('#intro').hide();
        $('#result').hide();
        $('#article').hide();
        $('footer').hide();
        $('#q-one').show();
        $('#q-seven').hide();
        $('input[name=q-one]').prop("checked", false);
        $('input[name=q-two]').prop("checked", false);
        $('input[name=q-three]').prop("checked", false);
        $('input[name=q-four]').prop("checked", false);
        $('input[name=q-five]').prop("checked", false);
        $('input[name=q-six]').prop("checked", false);
        $('input[name=q-seven]').prop("checked", false);
        $('#a-result').hide();
        $('#b-result').hide();
        $('#c-result').hide();
        $('#d-result').hide();
        $('#e-result').hide();
        $('#f-result').hide();
        $('#g-result').hide();
        $('#h-result').hide();
        $('#i-result').hide();
        $('#j-result').hide();
        A=0;
        B=0;
        C=0;
        D=0;
        E=0;
        F=0;
        G=0;
        H=0;
        I=0;
        J=0;
        $(document).attr("title", "Pocket Japan Test");
        // $(window).scrollTop($('#question').offset().top);
    });
    $('.next-2').on('click', function(e){
        e.preventDefault();

        if (!$('input[name=q-one]:checked').val()){
            alert("請選擇");
        }else{
            $('#q-one').hide();
            $('#q-two').show();
        }

    });
    $('.next-3').on('click', function(e){
        e.preventDefault();
        if (!$('input[name=q-two]:checked').val()){
            alert("請選擇");
        }else{
            $('#q-two').hide();
            $('#q-three').show();
        }
    });
    $('.next-4').on('click', function(e){
        e.preventDefault();
        if (!$('input[name=q-three]:checked').val()){
            alert("請選擇");
        }else{
            $('#q-three').hide();
            $('#q-four').show();
        }
    });
    $('.next-5').on('click', function(e){
        e.preventDefault();
        if (!$('input[name=q-four]:checked').val()){
            alert("請選擇");
        }else{
            $('#q-four').hide();
            $('#q-five').show();
        }
    });
    $('.next-6').on('click', function(e){
        e.preventDefault();
        if (!$('input[name=q-five]:checked').val()){
            alert("請選擇");
        }else{
            $('#q-five').hide();
            $('#q-six').show();
        }
    });
    $('.next-7').on('click', function(e){
        e.preventDefault();
        if (!$('input[name=q-six]:checked').val()){
            alert("請選擇");
        }else{
        $('#q-six').hide();
        $('#q-seven').show();
        }
    });
    
    $('.next-result').on('click', function(e){
        e.preventDefault();
        

        // q-one
        if( $('input[name=q-one]:checked').val() == 'A'){
            A += 3;
            D += 2;
            H += 1;
            J += 1;
            
        }else if ($('input[name=q-one]:checked').val() == 'B' ){
            A += 1;
            E += 1;
            F += 3;
            G += 2; 
            I += 2;
        }else if ($('input[name=q-one]:checked').val() == 'C' ){
            H += 3;
            J += 1; 
            D += 2;
        }else if ($('input[name=q-one]:checked').val() == 'D' ){
            B += 2;
            C += 3;
            E += 5;
            F += 1; 
        }else if ($('input[name=q-one]:checked').val() == 'E' ){
            E += 1;
            G += 3; 
            H += 3;
        };

        // q-two
        if( $('input[name=q-two]:checked').val() == 'A'){
            A += 2;
            B += 2;
            D += 3;
            F += 1;
        }else if ($('input[name=q-two]:checked').val() == 'B' ){
            C += 2;
            F += 2;
            G += 3; 
            J += 2;
        }else if ($('input[name=q-two]:checked').val() == 'C' ){
            D += 1;
            H += 1;
            I += 3;
            J += 1; 
        }else if ($('input[name=q-two]:checked').val() == 'D' ){
            A += 1;
            E += 1;
            H += 2; 
        }else if ($('input[name=q-two]:checked').val() == 'E' ){
            F += 1;
            I += 2; 
        };

        // q-three
        if( $('input[name=q-three]:checked').val() == 'A'){
            B += 3;
            G += 2;
            I += 4;
        }else if ($('input[name=q-three]:checked').val() == 'B' ){
            A += 1;
            C += 2;
            J += 2; 
        }else if ($('input[name=q-three]:checked').val() == 'C' ){
            H += 2;
        }else if ($('input[name=q-three]:checked').val() == 'D' ){
            D += 2; 
        }else if ($('input[name=q-three]:checked').val() == 'E' ){
            E += 2;
            F += 3;
        };

        //q-four
        if( $('input[name=q-four]:checked').val() == 'A'){
            C += 2;
            E += 2;
        }else if ($('input[name=q-four]:checked').val() == 'B' ){
            A += 2;
        }else if ($('input[name=q-four]:checked').val() == 'C' ){
            B += 1;
            F += 2;
            G += 3;
        }else if ($('input[name=q-four]:checked').val() == 'D' ){
            H += 2; 
            J += 1;
            I += 3;
        }else if ($('input[name=q-four]:checked').val() == 'E' ){
            D += 1;
            H += 3;
        };

        //q-five
        if( $('input[name=q-five]:checked').val() == 'A'){
            A += 2;
        }else if ($('input[name=q-five]:checked').val() == 'B' ){
            C += 0;
            E += 1;
            G += 3;
        }else if ($('input[name=q-five]:checked').val() == 'C' ){
            B += 2;
            I += 1;
            J += 3;
        }else if ($('input[name=q-five]:checked').val() == 'D' ){
            D += 3; 
            F += 2;
        }else if ($('input[name=q-five]:checked').val() == 'E' ){
            H += 1;
            C += 2;
        };

        //q-six
        if( $('input[name=q-six]:checked').val() == 'A'){
            A += 1;
        }else if ($('input[name=q-six]:checked').val() == 'B' ){
            F += 2;
            I += 3;
        }else if ($('input[name=q-six]:checked').val() == 'C' ){
            C += 2;
            G += 2;
        }else if ($('input[name=q-six]:checked').val() == 'D' ){
            B += 3;
            D += 1; 
            J += 2;
        }else if ($('input[name=q-six]:checked').val() == 'E' ){
            E += 1;
            H += 2;
        };

        //q-seven
        if( $('input[name=q-seven]:checked').val() == 'A'){
            B += 5;
            I += 2;
        }else if ($('input[name=q-seven]:checked').val() == 'B' ){
            C += 5;
            D += 2;
            E += 1;
        }else if ($('input[name=q-seven]:checked').val() == 'C' ){
            F += 2;
            H += 3;
        }else if ($('input[name=q-seven]:checked').val() == 'D' ){
            A += 3; 
            J += 2;
        }else if ($('input[name=q-seven]:checked').val() == 'E' ){
            G += 1;
        };
        
        // console.log(A,B,C,D,E,F,G,H,I);

        // 依據分數更換結果
        if(A >= B && A >= C && A >= D && A >= E && A >= F && A >= G && A >= H && A >= I && A >= J) {
            // $("#result-desc").text("123");
            console.log("A");
            $(document).attr("title", "我是醬油型職場調味料：無法消除的存在感，講話特別大聲，笑聲特別響亮");
            $('#result h2').text("你在職場是醬油型調味料");
            $('#a-result').show();
            $('#result img').attr('src','source/img/soysauce.png');
            $('meta[property="og:title"]').attr("content", "我是醬油型職場調味料：無法消除的存在感，講話特別大聲，笑聲特別響亮");
            $('meta[property="og:image"]').attr("content", "https://upload.cc/i1/2020/06/09/AocRWL.png");
            $('#result a.btn.link').attr('href', 'https://pocketjapan.tw/34664/');
        }else if(B >= A && B >= C && B >= D && B >= E && B >= F && B >= G && B >= H && B >= I && B >= J){
            console.log("B");
            $(document).attr("title", "我是辣油型職場調味料：火辣辣的同事是你，不論是同事還是老闆，直來直往沒在怕");
            $('#result h2').text("你在職場是辣油型調味料");
            $('#b-result').show();
            $('#result img').attr('src','source/img/spicy.png');
            $('#result a.btn.link').attr('href', 'https://pocketjapan.tw/34437/');
            $('meta[property="og:title"]').attr("content", "我是辣油型職場調味料：火辣辣的同事是你，不論是同事還是老闆，直來直往沒在怕");
            $('meta[property="og:image"]').attr("content", "https://upload.cc/i1/2020/06/09/iLy3vn.png");
        }else if(C >= A && C >= B && C >= D && C >= E && C >= F && C >= G && C >= H && C >= I && C >= J){
            console.log("C");
            $(document).attr("title", "我是黑糖型職場調味料：八面玲瓏，嘴甜最得寵");
            $('#result h2').text("你在職場是黑糖型調味料");
            $('#c-result').show();
            $('#result img').attr('src','source/img/sugar.png');
            $('meta[property="og:title"]').attr("content", "我是黑糖型職場調味料：八面玲瓏，嘴甜最得寵");
            $('meta[property="og:image"]').attr("content", "https://upload.cc/i1/2020/06/09/2bvCMY.png");
            $('#result a.btn.link').attr('href', 'https://pocketjapan.tw/34491/');
        }else if(D >= A && D >= B && D >= C && D >= E && D >= F && D >= G && D >= H && D >= I && D >= J){
            console.log("D");
            $(document).attr("title", "我是鹽巴型職場調味料：CARRY系同事，有加他萬事OK");
            $('#result h2').text("你在職場是鹽巴型調味料");
            $('#d-result').show();
            $('#result img').attr('src','source/img/salt.png');
            $('meta[property="og:title"]').attr("content", "我是鹽巴型職場調味料：CARRY系同事，有加他萬事OK");
            $('meta[property="og:image"]').attr("content", "https://upload.cc/i1/2020/06/09/nSPWXr.png");
            $('#result a.btn.link').attr('href', 'https://pocketjapan.tw/34674/');
        }else if(E >= A && E >= B && E >= C && E >= D && E >= F && E >= G && E >= H && E >= I && E >= J){
            console.log("E");
            $(document).attr("title", "我是湯底型職場調味料：後台很硬的同事(學歷很高或是走後門)");
            $('#result h2').text("你在職場是湯底型調味料");
            $('#e-result').show();
            $('#result img').attr('src','source/img/soup.png');
            $('meta[property="og:title"]').attr("content", "我是湯底型職場調味料：後台很硬的同事(學歷很高或是走後門)");
            $('meta[property="og:image"]').attr("content", "https://upload.cc/i1/2020/06/09/SFo5Y9.png");
            $('#result a.btn.link').attr('href', 'https://pocketjapan.tw/34682/');
        }else if(F >= A && F >= B && F >= C && F >= D && F >= E && F >= G && F >= H && F >= I && F >= J){
            console.log("F");
            $(document).attr("title", "我是醋型職場調味料：主管比較愛誰？為什麼他獎金比我多？愛吃醋心裡酸溜溜同事");
            $('#result h2').text("你在職場是醋型調味料");
            $('#f-result').show();
            $('#result img').attr('src','source/img/vinegar.png');
            $('meta[property="og:title"]').attr("content", "我是醋型職場調味料：主管比較愛誰？為什麼他獎金比我多？愛吃醋心裡酸溜溜同事");
            $('meta[property="og:image"]').attr("content", "https://upload.cc/i1/2020/06/09/dfBVve.png");
            $('#result a.btn.link').attr('href', 'https://pocketjapan.tw/34534/');
        }else if(G >= A && G >= B && G >= C && G >= D && G >= E && G >= F && G >= H && G >= I && G >= J){
            console.log("G");
            $(document).attr("title", "我是炒麵醬型職場調味料：搖滾區型同事！到哪都愛開趴愛揪團員購的同事");
            $('#result h2').text("你在職場是炒麵醬型調味料");
            $('#g-result').show();
            $('#result img').attr('src','source/img/soba.png');
            $('meta[property="og:title"]').attr("content", "我是炒麵醬型職場調味料：搖滾區型同事！到哪都愛開趴愛揪團員購的同事");
            $('meta[property="og:image"]').attr("content", "https://upload.cc/i1/2020/06/09/EqaNLU.png");
            $('#result a.btn.link').attr('href', 'https://pocketjapan.tw/34666/');
        }else if(H >= A && H >= B && H >= C && H >= D && H >= E && H >= F && H >= G && H >= I && H >= J){
            console.log("H");
            $(document).attr("title", "我是美乃滋型職場調味料：自閉怪咖，孤芳自賞電波系同事");
            $('#result h2').text("你在職場是美乃滋型調味料");
            $('#h-result').show();
            $('#result img').attr('src','source/img/mayonnaise.png');
            $('meta[property="og:title"]').attr("content", "我是美乃滋型職場調味料：自閉怪咖，孤芳自賞電波系同事");
            $('meta[property="og:image"]').attr("content", "https://upload.cc/i1/2020/06/09/ra8ZXP.png");
            $('#result a.btn.link').attr('href', 'https://pocketjapan.tw/34564/');
        }else if(I >= A && I >= B && I >= C && I >= D && I >= E && I >= F && I >= G && I >= H && I >= J){
            console.log("I");
            $(document).attr("title", "我是芝麻醬型職場調味料：口嫌體正直同事，總是喊著要離職但最後總是喊「真香～」");
            $('#result h2').text("你在職場是芝麻醬型調味料");
            $('#i-result').show();
            $('#result img').attr('src','source/img/sesame.png');
            $('meta[property="og:title"]').attr("content", "我是芝麻醬型職場調味料：口嫌體正直同事，總是喊著要離職但最後總是喊「真香～」");
            $('meta[property="og:image"]').attr("content", "https://upload.cc/i1/2020/06/09/sSzkKc.png");
            $('#result a.btn.link').attr('href', 'https://pocketjapan.tw/34599/');
        }else if(J >= A && J >= B && J >= C && J >= D && J >= E && J >= F && J >= G && J >= H && J >= I){
            console.log("J");
            $(document).attr("title", "我是鰹魚露型職場調味要：天使心賢妻良母同事，大家心情不好跟八卦都找他");
            $('#result h2').text("你在職場是鰹魚露型調味料");
            $('#j-result').show();
            $('#result img').attr('src','source/img/fish.png');
            $('meta[property="og:title"]').attr("content", "我是鰹魚露型職場調味要：天使心賢妻良母同事，大家心情不好跟八卦都找他");
            $('meta[property="og:image"]').attr("content", "https://upload.cc/i1/2020/06/09/BHfprM.png");
            $('#result a.btn.link').attr('href', 'https://pocketjapan.tw/34727/');
        }

        if (!$('input[name=q-seven]:checked').val()){
            alert("請選擇");
        }else{
            $("section#question").hide();
            $('section#intro').hide();
            $("section#result").show();
            $("section#article").show();
            $("footer").show();
            $("#intro").show();
            $(".start").text('重新測驗');
            $(window).scrollTop($('#result').offset().top);
        }
    });

    $('.restart').on('click', function(e){
        // e.preventDefault();
        $('#q-one').show();
        $('#q-seven').hide();
        $("section#question").show();
        $('section#intro').show();
        $("section#result").hide();
        $("section#article").hide();
        $('footer').hide();
        $('#a-result').hide();
        $('#b-result').hide();
        $('#c-result').hide();
        $('#d-result').hide();
        $('#e-result').hide();
        $('#f-result').hide();
        $('#g-result').hide();
        $('#h-result').hide();
        $('#i-result').hide();
        $('#j-result').hide();
        $('input[name=q-one]').prop("checked", false);
        $('input[name=q-two]').prop("checked", false);
        $('input[name=q-three]').prop("checked", false);
        $('input[name=q-four]').prop("checked", false);
        $('input[name=q-five]').prop("checked", false);
        $('input[name=q-six]').prop("checked", false);
        $('input[name=q-seven]').prop("checked", false);
        A=0;
        B=0;
        C=0;
        D=0;
        E=0;
        F=0;
        G=0;
        H=0;
        I=0;
        J=0;
        $(document).attr("title", "Pocket Japan Test");
        $("#intro").hide();
    });

    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });
});
