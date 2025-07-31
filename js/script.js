// アプリケーションの状態管理
let appState = {
  counter: 0
};

// DOM要素の取得
const counterElement = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");

// カウンターの表示を更新
function updateCounterDisplay() {
  counterElement.textContent = appState.counter;
}

// カウンターを増加
function incrementCounter() {
  appState.counter++;
  updateCounterDisplay();
  console.log("カウンター増加:", appState.counter);
}

// カウンターを減少
function decrementCounter() {
  appState.counter--;
  updateCounterDisplay();
  console.log("カウンター減少:", appState.counter);
}

// カウンターをリセット
function resetCounter() {
  appState.counter = 0;
  updateCounterDisplay();
  console.log("カウンターリセット");
}


// イベントリスナーの設定
document.addEventListener("DOMContentLoaded", () => {
  // ボタンイベント
  incrementBtn.addEventListener("click", incrementCounter);
  decrementBtn.addEventListener("click", decrementCounter);
  resetBtn.addEventListener("click", resetCounter);

  console.log("アプリケーション初期化完了");
});