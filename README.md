# chart-ts-app

シリアルのデータの可視化をするアプリケーションです。
以下のデータを利用しています。
https://www.kaggle.com/datasets/crawford/80-cereals

以下の機能を有しています。
* 任意の軸で比較できる機能
* 表示するデータを絞り込む機能

Reactの状態管理ライブラリを試すためのベースプログラムです。
使用したライブラリごとにブランチを切ってあります。

## アプリケーションの実行方法

Docker を用いて実行してください。
VSCode を使用していただき拡張機能の「Dev Containers」を使用してください。

1. Docker 環境の起動 <br>
   1-a. 通常起動する場合： `docker compose up -d` <br>
   1-b. Dev Containers を使う場合： VSCode の画面左下「><」みたいなボタンから「Reopen in Container」を選択 <br>
1. `yarn` を実行
1. `yarn dev` を実行
1. <http://localhost:3000/> を開く
