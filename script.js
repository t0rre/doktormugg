const colorscheme = {0: {name: "neon", color: "linear-gradient(135deg, #0074E8, #FF4387)"}, 1: {name: "algae", color: "linear-gradient(135deg, #00FF50, #00BDFF)"}};
initColorSchemeChanger({
    htmlElement: $("body"),
    dark:{
        "--bg-color": "#23272A",
        "--text-color": "white",
        "--accent-color-1": "orangered",
        },
    light: {
        "--bg-color": "white",
        "--text-color": "black",
        "--accent-color-1": "orangered",
        }
    })
$(".banner #dm_computer_container").append(dm_computer);
$("#colorscheme").click(function(){
    if($("body").css("--bg-image") == colorscheme[0].color)
    {
        $("body").css("--bg-image", colorscheme[1].color);
        $("#colorscheme .text_container p").replaceWith("<p>"+colorscheme[1].name+"</p>");
    }
    else {
        $("body").css("--bg-image", colorscheme[0].color);
        $("#colorscheme .text_container p").replaceWith("<p>"+colorscheme[0].name+"</p>");
    }
})
$(window).scroll(function (e) {
    console.log($(window).scrollTop())
    if($(window).scrollTop() > 0)
    {
        $("#colorscheme .text_container").css("display", "none");
        $("#colorscheme").css("width", "3rem");
        if($(window).scrollTop() > 200)
        {
            $("#colorscheme").css("opacity", "0");
        }
        else
        {
            $("#colorscheme").css("opacity", "1");
        }
    }
    else
    {
        $("#colorscheme").css("width", "110px");
        $("#colorscheme .text_container").css("display", "flex");
    }
})