# デプロイメント & 環境変数

## デプロイメント

- **Vercel**での自動デプロイ
- **Preview URL**での確認後、Production昇格
- **環境変数**はVercelダッシュボードで設定

## 必要な環境変数

### メール送信

- `CONTACT_TO`: 問い合わせメール送信先
- `DOCUMENTS_TO`: 資料請求メール送信先
- `SMTP_HOST`: メールサーバーホスト
- `SMTP_USER`: メールサーバーユーザー
- `SMTP_PASS`: メールサーバーパスワード

### アナリティクス・計測

- `GA_MEASUREMENT_ID`: Google Analytics 4

### セキュリティ・スパム対策

- `TURNSTILE_SITE_KEY`: Cloudflare Turnstile公開キー
- `TURNSTILE_SECRET_KEY`: Cloudflare Turnstile秘密キー

## フォーム実装要件

- バリデーションを実装
- エラーメッセージの適切な表示
- スパム対策（Cloudflare Turnstile推奨）
- 送信先はENV変数で管理
- API Route：POST /api/contact, POST /api/documents

## セキュリティ要件

- 依存パッケージの監査（npm audit）
- ヘッダー強化（CSP, X-Frame-Options等）
- 入力値サニタイズ、Rate limit（簡易で可）
- 秘密情報のENV変数管理
