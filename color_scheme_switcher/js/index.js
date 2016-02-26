//Implement the red light using jQuery. Don't forget to add the script tags.

$('#grayButton').click(function(){
        $('body').css('backgroundColor','grey')
        $('h1').css('color', 'white')
        $('p').css('color', 'white')
    });
    $('#whiteButton').click(function(){
        $('body').css('backgroundColor','white')
        $('h1').css('color', 'black')
        $('p').css('color', 'black')
    });