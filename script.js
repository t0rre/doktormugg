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