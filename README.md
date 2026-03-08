# 會考倒數計時器 (Exams Countdown Timer)

一個充滿未來科技感、採用玻璃擬態 (Glassmorphism) 設計理念的網頁版專屬倒數計時器。

## 網站特色

*   **專注重點**：預設為「會考倒數計時」，為考生提供優雅的視覺提醒。
*   **玻璃擬態 UI**：運用毛玻璃渲染效果與深色漸層背景，營造未來科技氛圍。
*   **自定義設定**：使用者可自行更改標題與目標時間，以適用於各種需要倒數的情境（如校慶、專案上線、連假等）。
*   **本機儲存 (LocalStorage)**：無須登入與伺服器資料庫，設定會自動儲存於瀏覽器內，再次造訪時設定不會遺失。

## 使用技術

*   **HTML5**: 語意化結構與基本布局
*   **Vanilla CSS**: 自訂動態光影效果、響應式排版與 Glassmorphism 樣式
*   **Vanilla JavaScript (ES6)**: 倒數時間邏輯計算與 LocalStorage 狀態管理

## 下載與本機執行

此為純靜態網頁應用程式（Static Web App），只需將專案 clone 至本機，雙擊 `index.html` 即可在瀏覽器中看到效果。

```bash
git clone <your-repository-url>
cd 1150308
# 打開 index.html
```

## GitHub Pages 部署

此專案已準備好直接部署至 **GitHub Pages**。

1. 在您的 GitHub 帳戶中建立一個新的程式庫 (Repository)。
2. 將所有檔案推行 (Push) 至該分支。
3. 進入遠端專案的 `Settings` -> 左側菜單點選 `Pages`。
4. 在 **Build and deployment** 下方的 **Source** 選擇 `Deploy from a branch`。
5. 在 **Branch** 選項中，選擇 `main` (或 `master`) 並點選 `/ (root)`，按下 **Save**。
6. 等待數分鐘後，GitHub 便會為您生成可公開連線的倒數計時器專屬網址！
