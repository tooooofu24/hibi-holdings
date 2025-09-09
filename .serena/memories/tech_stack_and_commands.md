# 技術スタック & コマンド

## 開発コマンド

```bash
npm run dev            # Next.js開発サーバー起動
npm run build          # 本番ビルド
npm run start          # 本番サーバー起動
```

## コード品質

```bash
npm run lint           # ESLint実行
npm run typecheck      # TypeScriptの型チェック (tsc)
npm run check          # 総合チェック (tsc && eslint && prettier)
```

## 技術スタック詳細

- **Next.js 15** with App Router
- **TypeScript** (strict mode enabled)
- **Chakra UI v3** (UIコンポーネントライブラリ)
- **React 19.1.1**
- **next-themes** (ダークモード対応)
- **react-icons**

## 開発ツール

- **ESLint** with Next.js config
- **Prettier** for code formatting
- **TypeScript** for type checking

## プロジェクト構造

```
src/
├── app/                    # Next.js App Router
│   ├── (index)/           # ホームページ
│   ├── about/             # 会社情報
│   ├── contact/           # お問い合わせ
│   ├── documents/         # 資料請求
│   ├── services/          # 事業紹介
│   │   ├── dev/          # 受託開発
│   │   └── vip-casting/   # VIPキャスティング
│   ├── privacy/           # プライバシーポリシー
│   ├── terms/            # 利用規約
│   └── components/        # 共通コンポーネント
├── components/            # アプリ全体共通コンポーネント
└── lib/                  # ユーティリティ・設定
```
