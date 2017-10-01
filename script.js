// to ang

(function () {
    let number = prompt('Podaj liczbe');

    function isCorrect(x) {

        let isNumber = new RegExp(/[^0-9,-.]/);
        let isInt = new RegExp(/[^0-9-]/);

        if (x === "") {
            throw new Error('Nie podales nic');
        } else if (x.search(isNumber) != -1) {
            throw new Error('To nie liczba');
        } else if (x.search(isInt) != -1) {
            throw new Error('To nie jest liczba calkowita');
        } else if (x < 0 || x > 10000) {
            throw new Error('Liczba nie zawiera sie w przedziale');
        }

        console.log(`Podana liczba jest prawidlowa`);
        return true;
    }


    function start(x) {

        let sqrt = Math.floor(Math.sqrt(x));
        if (x === 0 || x === 1 || x === 2) {
            console.log('brak odpowiedzi');
        }
        let arr = [];
        // Uzupelnianie tablicy liczbami
        for (let i = 0; i < x - 2; i++) {
            arr[i] = i + 2;
        }
        // tablica dzielnikow 
        let arrD = [];

        console.log(`tablica liczb gdy ${x} : ${arr}\n`);

        for (let i = 0; i < sqrt; i++) {
            arrD[i] = arr[i];

            arr = arr.map(function (value, index) {
                if (value == arrD[i]) {
                    return value
                } else if (value % arrD[i] !== 0) {
                    return value;
                } else {

                    return '';
                }
            });

        }

        let len = arr.length;

        console.log(`--------usuwanie-----------`);

        for (let i = 0; i < len; i++) {
            if (arr.indexOf('') == -1) {
                continue;
            }
            arr.splice(arr.indexOf(''), 1);
        }

        console.log(`tablica liczb po usunieciu ${arr} `);
        return arr;
    }

    function init() {


        if (isCorrect(number)) {

            let out = document.querySelector(`.output`);
            out.innerHTML = start(number);
        }
    }

    init();

})();
