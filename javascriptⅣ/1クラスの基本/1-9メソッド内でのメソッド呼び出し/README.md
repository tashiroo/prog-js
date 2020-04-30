# progate URL

- https://prog-8.com/es6/study/4/9#

## メソッド内でのメソッドの呼び出し

-  基本は`class クラス名 { constructor(値) { this.値 = 値 } メゾット名1() {console.log( ${this.値} ) } メゾット名2(){ this.メソッド名1(); } }`

- 上記のように`this.メソッド名();`とすると同じ同じクラスのメソッドを利用できる

- なぜかprogateでメソッド1の中にメソッド2を入れたら無限ループした


