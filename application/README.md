# application / useCase レイヤー

- 集約ルート的な役割
- 「利用側」と「利用される側」が便利な型へコンバート
- store 利用時は、この useCase を参照する
- facade パターンを利用(本当は DI パターンを使いたい)
- domain 知識をいつ・どのように呼び出すかを規定したルールが含まれている
- input data / output data はこのレイヤーで吸収する

# 制約

- インターフィエイス分離の原則に基づき、機能ごとにファイルを作成する

# 免責事項

- アプリケーション固有の知識
- input data / output data
