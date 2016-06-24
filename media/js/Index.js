$(function(){
    var indexs = 1;
    function autoScroll(element){
        var length = element.find("li").length;
        element.css({"width":length*100+"%"});
        if(indexs == length){
            element.eq(0).removeAttr("style").clone(true).appendTo($(".scroll_mod"));
            element.eq(0).css({"margin-left":-1300*(indexs-1)}).animate({"margin-left":-1300*indexs},300,function(){
                element.eq(0).remove();
            });
            indexs = 1;
        }else{
            element.eq(0).animate({"margin-left":-1300*indexs});
            indexs++;
        }
    }
    setInterval(function(){
        autoScroll($(".indexScrollList"));
    },3000)
});