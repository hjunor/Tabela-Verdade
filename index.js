let  srt = '(p^q)v(q>q)'
const  arry = srt.split('')
const vetor1 = [true, true, false, false];
const vetor2 = [];
let vetor3 = [];
let vetor4 = [];
        //Estruturando as propabilidades
        arry[1]===arry[3] ? vetor2.push(vetor1) : vetor2.push(true, false, true, false)

        arry[7]===arry[1] ? vetor3 = [...vetor1]: vetor3 = [...vetor2] 

        arry[7]===arry[9] ? vetor4 = [...vetor3] : vetor4 = [...vetor1]

function compare(vetor1, operando, vetor2){
    const result2= [];
  switch (operando) {
    case 'v':
        for (var i=0; i< vetor1.length; i++){
            result2.push(vetor1[i] || vetor2[i])
        }
        break;
    case '^':
        for (var i=0; i< vetor1.length; i++){
            result2.push(vetor1[i] && vetor2[i])
        }
        break;
    case '>':
        for (var i=0; i< vetor1.length; i++){
            result2.push(vetor1[i] <= vetor2[i])
        }
        break;
    case '=':
        for (var i=0; i< vetor1.length; i++){
            result2.push(vetor1[i] == vetor2[i])
        }
        break

      default:
          console.log('Operando errado')
          break;
  }
  return result2;
}

const result2 =compare(vetor1,arry[2], vetor2);
const result3 = compare(vetor3,arry[8], vetor4);
const result = compare(result2,arry[5], result3);

const str1 = vetor1.map(e=> e===true? 'V': 'F');
const str2 = vetor2.map(e=> e===true? 'V': 'F');
const str3 = vetor3.map(e=> e===true? 'V': 'F');
const str4 = vetor4.map(e=> e===true? 'V': 'F');

const stres2 = result2.map(e=> e===true? 'V': 'F');
const stres3 = result3.map(e=> e===true? 'V': 'F');
const strFinal = result.map(e=> e===true? 'V': 'F');

console.log('Comparaçãoda tabelas verdades  '+ srt);
for(var i =0; i< result.length; i++){
    console.log('->  '+str1[i]+' '+arry[2]+' '+str2[i]+' = '+stres2[i]);
};
console.log('--------------------')
for(var i =0; i< result.length; i++){
    console.log('->  '+str3[i]+' '+arry[8]+' '+str4[i]+' = '+stres3[i]);
};
console.log('--------------------')
for(var i =0; i< result.length; i++){
    console.log('->  '+stres2[i]+' '+arry[5]+' '+stres3[i]+' = '+strFinal[i]);
};
