// for文を完成させてください
// for文を用いて1から100を順番に出力しましょう。
// ただし、3の倍数のときは「3の倍数です」と出力してください。
for (number = 1;number < 100 ;number ++) {
  
  // if文を用いて、numberが3の倍数の時に「3の倍数です」、そうでないときは数字を出力してください
  if(number%3 === 0) {
    console.log("3の倍数です");
  }
  else {
    console.log(number);
  }
  
}
