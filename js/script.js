function buildBorder() {
    //debugger;
    var board = document.getElementById('board');
    for(var i = 0; i < 1; i++){
        board.innerHTML += "<br>";
        for(var j = 0; j < 64; j++){
            board.innerHTML += "<div id="+j+" class='Square-black'></div>";
            if (!(j === 1, j === 3, j === 5, j === 7, j === 8, j === 10, j === 12, j === 14, j === 17, j === 19, j === 21, j === 23, j === 24, j === 26, j === 28, j === 30, j === 33, j === 35, j === 37, j === 39, j === 40, j === 42, j === 44, j === 46, j === 49, j === 51, j === 53, j === 55, j === 56, j === 58, j === 60, j === 62)) {
                continue;
            }
            document.getElementById('1').style.backgroundColor = 'E3BA7A';
            document.getElementById('3').style.backgroundColor = 'E3BA7A';
            document.getElementById('5').style.backgroundColor = 'E3BA7A';
            document.getElementById('7').style.backgroundColor = 'E3BA7A';
            document.getElementById('8').style.backgroundColor = 'E3BA7A';
            document.getElementById('10').style.backgroundColor = 'E3BA7A';
            document.getElementById('12').style.backgroundColor = 'E3BA7A';
            document.getElementById('14').style.backgroundColor = 'E3BA7A';
            document.getElementById('17').style.backgroundColor = 'E3BA7A';
            document.getElementById('19').style.backgroundColor = 'E3BA7A';
            document.getElementById('21').style.backgroundColor = 'E3BA7A';
            document.getElementById('23').style.backgroundColor = 'E3BA7A';
            document.getElementById('24').style.backgroundColor = 'E3BA7A';
            document.getElementById('26').style.backgroundColor = 'E3BA7A';
            document.getElementById('28').style.backgroundColor = 'E3BA7A';
            document.getElementById('30').style.backgroundColor = 'E3BA7A';
            document.getElementById('60').style.backgroundColor = 'E3BA7A';
            document.getElementById('62').style.backgroundColor = 'E3BA7A';
            document.getElementById('33').style.backgroundColor = 'E3BA7A';
            document.getElementById('35').style.backgroundColor = 'E3BA7A';
            document.getElementById('37').style.backgroundColor = 'E3BA7A';
            document.getElementById('39').style.backgroundColor = 'E3BA7A';
            document.getElementById('40').style.backgroundColor = 'E3BA7A';
            document.getElementById('42').style.backgroundColor = 'E3BA7A';
            document.getElementById('44').style.backgroundColor = 'E3BA7A';
            document.getElementById('46').style.backgroundColor = 'E3BA7A';
            document.getElementById('49').style.backgroundColor = 'E3BA7A';
            document.getElementById('51').style.backgroundColor = 'E3BA7A';
            document.getElementById('53').style.backgroundColor = 'E3BA7A';
            document.getElementById('55').style.backgroundColor = 'E3BA7A';
            document.getElementById('56').style.backgroundColor = 'E3BA7A';
            document.getElementById('58').style.backgroundColor = 'E3BA7A';
        }
    }
}
var bringElementId;
var bringElementClass;
var asd;
function figureStart() {
    //black figure

    document.getElementById('0').innerHTML = '<button id="a8" class="black-boat newClass"></button>';
    document.getElementById('1').innerHTML = '<button id="b8" class="black-horse newClass"></button>';
    document.getElementById('2').innerHTML = '<button id="c8" class="black-elephant newClass"></button>';
    document.getElementById('3').innerHTML = '<button id="d8" class="black-queen newClass"></button>';
    document.getElementById('4').innerHTML = '<button id="e8" class="black-king newClass"></button>';
    document.getElementById('5').innerHTML = '<button id="f8" class="black-elephant newClass"></button>';
    document.getElementById('6').innerHTML = '<button id="g8" class="black-horse newClass"></button>';
    document.getElementById('7').innerHTML = '<button id="h8" class="black-boat newClass"></button>';

    document.getElementById('8').innerHTML = '<button id="a7" class="black-soldier newClass"></button>';
    document.getElementById('9').innerHTML = '<button id="b7"  class="black-soldier newClass"></button>';
    document.getElementById('10').innerHTML = '<button id="c7" class="black-soldier newClass"></button>';
    document.getElementById('11').innerHTML = '<button id="d7" class="black-soldier newClass"></button>';
    document.getElementById('12').innerHTML = '<button id="e7" class="black-soldier newClass"></button>';
    document.getElementById('13').innerHTML = '<button id="f7" class="black-soldier newClass"></button>';
    document.getElementById('14').innerHTML = '<button id="g7" class="black-soldier newClass"></button>';
    document.getElementById('15').innerHTML = '<button  id="h7" class="black-soldier newClass"></button>';

    //white figure

    document.getElementById('48').innerHTML = '<button id="a2" class="white-soldier newClass"></button>';
    document.getElementById('49').innerHTML = '<button id="b2" class="white-soldier newClass"></button>';
    document.getElementById('50').innerHTML = '<button id="c2" class="white-soldier newClass"></button>';
    document.getElementById('51').innerHTML = '<button id="d2" class="white-soldier newClass"></button>';
    document.getElementById('52').innerHTML = '<button id="e2" class="white-soldier newClass"></button>';
    document.getElementById('53').innerHTML = '<button id="f2" class="white-soldier newClass"></button>';
    document.getElementById('54').innerHTML = '<button id="g2" class="white-soldier newClass"></button>';
    document.getElementById('55').innerHTML = '<button id="h2" class="white-soldier newClass"></button>';

    document.getElementById('56').innerHTML = '<button id="a1" class="white-boat newClass"></button>';
    document.getElementById('57').innerHTML = '<button id="b1" class="white-horse newClass"></button>';
    document.getElementById('58').innerHTML = '<button id="c1" class="white-elephant newClass"></button>';
    document.getElementById('59').innerHTML = '<button id="d1" class="white-queen newClass"></button>';
    document.getElementById('60').innerHTML = '<button id="e1" class="white-king newClass"></button>';
    document.getElementById('61').innerHTML = '<button id="f1" class="white-elephant newClass"></button>';
    document.getElementById('62').innerHTML = '<button id="g1" class="white-horse newClass"></button>';
    document.getElementById('63').innerHTML = '<button id="h1" class="white-boat newClass"></button>';

    //empty space

    document.getElementById('16').innerHTML = '<button id="a6" class="empty-space"></button>';
    document.getElementById('17').innerHTML = '<button id="b6" class="empty-space"></button>';
    document.getElementById('18').innerHTML = '<button id="c6" class="empty-space"></button>';
    document.getElementById('19').innerHTML = '<button id="d6" class="empty-space"></button>';
    document.getElementById('20').innerHTML = '<button id="e6" class="empty-space"></button>';
    document.getElementById('21').innerHTML = '<button id="f6" class="empty-space"></button>';
    document.getElementById('22').innerHTML = '<button id="g6" class="empty-space"></button>';
    document.getElementById('23').innerHTML = '<button id="h6" class="empty-space"></button>';
    document.getElementById('24').innerHTML = '<button id="a5" class="empty-space"></button>';
    document.getElementById('25').innerHTML = '<button id="b5" class="empty-space"></button>';
    document.getElementById('26').innerHTML = '<button id="c5" class="empty-space"></button>';
    document.getElementById('27').innerHTML = '<button id="d5" class="empty-space"></button>';
    document.getElementById('28').innerHTML = '<button id="e5" class="empty-space"></button>';
    document.getElementById('29').innerHTML = '<button id="f5" class="empty-space"></button>';
    document.getElementById('30').innerHTML = '<button id="g5" class="empty-space"></button>';
    document.getElementById('31').innerHTML = '<button id="h5" class="empty-space"></button>';
    document.getElementById('32').innerHTML = '<button id="a4" class="empty-space"></button>';
    document.getElementById('33').innerHTML = '<button id="b4" class="empty-space"></button>';
    document.getElementById('34').innerHTML = '<button id="c4" class="empty-space"></button>';
    document.getElementById('35').innerHTML = '<button id="d4" class="empty-space"></button>';
    document.getElementById('36').innerHTML = '<button id="e4" class="empty-space"></button>';
    document.getElementById('37').innerHTML = '<button id="f4" class="empty-space"></button>';
    document.getElementById('38').innerHTML = '<button id="g4" class="empty-space"></button>';
    document.getElementById('39').innerHTML = '<button id="h4" class="empty-space"></button>';
    document.getElementById('40').innerHTML = '<button id="a3" class="empty-space"></button>';
    document.getElementById('41').innerHTML = '<button id="b3" class="empty-space"></button>';
    document.getElementById('42').innerHTML = '<button id="c3" class="empty-space"></button>';
    document.getElementById('43').innerHTML = '<button id="d3" class="empty-space"></button>';
    document.getElementById('44').innerHTML = '<button id="e3" class="empty-space"></button>';
    document.getElementById('45').innerHTML = '<button id="f3" class="empty-space"></button>';
    document.getElementById('46').innerHTML = '<button id="g3" class="empty-space"></button>';
    document.getElementById('47').innerHTML = '<button id="h3" class="empty-space"></button>';

    $( document ).ready(function() {
        $(document).on("click", ".empty-space", function (event) {
            $(event.target).attr('class',bringElementClass, + 'newClass');
            console.log(event.target);
        });
        $(document).on("click", ".newClass", function (event) {
            console.log(event.target);
            bringElementId = ($(event.target).attr('id'));
            bringElementClass = ($(event.target).attr('class'));
            asd = $(event.target.parentNode).attr('id');
            $('#'+asd).html('<button class="empty-space"></button>');
            $(event.target).attr('class', "empty-space");
            $(event.target).attr('id');

        });
    });
}
