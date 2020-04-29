// クラスFluetを作りconstructorの中にそれぞれ名前、味、色の値を作る

class Fluit {
  constructor(name, frever, color) {
    this.name = name;

    this.frever = frever;

    this.color = color;
  }
}
// 引数 リンゴ 甘い 赤いを作る  
const fluit = new Fluit("リンゴ", "甘い", "赤い");

// 赤い甘いリンゴですと出力する
console.log(`${fluit.color}${fluit.frever}${fluit.name}です`);

