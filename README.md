# run

- mock: yarn local
- local server: yarn serve

# 設計指針
https://user-images.githubusercontent.com/36849614/168453061-c30ad4cc-c2a5-4cf2-a6ad-ecf7b727c52b.png

- Clean Architecture を参考にレイヤー構築を検討する
- 厳密ではなく、開発速度と保守性の高いコードの両立を目指す
- レイヤーは上位のみに向ける
  - domain は最上位レイヤー
  - View / DB は最下位レイヤー
  - 下位レイヤーへの参照は、上位レイヤーを保護するために抽象へ依存させる
- React / Next 依存による制限的な記述は許容する
- domain 層に知識を集約させて、使用側は知識を持たないようにする
  - 使う側に知識があると知識が分散されるため、修正漏れ等のリスクがあるため
- View層で利用する際はvoになっており、基本的にプリミティブ型(プログラミング言語が標準で持っている型)は使用しない
  - UseCase層で、全てvoに置き換える

# 備考

- UI component library と Atomic Design は相性が良くないため、不採用
