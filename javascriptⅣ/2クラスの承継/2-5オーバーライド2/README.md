# progate URL

- https://prog-8.com/es6/study/4/14#

## コンストラクタのオーバーライド

- 今度はコンストラクタをオーバーライドする方法

- `class 子クラス extends  { constructor() super();  }`

- コンストラクタのオーバーライドするときは一行目にsuper()を入れる

- super()の中は親クラスの引数が入りconstructor()の中は親クラスのもの含む子クラスで使用したい引数が入る

- 例 `this.新しいプロパティ = 新しいプロパティ; `で子クラスのconstructorに入れた新しいプロパティを使うことができる
