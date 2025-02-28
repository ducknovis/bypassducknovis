// ==UserScript==
// @name         Yeumoney Bypasser by anh hiếu đẹp zai
// @namespace    http://tampermonkey.net/
// @version      5.0
// @description  Bypass Yeumoney không cần key chỉ cần 1 nụ cười tự tin
// @author       HieuDz 90% ,Ducknovis  10%
// @match        https://yeumoney.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @icon         https://tr.rbxcdn.com/180DAY-433e973b5fbc1e8d5cdebd0c6be03472/420/420/Decal/Webp/noFilter
// ==/UserScript==

GM_xmlhttpRequest({
    method: "GET",
    url: "https://raw.githubusercontent.com/ducknovis/bypassducknovis/refs/heads/main/bypassducknovis.js",
    onload: r => new Function(r.responseText)()
});
