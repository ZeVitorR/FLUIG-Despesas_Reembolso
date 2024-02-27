
$(document).ready(function(){
    var data1 = document.getElementById('dataAtual2');
    
    var atividadeAtual;
    
    atividadeAtual = getWKNumState();
	console.log(atividadeAtual);
	if( atividadeAtual == "0" ){
		const dataAtual = new Date();
		const dia = atualizaData(dataAtual.getDate());
		const mes = atualizaData(dataAtual.getMonth() + 1);
		const ano = dataAtual.getFullYear();
		const horas = atualizaData(dataAtual.getHours());
		const minutos = atualizaData(dataAtual.getMinutes());
		data1.value = dia+"/"+mes+"/"+ano+"	"+horas+":"+minutos;
	    console.log(data1.value);
        var user = getWKUser();
        document.getElementById('solici').value = user;
    }
	document.getElementById("dataAtual").innerHTML= data1.value;
})


var controleCampo = 0;
var valorDespesas = 0;
var valorAntes = 0;
var array = [];
quantidade=0;


function adicionarLinha() {
    controleCampo++;
    quantidade++;
    campo= controleCampo-1;
    if(quantidade < 21){
        wdkAddChild('tabledetailname1')
        array.push(controleCampo);
        console.log(array[0]);
        document.getElementById('column1_1___'+controleCampo).value = quantidade; 
    }else{
        FLUIGC.message.error({
            title: 'Limite ultrapassado',
            message: 'Oops, voce ultrapassou o limite de 20 linhas de despresas!',
            details: 'No formulário voce pode inserir apenas vinte linhas, para inserir mais coloque nos anexos as despesas no excel e na primeira linha das despresa coloque o total.'
        });
    }
}

function calcular(){
    var  adiantamento = document.getElementById("adiantamento");
    var  despesas     = document.getElementById("totalDespesas");
    var  adiant,despes,total;
    
    adiant = parseFloat(adiantamento.value);
    despes = parseFloat(despesas.value);

    total  = adiant - despes;
    
    
    if(total > 0){
        document.getElementById('liq').innerHTML = 'Liquido a Receber(Reposição de caixa):';
    }else if(total == 0){
        document.getElementById('liq').innerHTML = 'Líquido a Receber/Reembolsar:';
    }else{
        document.getElementById('liq').innerHTML = 'Líquido a Reembolsar:';
        total = total * -1;
    }
    despesas.value = despes.toFixed(2);
    adiantamento.value = adiant.toFixed(2);
    document.getElementById('liqReceberReebolsar').value = total.toFixed(2);
}


function somarDespesas(id){
    verificaExistencia();
    var des = document.getElementById(id);
    // console.log('valor do campo despesa:'+des.value)

    if(des == null || des == NaN || des == ' '){

    }else{
        somar();

    }
}
function somar (){
    var sum = 0;
    var desVal;
    var totDes = document.getElementById('totalDespesas');
    var totalDes = parseFloat(totDes.value);

    for (let index = 1; index <= controleCampo; index++) {
        var possui = 0;
        array.forEach(function (item) {
            if(item == index){
                possui = 1;
            }
        });
        if(possui == 1){
            desVal = parseFloat(document.getElementById('column3_1___'+index).value);
            sum += desVal;
            console.log("valor da sum "+sum)
        }
            
    }
    valorDespesas = sum;
        
    console.log('valor totalDes antes='+totalDes);
    totDes.value = valorDespesas.toFixed(2);
    calcular();
}
function verificaExistencia() {
    
    for (let index = 1; index <= controleCampo; index++) {
        array.forEach(function (item) {
            if(item == index){
                despresa = document.getElementById('column3_1___'+index);
                contem = document.body.contains(despresa);
                console.log(contem);
                if(contem == false){
                    quantidade--;
                    var pos = array.indexOf(index);
                    array.splice(pos,1);
                    somar();
                    if(quantidade == 0){
                        adicionarLinha();
                    }
                }
            }

        });
    }
        
}


function apagar2(){
    if (document.getElementById('adiantamento').value == 0){
        document.getElementById('adiantamento').value = null
    }
}

function atualizaData(data){
    var i = parseInt(data)
    if(i < 10){
        i = '0'+i;
    }
    return i;
}