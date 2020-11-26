var stickytest = document.getElementsByClassName('stickytest')[0];
var onTop = document.getElementsByClassName('articles')[0];
var onTopHeight = onTop.getBoundingClientRect().height;
console.log('Less than: '+(document.documentElement.scrollHeight - onTopHeight));
console.log(stickytest.style.backgroundPositionY);
document.addEventListener('scroll', function(e) {
    let scrollPos = window.scrollY;
    console.log('Scroll pos y: '+scrollPos+' Window height: '+window.innerHeight);
    if(scrollPos > window.innerHeight)
    {
        stickytest.style.backgroundPositionY = '-'+(scrollPos-window.innerHeight)+'px';
        console.log('New background pos: '+stickytest.style.backgroundPositionY);
    }
})