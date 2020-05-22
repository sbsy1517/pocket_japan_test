$('.start').on('click', function(e){
    e.preventDefault();
    $('#question').show();
});
$('.next-2').on('click', function(e){
    e.preventDefault();
    $('#q-one').hide();
    $('#q-two').show();
});
$('.next-3').on('click', function(e){
    e.preventDefault();
    $('#q-two').hide();
    $('#q-three').show();
});
$('.next-4').on('click', function(e){
    e.preventDefault();
    $('#q-three').hide();
    $('#q-four').show();
});
$('.next-5').on('click', function(e){
    e.preventDefault();
    $('#q-four').hide();
    $('#q-five').show();
});
$('.next-6').on('click', function(e){
    e.preventDefault();
    $('#q-five').hide();
    $('#q-six').show();
});
$('.next-7').on('click', function(e){
    e.preventDefault();
    $('#q-six').hide();
    $('#q-seven').show();
});
$('.next-result').on('click', function(e){
    e.preventDefault();
    $("section#question").hide();
    $("section#result").show();
    $("section#article").show();
    $("footer").show();
});
$('.back-1').on('click', function(e){
    e.preventDefault();
    $('#q-two').hide();
    $('#q-one').show();
});
$('.back-2').on('click', function(e){
    e.preventDefault();
    $('#q-three').hide();
    $('#q-two').show();
});
$('.back-3').on('click', function(e){
    e.preventDefault();
    $('#q-four').hide();
    $('#q-three').show();
});
$('.back-4').on('click', function(e){
    e.preventDefault();
    $('#q-five').hide();
    $('#q-four').show();
});
$('.back-5').on('click', function(e){
    e.preventDefault();
    $('#q-six').hide();
    $('#q-five').show();
});
$('.back-6').on('click', function(e){
    e.preventDefault();
    $('#q-seven').hide();
    $('#q-six').show();
});
$('.restart').on('click', function(e){
    // e.preventDefault();
    $('#q-one').show();
    $('#q-seven').hide();
    $("section#question").show();
    $("section#result").hide();
    $("section#article").hide();
    $('footer').hide();
});
$('.carousel').carousel()