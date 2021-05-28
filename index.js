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
        $('#book1_desc').fadeOut(500, function() {
            index++;
            if (index === desc.length)
                index = 0;
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

}