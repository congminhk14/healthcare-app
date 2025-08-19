# ヘルスケアシステム セットアップガイド

## 環境設定

1. 環境変数ファイルを作成:
```bash
cp .env.example .env.local
```

または手動で `.env.local` ファイルを作成し、以下の内容を追加:
```
SECRET_COOKIE_PASSWORD=your_complex_password_at_least_32_characters_long
```

## デモアカウント

- **医師**: doctor@healthcare.jp / password123
- **看護師**: nurse@healthcare.jp / password123

## 開発サーバー起動

```bash
npm run dev
```

## アクセス方法

1. `http://localhost:3000` - 自動的にコラムページにリダイレクト
2. `http://localhost:3000/column` - コラム/ニュースページ（パブリック）
3. `http://localhost:3000/dashboard` - ダッシュボード（認証必要）
4. `http://localhost:3000/patients` - 患者管理（認証必要）
5. `http://localhost:3000/appointments` - 予約管理（認証必要）

## 認証システム

- **パブリックページ**: `/column` - ログイン不要でアクセス可能
- **プライベートページ**: `/dashboard`, `/patients`, `/appointments` - ログインが必要
- **ログインダイアログ**: プライベートページにアクセス時に自動表示
- **ヘッダー**: 全ページ共通、ログイン状態に応じて表示切替

## 技術スタック

- **Framework**: Next.js 15 (App Router)
- **Authentication**: iron-session
- **Forms**: Formik + Yup
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **UI Language**: Japanese

## 機能

### 認証・セキュリティ
- ✅ セッション管理（iron-session）
- ✅ ログインダイアログ（モーダル形式）
- ✅ 認証ガード（クライアントサイド）
- ✅ 自動リダイレクト（ルートから/columnへ）

### UI・UX
- ✅ レスポンシブデザイン
- ✅ 日本語UI
- ✅ ニュース/コラム形式のレイアウト
- ✅ カテゴリ分け（オススメ、ダイエット、美容、健康）

### ページ構成
- ✅ コラムページ（パブリック）
- ✅ ダッシュボード（プライベート）
- ✅ 患者管理（プライベート）
- ✅ 予約管理（プライベート）

### フォーム・バリデーション
- ✅ Formik + Yup
- ✅ リアルタイムバリデーション
- ✅ 日本語エラーメッセージ

