# Email Worker

基于 Cloudflare Workers 的邮件收发管理系统。通过 Cloudflare Email Routing 接收邮件，存储到 KV，并提供 Web 界面查看与管理。

## 功能

- 接收邮件并解析 MIME（支持 multipart、base64、quoted-printable）
- 多字符集解码（UTF-8 / GBK / Big5 / Shift-JIS / EUC-JP / EUC-KR 等）
- Web 界面：邮件列表、详情查看（纯文本 / HTML）、原始源码查看
- 密码登录保护，支持在线修改密码
- 邮件筛选（按发件域名、收件人）、分页、批量删除
- 已读 / 未读标记，全部标记已读
- 多语言支持（简体中文 / 繁體中文 / English），自动检测浏览器语言，可手动切换
- 响应式设计，移动端适配

## 前置条件

- [Node.js](https://nodejs.org/) 18+
- Cloudflare 账号
- 已配置 Cloudflare Email Routing 的域名

## 快速开始

```bash
# 安装依赖
npm install

# 创建 KV 命名空间
npx wrangler kv namespace create EMAILS
# 将返回的 id 填入 wrangler.toml

# 设置 Cookie Secret（建议使用随机字符串）
npx wrangler secret put COOKIE_SECRET

# 本地开发
npm run dev

# 部署
npm run deploy
```

## 配置

### wrangler.toml

| 字段 | 说明 |
|------|------|
| `id` | KV 命名空间 ID，通过 `wrangler kv namespace create` 获取 |
| `PASSWORD` | 初始登录密码，部署后建议通过设置页面修改 |

### 环境变量 / Secrets

| 名称 | 必填 | 说明 |
|------|------|------|
| `PASSWORD` | 是 | 初始登录密码（明文，用于首次登录） |
| `COOKIE_SECRET` | 建议设置 | Cookie 签名密钥，建议设为随机字符串 |

> 首次登录后，密码的 SHA-256 哈希会存储到 KV 中。通过 Web 设置页面修改密码时，更新的是 KV 中的哈希值，不影响 `PASSWORD` 变量。

## 配置 Email Routing

在 Cloudflare Dashboard 中：

1. 进入 **Email** > **Email Routing**
2. 添加路由规则，将目标地址指向部署的 Worker
3. 确认域名的 MX 记录已正确配置

## 项目结构

```
email-worker/
├── src/
│   └── index.js    # Worker 主代码（邮件处理 + Web UI）
├── wrangler.toml   # Wrangler 配置
├── package.json
└── .gitignore
```

## 技术栈

- **Cloudflare Workers** — 无服务器运行时
- **Cloudflare KV** — 邮件存储
- **Cloudflare Email Routing** — 邮件接收
- 前端使用 Font Awesome + Google Fonts，零构建、内联在 Worker 中

## License

GPL-3.0 license