# jQueryを使った画面をKarma+Jasmineでテストしたい

## 動機

  * フレームワークを使ってないHTMLとjQueryで作った画面(HTML)をテストしたい。
    * Ajaxも使ってるので、モックなりスタブなりでバックエンドなくてもテストできるようにしたい
  * Seleniumを使わずにできるかやってみよう
    * Karma+Jasmine使うとできそうな気がする

## やったこと

  * `npm init`
  * `npm install karma --save-dev`
  * `npm run karma -- init`
  * `npm install karma-html2js-preprocessor --save-dev`

## はまったところ

  * 画面をJasmineにどうやって持ち込むか?
    * karma-html2js-preprocessor を使う
      * karma-jasmine-jquery (jasmine-jquery) は古そうだったのでこちらを使った
  * 画面で読み込んでいるcssやimageが読み込まれない
    * karma.conf.jsのproxiesを使って、images -> base/images のように base を加えたパスから読むこむようにする
  * 画面で読み込んでいるスクリプトが読み込まれない
    * scriptタグ自体がなくなってしまうようだ
    * karma.conf.jsのfilesに追加して読み込んでもらう
      * この方法が正しいのかどうか分からない
  * Ajaxをスタブに置き換える方法
    * jasmine-ajaxを使う
  * document.onreadyが実行されない
    * 仕組み上、ムリっぽいので、jasmineのforEachで呼び出すようにする
