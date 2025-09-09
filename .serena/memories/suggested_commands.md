# 推奨コマンド

## 必須: タスク完了時に実行

```bash
npm run lint           # ESLintでコード品質チェック
npm run typecheck      # TypeScript型チェック
npm run check          # 総合チェック (tsc && eslint && prettier)
```

## 開発時

```bash
npm run dev            # 開発サーバー起動
npm run build          # 本番ビルド（デプロイ前確認）
```

## システムコマンド (macOS/Darwin)

```bash
ls                     # ファイル・ディレクトリ一覧
find . -name "*.tsx"   # ファイル検索
grep -r "keyword" src/ # テキスト検索（ただしGrepツール推奨）
```

## Git操作

```bash
git status             # 変更状況確認
git add .              # ステージング
git commit -m "msg"    # コミット
git push               # プッシュ
```

## パッケージ管理

```bash
npm install            # 依存関係インストール
npm audit              # セキュリティ監査
```

## 重要な注意事項

- コード変更後は必ず `npm run lint` と `npm run typecheck` を実行
- 本番デプロイ前に `npm run build` でビルドエラーがないことを確認
- Lighthouseスコア（Performance/Accessibility/Best Practices/SEO）の維持
