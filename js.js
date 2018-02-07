$('document').ready(function() {
    $('.click').on('click', getUrl);
});

var url;
var resOut = '';

function getUrl() {
    url = $('.url').val();
    console.log(url);
    var res = url.split('//')[1].replace('www.', '').split('.')[0];

    console.log(res);
    console.log(res.length);

    for (let i = 0; i < res.length; i++) {
        if (res[i] == 'o') {
            resOut += 0;
        } else if (res[i] == 'O') {
            resOut += 0;
        } else if (res[i] == 'l') {
            resOut += 1;
        } else if (res[i] == 'i') {
            resOut += 3;
        } else if (res[i] == 's') {
            resOut += 5;
        } else {
            resOut += res[i];
        }
        //console.log(res[i]);
        console.log(resOut[i]);
    }
    GenerLetter();
}

function GenerLetter() {

    var arrLetter = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"]; // 52
    var randLet = '';
    for (let i = 0; i < 4; i++) {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        var genNum = getRandomInt(0, arrLetter.length);
        randLet += arrLetter[genNum];
    }
        console.log(randLet);

        resOut = resOut + randLet;
        $('.resLink').val(resOut);

}
