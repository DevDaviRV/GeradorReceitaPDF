//base para envio de info para receita
function inputA(i){
    let p = document.getElementById('p-teste');
    p.innerHTML = i.value;
}

function inputB(i){
    let p = document.getElementById('p-teste2');
    p.innerHTML = i.value;
}

function inputC(i){
    let p = document.getElementById('p-teste3');
    p.innerHTML = i.value;
}

function inputD(i){
    let p = document.getElementById('p-teste4');
    p.innerHTML = i.value;
}

function inputE(i){
    let p = document.getElementById('p-teste5');
    p.innerHTML = i.value;
}

//Gerar Receita em PDF

function gerarPdf() {
    const item = document.querySelector('#result-receita');

    var opt = {
    
        margin: [1, 1, 1, 1]  ,
        filename: 'receita.pdf',
        html2canvas: {scale: 1},
        jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'},
    };

    html2pdf().set(opt).from(item).save();
}

