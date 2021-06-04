var diary_idx = 1;
var diary_num = 3;

window.onload = function() {
    var desc=["Description1", "Description2", "Description3"]
    var index = 0;

    var interval = setInterval(function() {
    $('#book1_desc').fadeOut(500, function() {
        index++;
        if (index === desc.length)
            index = 0
        $(this).text(desc[index]).fadeIn(500);
        });
    }, 4000);

    var leftarrow = document.getElementById('left-arrow');
    var rightarrow = document.getElementById('right-arrow');

    leftarrow.onclick = function() {
        $('#book1_desc').fadeOut(500, function() {
            index--;
            if (index === -1)
                index = 2;
            $(this).text(desc[index]).fadeIn(500);
            clearInterval(interval);
            interval = setInterval(function() {
                $('#book1_desc').fadeOut(500, function() {
                    index++;
                    if (index === desc.length)
                        index = 0;
                    $(this).text(desc[index]).fadeIn(500);
                        if (index === desc.length)
                            index = 0
                        console.log(index + ":Interval");
                    });
                }, 4000);
            });
    }


    rightarrow.onclick = function() {
        $('#book1_desc').fadeOut(300, function() {
            index++;
            if (index === desc.length)
                index = 0;
            $(this).text(desc[index]).fadeIn(500);
            clearInterval(interval);
            interval = setInterval(function() {
                $('#book1_desc').fadeOut(300, function() {
                    index++;
                    if (index === desc.length)
                        index = 0;
                    $(this).text(desc[index]).fadeIn(500);
                        if (index === desc.length)
                            index = 0
                        console.log(index + ":Interval");
                    });
                }, 4000);
            });
    }


    // $("#diary_title").load("diary/diary1.html #title");
    // $("#diary_text").load("diary/diary1.html #text");

    $.get('/diary/diary1.html', replaceDiary);

    var diary_left_arrow = document.getElementById("diary_left_arrow");
    var diary_right_arrow = document.getElementById("diary_right_arrow");

    diary_left_arrow.onclick = diaryLeftClick;
    diary_right_arrow.onclick = diaryRightClick;
}


function replaceDiary(data){
    var diary = $.parseHTML(data);

        var title = diary.find(function(data){
            if (data.id === 'title') return true;
        });
        var text = diary.find(function(data){
            if (data.id === 'text') return true;
        });
        var img = diary.find(function(data){
            if (data.id === 'img') return true;
        });

        var diary_title = document.getElementById("diary_title");
        var diary_text = document.getElementById("diary_text");
        var diary_img = document.getElementById("diary_img");

        diary_title.innerText = title.innerText;
        diary_text.innerText = text.innerText;
        diary_img.src = img.src;
}

function diaryLeftClick(){
    $('.diary').fadeOut(500, function(){
        diary_idx--;
        if (diary_idx < 1) diary_idx = diary_num ;
        var html = "/diary/diary" + diary_idx + ".html";
        $.get(html, replaceDiary);
        $(this).fadeIn(500);
    });
}

function diaryRightClick(){
    $('.diary').fadeOut(500, function(){
        diary_idx++;
        if (diary_idx > diary_num) diary_idx = 1;
        var html = "/diary/diary" + diary_idx + ".html";

        $.get(html, replaceDiary);
        $(this).fadeIn(500);
    });
}