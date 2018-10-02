$(document).ready(function () {

    var indexCenter = 2;
    var indexRight =2;
    var indexQuote = 2;

    var delayTimeCenter = 10000;
    var delayTimeRight = 10000;
    var delayTimeQuote = 12000;

    setInterval(function(){
        if (indexCenter == 4) {
            indexCenter = 1;
        }

        $('div.center').css({
            'background-image':'url("picture for html/CENTER/'+indexCenter+'.jpg")'
        });
        console.log(indexCenter);
        indexCenter++;
    }, delayTimeCenter);


    setInterval(function(){

        if (indexRight == 5) {
            indexRight = 1;
        }
        
        $('div.up').css({
            'background-image':'url("picture for html/UP/'+indexRight+'.jpg")'
        });
        indexRight++;
    }, delayTimeRight);


    setInterval(function(){

        if (indexQuote == 3) {
            indexQuote = 1;
        }

        if(indexQuote==1){
            $('#quote1').css({
                'display':'block'
            });
            $('#quote2').css({
                'display':'none'
            });
        }
        else if(indexQuote==2){
            $('#quote1 ').css({
            'display':'none'
            });
            $('#quote2').css({
                'display':'block'
            });
        }


        indexQuote++;
    }, delayTimeQuote);

});