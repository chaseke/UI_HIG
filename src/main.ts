// ボタンの要素を取得
const testBtn = document.getElementById('test-btn') as HTMLButtonElement;

// タップ（クリック）イベントの登録
if (testBtn) {
  testBtn.addEventListener('click', () => {
    // iPhone実機で動いたときに分かりやすいようにアラートを出す
    alert('Primary Buttonがタップされました！');
  });
}