$(document).ready(function () {
    $('.input').css("display", "none");
    $.get("https://openexchangerates.org/api/latest.json?app_id=5c255776e4084c218400ea64481d9642", function (data, status) {
        $(".center-vertical").removeClass("active");
        $('.input').css('display', 'block');
        if (data) {
            console.log(data);
            var num = 0;
            var carousel = $(".carousel");
            var array = [];
            for (elem in data.rates) {
                var str = `<a href="#"><div class="card carousel-item" id='${elem}' name='${num}'  >
                                    <div class="card-content  green white-text">
                                        <p class="card-stats-title"><i class="mdi-editor-attach-money"></i> ${elem}</p>
                                        <h4 class="card-stats-number">${data.rates[elem]}</h4>
                                        </p>
                                    </div>
                                </div></a>`;

                array.push(str);
                num++;
            }
            carousel.append(array.join(''));
            carousel.carousel();
        }
    });

    $("#divisa").keypress(function (event) {

        $(".msj").css('visibility', "hidden");
        var val = $(this).val();
        val = val.toUpperCase();
        if (event.keyCode === 13) {
            $(this).val("");
            console.log(val);
            var item = $('#' + val).attr('name');
            if (item === undefined) {
                $(".msj").css('visibility', "visible");
            } else {
                $('.carousel').carousel('set', item);
            }

        }
    });

    // $('#divisa').formatter({
    //     'pattern': '[A-Z]',
    // });
});