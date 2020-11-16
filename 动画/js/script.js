const arr=[
    {
        id:1,
        color_l:"#f8d41f",
        color_r:"#f4ecc5",
        img:'img/pikachu.png',
        text1:"SC.CHINAZ.COM",
        text2:"Pikachu",
        text3:"文本描述部分"
    },
    {
        id:2,
        color_l:"#3e9fe6",
        color_r:"#d3eaef",
        img:'img/pilup.png',
        text1:"POKEMON GEN IV",
        text2:"Pilup",
        text3:"Piplup is the Water-type Starter Pokémon of the Sinnoh region. It was introduced in Generation IV. Piplup has a strong sense of self-esteem. It seldom accepts food that people give because of its pride."
    },
    {
        id:3,
        color_l:"#f64f37",
        color_r:"#ffebcd",
        img:'img/blaziken.png',
        text1:"POKEMON GEN III",
        text2:"Blaziken",
        text3:"Blaziken is the Fire/Fighting-type Starter Pokémon of the Hoenn region, introduced in Generation III. Blaziken is a large, bipedal, humanoid bird-like Pokémon that resembles a rooster."

    },
    {
        id:4,
        color_l:"#476089",
        color_r:"#ade8f7",
        img:'img/dialga.png',
        text1:"POKEMON GEN IV",
        text2:"Dialga",
        text3:"Dialga is a Steel/Dragon-type Legendary Pokémon. Dialga is a sauropod-like Pokémon. It is mainly blue with some gray, metallic portions, such as its chest plate, which has a diamond in the center. It also has various, light blue lines all over its body."
    },
    {
        id:5,
        color_l:"#424242",
        color_r:"#a7bcbb",
        img:'img/zekrom.png',
        text1:"POKEMON GEN V",
        text2:"Zekrom",
        text3:"Zekrom is a Dragon/Electric-type Legendary Pokémon. It is part of the Tao Trio, along with Reshiram and Kyurem. Zekrom is a large, black draconian Pokémon that seems to share its theme with its counterpart, Reshiram. It has piercing red eyes and dark gray to black skin that seems to be armor-like."
    }
];
$(function(){

   

var t_height=$('.txt').height();
var w_height=window.innerHeight;
var h=(w_height-t_height)/2;
$('.txt').css("margin-top",h+"px");
    //选项卡
for(var i=arr.length;i>=1;i--){
    var $li=$("<li><div class='fgx ca"+i+"'></div></li>");
    $li.prependTo($("ul"));
}

for(var j=1;j<=5;j++){
    $(".ca"+j).bind("click",{
        index:j
    },clickHandler)
}
function clickHandler(event){
    var n=event.data.index;
    $(".ca"+n).css("border-bottom","7px solid white");
    $(".right").css("background-color",arr[n-1].color_r);
    $(".left").css("background-color",arr[n-1].color_l);
    $("img").attr("src",arr[n-1].img);
    $(".txt P:nth-child(1)").text(arr[n-1].text1);
    $(".txt P:nth-child(2)").text(arr[n-1].text2);
    $(".txt P:nth-child(3)").text(arr[n-1].text3);
    $(".fgx:not(.ca"+n+")").css("border-bottom","7px solid rgba(0,0,0,0.2)");
    
}

})


