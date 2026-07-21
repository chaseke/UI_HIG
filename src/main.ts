import './styles.css';

// ボタンの要素を取得
const testBtn = document.getElementById('test-btn') as HTMLButtonElement;

// タップ（クリック）イベントの登録
if (testBtn) {
  testBtn.addEventListener('click', () => {
    // iPhone実機で動いたときに分かりやすいようにアラートを出す
    alert('Primary Buttonがタップされました！');
  });
}

// --- タブバーの切り替え処理 ---
const tabItems = document.querySelectorAll('.tab-item');

tabItems.forEach(item => {
  item.addEventListener('click', () => {
    // 1. 現在 'active' になっているタブから 'active' を外す
    const currentActive = document.querySelector('.tab-item.active');
    if (currentActive) {
      currentActive.classList.remove('active');
    }
    
    // 2. クリックされたタブに新しく 'active' を付与する
    item.classList.add('active');
  });
});