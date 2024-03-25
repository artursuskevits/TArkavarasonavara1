// eesti list
const sonad = [
    'teostus', // Sõnad eesti keeles
    'algorütm',
    'kavand',
    'kasutajaliides',
    'mudel',
    'andmebaasi skeem',
    'standart',
    'tsükkel',
    'andmetöötlus',
    'andmestruktuur',
    'arenduskeskkond',
    'projektihaldus tööriist',
    'kavandamine',
    'iteratsioon',
    'parandus',
    'koskmudel',
    'agiilne mudel',
    'spiiralne mudul',
    'inkrementaalne mudel',
    'nõudmised',
    'reliseerimine',
    'testimine',
    'integreerimine',
    'kasutamine',
    'eelised',
    'puudused',
    'elutsükkel',
    'arendamine',
    'validerimine'
];

// vene list
const venesonad = [
    'реализация', // Sõnad vene keeles
    'алгоритм',
    'план',
    'пользовательский интерфейс',
    'модель',
    'схема базы данных',
    'стандарт',
    'цикл',
    'обработка данных',
    'структура данных',
    'среда разработки',
    'инструмент управления проектами',
    'планирование',
    'итерация',
    'исправление',
    'каскмодель',
    'гибкая модель',
    'пространственная модель',
    'Инкрементальная модель',
    'требования',
    'переселение',
    'тестирование',
    'интеграция',
    'использование',
    'выгоды',
    'недостатки',
    'Циклжизни',
    'разработка',
    'подтверждение'
];

// Funktsioonid eesti keele sõnade genereerimiseks ja kontrollimiseks
function randomSonad() {
    const juhuslikSona = Math.floor(Math.random() * sonad.length);
    const sona = sonad[juhuslikSona];
    document.getElementById("random-sona").innerHTML = sona;
}

function randomSonadru() {
    const juhuslikSona = Math.floor(Math.random() * venesonad.length);
    const sona = venesonad[juhuslikSona];
    document.getElementById("random-vene-sona").innerHTML = sona;
}

// Funktsioonid vastuste kontrollimiseks
function kontrollima() {
    const sona = document.getElementById("random-sona").innerText;
    const venesona = document.getElementById("kontroll").value;
    const indEesti = sonad.indexOf(sona);
    const indVene = venesonad.indexOf(venesona);
    if (indEesti === indVene && indEesti !== -1 && indVene !== -1) {
        document.getElementById("vastus2").innerHTML = "Õige vastus!";
    } else {
        document.getElementById("vastus2").innerHTML = "Vale vastus(((";
    }
}

function kontrollimaru() {
    const sona = document.getElementById("random-vene-sona").innerText;
    const eestisona = document.getElementById("kontrollru").value;
    const indEesti = sonad.indexOf(eestisona);
    const indVene = venesonad.indexOf(sona);
    if (indEesti === indVene && indEesti !== -1 && indVene !== -1) {
        document.getElementById("vastusru").innerHTML = "Õige vastus!";
    } else {
        document.getElementById("vastusru").innerHTML = "Vale vastus(((";
    }
}