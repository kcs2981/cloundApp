$(function(){
    var indexs = 1;
    function autoScroll(){
        if(indexs ==2){
            $(".indexScrollList").eq(0).removeAttr("style").clone(true).appendTo($(".scroll_mod"));
            $(".indexScrollList").eq(0).css({"margin-left":-1300*(indexs-1)}).animate({"margin-left":-1300*indexs},300,function(){
                $(".indexScrollList").eq(0).remove();
            });
            console.log(indexs)
            indexs = 1;
        }else{
            $(".indexScrollList").eq(0).animate({"margin-left":-1300*indexs});
            indexs++;
            console.log(indexs)
        }
    }
    setInterval(autoScroll,3000)
});