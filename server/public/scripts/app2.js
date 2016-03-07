var counter = 0;
var kappaData;
$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      // kappaData.push(data);
      var capturer = data;
        kappaData = capturer;
      console.log('inside of aJax call: ', kappaData);
      console.log('inside of aJax call: ', kappaData.kappa[0]);
    }
  });
  console.log('inside of document.ready: ', kappaData);
  console.log('inside of aJax call: ', kappaData.kappa[0]);

  $('.kappens').on('click', '.next', appendDomNext(kappaData));
  console.log('inside of aJax call: ', kappaData.kappa[0]);

  $('body').on('click', '.next', function(kappaData){
    $('.kappens').append("<div class='kappen-profile'></div>");

    console.log(kappaData);
    var $el = $(".kappens").children().last();
    $el.append("<p>"+ kappaData[0].kappa[0].location + "</p>");
    // $el.append("<p>"+ kappaData[0].kappa[0].location + "</p>");
    // $el.append("<p>"+ kappaData[0].kappa[0].spirit_animal + "</p>");
    // $el.append("<p>"+ kappaData[0].kappa[0].shoutout + "</p>");
    // $el.append("<img src='"+data.accounts.imgURL+ "'>");
    $el.append('<button btn btn-info class="delete">'+"delete"+'</button>');
    counter++;
  });

  console.log("after button: ", kappaData);

  //
  // function appendDomNext(kappaData){
  //
  //   console.log('inside of appendDomNext Function: ', kappaData);
  //
  //
  //   $('.kappens').append("<div class='kappen-profile'></div>");
  //
  //   var $el = $(".kappens").children().last();
  //   $el.append("<p>"+ kappaData[0].kappa[0].location + "</p>");
  //   // $el.append("<p>"+ kappaData[0].kappa[0].location + "</p>");
  //   // $el.append("<p>"+ kappaData[0].kappa[0].spirit_animal + "</p>");
  //   // $el.append("<p>"+ kappaData[0].kappa[0].shoutout + "</p>");
  //   // $el.append("<img src='"+data.accounts.imgURL+ "'>");
  //   $el.append('<button btn btn-info class="delete">'+"delete"+'</button>');
  //   counter++;
  //
  // }

});



console.log('when its all said and done: ', kappaData);
