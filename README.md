# ハッカソンテンプレート (JavaScript版)

シンプルなカウンターアプリのHTML + CSS + JavaScriptテンプレートです。  
ハッカソンやプロトタイプ開発の出発点として使用できます。

## 🚀 クイックスタート

### 必要な環境

- Webブラウザ（Chrome、Firefox、Safari、Edgeなど）
- テキストエディタ（VS Code、Sublime Text、Atomなど）

### セットアップと起動

1. **ファイルをダウンロード**
   ```bash
   # このディレクトリをコピーまたはダウンロード
   ```

2. **ブラウザで開く**
   - `index.html` をダブルクリック、または
   - ブラウザで `index.html` を開く

3. **開発サーバーを使用する場合（推奨）**
   ```bash
   # Python 3の場合
   python -m http.server 8000
   
   # Node.jsのlive-serverを使用する場合
   npx live-server
   ```

### ファイル構成

```
dohack-template-js/
├── index.html          # メインページ（カウンター機能）
├── about.html          # このアプリについてページ
├── css/
│   └── style.css       # スタイルシート
├── js/
│   └── script.js       # JavaScript機能
└── README.md
```

## 🏗️ アーキテクチャ

### 技術スタック

- **HTML5**: ページ構造とセマンティクス
- **CSS3**: スタイリングとレスポンシブデザイン
- **JavaScript (ES6+)**: インタラクティブ機能と状態管理

### 設計パターン

- **関心の分離**: HTML（構造）、CSS（見た目）、JavaScript（機能）を分離
- **イベント駆動**: ユーザーの操作に応じてDOMを更新
- **状態管理**: オブジェクトベースの簡単な状態管理

## 🎯 実装されている機能

### 1. カウンター機能
- **状態管理**: `appState`オブジェクトでカウンターの値を管理
- **操作**: +1、-1、リセットボタン
- **DOM更新**: リアルタイムで画面の数値を更新

### 2. ページ遷移
- **マルチページ**: `index.html`と`about.html`間の遷移
- **ナビゲーション**: アンカータグによる従来のページ遷移

### 3. レスポンシブデザイン
- **CSS Grid/Flexbox**: モダンなレイアウト技術
- **メディアクエリ**: 画面サイズに応じたスタイル調整

## 📚 主要ファイルの説明

### `index.html`
メインページの構造を定義。カウンター表示とボタンを配置。

```html
<div class="counter-section">
  <h2>カウンター: <span id="counter">0</span></h2>
  <div class="buttons">
    <button id="incrementBtn" class="btn">+1</button>
    <button id="decrementBtn" class="btn">-1</button>
    <button id="resetBtn" class="btn secondary">リセット</button>
  </div>
</div>
```

### `about.html`
アプリの紹介ページ。技術スタックや機能の説明を表示。

### `js/script.js`
アプリケーションの機能を実装。

```javascript
// 状態管理
let appState = {
  counter: 0
};

// カウンターを増加
function incrementCounter() {
  appState.counter++;
  updateCounterDisplay();
  console.log("カウンター増加:", appState.counter);
}

// DOM更新
function updateCounterDisplay() {
  counterElement.textContent = appState.counter;
}
```

### `css/style.css`
アプリケーションのスタイルを定義。

```css
.btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
```

## 🔧 技術的な特徴

### JavaScript設計パターン

1. **モジュール的な関数設計**
   - 各機能を独立した関数として実装
   - 単一責任の原則に従った関数分割

2. **状態の一元管理**
   - `appState`オブジェクトで状態を集約
   - 状態変更は専用関数を通して実行

3. **DOM操作の分離**
   - 表示更新専用の関数（`updateCounterDisplay`）
   - イベントハンドラーと表示ロジックの分離

### CSS設計

1. **BEMライクな命名**
   - 意味のあるクラス名（`.counter-section`, `.btn`）
   - 再利用可能なコンポーネント設計

2. **レスポンシブファースト**
   - Mobile-firstアプローチ
   - `@media`クエリによる段階的拡張

## 🛠️ カスタマイズのヒント

### 新しい機能を追加する

1. **HTMLに要素を追加**
   ```html
   <button id="doubleBtn" class="btn">×2</button>
   ```

2. **JavaScriptに機能を実装**
   ```javascript
   function doubleCounter() {
     appState.counter *= 2;
     updateCounterDisplay();
   }
   
   // イベントリスナーを追加
   doubleBtn.addEventListener("click", doubleCounter);
   ```

### 新しいページを追加する

1. 新しい`.html`ファイルを作成
2. 既存のHTMLファイルからナビゲーションリンクを追加
3. 必要に応じて専用のCSSやJavaScriptを追加

### スタイルをカスタマイズする

```css
/* カスタムカラーテーマ */
:root {
  --primary-color: #28a745;
  --secondary-color: #6c757d;
}

.btn {
  background-color: var(--primary-color);
}
```

## 🐛 トラブルシューティング

### JavaScriptが動かない場合

1. **ブラウザのコンソールを確認**
   - F12 → Console タブでエラーメッセージを確認

2. **ファイルパスを確認**
   ```html
   <!-- 正しいパスか確認 -->
   <script src="js/script.js"></script>
   ```

3. **文法エラーをチェック**
   - セミコロンの抜け
   - 括弧の不一致

### CSSが適用されない場合

1. **リンクタグを確認**
   ```html
   <link rel="stylesheet" href="css/style.css" />
   ```

2. **キャッシュをクリア**
   - Ctrl + F5（強制リロード）

### ローカルファイルの制限

ブラウザのセキュリティ制限により、一部機能が動作しない場合があります。  
ローカルサーバーを使用することを推奨します。

## 📖 学習リソース

- [MDN Web Docs](https://developer.mozilla.org/ja/) - HTML/CSS/JavaScriptの総合リファレンス
- [JavaScript.info](https://ja.javascript.info/) - モダンJavaScriptチュートリアル
- [CSS-Tricks](https://css-tricks.com/) - CSSテクニックとベストプラクティス
- [Can I Use](https://caniuse.com/) - ブラウザ対応状況の確認

## 🎨 次のステップ

このテンプレートから始めて、以下のような機能を追加してみてください：

### 初級
- [ ] カウンターの上限・下限設定
- [ ] カウンター値の色変更（正負で色分け）
- [ ] アニメーション効果の追加
- [ ] 複数のカウンター管理

### 中級
- [ ] LocalStorageでの状態保存
- [ ] カウンター履歴の表示
- [ ] フォーム入力による値設定
- [ ] JSON設定ファイルの読み込み

### 上級
- [ ] Web APIs連携（Fetch API）
- [ ] Service Workerによるオフライン対応
- [ ] Web Componentsの活用
- [ ] モジュールシステム（ES Modules）の導入

## 💡 学習のポイント

### JavaScript基礎
- DOM操作（`getElementById`, `addEventListener`）
- 関数の定義と呼び出し
- オブジェクトと配列の操作
- イベント処理

### CSS基礎
- セレクターの使い方
- Flexboxレイアウト
- レスポンシブデザイン
- 疑似クラス（`:hover`, `:active`）

### HTML基礎
- セマンティックなマークアップ
- フォーム要素
- アクセシビリティの考慮

ハッピーハッキング！ 🚀