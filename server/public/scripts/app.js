
var counter = 0;
var buttonCount=0;
$(document).ready(function(){

  var kappaBasket;

    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        appendDomNext(data);
        kappaBasket= data;
      }
    });
    console.log('Inside the doc ready ',kappaBasket);

    $('.buttoncol').on('click', '.next', showNextKappen);
    $('.buttoncol').on('click', '.prev', showPrevKappen);
    setInterval(showNextKappen, 10000);


    $( '.circles' ).on('click', '.tiny-circle', function(e) {
    e.preventDefault();

    $(".kappen-profile"+(buttonCount)).fadeOut("slow");
    $(".tiny-circle"+(buttonCount)).removeClass('tiny-circle-border')
    buttonCount = $(this).data('loc-subject');
    $(".kappen-profile"+(buttonCount)).fadeIn("slow");
    $(".tiny-circle"+(buttonCount)).addClass('tiny-circle-border')

    console.log(buttonCount)

});



});

function showNextKappen(){
    console.log('Inside the showNextKappen function ', kappaBasket);

    $(".kappen-profile"+(buttonCount)).fadeOut("slow");
    $(".tiny-circle"+(buttonCount)).removeClass('tiny-circle-border')
    $(".kappen-profile"+(buttonCount+1)).fadeIn("slow");
    $(".tiny-circle"+(buttonCount+1)).addClass('tiny-circle-border')
    buttonCount++
    if(buttonCount > counter-1){
      buttonCount = 0;
      $(".kappen-profile"+(buttonCount)).fadeIn("slow");
      $(".tiny-circle"+(buttonCount)).addClass('tiny-circle-border')
    }
    console.log(buttonCount);
}
function showPrevKappen(){
    buttonCount = Math.min(Math.max((buttonCount),0),(counter-1))
    $(".kappen-profile"+(buttonCount)).fadeOut("slow");
    $(".tiny-circle"+(buttonCount)).removeClass('tiny-circle-border')
    $(".kappen-profile"+(buttonCount-1)).fadeIn("slow");
    $(".tiny-circle"+(buttonCount-1)).addClass('tiny-circle-border')

    buttonCount--;

    if(buttonCount > counter-1){
      buttonCount = 0;
      $(".kappen-profile"+(buttonCount)).fadeIn("slow");
      $(".tiny-circle"+(buttonCount)).addClass('tiny-circle-border')
    }else if (buttonCount < 0){
      buttonCount = counter-1;
      $(".kappen-profile"+(buttonCount)).fadeIn("slow");
      $(".tiny-circle"+(buttonCount)).addClass('tiny-circle-border')
    }
    console.log(buttonCount);
}

function appendDomNext(data){
  kappaBasket = data;

  for( counter; 0<data.kappa.length;){
    //target the kappens div and create a div to hold an individual student's information
    $('.kappens').append(" <div style='background:url(../img/"+ data.kappa[counter].imgURL +") center center; display:none; background-size:cover; background-position: 50%; background-repeat: no-repeat; margin: 0 auto; max-height: 100%; max-width: 100%;' class='kappen kappen-profile"+counter+"'></div> ");
    var $el = $(".kappens").children().last();
    $el.append("<img class='imgpadding' src='../img/clear.png'>" );
    //create a span to hold the paregraphs
    $el.css("background-image", 'url("/'+ data.kappa[counter].name +') no-repeat center center');

    $el.append(" <span width:100%; height:100%; class='slider-size wordbox wordbox"+counter+"')></span> ");
    $el = $(".kappens").children().last().find('span');
    $el.append("<h1>"+ data.kappa[counter].name + "</h1>");
    $el.append("<h2>The "+ data.kappa[counter].spirit_animal + "</h2>");
    $el.append("<h2>from "+ data.kappa[counter].location + "</h2>");
    $el.append("<em>"+ data.kappa[counter].shoutout + "</em>");


    //create circles
    $('.circles').append(" <div data-loc-subject='"+counter+"' class='col-sm-1 tiny-circle tiny-circle"+counter+"'><button class='col-sm-1 tiny-circle tiny-circle"+counter+">o</button></div> ");
    //creating data tag data-indvKappen=
    $el = $(".circles").children().last();
    // $el.css("data-indvKappen", 'tiny-circle'+counter);







    //itterate counter
  counter++
  $(".kappen-profile"+(buttonCount)).show();
  $(".tiny-circle"+(buttonCount)).addClass('tiny-circle-border')
}

}
