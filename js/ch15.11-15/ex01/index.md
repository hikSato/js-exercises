- index.js でdocument.cookie プロパティを console.logで表示する

  - AWSALB=QB9JpRetrpCfkwS2Pt9177ggaeshfZPEluqhpa+yYf7yYqn+B4/yohRQ3b+gt47wl0sOcYG1BlntFRnprpjXRdOU8OZ2fg/G611+duBXOPozB73zqBLoKvAydwqy; AWSALBCORS=QB9JpRetrpCfkwS2Pt9177ggaeshfZPEluqhpa+yYf7yYqn+B4/yohRQ3b+gt47wl0sOcYG1BlntFRnprpjXRdOU8OZ2fg/G611+duBXOPozB73zqBLoKvAydwqy

- ブラウザの開発者コンソールで http://localhost:3000/ の Cookie を表示する

  - AWSALB
  - QB9JpRetrpCfkwS2Pt9177ggaeshfZPEluqhpa+yYf7yYqn+B4/yohRQ3b+gt47wl0sOcYG1BlntFRnprpjXRdOU8OZ2fg/G611+duBXOPozB73zqBLoKvAydwqy
  - AWSALBCORS
  - QB9JpRetrpCfkwS2Pt9177ggaeshfZPEluqhpa+yYf7yYqn+B4/yohRQ3b+gt47wl0sOcYG1BlntFRnprpjXRdOU8OZ2fg/G611+duBXOPozB73zqBLoKvAydwqy

- ToDo アプリのタブをリロードする

  - 変更なし

- 同一ブラウザの異なるタブやウィンドウで http://localhost:3000/ を開いて ToDo リストの状態を確認する

  - 変更なし

- シークレットウィンドウや異なるブラウザで http://localhost:3000/ を開いて ToDo リストの状態を確認する

  - シークレットウィンドウ：クッキーなし
  - firefox: クッキーなし

- http://127.0.0.1:3000/ を開いて ToDo リストの状態を確認する
  - クッキーなし
  - localhost:3000で開くとcorsでブロックされる
