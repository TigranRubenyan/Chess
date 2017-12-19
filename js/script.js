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

    document.getElementById('0').innerHTML = '<button id="blackBoat" class="black-boat newClass"></button>';
    document.getElementById('1').innerHTML = '<button id="blackHorse" class="black-horse newClass"></button>';
    document.getElementById('2').innerHTML = '<button id="blackElephant" class="black-elephant newClass"></button>';
    document.getElementById('3').innerHTML = '<button id="blackElephant" class="black-queen newClass"></button>';
    document.getElementById('4').innerHTML = '<button id="blackKing" class="black-king newClass"></button>';
    document.getElementById('5').innerHTML = '<button id="blackElephant2" class="black-elephant newClass"></button>';
    document.getElementById('6').innerHTML = '<button id="blackHorse2" class="black-horse newClass"></button>';
    document.getElementById('7').innerHTML = '<button id="blackBoat2" class="black-boat newClass"></button>';

    document.getElementById('8').innerHTML = '<button id="blackSoldier1" class="black-soldier newClass"></button>';
    document.getElementById('9').innerHTML = '<button id="blackSoldier2"  class="black-soldier newClass"></button>';
    document.getElementById('10').innerHTML = '<button id="blackSoldier3" class="black-soldier newClass"></button>';
    document.getElementById('11').innerHTML = '<button id="blackSoldier4" class="black-soldier newClass"></button>';
    document.getElementById('12').innerHTML = '<button id="blackSoldier5" class="black-soldier newClass"></button>';
    document.getElementById('13').innerHTML = '<button id="blackSoldier6" class="black-soldier newClass"></button>';
    document.getElementById('14').innerHTML = '<button id="blackSoldier7" class="black-soldier newClass"></button>';
    document.getElementById('15').innerHTML = '<button  id="blackSoldier8" class="black-soldier newClass"></button>';

    //white figure

    document.getElementById('48').innerHTML = '<button id="whiteSoldier1" class="white-soldier newClass"></button>';
    document.getElementById('49').innerHTML = '<button id="whiteSoldier2" class="white-soldier newClass"></button>';
    document.getElementById('50').innerHTML = '<button id="whiteSoldier3" class="white-soldier newClass"></button>';
    document.getElementById('51').innerHTML = '<button id="whiteSoldier4" class="white-soldier newClass"></button>';
    document.getElementById('52').innerHTML = '<button id="whiteSoldier5" class="white-soldier newClass"></button>';
    document.getElementById('53').innerHTML = '<button id="whiteSoldier6" class="white-soldier newClass"></button>';
    document.getElementById('54').innerHTML = '<button id="whiteSoldier7" class="white-soldier newClass"></button>';
    document.getElementById('55').innerHTML = '<button id="whiteSoldier8" class="white-soldier newClass"></button>';

    document.getElementById('56').innerHTML = '<button id="whiteBoat" class="white-boat newClass"></button>';
    document.getElementById('57').innerHTML = '<button id="whiteHorse" class="white-horse newClass"></button>';
    document.getElementById('58').innerHTML = '<button id="whiteElephant" class="white-elephant newClass"></button>';
    document.getElementById('59').innerHTML = '<button id="whiteQueen" class="white-queen newClass"></button>';
    document.getElementById('60').innerHTML = '<button id="whiteKing" class="white-king newClass"></button>';
    document.getElementById('61').innerHTML = '<button id="whiteElephant2" class="white-elephant newClass"></button>';
    document.getElementById('62').innerHTML = '<button id="whiteHorse2" class="white-horse newClass"></button>';
    document.getElementById('63').innerHTML = '<button id="whiteBoat2" class="white-boat newClass"></button>';

    //empty space

    document.getElementById('16').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('17').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('18').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('19').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('20').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('21').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('22').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('23').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('24').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('25').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('26').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('27').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('28').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('29').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('30').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('31').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('32').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('33').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('34').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('35').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('36').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('37').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('38').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('39').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('40').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('41').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('42').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('43').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('44').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('45').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('46').innerHTML = '<button class="empty-space"></button>';
    document.getElementById('47').innerHTML = '<button class="empty-space"></button>';

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
