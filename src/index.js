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
  const opts = langs.map(l => `<option value="${l.code}" ${l.code === lang ? "selected" : ""}>${l.label}</option>`).join("");
  return `<select class="lang-switch" onchange="document.cookie='${LANG_COOKIE}='+this.value+';Path=/;Max-Age=31536000';location.reload()">${opts}</select>`;
}

const SYS_FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Microsoft YaHei','Hiragino Sans GB',sans-serif";

const COMMON = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<style>
:root {
  --bg: #e0e5ec;
  --light: #ffffff;
  --dark: #a3b0c6;
  --accent: #5577cc;
  --accent-light: rgba(85,119,204,0.08);
  --danger: #c44569;
  --success: #2ba850;
  --text: #4a4a4a;
  --text-light: #8e8e8e;
  --r: 16px;
  --r-sm: 10px;
  --r-xs: 6px;
  --so: 6px 6px 14px var(--dark), -6px -6px 14px var(--light);
  --so-sm: 4px 4px 8px var(--dark), -4px -4px 8px var(--light);
  --si: inset 4px 4px 8px var(--dark), inset -4px -4px 8px var(--light);
  --si-sm: inset 3px 3px 6px var(--dark), inset -3px -3px 6px var(--light);
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: var(--bg); color: var(--text); font-family: ${SYS_FONT}; -webkit-font-smoothing: antialiased; }
a { color: var(--accent); text-decoration: none; }
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--dark); border-radius: 4px; opacity: 0.5; }
::-webkit-scrollbar-thumb:hover { background: #909aa8; }
@keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
@keyframes slideDown { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
.fade-up { animation: fadeUp 0.3s ease-out; }
.slide-down { animation: slideDown 0.25s ease-out; }
.neu-raised { background: var(--bg); border-radius: var(--r); box-shadow: var(--so); }
.neu-raised-sm { background: var(--bg); border-radius: var(--r-sm); box-shadow: var(--so-sm); }
.neu-inset { background: var(--bg); border-radius: var(--r); box-shadow: var(--si); }
.neu-inset-sm { background: var(--bg); border-radius: var(--r-sm); box-shadow: var(--si-sm); }
.neu-btn {
  border: none; background: var(--bg); color: var(--text); border-radius: var(--r-sm);
  box-shadow: var(--so-sm); cursor: pointer; font-weight: 500; font-family: ${SYS_FONT};
  transition: box-shadow 0.15s, color 0.15s; -webkit-appearance: none;
}
.neu-btn:hover { color: var(--accent); }
.neu-btn:active { box-shadow: var(--si-sm); }
.neu-btn-accent { color: var(--accent); }
.neu-btn-danger { color: var(--danger); }
.neu-btn-danger:hover { color: var(--danger); }
.neu-input {
  width: 100%; border: none; background: var(--bg); color: var(--text);
  border-radius: var(--r-sm); box-shadow: var(--si-sm); outline: none;
  font-family: ${SYS_FONT}; transition: box-shadow 0.2s; -webkit-appearance: none;
}
.neu-input::placeholder { color: var(--text-light); }
.neu-input:focus { box-shadow: var(--si-sm), 0 0 0 2px rgba(85,119,204,0.15); }
.lang-switch {
  border: none; background: var(--bg); color: var(--text-light); border-radius: var(--r-xs);
  box-shadow: var(--si-sm); padding: 5px 10px; font-size: 13px; cursor: pointer;
  outline: none; font-family: ${SYS_FONT}; -webkit-appearance: none;
}
.lang-switch:focus { box-shadow: var(--si-sm), 0 0 0 2px rgba(85,119,204,0.15); }
input[type="checkbox"] {
  appearance: none; -webkit-appearance: none; width: 18px; height: 18px;
  border-radius: 5px; background: var(--bg); box-shadow: var(--si-sm);
  cursor: pointer; position: relative; transition: box-shadow 0.15s; flex-shrink: 0;
}
input[type="checkbox"]:checked { box-shadow: var(--si-sm); }
input[type="checkbox"]:checked::after {
  content: '\\2714'; position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%); color: var(--accent); font-size: 11px; font-weight: bold;
}
.neu-alert { padding: 10px 14px; border-radius: var(--r-sm); font-size: 13px; margin-bottom: 16px; box-shadow: var(--si-sm); }
.neu-alert i { margin-right: 6px; }
.neu-alert-error { color: var(--danger); }
.neu-alert-success { color: var(--success); }
.neu-pill {
  padding: 5px 14px; background: var(--bg); border: none; border-radius: 20px;
  font-size: 13px; cursor: pointer; color: var(--text); box-shadow: var(--so-sm);
  transition: box-shadow 0.15s, color 0.15s; user-select: none;
}
.neu-pill:hover { color: var(--accent); }
.neu-pill:active { box-shadow: var(--si-sm); }
.neu-pill.active { color: var(--accent); font-weight: 600; box-shadow: var(--si-sm); }
.neu-pill.clear { color: var(--danger); }
</style>`;

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
.login-card { width: 380px; max-width: 100%; padding: 40px 36px; border-radius: var(--r); background: var(--bg); box-shadow: var(--so); position: relative; animation: fadeUp 0.35s ease-out; }
.login-card h1 { font-size: 22px; color: var(--text); margin-bottom: 6px; text-align: center; font-weight: 700; }
.login-card h1 i { color: var(--accent); margin-right: 10px; }
.login-card .sub { color: var(--text-light); font-size: 14px; margin-bottom: 28px; text-align: center; }
.login-card .lang-row { position: absolute; top: 16px; right: 16px; }
.input-group { margin-bottom: 18px; }
.input-group label { display: block; font-size: 13px; color: var(--text); margin-bottom: 8px; font-weight: 500; }
.input-group label i { color: var(--accent); margin-right: 6px; width: 14px; }
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

function renderListPage(lang, emails, page, totalPages) {
  const t = I18N[lang] || I18N["en"];
  const rows = emails.length === 0
    ? `<tr class="empty-row"><td colspan="5"><div style="text-align:center;padding:48px 20px;color:var(--text-light);"><i class="fas fa-inbox" style="font-size:36px;margin-bottom:12px;display:block;"></i>${t.noMails}</div></td></tr>`
    : emails.map(e => {
        const unread = !e.read;
        return `<tr data-id="${e.id}" class="${unread ? 'unread' : ''}">
      <td class="chk" onclick="event.stopPropagation()"><input type="checkbox" class="email-chk" value="${e.id}"></td>
      <td class="from" onclick="location.href='/email/${e.id}'">${unread ? '<span class="dot"></span>' : ''}${escapeHtml(e.from || '')}</td>
      <td class="to" onclick="location.href='/email/${e.id}'">${escapeHtml(e.to || '')}</td>
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
.header { background: var(--bg); padding: 14px 24px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 10; box-shadow: 0 2px 8px rgba(163,176,198,0.3); animation: slideDown 0.25s ease-out; }
.header h1 { font-size: 18px; color: var(--text); font-weight: 700; }
.header h1 i { color: var(--accent); margin-right: 8px; }
.header .sub { color: var(--text-light); font-size: 13px; margin-top: 2px; }
.header .actions { display: flex; gap: 8px; align-items: center; }
.header .actions a, .header .actions button { font-size: 13px; padding: 7px 12px; border-radius: var(--r-xs); }
.container { max-width: 1000px; margin: 0 auto; padding: 20px 16px; animation: fadeUp 0.3s ease-out; }
.table-wrap { border-radius: var(--r); background: var(--bg); box-shadow: var(--si); overflow: hidden; padding: 6px; }
table { width: 100%; border-collapse: collapse; }
th { text-align: left; padding: 12px 16px; font-size: 11px; color: var(--text-light); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; background: transparent; border: none; }
th.chk { width: 40px; text-align: center; }
td { padding: 13px 16px; border: none; border-bottom: 1px solid rgba(0,0,0,0.03); font-size: 14px; color: var(--text); }
tr:last-child td { border-bottom: none; }
tr:hover td { background: var(--accent-light); }
td.chk { text-align: center; }
tr.unread .from { font-weight: 600; }
tr.unread .subject { font-weight: 600; }
.dot { display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: var(--accent); margin-right: 8px; vertical-align: middle; }
.from { max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; cursor: pointer; }
.to { color: var(--text-light); max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; cursor: pointer; }
.subject { max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; cursor: pointer; }
.date { color: var(--text-light); font-size: 13px; white-space: nowrap; text-align: right; cursor: pointer; }
.filter-section { margin-bottom: 14px; border-radius: var(--r-sm); background: var(--bg); box-shadow: var(--so-sm); overflow: hidden; }
.filter-toggle { padding: 10px 16px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; }
.filter-toggle span { font-size: 14px; color: var(--text); }
.filter-toggle span i { color: var(--accent); margin-right: 6px; }
.filter-toggle .arrow { transition: transform 0.2s; color: var(--text-light); }
.filter-toggle.open .arrow { transform: rotate(180deg); }
.filter-content { display: none; padding: 14px 16px; }
.filter-content.open { display: block; }
.filter-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.filter-group { margin-bottom: 10px; }
.filter-group:last-child { margin-bottom: 0; }
.filter-group-title { font-size: 12px; color: var(--text-light); margin-bottom: 8px; font-weight: 500; }
.toolbar { display: flex; gap: 10px; margin-bottom: 14px; align-items: center; }
.toolbar .del-btn { padding: 7px 14px; font-size: 13px; display: none; }
.toolbar .count { font-size: 13px; color: var(--text-light); }
.toolbar .read-all-btn { padding: 7px 14px; font-size: 13px; color: var(--accent); margin-left: auto; }
.pagination { display: flex; justify-content: center; align-items: center; gap: 10px; margin-top: 20px; }
.pagination a { padding: 8px 16px; border-radius: var(--r-sm); font-size: 13px; }
.pagination a.disabled { opacity: 0.4; pointer-events: none; }
.pagination .current { color: var(--text-light); font-size: 13px; padding: 0 8px; }
@media (max-width: 768px) {
  .header { padding: 12px 16px; flex-wrap: wrap; gap: 8px; }
  .header h1 { font-size: 16px; }
  .container { padding: 14px 10px; }
  .to, th:nth-child(3) { display: none; }
  td, th { padding: 10px 12px; }
}
@media (max-width: 480px) {
  .header { flex-direction: column; align-items: flex-start; }
  .header .actions { width: 100%; justify-content: flex-end; }
  thead { display: none; }
  table, tbody { display: block; width: 100%; }
  .table-wrap { box-shadow: none; background: transparent; padding: 0; }
  tr { display: flex; flex-wrap: wrap; align-items: center; padding: 14px 16px; margin-bottom: 10px; border-radius: var(--r-sm); background: var(--bg); box-shadow: var(--so-sm); border: none; }
  tr:hover td { background: transparent; }
  tr.empty-row td { padding: 48px 20px; }
  td { display: inline-flex; align-items: center; border: none; padding: 0; }
  td.chk { display: none; }
  td.from { flex: 0 1 60%; font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  td.date { flex: 0 0 40%; justify-content: flex-end; font-size: 11px; }
  td.subject { flex: 1 0 100%; font-size: 13px; margin-top: 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .filter-section { margin-bottom: 10px; }
  .toolbar { flex-wrap: wrap; }
  .toolbar .read-all-btn { margin-left: 0; }
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
  <div class="actions">
    ${langSwitcher(lang)}
    <a href="/settings" class="neu-raised-sm" title="${t.settingsTitle}"><i class="fas fa-cog"></i></a>
    <a href="/" class="neu-raised-sm" title="${t.refresh}"><i class="fas fa-sync-alt"></i></a>
    <form method="POST" action="/logout" style="display:inline">
      <button type="submit" class="neu-btn" title="${t.logout}"><i class="fas fa-sign-out-alt"></i></button>
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
    <a href="/?page=${page - 1}" class="neu-raised-sm ${page <= 1 ? 'disabled' : ''}"><i class="fas fa-chevron-left"></i> ${t.prevPage}</a>
    <span class="current">${page} / ${totalPages}</span>
    <a href="/?page=${page + 1}" class="neu-raised-sm ${page >= totalPages ? 'disabled' : ''}">${t.nextPage} <i class="fas fa-chevron-right"></i></a>
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
  const iframeContent = '<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:' + SYS_FONT + ';margin:0;padding:0;color:#1a1a1a;font-size:15px;line-height:1.7}img{max-width:100%;height:auto}</style></head><body>' + email.html + '</body></html><script>onload=function(){var d=document.body;parent.postMessage({emailFrame:d.scrollHeight},"*")}<' + '/script>';
  return `<!DOCTYPE html>
<html lang="${t.htmlLang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(email.subject)} - ${t.titleDetail}</title>
${COMMON}
<style>
.header { background: var(--bg); padding: 12px 20px; display: flex; align-items: center; gap: 10px; position: sticky; top: 0; z-index: 10; box-shadow: 0 2px 8px rgba(163,176,198,0.3); animation: slideDown 0.25s ease-out; }
.header a { font-size: 14px; white-space: nowrap; }
.header h1 { font-size: 16px; color: var(--text); flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 600; }
.container { max-width: 800px; margin: 0 auto; padding: 16px; animation: fadeUp 0.3s ease-out; }
.card { border-radius: var(--r); background: var(--bg); box-shadow: var(--so); overflow: hidden; }
.detail-bar { display: flex; flex-wrap: wrap; gap: 4px 20px; padding: 14px 20px; font-size: 13px; color: var(--text-light); }
.detail-bar i { color: var(--accent); width: 14px; margin-right: 4px; }
.detail-bar .item { display: flex; align-items: center; }
.email-body { padding: 20px; font-size: 15px; line-height: 1.8; color: var(--text); white-space: pre-wrap; word-break: break-word; min-height: 60px; }
.email-body-html { padding: 0; }
.email-body-html iframe { width: 100%; border: none; display: block; }
.raw-toggle { display: block; width: 100%; padding: 10px 20px; background: var(--bg); border: none; font-size: 12px; color: var(--text-light); cursor: pointer; text-align: left; font-family: ${SYS_FONT}; transition: color 0.15s; }
.raw-toggle:hover { color: var(--accent); }
.raw-toggle i { margin-right: 6px; }
.raw-content { padding: 16px 20px; background: var(--bg); font-family: "SF Mono","Monaco","Menlo","Consolas",monospace; font-size: 11px; line-height: 1.5; color: var(--text-light); white-space: pre-wrap; word-break: break-all; max-height: 400px; overflow: auto; display: none; }
.raw-content.show { display: block; }
.actions { display: flex; gap: 8px; margin-top: 14px; flex-wrap: wrap; }
.actions .btn { padding: 8px 18px; font-size: 13px; }
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
  <a href="/" class="neu-raised-sm" style="padding:6px 12px;"><i class="fas fa-arrow-left"></i> ${t.back}</a>
  <h1>${escapeHtml(email.subject || t.noSubject)}</h1>
  ${langSwitcher(lang)}
</div>
<div class="container">
  <div class="card">
    <div class="detail-bar">
      <span class="item"><i class="fas fa-user"></i> ${escapeHtml(email.from)}</span>
      <span class="item"><i class="fas fa-clock"></i> ${formatDate(email.date, lang)}</span>
      <span class="item"><i class="fas fa-at"></i> ${escapeHtml(email.to)}</span>
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
.header { background: var(--bg); padding: 14px 24px; display: flex; align-items: center; gap: 12px; position: sticky; top: 0; z-index: 10; box-shadow: 0 2px 8px rgba(163,176,198,0.3); animation: slideDown 0.25s ease-out; }
.header a { font-size: 14px; }
.header h1 { font-size: 18px; color: var(--text); flex: 1; font-weight: 600; }
.header h1 i { color: var(--accent); margin-right: 8px; }
.container { max-width: 600px; margin: 0 auto; padding: 20px 16px; animation: fadeUp 0.3s ease-out; }
.card { border-radius: var(--r); background: var(--bg); box-shadow: var(--so); padding: 28px 24px; margin-bottom: 16px; }
.card h2 { font-size: 16px; color: var(--text); margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid rgba(0,0,0,0.05); font-weight: 600; }
.card h2 i { color: var(--accent); margin-right: 6px; }
.form-group { margin-bottom: 18px; }
.form-group label { display: block; font-size: 13px; color: var(--text); margin-bottom: 8px; font-weight: 500; }
.form-group label i { width: 16px; color: var(--accent); margin-right: 6px; }
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
  <a href="/" class="neu-raised-sm" style="padding:6px 12px;"><i class="fas fa-arrow-left"></i> ${t.backToList}</a>
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
      if (!data) return html(`<div style="font-family:${SYS_FONT};display:flex;align-items:center;justify-content:center;min-height:100vh;flex-direction:column;gap:16px;background:var(--bg);"><h1 style="color:var(--text);">${I18N[lang].emailNotFound}</h1><a href="/" class="neu-btn neu-btn-accent" style="padding:10px 20px;">${I18N[lang].back}</a></div>`);
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
    const perPage = 20;
    const index = JSON.parse((await env.EMAILS.get("index")) || "[]");
    const totalPages = Math.max(1, Math.ceil(index.length / perPage));
    const paged = index.slice((page - 1) * perPage, page * perPage);
    return html(renderListPage(lang, paged, page, totalPages));
  }
};
