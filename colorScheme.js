//Programmed by Tor Smedberg, https://te19tosm.kgwebb.se/js/Uppgift_3
//Example options:
/* const example ={
    htmlElement: $("*"),
    dark:{
        "--bg-color": "#2C2F33",
        "--text-color": "white",
        "--accent-color-1": "orangered",
        },
    light: {
        "--bg-color": "white",
        "--text-color": "black",
        "--accent-color-1": "orangered",
        }
    } */
var option = {};

function initColorSchemeChanger(options)
{
    option = options;
    let match = window.matchMedia('(prefers-color-scheme: dark)');
    match.addEventListener("change", updateColor);
    updateColor(match);
}
function updateColor(e)
{
    if(e.matches)
    {
        for(let i in option.dark)
        {
            option.htmlElement.css(i, option.dark[i]);
        }
    }
    else
    {
        for(let i in option.light)
        {
            option.htmlElement.css(i, option.light[i]);
        }
    }
}
