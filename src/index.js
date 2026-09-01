const COOKIE_NAME = "email_auth";
const LANG_COOKIE = "lang";

const I18N = {
  "zh-CN": {
    htmlLang: "zh-CN",
    dateLocale: "zh-CN",
    titleLogin: "邮件管理 - 登录",
    title: "邮件管理",
    titleDetail: "邮件详情",
    titleSettings: "设置",
    brand: "邮件管理",
    enterPasswordPrompt: "请输入密码查看邮件",
    password: "密码",
    enterPassword: "请输入密码",
    loginBtn: "登 录",
    passwordError: "密码错误",
    totalMails: "共 {n} 封邮件",
    settingsTitle: "设置",
    refresh: "刷新",
    logout: "退出",
    filter: "筛选",
    senderGroup: "发件商",
    recipientGroup: "收件人",
    clear: "清除",
    delete: "删除",
    selected: "已选 {n} 封",
    markAllRead: "全部标为已读",
    fromHeader: "发件人",
    toHeader: "收件人",
    subjectHeader: "主题",
    timeHeader: "时间",
    noMails: "暂无邮件",
    noSubject: "(无主题)",
    noContent: "(无内容)",
    prevPage: "上一页",
    nextPage: "下一页",
    confirmDeleteBatch: "确认删除选取的 {n} 封邮件？",
    emailDetail: "邮件详情",
    back: "返回",
    hideSource: "隐藏源码",
    viewSource: "查看源码",
    markUnread: "标为未读",
    confirmDelete: "确认删除此邮件？",
    backToList: "返回列表",
    changePassword: "更改密码",
    currentPassword: "当前密码",
    currentPasswordPh: "输入当前密码",
    newPassword: "新密码",
    newPasswordPh: "输入新密码",
    confirmPassword: "确认新密码",
    confirmPasswordPh: "再次输入新密码",
    changePasswordBtn: "更改密码",
    passwordMismatch: "两次输入的新密码不一致",
    passwordTooShort: "新密码至少 4 个字符",
    currentPasswordError: "当前密码错误",
    passwordChanged: "密码已更改成功",
    emailNotFound: "404 - 邮件未找到",
    searchPh: "搜索发件人、收件人、主题",
    blacklist: "黑名单",
    titleBlacklist: "黑名单管理",
    addRule: "添加规则",
    addCondition: "添加条件",
    removeCondition: "移除",
    fromDomain: "发件域名",
    fromName: "发件名(@前)",
    fromEmail: "发件邮箱",
    toDomain: "收件域名",
    toName: "收件名(@前)",
    toEmail: "收件邮箱",
    subjectContent: "主题",
    contains: "包含",
    equals: "等于",
    noRules: "暂无黑名单规则",
    ruleSaved: "规则已添加",
    ruleDeleted: "规则已删除",
    confirmDeleteRule: "确认删除此规则？",
    allConditionsMatch: "满足全部条件时拦截",
    filteredEmails: "被排除的邮件",
    noFilteredEmails: "没有被排除的邮件",
  },
  "zh-TW": {
    htmlLang: "zh-TW",
    dateLocale: "zh-TW",
    titleLogin: "郵件管理 - 登入",
    title: "郵件管理",
    titleDetail: "郵件詳情",
    titleSettings: "設定",
    brand: "郵件管理",
    enterPasswordPrompt: "請輸入密碼查看郵件",
    password: "密碼",
    enterPassword: "請輸入密碼",
    loginBtn: "登 入",
    passwordError: "密碼錯誤",
    totalMails: "共 {n} 封郵件",
    settingsTitle: "設定",
    refresh: "重新整理",
    logout: "登出",
    filter: "篩選",
    senderGroup: "發件商",
    recipientGroup: "收件人",
    clear: "清除",
    delete: "刪除",
    selected: "已選 {n} 封",
    markAllRead: "全部標為已讀",
    fromHeader: "寄件人",
    toHeader: "收件人",
    subjectHeader: "主旨",
    timeHeader: "時間",
    noMails: "暫無郵件",
    noSubject: "(無主旨)",
    noContent: "(無內容)",
    prevPage: "上一頁",
    nextPage: "下一頁",
    confirmDeleteBatch: "確認刪除選取的 {n} 封郵件？",
    emailDetail: "郵件詳情",
    back: "返回",
    hideSource: "隱藏原始碼",
    viewSource: "檢視原始碼",
    markUnread: "標為未讀",
    confirmDelete: "確認刪除此郵件？",
    backToList: "返回列表",
    changePassword: "更改密碼",
    currentPassword: "目前密碼",
    currentPasswordPh: "輸入目前密碼",
    newPassword: "新密碼",
    newPasswordPh: "輸入新密碼",
    confirmPassword: "確認新密碼",
    confirmPasswordPh: "再次輸入新密碼",
    changePasswordBtn: "更改密碼",
    passwordMismatch: "兩次輸入的新密碼不一致",
    passwordTooShort: "新密碼至少 4 個字元",
    currentPasswordError: "目前密碼錯誤",
    passwordChanged: "密碼已更改成功",
    emailNotFound: "404 - 郵件未找到",
    searchPh: "搜尋發件人、收件人、主旨",
    blacklist: "黑名單",
    titleBlacklist: "黑名單管理",
    addRule: "新增規則",
    addCondition: "新增條件",
    removeCondition: "移除",
    fromDomain: "發件域名",
    fromName: "發件名(@前)",
    fromEmail: "發件郵箱",
    toDomain: "收件域名",
    toName: "收件名(@前)",
    toEmail: "收件郵箱",
    subjectContent: "主旨",
    contains: "包含",
    equals: "等於",
    noRules: "暫無黑名單規則",
    ruleSaved: "規則已新增",
    ruleDeleted: "規則已刪除",
    confirmDeleteRule: "確認刪除此規則？",
    allConditionsMatch: "滿足全部條件時攔截",
    filteredEmails: "被排除的郵件",
    noFilteredEmails: "沒有被排除的郵件",
  },
  "en": {
    htmlLang: "en",
    dateLocale: "en-US",
    titleLogin: "Mail Manager - Login",
    title: "Mail Manager",
    titleDetail: "Email Detail",
    titleSettings: "Settings",
    brand: "Mail Manager",
    enterPasswordPrompt: "Enter password to view emails",
    password: "Password",
    enterPassword: "Enter password",
    loginBtn: "Login",
    passwordError: "Wrong password",
    totalMails: "{n} email(s) total",
    settingsTitle: "Settings",
    refresh: "Refresh",
    logout: "Logout",
    filter: "Filter",
    senderGroup: "Sender",
    recipientGroup: "Recipient",
    clear: "Clear",
    delete: "Delete",
    selected: "{n} selected",
    markAllRead: "Mark all as read",
    fromHeader: "From",
    toHeader: "To",
    subjectHeader: "Subject",
    timeHeader: "Date",
    noMails: "No emails",
    noSubject: "(No subject)",
    noContent: "(No content)",
    prevPage: "Previous",
    nextPage: "Next",
    confirmDeleteBatch: "Delete {n} selected email(s)?",
    emailDetail: "Email Detail",
    back: "Back",
    hideSource: "Hide source",
    viewSource: "View source",
    markUnread: "Mark as unread",
    confirmDelete: "Delete this email?",
    backToList: "Back to list",
    changePassword: "Change Password",
    currentPassword: "Current Password",
    currentPasswordPh: "Enter current password",
    newPassword: "New Password",
    newPasswordPh: "Enter new password",
    confirmPassword: "Confirm New Password",
    confirmPasswordPh: "Enter new password again",
    changePasswordBtn: "Change Password",
    passwordMismatch: "New passwords do not match",
    passwordTooShort: "Password must be at least 4 characters",
    currentPasswordError: "Current password is incorrect",
    passwordChanged: "Password changed successfully",
    emailNotFound: "404 - Email not found",
    searchPh: "Search sender, recipient, subject",
    blacklist: "Blacklist",
    titleBlacklist: "Blacklist",
    addRule: "Add Rule",
    addCondition: "Add Condition",
    removeCondition: "Remove",
    fromDomain: "Sender Domain",
    fromName: "Sender Name",
    fromEmail: "Sender Email",
    toDomain: "Recipient Domain",
    toName: "Recipient Name",
    toEmail: "Recipient Email",
    subjectContent: "Subject",
    contains: "Contains",
    equals: "Equals",
    noRules: "No blacklist rules",
    ruleSaved: "Rule added",
    ruleDeleted: "Rule deleted",
    confirmDeleteRule: "Delete this rule?",
    allConditionsMatch: "Block when all conditions match",
    filteredEmails: "Filtered emails",
    noFilteredEmails: "No filtered emails",
  },
};

function detectLanguage(request) {
  const cookie = request.headers.get("Cookie") || "";
  const cm = cookie.match(new RegExp(`${LANG_COOKIE}=([^;]+)`));
  if (cm && I18N[cm[1]]) return cm[1];
  const accept = request.headers.get("Accept-Language") || "";
  const langs = accept.split(",").map(l => l.split(";")[0].trim().toLowerCase());
  for (const l of langs) {
    if (l.startsWith("zh-cn") || l.startsWith("zh-hans") || l === "zh") return "zh-CN";
    if (l.startsWith("zh-tw") || l.startsWith("zh-hk") || l.startsWith("zh-hant")) return "zh-TW";
    if (l.startsWith("en")) return "en";
  }
  return "en";
}

function langSwitcher(lang) {
  const langs = [
    { code: "zh-CN", label: "简体中文" },
    { code: "zh-TW", label: "繁體中文" },
    { code: "en", label: "English" },
  ];
  const opts = langs.map(l => `<a href="#" class="lang-option${l.code === lang ? ' active' : ''}" onclick="document.cookie='${LANG_COOKIE}=${l.code};Path=/;Max-Age=31536000';location.reload();return false">${l.label}</a>`).join("");
  return `<div class="lang-dropdown">
    <button type="button" class="neu-btn icon-only" onclick="langToggleMenu(event)" title="Language"><i class="fas fa-globe"></i></button>
    <div class="lang-menu" id="langMenu">${opts}</div>
  </div>`;
}

const SYS_FONT = "'Inter','Noto Sans SC','Noto Sans TC',-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Microsoft YaHei','Hiragino Sans GB',sans-serif";
const SYS_FONT_TC = "'Inter','Noto Sans TC','Noto Sans SC',-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang TC','Microsoft JhengHei',sans-serif";

const COMMON = `<link rel="stylesheet" href="https://fonts.font.im/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;700&family=Noto+Sans+TC:wght@400;500;700&display=swap">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<style>
:root { --font: ${SYS_FONT}; }
:lang(zh-TW) { --font: ${SYS_FONT_TC}; }
:root {
  --bg: #f5f5f7;
  --surface: #ffffff;
  --surface-hover: #fafafa;
  --surface-secondary: #f5f5f7;
  --text: #1d1d1f;
  --text-secondary: #86868b;
  --text-tertiary: #aeaeb2;
  --accent: #0071e3;
  --accent-hover: #0077ed;
  --accent-light: rgba(0,113,227,0.08);
  --danger: #ff3b30;
  --danger-light: rgba(255,59,48,0.06);
  --success: #34c759;
  --success-light: rgba(52,199,89,0.08);
  --border: rgba(0,0,0,0.07);
  --border-strong: rgba(0,0,0,0.12);
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.03);
  --shadow-lg: 0 12px 40px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.04);
  --r: 14px;
  --r-sm: 10px;
  --r-xs: 8px;
  --header-blur: saturate(180%) blur(20px);
  --header-bg: rgba(255,255,255,0.72);
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #000000;
    --surface: #1c1c1e;
    --surface-hover: #2c2c2e;
    --surface-secondary: #1c1c1e;
    --text: #f5f5f7;
    --text-secondary: #86868b;
    --text-tertiary: #636366;
    --accent: #0a84ff;
    --accent-hover: #3a9bff;
    --accent-light: rgba(10,132,255,0.12);
    --danger: #ff453a;
    --danger-light: rgba(255,69,58,0.12);
    --success: #30d158;
    --success-light: rgba(48,209,88,0.12);
    --border: rgba(255,255,255,0.08);
    --border-strong: rgba(255,255,255,0.14);
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.2);
    --shadow-md: 0 4px 16px rgba(0,0,0,0.25);
    --shadow-lg: 0 12px 40px rgba(0,0,0,0.35);
    --header-bg: rgba(28,28,30,0.72);
  }
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: var(--bg); color: var(--text); font-family: var(--font); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
a { color: var(--accent); text-decoration: none; transition: color 0.15s; }
a:hover { color: var(--accent-hover); }
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--text-tertiary); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--text-secondary); }
@keyframes fadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
@keyframes slideDown { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
.fade-up { animation: fadeUp 0.3s ease-out; }
.slide-down { animation: slideDown 0.25s ease-out; }
.neu-raised { background: var(--surface); border-radius: var(--r); box-shadow: var(--shadow-md); }
.neu-raised-sm { background: var(--surface); border-radius: var(--r-sm); box-shadow: var(--shadow-sm); border: 1px solid var(--border); }
.neu-inset { background: var(--surface-secondary); border-radius: var(--r); border: 1px solid var(--border); }
.neu-inset-sm { background: var(--surface-secondary); border-radius: var(--r-sm); border: 1px solid var(--border); }
.neu-btn {
  border: 1px solid var(--border-strong); background: var(--surface); color: var(--text); border-radius: var(--r-sm);
  cursor: pointer; font-weight: 500; font-family: var(--font); font-size: 14px;
  transition: all 0.15s ease; -webkit-appearance: none;
  padding: 8px 16px; display: inline-flex; align-items: center; justify-content: center; gap: 6px; white-space: nowrap;
}
.neu-btn:hover { background: var(--surface-hover); }
.neu-btn:active { transform: scale(0.97); }
.neu-btn-accent { background: var(--accent); color: #fff; border-color: var(--accent); }
.neu-btn-accent:hover { background: var(--accent-hover); border-color: var(--accent-hover); color: #fff; }
.neu-btn-danger { color: var(--danger); border-color: var(--danger-light); }
.neu-btn-danger:hover { background: var(--danger-light); border-color: var(--danger); color: var(--danger); }
.neu-input {
  width: 100%; border: 1px solid var(--border-strong); background: var(--surface); color: var(--text);
  border-radius: var(--r-sm); outline: none;
  font-family: var(--font); transition: border-color 0.15s, box-shadow 0.15s; -webkit-appearance: none;
  padding: 10px 14px; font-size: 15px;
}
.neu-input::placeholder { color: var(--text-tertiary); }
.neu-input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-light); }
.neu-btn.icon-only { padding: 7px 10px; min-width: 34px; }
input[type="checkbox"] {
  appearance: none; -webkit-appearance: none; width: 18px; height: 18px;
  border-radius: 5px; background: var(--surface); border: 1.5px solid var(--text-tertiary);
  cursor: pointer; position: relative; transition: all 0.15s; flex-shrink: 0;
}
input[type="checkbox"]:checked { background: var(--accent); border-color: var(--accent); }
input[type="checkbox"]:checked::after {
  content: '\\2714'; position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%); color: #fff; font-size: 11px; font-weight: bold;
}
.neu-alert { padding: 10px 14px; border-radius: var(--r-sm); font-size: 13px; margin-bottom: 16px; border: 1px solid var(--border); background: var(--surface); }
.neu-alert i { margin-right: 6px; }
.neu-alert-error { color: var(--danger); background: var(--danger-light); border-color: rgba(255,59,48,0.2); }
.neu-alert-success { color: var(--success); background: var(--success-light); border-color: rgba(52,199,89,0.2); }
.neu-pill {
  padding: 5px 14px; background: var(--surface); border: 1px solid var(--border); border-radius: 20px;
  font-size: 13px; cursor: pointer; color: var(--text-secondary);
  transition: all 0.15s; user-select: none; display: inline-flex; align-items: center;
}
.neu-pill:hover { background: var(--surface-hover); color: var(--text); border-color: var(--border-strong); }
.neu-pill:active { transform: scale(0.97); }
.neu-pill.active { color: #fff; background: var(--accent); border-color: var(--accent); font-weight: 500; }
.neu-pill.clear { color: var(--danger); border-color: rgba(255,59,48,0.15); }
.neu-pill.clear:hover { background: var(--danger-light); border-color: var(--danger); }
.lang-dropdown { position: relative; display: inline-flex; }
.lang-menu { display: none; position: absolute; top: calc(100% + 6px); right: 0; min-width: 140px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--r-sm); box-shadow: var(--shadow-lg); padding: 4px; z-index: 100; }
.lang-menu.open { display: flex; flex-direction: column; animation: fadeUp 0.15s ease-out; }
.lang-option { padding: 8px 12px; font-size: 13px; color: var(--text); border-radius: var(--r-xs); text-decoration: none; cursor: pointer; transition: background 0.15s, color 0.15s; }
.lang-option:hover { background: var(--surface-hover); color: var(--text); }
.lang-option.active { color: var(--accent); font-weight: 500; }
</style>
<script>
function langToggleMenu(e){e.stopPropagation();var m=document.getElementById('langMenu');if(m)m.classList.toggle('open')}
document.addEventListener('click',function(){var m=document.getElementById('langMenu');if(m)m.classList.remove('open')});
</script>`;

async function sha256(str) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

async function getPasswordHash(env) {
  return await env.EMAILS.get("config:password_hash") || await sha256(env.PASSWORD || "changeme");
}

function html(content) {
  return new Response(content, {
    headers: { "Content-Type": "text/html;charset=utf-8" }
  });
}

function redirect(url) {
  return new Response(null, { status: 302, headers: { Location: url } });
}

function setCookie(value) {
  return `${COOKIE_NAME}=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`;
}

function clearCookie() {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
}

async function isAuthenticated(request, env) {
  const cookie = request.headers.get("Cookie") || "";
  const match = cookie.match(new RegExp(`${COOKIE_NAME}=([^;]+)`));
  if (!match) return false;
  const passwordHash = await getPasswordHash(env);
  const expected = await sha256(passwordHash + ":" + (env.COOKIE_SECRET || "changeme"));
  return match[1] === expected;
}

function escapeHtml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function extractEmail(str) {
  const m = String(str).match(/<([^>]+)>/);
  return m ? m[1] : str;
}

function cleanDisplayName(str) {
  return String(str).replace(/"/g, '');
}

function extractEmailParts(str) {
  const s = String(str);
  const m = s.match(/<([^>]+)>/);
  const email = m ? m[1] : (s.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/) || [""])[0];
  const domain = email.split("@")[1] || "";
  const local = email.split("@")[0] || "";
  return { email, domain, local };
}

async function getBlacklist(env) {
  return JSON.parse((await env.EMAILS.get("config:blacklist")) || "[]");
}

async function saveBlacklist(env, rules) {
  await env.EMAILS.put("config:blacklist", JSON.stringify(rules));
}

function matchBlacklist(email, rules) {
  if (!rules || rules.length === 0) return false;
  const fromParts = extractEmailParts(email.from || "");
  const toParts = extractEmailParts(email.to || "");
  for (const rule of rules) {
    if (!rule.conditions || rule.conditions.length === 0) continue;
    let allMatch = true;
    for (const cond of rule.conditions) {
      let fv = "";
      switch (cond.field) {
        case "from_domain": fv = fromParts.domain; break;
        case "from_name": fv = fromParts.local; break;
        case "from_email": fv = fromParts.email; break;
        case "to_domain": fv = toParts.domain; break;
        case "to_name": fv = toParts.local; break;
        case "to_email": fv = toParts.email; break;
        case "subject": fv = email.subject || ""; break;
      }
      if (cond.op === "equals") {
        if (fv.toLowerCase() !== String(cond.value).toLowerCase()) { allMatch = false; break; }
      } else {
        if (!fv.toLowerCase().includes(String(cond.value).toLowerCase())) { allMatch = false; break; }
      }
    }
    if (allMatch) return true;
  }
  return false;
}

function formatDate(dateStr, lang) {
  try {
    const d = new Date(dateStr);
    const t = I18N[lang] || I18N["en"];
    return d.toLocaleString(t.dateLocale, { timeZone: "Asia/Shanghai" });
  } catch {
    return dateStr;
  }
}

function decodeQP(str) {
  return str.replace(/=([0-9A-Fa-f]{2})/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/=\r?\n/g, "");
}

function normalizeCharset(cs) {
  if (!cs) return "utf-8";
  const map = {
    "gb2312": "gbk", "gb_2312-80": "gbk", "gbk": "gbk", "gb18030": "gb18030",
    "shift_jis": "shift-jis", "sjis": "shift-jis",
    "euc-jp": "euc-jp", "euc-kr": "euc-kr",
    "ks_c_5601-1987": "euc-kr", "ks_c_5601": "euc-kr",
    "big5": "big5", "big5-hkscs": "big5-hkscs",
    "iso-2022-jp": "iso-2022-jp", "iso-2022-kr": "iso-2022-kr",
    "latin1": "iso-8859-1", "latin-1": "iso-8859-1",
    "cp1252": "windows-1252", "cp1251": "windows-1251",
    "utf8": "utf-8", "utf-8": "utf-8"
  };
  return map[cs.toLowerCase()] || cs;
}

function decodeBytes(str, charset) {
  try {
    const bytes = new Uint8Array([...str].map(c => c.charCodeAt(0) & 0xFF));
    return new TextDecoder(normalizeCharset(charset)).decode(bytes);
  } catch { return str; }
}

function decodeRFC2047(str) {
  return str.replace(/=\?([^?]+)\?([BbQq])\?([^?]*)\?=/g, (_, charset, enc, text) => {
    try {
      let raw;
      if (enc.toUpperCase() === "B") {
        raw = atob(text);
      } else {
        raw = text.replace(/_/g, " ");
        raw = decodeQP(raw);
      }
      return decodeBytes(raw, charset);
    } catch { return text; }
  });
}

function mergeHeaders(lines) {
  const merged = [];
  let cur = "";
  for (const line of lines) {
    if (line.length === 0) { merged.push(""); continue; }
    if (line[0] === " " || line[0] === "\t") { cur += line.trimStart(); }
    else { if (cur) merged.push(cur); cur = line; }
  }
  if (cur) merged.push(cur);
  return merged;
}

function parseMime(raw) {
  const result = { text: "", html: "" };
  const headerEnd = raw.indexOf("\r\n\r\n");
  if (headerEnd === -1) { result.text = raw; return result; }

  const headerSection = raw.substring(0, headerEnd);
  const body = raw.substring(headerEnd + 4);

  const merged = mergeHeaders(headerSection.split("\r\n"));
  let contentType = "";
  for (const line of merged) {
    if (line.toLowerCase().startsWith("content-type:")) {
      contentType = line.substring(13).trim();
    }
  }

  const bm = contentType.match(/boundary\s*=\s*"?([^";\s]+)"?/i);
  if (bm) {
    const boundary = bm[1];
    const parts = body.split(new RegExp("\\r?\\n?--" + boundary.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    for (const part of parts) {
      if (part === "--" || part === "" || part.endsWith("--")) continue;
      const phEnd = part.indexOf("\r\n\r\n");
      if (phEnd === -1) continue;
      const phRaw = part.substring(0, phEnd);
      const pb = part.substring(phEnd + 4).replace(/^[\r\n]+|[\r\n]+$/g, "");

      const phMerged = mergeHeaders(phRaw.split("\r\n"));
      let encoding = "", ctype = "", charset = "utf-8";
      for (const line of phMerged) {
        const l = line.toLowerCase();
        if (l.startsWith("content-type:")) {
          ctype = l.substring(13).trim();
          const cm = ctype.match(/charset\s*=\s*"?([^";\s]+)"?/i);
          if (cm) charset = cm[1];
        }
        if (l.startsWith("content-transfer-encoding:")) encoding = l.substring(26).trim();
      }

      let decoded = pb;
      if (encoding === "base64") {
        try { decoded = atob(pb.replace(/[\s\r\n]/g, "")); } catch { decoded = pb; }
      } else if (encoding === "quoted-printable") {
        decoded = decodeQP(pb);
      }

      if (charset && charset.toLowerCase() !== "us-ascii") {
        decoded = decodeBytes(decoded, charset);
      }

      if (ctype.includes("text/html") && !result.html) result.html = decoded;
      else if (ctype.includes("text/plain") && !result.text) result.text = decoded;
    }
  } else {
    let encoding = "", charset = "utf-8";
    for (const line of merged) {
      const l = line.toLowerCase();
      if (l.startsWith("content-transfer-encoding:")) encoding = l.substring(26).trim();
      if (l.startsWith("content-type:")) {
        const cm = l.match(/charset\s*=\s*"?([^";\s]+)"?/i);
        if (cm) charset = cm[1];
      }
    }
    let decoded = body;
    if (encoding === "base64") {
      try { decoded = atob(body.replace(/[\s\r\n]/g, "")); } catch { decoded = body; }
    } else if (encoding === "quoted-printable") {
      decoded = decodeQP(body);
    }
    if (charset && charset.toLowerCase() !== "us-ascii") {
      decoded = decodeBytes(decoded, charset);
    }
    result.text = decoded.trim();
    if (contentType.includes("text/html")) result.html = decoded.trim();
  }

  return result;
}

function renderLoginPage(lang, error) {
  const t = I18N[lang] || I18N["en"];
  return `<!DOCTYPE html>
<html lang="${t.htmlLang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${t.titleLogin}</title>
${COMMON}
<style>
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
.login-card { width: 380px; max-width: 100%; padding: 44px 36px 36px; border-radius: var(--r); background: var(--surface); box-shadow: var(--shadow-lg); border: 1px solid var(--border); position: relative; animation: fadeUp 0.35s ease-out; }
.login-card h1 { font-size: 22px; color: var(--text); margin-bottom: 6px; text-align: center; font-weight: 700; letter-spacing: -0.02em; }
.login-card h1 i { color: var(--accent); margin-right: 10px; }
.login-card .sub { color: var(--text-secondary); font-size: 14px; margin-bottom: 28px; text-align: center; }
.login-card .lang-row { position: absolute; top: 16px; right: 16px; }
.input-group { margin-bottom: 18px; }
.input-group label { display: block; font-size: 13px; color: var(--text); margin-bottom: 8px; font-weight: 500; }
.input-group label i { color: var(--text-secondary); margin-right: 6px; width: 14px; }
.input-group input { padding: 12px 16px; font-size: 15px; }
.login-btn { width: 100%; padding: 12px; font-size: 15px; font-weight: 600; border-radius: var(--r-sm); }
</style>
</head>
<body>
<div class="login-card">
  <div class="lang-row">${langSwitcher(lang)}</div>
  <h1><i class="fas fa-envelope"></i>${t.brand}</h1>
  <p class="sub">${t.enterPasswordPrompt}</p>
  ${error ? `<div class="neu-alert neu-alert-error"><i class="fas fa-exclamation-circle"></i>${escapeHtml(error)}</div>` : ""}
  <form method="POST" action="/login">
    <div class="input-group">
      <label for="password"><i class="fas fa-lock"></i>${t.password}</label>
      <input type="password" id="password" name="password" class="neu-input" placeholder="${t.enterPassword}" autofocus>
    </div>
    <button type="submit" class="neu-btn neu-btn-accent login-btn"><i class="fas fa-sign-in-alt"></i> ${t.loginBtn}</button>
  </form>
</div>
</body>
</html>`;
}

function renderListPage(lang, emails, page, totalPages, searchQuery) {
  const t = I18N[lang] || I18N["en"];
  const rows = emails.length === 0
    ? `<tr class="empty-row"><td colspan="5"><div style="text-align:center;padding:48px 20px;color:var(--text-secondary);"><i class="fas fa-inbox" style="font-size:36px;margin-bottom:12px;display:block;"></i>${t.noMails}</div></td></tr>`
    : emails.map(e => {
        const unread = !e.read;
        return `<tr data-id="${e.id}" class="${unread ? 'unread' : ''}">
      <td class="chk" onclick="event.stopPropagation()"><input type="checkbox" class="email-chk" value="${e.id}"></td>
      <td class="from" onclick="location.href='/email/${e.id}'">${unread ? '<span class="dot"></span>' : ''}${escapeHtml(cleanDisplayName(e.from || ''))}</td>
      <td class="to" onclick="location.href='/email/${e.id}'">${escapeHtml(cleanDisplayName(e.to || ''))}</td>
      <td class="subject" onclick="location.href='/email/${e.id}'">${unread ? '<b>' : ''}${escapeHtml(e.subject || t.noSubject)}${unread ? '</b>' : ''}</td>
      <td class="date" onclick="location.href='/email/${e.id}'">${formatDate(e.date, lang)}</td>
    </tr>`;
      }).join("");

  return `<!DOCTYPE html>
<html lang="${t.htmlLang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${t.title}</title>
${COMMON}
<style>
.header { background: var(--header-bg); backdrop-filter: var(--header-blur); -webkit-backdrop-filter: var(--header-blur); padding: 14px 24px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 10; border-bottom: 1px solid var(--border); animation: slideDown 0.25s ease-out; }
.header h1 { font-size: 18px; color: var(--text); font-weight: 700; letter-spacing: -0.01em; }
.header h1 i { color: var(--accent); margin-right: 8px; }
.header .sub { color: var(--text-secondary); font-size: 13px; margin-top: 2px; }
.header .actions { display: flex; gap: 8px; align-items: center; }
.container { max-width: 1000px; margin: 0 auto; padding: 20px 16px; animation: fadeUp 0.3s ease-out; }
.table-wrap { border-radius: var(--r); background: var(--surface); box-shadow: var(--shadow-md); overflow: hidden; border: 1px solid var(--border); }
table { width: 100%; border-collapse: collapse; }
th { text-align: left; padding: 12px 16px; font-size: 11px; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; background: var(--surface-secondary); border-bottom: 1px solid var(--border); }
th.chk { width: 40px; text-align: center; }
td { padding: 13px 16px; border: none; border-bottom: 1px solid var(--border); font-size: 14px; color: var(--text); }
tr:last-child td { border-bottom: none; }
tr:hover td { background: var(--surface-hover); }
td.chk { text-align: center; }
tr.unread .from { font-weight: 600; }
tr.unread .subject { font-weight: 600; }
.dot { display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: var(--accent); margin-right: 8px; vertical-align: middle; }
.from { max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; cursor: pointer; }
.to { color: var(--text-secondary); max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; cursor: pointer; }
.subject { max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; cursor: pointer; }
.date { color: var(--text-secondary); font-size: 13px; white-space: nowrap; text-align: right; cursor: pointer; }
.filter-section { margin-bottom: 14px; border-radius: var(--r-sm); background: var(--surface); box-shadow: var(--shadow-sm); overflow: hidden; border: 1px solid var(--border); }
.filter-toggle { padding: 10px 16px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; }
.filter-toggle span { font-size: 14px; color: var(--text); }
.filter-toggle span i { color: var(--text-secondary); margin-right: 6px; }
.filter-toggle .arrow { transition: transform 0.2s; color: var(--text-secondary); }
.filter-toggle.open .arrow { transform: rotate(180deg); }
.filter-content { max-height: 0; overflow: hidden; padding: 0 16px; border-top: 1px solid transparent; transition: max-height 0.3s ease-out, padding 0.3s ease-out, border-top-color 0.3s ease-out; }
.filter-content.open { max-height: 500px; padding: 14px 16px; border-top-color: var(--border); }
.filter-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.filter-group { margin-bottom: 10px; }
.filter-group:last-child { margin-bottom: 0; }
.filter-group-title { font-size: 12px; color: var(--text-secondary); margin-bottom: 8px; font-weight: 500; }
.toolbar { display: flex; gap: 10px; margin-bottom: 14px; align-items: center; }
.toolbar .del-btn { padding: 7px 14px; font-size: 13px; display: none; }
.toolbar .count { font-size: 13px; color: var(--text-secondary); }
.toolbar .read-all-btn { padding: 7px 14px; font-size: 13px; }
.pagination { display: flex; justify-content: center; align-items: center; gap: 10px; margin-top: 20px; }
.pagination a.disabled { opacity: 0.4; pointer-events: none; }
.pagination .current { color: var(--text-secondary); font-size: 13px; padding: 0 8px; }
.search-form { display: flex; align-items: center; flex: 0 1 260px; position: relative; margin: 0 4px; }
.search-form .search-icon { position: absolute; left: 10px; color: var(--text-tertiary); font-size: 13px; pointer-events: none; }
.search-input { width: 100%; padding: 7px 12px 7px 32px; font-size: 13px; border: 1px solid var(--border-strong); border-radius: var(--r-sm); background: var(--surface); color: var(--text); outline: none; font-family: var(--font); transition: border-color 0.15s, box-shadow 0.15s; -webkit-appearance: none; }
.search-input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-light); }
.search-input::placeholder { color: var(--text-tertiary); }
@media (max-width: 768px) {
  .header { padding: 12px 16px; flex-wrap: wrap; gap: 8px; }
  .header h1 { font-size: 16px; }
  .header .sub { display: none; }
  .container { padding: 14px 10px; }
  .to, th:nth-child(3) { display: none; }
  td, th { padding: 10px 12px; }
  .search-form { flex: 1 0 100%; max-width: none; margin: 0; order: 10; }
  .search-input { font-size: 16px; }
}
@media (max-width: 480px) {
  thead { display: none; }
  table, tbody { display: block; width: 100%; }
  .table-wrap { box-shadow: none; background: transparent; border: none; padding: 0; }
  tr { display: flex; flex-wrap: wrap; align-items: center; padding: 14px 16px; margin-bottom: 10px; border-radius: var(--r-sm); background: var(--surface); box-shadow: var(--shadow-sm); border: 1px solid var(--border); }
  tr:hover td { background: transparent; }
  tr.empty-row td { padding: 48px 20px; }
  td { display: inline-flex; align-items: center; border: none; padding: 0; }
  td.chk { display: none; }
  td.from { flex: 0 1 60%; font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  td.date { flex: 0 0 40%; justify-content: flex-end; font-size: 11px; }
  td.subject { flex: 1 0 100%; font-size: 13px; margin-top: 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .filter-section { margin-bottom: 10px; }
  .toolbar { flex-wrap: wrap; }
  .pagination a { padding: 6px 12px; font-size: 12px; }
}
</style>
</head>
<body>
<div class="header">
  <div>
    <h1><i class="fas fa-envelope"></i>${t.brand}</h1>
    <div class="sub"><i class="fas fa-inbox" style="margin-right:4px;"></i>${t.totalMails.replace("{n}", emails.length)}</div>
  </div>
  <form class="search-form" method="GET" action="/">
    <i class="fas fa-search search-icon"></i>
    <input type="text" name="q" class="search-input" placeholder="${t.searchPh}" value="${escapeHtml(searchQuery || '')}">
  </form>
  <div class="actions">
    ${langSwitcher(lang)}
    <a href="/blacklist" class="neu-btn icon-only" title="${t.blacklist}"><i class="fas fa-ban"></i></a>
    <a href="/settings" class="neu-btn icon-only" title="${t.settingsTitle}"><i class="fas fa-cog"></i></a>
    <a href="/" class="neu-btn icon-only" title="${t.refresh}"><i class="fas fa-sync-alt"></i></a>
    <form method="POST" action="/logout" style="display:inline">
      <button type="submit" class="neu-btn icon-only" title="${t.logout}"><i class="fas fa-sign-out-alt"></i></button>
    </form>
  </div>
</div>
<div class="container">
  ${emails.length > 0 ? `<div class="filter-section">
    <div class="filter-toggle" id="filterToggle" onclick="toggleFilter()">
      <span><i class="fas fa-filter"></i>${t.filter}</span>
      <i class="fas fa-chevron-down arrow"></i>
    </div>
    <div class="filter-content" id="filterContent">
      <div class="filter-group">
        <div class="filter-group-title">${t.senderGroup}</div>
        <div class="filter-tags" id="fromFilterTags">
          <span class="neu-pill clear" data-type="from" onclick="clearTypeFilter('from')">${t.clear}</span>
        </div>
      </div>
      <div class="filter-group">
        <div class="filter-group-title">${t.recipientGroup}</div>
        <div class="filter-tags" id="toFilterTags">
          <span class="neu-pill clear" data-type="to" onclick="clearTypeFilter('to')">${t.clear}</span>
        </div>
      </div>
    </div>
  </div>` : ""}
  <div class="toolbar">
    <button class="neu-btn neu-btn-danger del-btn" id="batchDel" onclick="batchDelete()"><i class="fas fa-trash"></i> <span>${t.delete}</span></button>
    <span class="count" id="selCount"></span>
    ${emails.length > 0 ? `<form method="POST" action="/read-all" style="margin-left:auto;display:inline">
      <button type="submit" class="neu-btn neu-btn-accent read-all-btn"><i class="fas fa-envelope-open"></i> ${t.markAllRead}</button>
    </form>` : ""}
  </div>
  <div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th class="chk"><input type="checkbox" id="selAll" onchange="toggleAll(this)"></th>
        <th>${t.fromHeader}</th>
        <th>${t.toHeader}</th>
        <th>${t.subjectHeader}</th>
        <th style="text-align:right">${t.timeHeader}</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
  </div>
  ${totalPages > 1 ? `
  <div class="pagination">
    <a href="/?page=${page - 1}${searchQuery ? '&q=' + encodeURIComponent(searchQuery) : ''}" class="neu-btn ${page <= 1 ? 'disabled' : ''}"><i class="fas fa-chevron-left"></i> ${t.prevPage}</a>
    <span class="current">${page} / ${totalPages}</span>
    <a href="/?page=${page + 1}${searchQuery ? '&q=' + encodeURIComponent(searchQuery) : ''}" class="neu-btn ${page >= totalPages ? 'disabled' : ''}">${t.nextPage} <i class="fas fa-chevron-right"></i></a>
  </div>` : ""}
</div>
<script>
var T = { delete: ${JSON.stringify(t.delete)}, selected: ${JSON.stringify(t.selected)}, confirmDeleteBatch: ${JSON.stringify(t.confirmDeleteBatch)} };
function toggleAll(cb) { document.querySelectorAll('.email-chk').forEach(function(c){c.checked=cb.checked}); updateDelBtn(); }
function updateDelBtn() {
  var n = document.querySelectorAll('.email-chk:checked').length;
  var btn = document.getElementById('batchDel');
  var cnt = document.getElementById('selCount');
  if (n > 0) { btn.style.display = 'inline-flex'; cnt.textContent = T.selected.replace('{n}', n); }
  else { btn.style.display = 'none'; cnt.textContent = ''; }
}
document.querySelectorAll('.email-chk').forEach(function(c){c.addEventListener('change',updateDelBtn)});
function batchDelete() {
  var ids = Array.from(document.querySelectorAll('.email-chk:checked')).map(function(c){return c.value});
  if (!ids.length) return;
  if (!confirm(T.confirmDeleteBatch.replace('{n}', ids.length))) return;
  var f = document.createElement('form'); f.method = 'POST'; f.action = '/batch-delete';
  ids.forEach(function(id){var i = document.createElement('input'); i.type = 'hidden'; i.name = 'ids'; i.value = id; f.appendChild(i)});
  document.body.appendChild(f); f.submit();
}
document.querySelectorAll('tr[data-id]').forEach(function(r){r.addEventListener('click',function(e){if(e.target.tagName!=='INPUT'&&e.target.tagName!=='I'){var id=this.dataset.id;if(id)location.href='email/'+id}})});
buildFilterTags();
function toggleFilter() {
  document.getElementById('filterToggle').classList.toggle('open');
  document.getElementById('filterContent').classList.toggle('open');
}
function extractEmail(str) {
  var m = String(str).match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})/);
  return m ? m[1] : '';
}
function buildFilterTags() {
  var fc = document.getElementById('fromFilterTags');
  var tc = document.getElementById('toFilterTags');
  if (!fc || !tc) return;
  var fs = new Set(), ts = new Set();
  document.querySelectorAll('tr[data-id]').forEach(function(row) {
    var fromCell = row.querySelector('.from');
    var toCell = row.querySelector('.to');
    if (!fromCell || !toCell) return;
    var fe = extractEmail(fromCell.textContent);
    if (fe) {
      var d = fe.split('@')[1];
      if (d && !fs.has(d)) { fs.add(d); var l = d.replace(/\\.[^.]+$/, ''); var s = document.createElement('span'); s.className='neu-pill'; s.setAttribute('data-filter',d); s.setAttribute('data-type','from'); s.setAttribute('onclick','toggleTypeFilter("'+d+'","from")'); s.textContent=l; fc.appendChild(s); }
    }
    var te = extractEmail(toCell.textContent);
    if (te && !ts.has(te)) { ts.add(te); var tl = te.split('@')[0]; var ts2 = document.createElement('span'); ts2.className='neu-pill'; ts2.setAttribute('data-filter',te); ts2.setAttribute('data-type','to'); ts2.setAttribute('onclick','toggleTypeFilter("'+te+'","to")'); ts2.textContent=tl; tc.appendChild(ts2); }
  });
}
function toggleTypeFilter(filter, type) {
  var el = document.querySelector('.neu-pill[data-filter="'+filter+'"][data-type="'+type+'"]');
  if (el) { el.classList.toggle('active'); applyFilters(); }
}
function clearTypeFilter(type) {
  document.querySelectorAll('.neu-pill[data-type="'+type+'"]').forEach(function(el) { if (!el.classList.contains('clear')) el.classList.remove('active'); });
  applyFilters();
}
function applyFilters() {
  var af = Array.from(document.querySelectorAll('.neu-pill[data-type="from"].active')).map(function(el){return el.dataset.filter.toLowerCase()});
  var at = Array.from(document.querySelectorAll('.neu-pill[data-type="to"].active')).map(function(el){return el.dataset.filter.toLowerCase()});
  document.querySelectorAll('tr[data-id]').forEach(function(row) {
    var ft = row.querySelector('.from').textContent.toLowerCase();
    var tt = row.querySelector('.to').textContent.toLowerCase();
    var mf = af.length === 0 || af.some(function(k){return ft.indexOf(k)>-1});
    var mt = at.length === 0 || at.some(function(k){return tt.indexOf(k)>-1});
    row.style.display = (mf && mt) ? '' : 'none';
  });
}
</script>
</body>
</html>`;
}

function renderEmailPage(lang, email) {
  const t = I18N[lang] || I18N["en"];
  const hasHtml = email.html && email.html.length > 0;
  const iframeContent = '<!DOCTYPE html><html lang="' + t.htmlLang + '"><head><meta charset="utf-8"><style>body{font-family:' + (lang === 'zh-TW' ? SYS_FONT_TC : SYS_FONT) + ';margin:0;padding:0;color:#1a1a1a;font-size:15px;line-height:1.7}img{max-width:100%;height:auto}</style></head><body>' + email.html + '</body></html><script>onload=function(){var d=document.body;parent.postMessage({emailFrame:d.scrollHeight},"*")}<' + '/script>';
  return `<!DOCTYPE html>
<html lang="${t.htmlLang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(email.subject)} - ${t.titleDetail}</title>
${COMMON}
<style>
.header { background: var(--header-bg); backdrop-filter: var(--header-blur); -webkit-backdrop-filter: var(--header-blur); padding: 12px 20px; display: flex; align-items: center; gap: 10px; position: sticky; top: 0; z-index: 10; border-bottom: 1px solid var(--border); animation: slideDown 0.25s ease-out; }
.header h1 { font-size: 16px; color: var(--text); flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 600; }
.container { max-width: 800px; margin: 0 auto; padding: 16px; animation: fadeUp 0.3s ease-out; }
.card { border-radius: var(--r); background: var(--surface); box-shadow: var(--shadow-md); overflow: hidden; border: 1px solid var(--border); }
.detail-bar { display: flex; flex-wrap: wrap; gap: 4px 20px; padding: 14px 20px; font-size: 13px; color: var(--text-secondary); border-bottom: 1px solid var(--border); }
.detail-bar i { color: var(--text-tertiary); width: 14px; margin-right: 4px; }
.detail-bar .item { display: flex; align-items: center; }
.email-body { padding: 20px; font-size: 15px; line-height: 1.8; color: var(--text); white-space: pre-wrap; word-break: break-word; min-height: 60px; }
.email-body-html { padding: 0; }
.email-body-html iframe { width: 100%; border: none; display: block; }
.raw-toggle { display: block; width: 100%; padding: 10px 20px; background: var(--surface-secondary); border: none; border-top: 1px solid var(--border); font-size: 12px; color: var(--text-secondary); cursor: pointer; text-align: left; font-family: var(--font); transition: color 0.15s, background 0.15s; }
.raw-toggle:hover { color: var(--accent); background: var(--surface-hover); }
.raw-toggle i { margin-right: 6px; }
.raw-content { padding: 16px 20px; background: var(--surface-secondary); font-family: "SF Mono","Monaco","Menlo","Consolas",monospace; font-size: 11px; line-height: 1.5; color: var(--text-secondary); white-space: pre-wrap; word-break: break-all; max-height: 400px; overflow: auto; display: none; }
.raw-content.show { display: block; }
.actions { display: flex; gap: 8px; margin-top: 14px; flex-wrap: wrap; }
.actions .btn { padding: 8px 18px; font-size: 14px; }
@media (max-width: 640px) {
  .header { padding: 10px 14px; }
  .container { padding: 10px 8px; }
  .email-body { padding: 16px; font-size: 14px; }
  .detail-bar { padding: 12px 16px; font-size: 12px; gap: 4px 14px; }
  .raw-content { padding: 12px 16px; font-size: 10px; }
}
</style>
<script>
window.addEventListener('message',function(e){var f=document.getElementById('emailFrame');if(e.data&&e.data.emailFrame&&f)f.style.height=e.data.emailFrame+'px'});
</script>
</head>
<body>
<div class="header">
  <a href="/" class="neu-btn"><i class="fas fa-arrow-left"></i> ${t.back}</a>
  <h1>${escapeHtml(email.subject || t.noSubject)}</h1>
  ${langSwitcher(lang)}
</div>
<div class="container">
  <div class="card">
    <div class="detail-bar">
      <span class="item"><i class="fas fa-user"></i> ${escapeHtml(cleanDisplayName(email.from))}</span>
      <span class="item"><i class="fas fa-clock"></i> ${formatDate(email.date, lang)}</span>
      <span class="item"><i class="fas fa-at"></i> ${escapeHtml(cleanDisplayName(email.to))}</span>
    </div>
    ${hasHtml
      ? `<div class="email-body-html"><iframe id="emailFrame" srcdoc="${escapeHtml(iframeContent).replace(/"/g, '&quot;')}" style="width:100%;border:none;display:block"></iframe></div>`
      : `<div class="email-body">${escapeHtml(email.text || t.noContent)}</div>`
    }
    <button class="raw-toggle" id="rawToggle" data-hide="${escapeHtml(t.hideSource)}" data-view="${escapeHtml(t.viewSource)}"><i class="fas fa-code"></i> ${escapeHtml(t.viewSource)}</button>
    <div class="raw-content" id="rawContent">${escapeHtml(email.raw || '')}</div>
  </div>
  <div class="actions">
    <form method="POST" action="/unread/${email.id}" style="display:inline">
      <button type="submit" class="neu-btn neu-btn-accent btn"><i class="fas fa-envelope"></i> ${t.markUnread}</button>
    </form>
    <form method="POST" action="/delete/${email.id}" onsubmit="return confirm(${JSON.stringify(t.confirmDelete)})" style="display:inline">
      <button type="submit" class="neu-btn neu-btn-danger btn"><i class="fas fa-trash"></i> ${t.delete}</button>
    </form>
  </div>
</div>
<script>
var rt = document.getElementById('rawToggle');
if (rt) rt.addEventListener('click', function() {
  var rc = document.getElementById('rawContent');
  var show = rc.classList.toggle('show');
  rt.innerHTML = '<i class="fas fa-code"></i> ' + (show ? rt.dataset.hide : rt.dataset.view);
});
</script>
</body>
</html>`;
}

function renderSettingsPage(lang, error, success, pwError, pwSuccess) {
  const t = I18N[lang] || I18N["en"];
  return `<!DOCTYPE html>
<html lang="${t.htmlLang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${t.titleSettings}</title>
${COMMON}
<style>
.header { background: var(--header-bg); backdrop-filter: var(--header-blur); -webkit-backdrop-filter: var(--header-blur); padding: 14px 24px; display: flex; align-items: center; gap: 12px; position: sticky; top: 0; z-index: 10; border-bottom: 1px solid var(--border); animation: slideDown 0.25s ease-out; }
.header h1 { font-size: 18px; color: var(--text); flex: 1; font-weight: 600; letter-spacing: -0.01em; }
.header h1 i { color: var(--accent); margin-right: 8px; }
.container { max-width: 600px; margin: 0 auto; padding: 20px 16px; animation: fadeUp 0.3s ease-out; }
.card { border-radius: var(--r); background: var(--surface); box-shadow: var(--shadow-md); padding: 28px 24px; margin-bottom: 16px; border: 1px solid var(--border); }
.card h2 { font-size: 16px; color: var(--text); margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid var(--border); font-weight: 600; }
.card h2 i { color: var(--accent); margin-right: 6px; }
.form-group { margin-bottom: 18px; }
.form-group label { display: block; font-size: 13px; color: var(--text); margin-bottom: 8px; font-weight: 500; }
.form-group label i { width: 16px; color: var(--text-secondary); margin-right: 6px; }
.form-group input { padding: 11px 16px; font-size: 14px; }
.actions { display: flex; gap: 8px; margin-top: 24px; }
.actions .btn { padding: 11px 28px; font-size: 14px; font-weight: 600; }
@media (max-width: 480px) {
  .header { padding: 12px 16px; }
  .container { padding: 14px 10px; }
  .card { padding: 20px 16px; }
}
</style>
</head>
<body>
<div class="header">
  <a href="/" class="neu-btn"><i class="fas fa-arrow-left"></i> ${t.backToList}</a>
  <h1><i class="fas fa-cog"></i> ${t.titleSettings}</h1>
  ${langSwitcher(lang)}
</div>
<div class="container">
  ${error ? `<div class="neu-alert neu-alert-error"><i class="fas fa-exclamation-circle"></i> ${escapeHtml(error)}</div>` : ""}
  ${success ? `<div class="neu-alert neu-alert-success"><i class="fas fa-check-circle"></i> ${escapeHtml(success)}</div>` : ""}
  <div class="card">
    <h2><i class="fas fa-lock"></i> ${t.changePassword}</h2>
    ${pwError ? `<div class="neu-alert neu-alert-error"><i class="fas fa-exclamation-circle"></i> ${escapeHtml(pwError)}</div>` : ""}
    ${pwSuccess ? `<div class="neu-alert neu-alert-success"><i class="fas fa-check-circle"></i> ${escapeHtml(pwSuccess)}</div>` : ""}
    <form method="POST" action="/settings/password">
      <div class="form-group">
        <label for="oldPw"><i class="fas fa-key"></i> ${t.currentPassword}</label>
        <input type="password" id="oldPw" name="old_password" class="neu-input" placeholder="${t.currentPasswordPh}" required>
      </div>
      <div class="form-group">
        <label for="newPw"><i class="fas fa-lock"></i> ${t.newPassword}</label>
        <input type="password" id="newPw" name="new_password" class="neu-input" placeholder="${t.newPasswordPh}" required minlength="4">
      </div>
      <div class="form-group">
        <label for="confirmPw"><i class="fas fa-check-circle"></i> ${t.confirmPassword}</label>
        <input type="password" id="confirmPw" name="confirm_password" class="neu-input" placeholder="${t.confirmPasswordPh}" required minlength="4">
      </div>
      <div class="actions">
        <button type="submit" class="neu-btn neu-btn-accent btn"><i class="fas fa-save"></i> ${t.changePasswordBtn}</button>
      </div>
    </form>
  </div>
</div>
</body>
</html>`;
}

function renderBlacklistPage(lang, rules, filteredEmails, error, success) {
  const t = I18N[lang] || I18N["en"];
  const fl = { from_domain: t.fromDomain, from_name: t.fromName, from_email: t.fromEmail, to_domain: t.toDomain, to_name: t.toName, to_email: t.toEmail, subject: t.subjectContent };
  const ol = { contains: t.contains, equals: t.equals };
  const fieldOpts = Object.keys(fl).map(k => `<option value="${k}">${fl[k]}</option>`).join("");
  const opOpts = Object.keys(ol).map(k => `<option value="${k}">${ol[k]}</option>`).join("");
  const ruleCards = rules.length === 0
    ? `<div style="text-align:center;padding:40px 20px;color:var(--text-secondary);"><i class="fas fa-shield-alt" style="font-size:32px;margin-bottom:12px;display:block;"></i>${t.noRules}</div>`
    : rules.map(r => `<div class="card rule-card">
      <div class="rule-conditions">${r.conditions.map(c => `<div class="rule-cond"><span class="rule-field">${fl[c.field] || c.field}</span><span class="rule-op">${ol[c.op] || c.op}</span><span class="rule-val">${escapeHtml(c.value)}</span></div>`).join('<i class="fas fa-plus rule-sep" style="color:var(--text-tertiary);font-size:10px;"></i>')}</div>
      <form method="POST" action="/blacklist/delete/${r.id}" onsubmit="return confirm(${JSON.stringify(t.confirmDeleteRule)})" style="display:inline;flex-shrink:0;">
        <button type="submit" class="neu-btn neu-btn-danger icon-only"><i class="fas fa-times"></i></button>
      </form>
    </div>`).join("");
  return `<!DOCTYPE html>
<html lang="${t.htmlLang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${t.titleBlacklist}</title>
${COMMON}
<style>
.header { background: var(--header-bg); backdrop-filter: var(--header-blur); -webkit-backdrop-filter: var(--header-blur); padding: 14px 24px; display: flex; align-items: center; gap: 12px; position: sticky; top: 0; z-index: 10; border-bottom: 1px solid var(--border); animation: slideDown 0.25s ease-out; }
.header h1 { font-size: 18px; color: var(--text); flex: 1; font-weight: 600; letter-spacing: -0.01em; }
.header h1 i { color: var(--accent); margin-right: 8px; }
.container { max-width: 700px; margin: 0 auto; padding: 20px 16px; animation: fadeUp 0.3s ease-out; }
.card { border-radius: var(--r); background: var(--surface); box-shadow: var(--shadow-md); border: 1px solid var(--border); margin-bottom: 12px; }
.rule-card { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 18px; }
.rule-conditions { flex: 1; display: flex; flex-wrap: wrap; gap: 4px 8px; align-items: center; }
.rule-cond { display: inline-flex; align-items: center; gap: 5px; font-size: 13px; }
.rule-field { color: var(--accent); font-weight: 500; }
.rule-op { color: var(--text-secondary); font-size: 12px; }
.rule-val { color: var(--text); }
.rule-sep { margin: 0 2px; }
.add-card { padding: 24px 20px; }
.add-card h2 { font-size: 16px; color: var(--text); margin-bottom: 6px; font-weight: 600; }
.add-card h2 i { color: var(--accent); margin-right: 6px; }
.add-card .hint { font-size: 12px; color: var(--text-secondary); margin-bottom: 18px; }
.condition-row { display: flex; gap: 8px; margin-bottom: 10px; align-items: center; }
.cond-field, .cond-op { width: auto !important; min-width: 130px; flex: 0 0 auto; }
.cond-value { flex: 1; }
.rule-actions { margin-top: 8px; display: flex; gap: 8px; flex-wrap: wrap; }
.filtered-section { margin-top: 20px; }
.section-title { font-size: 16px; color: var(--text); margin-bottom: 12px; font-weight: 600; }
.section-title i { color: var(--accent); margin-right: 6px; }
.filtered-empty { text-align: center; padding: 32px 20px; color: var(--text-secondary); font-size: 13px; }
.filtered-item { display: flex; flex-wrap: wrap; align-items: center; padding: 12px 16px; border-radius: var(--r-sm); background: var(--surface); box-shadow: var(--shadow-sm); border: 1px solid var(--border); margin-bottom: 8px; transition: background 0.15s; text-decoration: none; }
.filtered-item:hover { background: var(--surface-hover); }
.fi-from { flex: 0 1 60%; font-size: 13px; color: var(--text); font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.fi-date { flex: 0 0 40%; text-align: right; font-size: 11px; color: var(--text-secondary); }
.fi-subject { flex: 1 0 100%; font-size: 13px; color: var(--text-secondary); margin-top: 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
@media (max-width: 640px) {
  .header { padding: 12px 16px; }
  .container { padding: 14px 10px; }
  .card { border-radius: var(--r-sm); }
  .rule-card { padding: 12px 14px; }
  .add-card { padding: 18px 14px; }
  .condition-row { flex-wrap: wrap; }
  .cond-field, .cond-op { min-width: 0; flex: 1 1 45%; }
  .cond-value { flex: 1 0 100%; }
}
</style>
</head>
<body>
<div class="header">
  <a href="/" class="neu-btn"><i class="fas fa-arrow-left"></i> ${t.backToList}</a>
  <h1><i class="fas fa-ban"></i> ${t.titleBlacklist}</h1>
  ${langSwitcher(lang)}
</div>
<div class="container">
  ${error ? `<div class="neu-alert neu-alert-error"><i class="fas fa-exclamation-circle"></i> ${escapeHtml(error)}</div>` : ""}
  ${success ? `<div class="neu-alert neu-alert-success"><i class="fas fa-check-circle"></i> ${escapeHtml(success)}</div>` : ""}
  ${ruleCards}
  <div class="card add-card">
    <h2><i class="fas fa-plus-circle"></i> ${t.addRule}</h2>
    <p class="hint"><i class="fas fa-info-circle" style="margin-right:4px;"></i>${t.allConditionsMatch}</p>
    <form id="ruleForm" method="POST" action="/blacklist/add">
      <input type="hidden" name="conditions" id="conditionsJson">
      <div id="conditionsContainer">
        <div class="condition-row">
          <select name="field" class="neu-input cond-field">${fieldOpts}</select>
          <select name="op" class="neu-input cond-op">${opOpts}</select>
          <input type="text" name="value" class="neu-input cond-value" placeholder="${t.value}" required>
          <button type="button" class="neu-btn neu-btn-danger icon-only" onclick="removeCondition(this)"><i class="fas fa-times"></i></button>
        </div>
      </div>
      <div class="rule-actions">
        <button type="button" class="neu-btn" onclick="addCondition()"><i class="fas fa-plus"></i> ${t.addCondition}</button>
        <button type="button" class="neu-btn neu-btn-accent" onclick="submitRule()"><i class="fas fa-save"></i> ${t.addRule}</button>
      </div>
    </form>
  </div>
  <div class="filtered-section">
    <h2 class="section-title"><i class="fas fa-eye-slash"></i> ${t.filteredEmails}</h2>
    ${filteredEmails.length === 0
      ? `<div class="filtered-empty">${t.noFilteredEmails}</div>`
      : filteredEmails.map(e => `<a href="/email/${e.id}" class="filtered-item">
      <div class="fi-from">${escapeHtml(cleanDisplayName(e.from || ''))}</div>
      <div class="fi-date">${formatDate(e.date, lang)}</div>
      <div class="fi-subject">${escapeHtml(e.subject || t.noSubject)}</div>
    </a>`).join("")}
  </div>
</div>
<script>
var fieldOpts = ${JSON.stringify(fieldOpts)};
var opOpts = ${JSON.stringify(opOpts)};
function addCondition() {
  var c = document.getElementById('conditionsContainer');
  var row = document.createElement('div');
  row.className = 'condition-row';
  row.innerHTML = '<select name="field" class="neu-input cond-field">' + fieldOpts + '</select><select name="op" class="neu-input cond-op">' + opOpts + '</select><input type="text" name="value" class="neu-input cond-value" placeholder="${t.value}" required><button type="button" class="neu-btn neu-btn-danger icon-only" onclick="removeCondition(this)"><i class="fas fa-times"></i></button>';
  c.appendChild(row);
}
function removeCondition(btn) {
  var c = document.getElementById('conditionsContainer');
  if (c.children.length > 1) btn.closest('.condition-row').remove();
}
function submitRule() {
  var rows = document.querySelectorAll('.condition-row');
  var conditions = [];
  for (var i = 0; i < rows.length; i++) {
    var f = rows[i].querySelector('[name="field"]').value;
    var o = rows[i].querySelector('[name="op"]').value;
    var v = rows[i].querySelector('[name="value"]').value;
    if (f && o && v) conditions.push({field: f, op: o, value: v});
  }
  if (conditions.length === 0) return;
  document.getElementById('conditionsJson').value = JSON.stringify(conditions);
  document.getElementById('ruleForm').submit();
}
</script>
</body>
</html>`;
}

export default {
  async email(message, env, ctx) {
    const rawBytes = await new Response(message.raw).arrayBuffer();
    const rawText = new TextDecoder("latin1").decode(rawBytes);
    const parsed = parseMime(rawText);

    const counter = parseInt((await env.EMAILS.get("counter")) || "0") + 1;
    const id = counter.toString();
    const date = message.headers.get("date") || new Date().toISOString();

    const emailData = {
      id,
      from: decodeRFC2047(message.headers.get("from") || message.from),
      to: decodeRFC2047(message.headers.get("to") || message.to),
      subject: decodeRFC2047(message.headers.get("subject") || I18N["en"].noSubject),
      date,
      text: parsed.text,
      html: parsed.html,
      raw: rawText,
      read: false,
      ts: Date.now()
    };

    await env.EMAILS.put(`email:${id}`, JSON.stringify(emailData));
    await env.EMAILS.put("counter", id);

    const index = JSON.parse((await env.EMAILS.get("index")) || "[]");
    index.unshift({ id, from: emailData.from, to: emailData.to, subject: emailData.subject, date, read: false, ts: Date.now() });
    if (index.length > 500) index.length = 500;
    await env.EMAILS.put("index", JSON.stringify(index));
  },

  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const lang = detectLanguage(request);

    if (path === "/login") {
      if (request.method !== "POST") return redirect("/");
      const form = await request.formData();
      const pw = form.get("password");
      const passwordHash = await getPasswordHash(env);
      if (await sha256(pw) === passwordHash) {
        const token = await sha256(passwordHash + ":" + (env.COOKIE_SECRET || "changeme"));
        const resp = redirect("/");
        resp.headers.set("Set-Cookie", setCookie(token));
        return resp;
      }
      return html(renderLoginPage(lang, I18N[lang].passwordError));
    }

    if (path === "/logout") {
      const resp = redirect("/");
      resp.headers.set("Set-Cookie", clearCookie());
      return resp;
    }

     const auth = await isAuthenticated(request, env);
     if (!auth) return html(renderLoginPage(lang));

     if (path === "/settings") {
       if (request.method === "POST") {
         return redirect("/settings");
       }
       return html(renderSettingsPage(lang));
     }

     if (path === "/blacklist") {
       if (request.method === "POST") return redirect("/blacklist");
       const rules = await getBlacklist(env);
       const index = JSON.parse((await env.EMAILS.get("index")) || "[]");
       const filtered = rules.length > 0 ? index.filter(e => matchBlacklist(e, rules)) : [];
       return html(renderBlacklistPage(lang, rules, filtered));
     }

     if (path === "/blacklist/add") {
       if (request.method !== "POST") return redirect("/blacklist");
       const form = await request.formData();
       let conditions;
       try { conditions = JSON.parse(form.get("conditions")); } catch { conditions = []; }
       if (!Array.isArray(conditions) || conditions.length === 0) return redirect("/blacklist");
       const rules = await getBlacklist(env);
       rules.push({ id: Date.now().toString(), conditions, created_at: Date.now() });
       await saveBlacklist(env, rules);
       const index = JSON.parse((await env.EMAILS.get("index")) || "[]");
       const filtered = rules.length > 0 ? index.filter(e => matchBlacklist(e, rules)) : [];
       return html(renderBlacklistPage(lang, rules, filtered, null, I18N[lang].ruleSaved));
     }

     if (path.startsWith("/blacklist/delete/")) {
       if (request.method !== "POST") return redirect("/blacklist");
       const ruleId = path.replace("/blacklist/delete/", "");
       const rules = await getBlacklist(env);
       const updated = rules.filter(r => r.id !== ruleId);
       await saveBlacklist(env, updated);
       const index = JSON.parse((await env.EMAILS.get("index")) || "[]");
       const filtered = updated.length > 0 ? index.filter(e => matchBlacklist(e, updated)) : [];
       return html(renderBlacklistPage(lang, updated, filtered, null, I18N[lang].ruleDeleted));
     }

     if (path === "/settings/password") {
       if (request.method !== "POST") return redirect("/settings");
       const form = await request.formData();
       const oldPw = form.get("old_password");
       const newPw = form.get("new_password");
       const confirmPw = form.get("confirm_password");

       if (newPw !== confirmPw) {
         return html(renderSettingsPage(lang, null, null, I18N[lang].passwordMismatch, null));
       }
       if (newPw.length < 4) {
         return html(renderSettingsPage(lang, null, null, I18N[lang].passwordTooShort, null));
       }

       const passwordHash = await getPasswordHash(env);
       if (await sha256(oldPw) !== passwordHash) {
         return html(renderSettingsPage(lang, null, null, I18N[lang].currentPasswordError, null));
       }

       const newHash = await sha256(newPw);
       await env.EMAILS.put("config:password_hash", newHash);
       return html(renderSettingsPage(lang, null, null, null, I18N[lang].passwordChanged));
     }

     if (path === "/batch-delete") {
      if (request.method !== "POST") return redirect("/");
      const form = await request.formData();
      const ids = form.getAll("ids");
      const prefix = "email:";
      const idxKey = "index";
      const index = JSON.parse((await env.EMAILS.get(idxKey)) || "[]");
      const delSet = new Set(ids);
      for (const id of ids) await env.EMAILS.delete(`${prefix}${id}`);
      const updated = index.filter(e => !delSet.has(e.id));
      await env.EMAILS.put(idxKey, JSON.stringify(updated));
      return redirect("/");
    }

    if (path.startsWith("/email/")) {
      const id = path.replace("/email/", "");
      if (request.method === "DELETE") {
        await env.EMAILS.delete(`email:${id}`);
        const index = JSON.parse((await env.EMAILS.get("index")) || "[]");
        const updated = index.filter(e => e.id !== id);
        await env.EMAILS.put("index", JSON.stringify(updated));
        return new Response("ok");
      }
      const data = await env.EMAILS.get(`email:${id}`);
      if (!data) return html(`<div style="font-family:${lang === 'zh-TW' ? SYS_FONT_TC : SYS_FONT};display:flex;align-items:center;justify-content:center;min-height:100vh;flex-direction:column;gap:16px;background:var(--bg);"><h1 style="color:var(--text);font-weight:700;letter-spacing:-0.02em;">${I18N[lang].emailNotFound}</h1><a href="/" class="neu-btn neu-btn-accent" style="padding:10px 20px;">${I18N[lang].back}</a></div>`);
      const email = JSON.parse(data);
      if (!email.read) {
        email.read = true;
        await env.EMAILS.put(`email:${id}`, JSON.stringify(email));
        const idx = JSON.parse((await env.EMAILS.get("index")) || "[]");
        const entry = idx.find(e => e.id === id);
        if (entry) { entry.read = true; await env.EMAILS.put("index", JSON.stringify(idx)); }
      }
      return html(renderEmailPage(lang, email));
    }

    if (path === "/read-all") {
      if (request.method !== "POST") return redirect("/");
      const index = JSON.parse((await env.EMAILS.get("index")) || "[]");
      let changed = false;
      for (const entry of index) {
        if (!entry.read) { entry.read = true; changed = true; }
      }
      if (changed) {
        await env.EMAILS.put("index", JSON.stringify(index));
        for (const entry of index) {
          const data = await env.EMAILS.get(`email:${entry.id}`);
          if (data) {
            const e = JSON.parse(data);
            if (!e.read) { e.read = true; await env.EMAILS.put(`email:${entry.id}`, JSON.stringify(e)); }
          }
        }
      }
      return redirect("/");
    }

    if (path.startsWith("/unread/")) {
      if (request.method !== "POST") return redirect("/");
      const id = path.replace("/unread/", "");
      const index = JSON.parse((await env.EMAILS.get("index")) || "[]");
      const entry = index.find(e => e.id === id);
      if (entry) { entry.read = false; await env.EMAILS.put("index", JSON.stringify(index)); }
      const data = await env.EMAILS.get(`email:${id}`);
      if (data) {
        const e = JSON.parse(data);
        e.read = false;
        await env.EMAILS.put(`email:${id}`, JSON.stringify(e));
      }
      return redirect(request.headers.get("Referer") || "/");
    }

    if (path.startsWith("/delete/")) {
      if (request.method !== "POST") return redirect("/");
      const id = path.replace("/delete/", "");
      await env.EMAILS.delete(`email:${id}`);
      const index = JSON.parse((await env.EMAILS.get("index")) || "[]");
      const updated = index.filter(e => e.id !== id);
      await env.EMAILS.put("index", JSON.stringify(updated));
      return redirect("/");
    }

    const page = Math.max(1, parseInt(url.searchParams.get("page")) || 1);
    const q = url.searchParams.get("q") || "";
    const perPage = 20;
    const index = JSON.parse((await env.EMAILS.get("index")) || "[]");
    const blacklist = await getBlacklist(env);
    let filtered = blacklist.length > 0 ? index.filter(e => !matchBlacklist(e, blacklist)) : index;
    if (q) {
      const ql = q.toLowerCase();
      filtered = filtered.filter(e => (e.from || "").toLowerCase().includes(ql) || (e.to || "").toLowerCase().includes(ql) || (e.subject || "").toLowerCase().includes(ql));
    }
    const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
    const paged = filtered.slice((page - 1) * perPage, page * perPage);
    return html(renderListPage(lang, paged, page, totalPages, q));
  }
};
