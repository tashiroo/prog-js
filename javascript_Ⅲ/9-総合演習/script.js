const number1 = 103; 
const number2 = 72; 
const number3 = 189; 
// 引数名はa,b,cを使う、定数名はgetmax、if文を利用しnumber1.2.3の最大値を出しなさい
// getMax関数を定義してください
const getmax = (a, b, c) =>{
  let max = a;  
  if (b > max){
    console.log(b = max);
  }
  else if (c > max){
    console.log(max = c);
  }
  else {
    console.log(max = a);
  }
  return max ;
};

// 定数maxを定義
const max = getmax(number1,number2,number3);

// 「最大値は○○です」と出力してください

console.log(`最大値は${max}です`);
