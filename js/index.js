// 计算根字体大小
document.addEventListener('DOMContentLoaded', function() {

    var html = document.documentElement;
    var windowWidth = html.clientWidth;
    if (windowWidth > 400) {
        windowWidth = 400;
    }
    html.style.fontSize = windowWidth / 7.5 + 'px';
}, false);

// fullpage初始化
$(function() {
    $('#container').fullpage({
        keyboardScrolling: false,
        afterLoad: animateIn,
        onLeave: animateOut
    });
    $.fn.fullpage.setAllowScrolling(false);

    $('.start-img').click(function() {
        $.fn.fullpage.moveSectionDown();
    });

});

function animateIn(anchorLink, index) {
    console.log(index);
    switch (index) {
        case 1:
        $('.ans-list').removeClass('animated fadeInRight');
            break;
        case 22:
            $('.result-title').addClass('animated fadeInDown');
            $('.result-img').addClass('animated fadeInLeftBig');
            $('.result-cont').addClass('animated fadeInUp');
            $('.btn-go').addClass('animated bounceIn');
            
            break;
        default:
            $('.ans-list').addClass('animated fadeInRight');
            $('.qus').addClass('animated pulse');
            $('.ans-img').addClass('animated pulse');


    }
}
function animateOut(anchorLink,index) {

    switch(index) {
        case 1:
         $('.ans-list').removeClass('animated fadeInRight');
            break;
        case 22:
            $('.ans-list').removeClass('animated fadeInRight');
            break;
        default:
            $('.ans-list').removeClass('animated fadeInRight');
            $('.qus').removeClass('animated pulse');
            $('.ans-img').removeClass('animated pulse');
    }
}

var qusData = data;
var imgs=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg'];
var gifs=['img/level-0.gif','img/level-1.gif','img/level-2.gif','img/level-3.gif','img/level-4.gif','img/level-5.jpg'];

var vm = new Vue({
    el: '#container',
    data: {
        list: qusData,
        count: 0,
        randomImg:'img/index.jpg',
        end:{
            endText:'',
            endGif:''
        },
        ansIndex:['A','B','C','D']
    },
    methods: {
        next: next
    }
});


function next(ans, currentAns) {
    if (ans == currentAns) {
        this.count++;
    }
    var index=getRandom();
    this.randomImg=imgs[index];
    $.fn.fullpage.moveSectionDown();

    if(this.count<=5){
        this.end.endText='20题你答对了'+this.count+'道。真该让你认识一下，曾艳芬是谁！';
        this.end.endGif=gifs[5];
    }else if(this.count<=10){
        this.end.endText='20题你答对了'+this.count+'道。扪心自问，你zen的是撸推吗？';
        this.end.endGif=gifs[4];
        console.log(this.endGif);
    }else if(this.count<=14){
        this.end.endText='20题你答对了'+this.count+'道。让你不用功，放学后留下来不可！';
        this.end.endGif=gifs[3];
    }else if(this.count<=17){
        this.end.endText='20题你答对了'+this.count+'道。还不错，但你不想距离我更近一点吗？';
        this.end.endGif=gifs[2];
    }else if(this.count<20){
        this.end.endText='20题你答对了'+this.count+'道。棒棒哒撸推！';
        this.end.endGif=gifs[1];
    }else if(this.count=20){
        this.end.endText='全部答对！你则个gay！';
        this.end.endGif=gifs[0];
    }

}

function getRandom(){
    return Math.floor(Math.random()*5+1);
}