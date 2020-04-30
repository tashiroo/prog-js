class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  // infoメソッドを追加してください その中にanmeとageを使い名前は○○です、○○歳ですと出力してください 
  info(){
    console.log(`名前は${this.name}です`);

    console.log(`${this.age}です`);
  }
  
}

const animal = new Animal("レオ", 3);
animal.greet();

// animalに対してinfoメソッドを呼び出してください

animal.info();