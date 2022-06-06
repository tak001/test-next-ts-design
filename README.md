# run

- mock: yarn local
- local server: yarn serve

# 設計指針

<img src="https://user-images.githubusercontent.com/36849614/168453113-edaa7bbf-ca6a-4f53-b55a-030d1ea6a156.png" alt="image" style="max-width: 100%;">

- Clean Architecture を参考にレイヤー構築を検討する
- 厳密ではなく、開発速度と保守性の高いコードの両立を目指す
- レイヤーは上位のみに向ける
  - domain は最上位レイヤー
  - View / DB は最下位レイヤー
  - 下位レイヤーへの参照は、上位レイヤーを保護するために抽象へ依存させる
- React / Next 依存による制限的な記述は許容する
- domain 層に知識を集約させて、使用側は知識を持たないようにする
  - 使う側に知識があると知識が分散されるため、修正漏れ等のリスクがあるため
