# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

Hibi Holdings企業サイトは、Next.js + TypeScript + Chakra UI v3で構築されたコーポレートWebサイトです。要件書（required.md）に基づいて、正式な企業情報を反映した公式サイトを構築します。

## アーキテクチャ

### フロントエンド

- **Next.js 15** (App Router)
- **TypeScript** (strict mode)
- **Chakra UI v3** (UIコンポーネントライブラリ)
- **Vercel** (ホスティング)

### 主要機能

- コーポレートサイト（5つの事業紹介）
- お問い合わせフォーム
- 資料請求フォーム
- 会社情報・代表メッセージ
- SEO・OGP対応

## よく使うコマンド

### 開発

```bash
npm run dev            # Next.js開発サーバー起動
npm run build          # 本番ビルド
npm run start          # 本番サーバー起動
```

### コード品質

```bash
npm run lint           # ESLint実行
npm run typecheck      # TypeScriptの型チェック
```

## 開発ルール

1. **要件書の遵守**: `required.md`の内容を必ず確認し、指定された会社情報・コンテンツを正確に反映すること

2. **コンテンツ管理**: 将来的にはJSON形式での管理を想定（`/content/ja.json`等）

3. **画像の最適化**:
   - `next/image`を使用して最適化
   - 代替テキスト（alt属性）を必ず設定
   - loading="lazy"やpriority設定を適切に使用

4. **SEO対応**:
   - ページごとに適切なtitle/descriptionを設定
   - OGP画像を設定
   - 構造化データ（JSON-LD）を実装

5. **レスポンシブデザイン**:
   - モバイル・タブレット・デスクトップに完全対応
   - Chakra UIのブレークポイントシステムを活用

6. **アクセシビリティ**:
   - キーボード操作に対応
   - 適切なaria属性を設定
   - コントラスト比 WCAG AA準拠（4.5:1以上）

7. **フォーム実装**:
   - バリデーションを実装
   - エラーメッセージの適切な表示
   - スパム対策（Cloudflare Turnstile推奨）
   - 送信先はENV変数で管理

8. **Chakra UI v3の活用**:
   - `colorPalette`プロパティを使用（`colorScheme`は廃止）
   - デフォルトスタイルを最大限活用
   - カスタマイズは必要最小限に留める
   - Chakra UI v3の詳細なガイドラインは下記の「Chakra UI v3ガイド」セクションを参照

9. **パフォーマンス重視**:
   - 不要なJavaScriptの削減
   - フォントのpreconnect設定
   - Lighthouse スコアの維持

10. **企業サイトらしい品質**:
    - プロフェッショナルなデザイン
    - 信頼性を重視した情報表示
    - condense.jpのようなモダンで洗練されたデザイン

## 禁止事項

- **虚偽情報の表示**: ダミーデータや架空の実績数値の使用禁止
- **個人情報の漏洩**: 開発時も実際の個人情報は使用禁止
- **セキュリティリスク**: 秘密鍵やAPIキーのハードコード禁止

## 環境変数

プロダクション環境では以下の環境変数が必要：

- `CONTACT_TO`: 問い合わせメール送信先
- `DOCUMENTS_TO`: 資料請求メール送信先
- `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`: メール送信設定
- `GA_MEASUREMENT_ID`: Google Analytics 4
- `TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`: Cloudflare Turnstile

## デプロイメント

- **Vercel**での自動デプロイ
- **Preview URL**での確認後、Production昇格
- **環境変数**はVercelダッシュボードで設定

## 参考デザイン

- **condense.jp**: ミニマル・モダンデザインの参考
- **要件書記載のデザイン要件**: WCAG準拠、タイポグラフィ指針等

## Chakra UI v3ガイド

### 基本概念

Chakra UI v3では以下の重要な変更があります：

1. **System & Provider**

   ```tsx
   import {
     ChakraProvider,
     createSystem,
     defaultConfig,
   } from "@chakra-ui/react";

   const system = createSystem(defaultConfig);

   function App() {
     return (
       <ChakraProvider value={system}>{/* アプリケーション */}</ChakraProvider>
     );
   }
   ```

2. **colorScheme → colorPalette**

   ```tsx
   // ❌ v2の書き方
   <Button colorScheme="blue">Button</Button>

   // ✅ v3の書き方
   <Button colorPalette="blue">Button</Button>
   ```

3. **レイアウトコンポーネント**

   ```tsx
   // Stack（基本）
   <Stack gap="4" direction="row">
     <Box>Item 1</Box>
     <Box>Item 2</Box>
   </Stack>

   // HStack・VStack（推奨）
   <VStack gap="4">
     <Box>Item 1</Box>
     <Box>Item 2</Box>
   </VStack>

   <HStack gap="6">
     <Box>Item 1</Box>
     <Box>Item 2</Box>
   </HStack>
   ```

4. **レスポンシブデザイン**

   ```tsx
   <Box
     w={{ base: "100%", md: "50%", lg: "33%" }}
     p={{ base: "4", md: "6", lg: "8" }}
   >
     Content
   </Box>
   ```

5. **よく使うコンポーネント**

   ```tsx
   // ボタン
   <Button size="lg" colorPalette="blue" variant="solid">
     Click me
   </Button>

   // カード
   <Card.Root>
     <Card.Header>
       <Card.Title>タイトル</Card.Title>
     </Card.Header>
     <Card.Body>
       コンテンツ
     </Card.Body>
   </Card.Root>

   // フィールド（フォーム）
   <Field.Root>
     <Field.Label>ラベル</Field.Label>
     <Input placeholder="入力してください" />
     <Field.HelperText>ヘルプテキスト</Field.HelperText>
   </Field.Root>
   ```

### v2からv3への主な変更点

1. **コンポーネント名の変更**
   - `FormControl` → `Field`
   - `CircularProgress` → `ProgressCircle`
   - `Divider` → `Separator`

2. **プロパティ名の変更**
   - `colorScheme` → `colorPalette`
   - `isActive` → `active`
   - `isExternal` → `external`

3. **新しいコンポーネント**
   - `Card` (より構造化されたカードコンポーネント)
   - `Dialog` (モーダルの改良版)
   - `DataList` (データ表示用)

### パフォーマンスのベストプラクティス

1. **必要なコンポーネントのみインポート**

   ```tsx
   import { Box, Stack, Button } from "@chakra-ui/react";
   // 全体インポートは避ける: import * from "@chakra-ui/react"
   ```

2. **システムの効率的な使用**
   - デフォルトテーマを最大限活用
   - カスタムテーマは必要最小限
   - トークンベースの設計を心がける

3. **レスポンシブブレークポイント**
   - `base`: 0px以上 (モバイル)
   - `sm`: 480px以上 (小型タブレット)
   - `md`: 768px以上 (タブレット)
   - `lg`: 992px以上 (デスクトップ)
   - `xl`: 1280px以上 (大型デスクトップ)

### Chakra UI MCP（Model Context Protocol）の活用

このプロジェクトでは、Claude CodeでChakra UI MCPを利用できます。以下のツールが利用可能です：

1. **コンポーネント情報取得**
   - `mcp__chakra-ui__get_component_props`: コンポーネントのpropsと設定オプションを取得
   - `mcp__chakra-ui__get_component_example`: コンポーネントの実装例とコードスニペットを取得
   - `mcp__chakra-ui__list_components`: 利用可能な全コンポーネントのリストを表示

2. **テーマとカスタマイズ**
   - `mcp__chakra-ui__get_theme`: テーマ仕様（カラー、フォント、スタイル等）を取得
   - `mcp__chakra-ui__customize_theme`: カスタムテーマの設定方法を取得

3. **インストールとセットアップ**
   - `mcp__chakra-ui__installation`: Next.js等での軽量インストール手順を取得

4. **マイグレーション支援**
   - `mcp__chakra-ui__v2_to_v3_code_review`: v2からv3への移行ガイダンスを取得

### MCPツールの使用例

開発時は以下のようにMCPを活用してください：

```bash
# コンポーネントのpropsを確認したい場合
「Buttonコンポーネントのpropsを教えて」
→ mcp__chakra-ui__get_component_props でButtonのprops情報を取得

# 実装例が欲しい場合
「Cardコンポーネントの使用例を見せて」
→ mcp__chakra-ui__get_component_example でCardの実装例を取得

# テーマのカラーパレットを確認したい場合
「現在のテーマ設定を確認したい」
→ mcp__chakra-ui__get_theme でテーマ情報を取得
```

MCPを活用することで、最新のChakra UI v3のドキュメントに基づいた正確な情報を取得し、効率的な開発が可能になります。

### Claude Code活用ガイド

このプロジェクトでは、Claude Codeの機能を最大限活用して効率的な開発を行います：

1. **Serena（AI UIコンポーネント）の活用**
   - 常にSerenaを使用してUIコンポーネントの作成・修正を行う
   - デザインの視覚的確認とリアルタイムでの調整が可能
   - モックアップからコンポーネントへの効率的な変換

2. **MCPツールの積極活用**
   - Chakra UI MCP: 最新のコンポーネント情報とベストプラクティス
   - GitHub MCP: プルリクエストやイシューの管理
   - Playwright MCP: ブラウザテストと動作確認

3. **TodoWriteによるタスク管理**
   - 複数ステップのタスクは必ずTodoWriteで進捗管理
   - 各タスクの完了状況を明確に追跡
   - チームとの進捗共有に活用

### 開発フロー

```
1. 要件確認 → required.md参照
2. 設計・プランニング → TodoWriteでタスク分割
3. Serena活用 → UIコンポーネント作成
4. MCP活用 → Chakra UI情報取得・GitHub連携
5. テスト・確認 → Playwright等での動作確認
6. デプロイ → Vercel自動デプロイ
```

このプロジェクトは企業の公式サイトとして、品質と信頼性を最優先に開発を行います。
