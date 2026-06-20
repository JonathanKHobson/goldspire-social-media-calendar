(() => {
  const data = window.GOLDSPIRE_SOCIAL_DATA;
  const statusKey = "goldspireSocialCalendar.status";
  const notesKey = "goldspireSocialCalendar.notes";

  const elements = {
    views: {
      calendar: document.getElementById("calendarView"),
      queue: document.getElementById("queueView"),
      templates: document.getElementById("templatesView"),
      ads: document.getElementById("adsView")
    },
    tabs: Array.from(document.querySelectorAll(".tab")),
    platformFilter: document.getElementById("platformFilter"),
    statusFilter: document.getElementById("statusFilter"),
    searchFilter: document.getElementById("searchFilter"),
    panel: document.getElementById("detailPanel"),
    detailContent: document.getElementById("detailContent"),
    toast: document.getElementById("toast")
  };

  const state = {
    view: "calendar",
    platform: "all",
    status: "all",
    search: ""
  };

  function loadJson(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || "{}");
    } catch {
      return {};
    }
  }

  function saveJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  const localStatus = loadJson(statusKey);
  const localNotes = loadJson(notesKey);

  function postStatus(post) {
    return localStatus[post.id] || post.status || "draft";
  }

  function postNotes(post) {
    return localNotes[post.id] || "";
  }

  function setPostStatus(postId, value) {
    localStatus[postId] = value;
    saveJson(statusKey, localStatus);
    render();
  }

  function setPostNotes(postId, value) {
    localNotes[postId] = value;
    saveJson(notesKey, localNotes);
  }

  function allPlatforms() {
    return Array.from(
      new Set(data.posts.flatMap((post) => Object.keys(post.platforms || {})))
    ).sort();
  }

  function formatDate(dateString) {
    const date = new Date(`${dateString}T12:00:00`);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric"
    });
  }

  function formatLongDate(dateString) {
    const date = new Date(`${dateString}T12:00:00`);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  }

  function formatTime(timeString) {
    if (!timeString) return "";
    const [hours, minutes] = timeString.split(":").map(Number);
    const date = new Date(2026, 0, 1, hours, minutes);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit"
    });
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function captionText(variant) {
    const tags = (variant.hashtags || []).join(" ");
    return [variant.caption, tags].filter(Boolean).join("\n\n");
  }

  function assetFor(post) {
    return data.assets[post.asset] || null;
  }

  function filteredPosts() {
    const query = state.search.trim().toLowerCase();
    return data.posts.filter((post) => {
      const status = postStatus(post);
      const platforms = Object.keys(post.platforms || {});
      const asset = assetFor(post);
      const blob = [
        post.title,
        post.pillar,
        post.audience,
        post.notes,
        asset?.label,
        asset?.use,
        platforms.join(" ")
      ]
        .join(" ")
        .toLowerCase();

      if (state.platform !== "all" && !platforms.includes(state.platform)) return false;
      if (state.status !== "all" && status !== state.status) return false;
      if (query && !blob.includes(query)) return false;
      return true;
    });
  }

  function fillPlatformFilter() {
    const current = elements.platformFilter.value || "all";
    elements.platformFilter.innerHTML = '<option value="all">All platforms</option>';
    allPlatforms().forEach((platform) => {
      const option = document.createElement("option");
      option.value = platform;
      option.textContent = platform[0].toUpperCase() + platform.slice(1);
      elements.platformFilter.append(option);
    });
    elements.platformFilter.value = current;
  }

  function renderCalendar() {
    const posts = filteredPosts();
    const byDate = new Map();
    posts.forEach((post) => {
      const items = byDate.get(post.date) || [];
      items.push(post);
      byDate.set(post.date, items);
    });

    const start = new Date("2026-06-19T12:00:00");
    const end = new Date("2026-07-31T12:00:00");
    const grid = document.createElement("div");
    grid.className = "calendar-grid";

    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach((day) => {
      const weekday = document.createElement("div");
      weekday.className = "weekday";
      weekday.textContent = day;
      grid.append(weekday);
    });

    const lead = start.getDay();
    for (let i = 0; i < lead; i += 1) {
      const blank = document.createElement("div");
      blank.className = "day is-empty";
      grid.append(blank);
    }

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const iso = d.toISOString().slice(0, 10);
      const day = document.createElement("div");
      day.className = "day";
      day.innerHTML = `<div class="date-label">${escapeHtml(formatDate(iso))}</div>`;
      const dayPosts = (byDate.get(iso) || []).sort((a, b) => a.time.localeCompare(b.time));
      dayPosts.forEach((post) => day.append(renderPostChip(post)));
      grid.append(day);
    }

    elements.views.calendar.innerHTML = "";
    elements.views.calendar.append(grid);
  }

  function renderPostChip(post) {
    const button = document.createElement("button");
    const platforms = Object.keys(post.platforms || {});
    const status = postStatus(post);
    button.type = "button";
    button.className = "post-chip";
    button.innerHTML = `
      <strong>${escapeHtml(formatTime(post.time))} - ${escapeHtml(post.title)}</strong>
      <span class="post-meta">
        <span>${escapeHtml(post.pillar)}</span>
        <span>${escapeHtml(platforms.join(", "))}</span>
      </span>
      <span>
        <span class="badge status-${escapeHtml(status)}">${escapeHtml(status.replaceAll("_", " "))}</span>
      </span>
    `;
    button.addEventListener("click", () => openDetail(post.id));
    return button;
  }

  function renderQueue() {
    const posts = filteredPosts().slice().sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));
    elements.views.queue.innerHTML = "";
    if (!posts.length) {
      elements.views.queue.innerHTML = '<div class="empty-state">No posts match the current filters.</div>';
      return;
    }

    const list = document.createElement("div");
    list.className = "queue-list";
    posts.forEach((post) => {
      const asset = assetFor(post);
      const card = document.createElement("article");
      card.className = "queue-card";
      card.innerHTML = `
        <img class="thumb" src="${escapeHtml(asset?.file || "")}" alt="${escapeHtml(asset?.alt || "")}">
        <div>
          <h2>${escapeHtml(formatLongDate(post.date))} at ${escapeHtml(formatTime(post.time))}: ${escapeHtml(post.title)}</h2>
          <p>${escapeHtml(post.audience)} - ${escapeHtml(post.pillar)}</p>
          <p>${escapeHtml(post.notes || "")}</p>
          <div class="post-meta">${Object.keys(post.platforms || {}).map((platform) => `<span class="badge">${escapeHtml(platform)}</span>`).join("")}</div>
        </div>
        <div class="detail-actions">
          <button class="copy-button" type="button" data-open-post="${escapeHtml(post.id)}">Open</button>
        </div>
      `;
      card.querySelector("[data-open-post]").addEventListener("click", () => openDetail(post.id));
      list.append(card);
    });
    elements.views.queue.append(list);
  }

  function renderTemplates() {
    elements.views.templates.innerHTML = "";
    const grid = document.createElement("div");
    grid.className = "template-grid";
    data.templates.forEach((template) => {
      const card = document.createElement("article");
      card.className = "template-card";
      const text = [template.body, (template.hashtags || []).join(" ")].filter(Boolean).join("\n\n");
      card.innerHTML = `
        <h2>${escapeHtml(template.name)}</h2>
        <p>${escapeHtml(template.audience)}</p>
        <textarea class="caption-box" readonly>${escapeHtml(text)}</textarea>
        <div><button class="copy-button" type="button">Copy Template</button></div>
      `;
      card.querySelector("button").addEventListener("click", () => copyToClipboard(text, "Template copied."));
      grid.append(card);
    });
    elements.views.templates.append(grid);
  }

  function renderAds() {
    elements.views.ads.innerHTML = "";
    const grid = document.createElement("div");
    grid.className = "ad-grid";
    data.ads.forEach((ad) => {
      const card = document.createElement("article");
      card.className = "ad-card";
      const copy = [
        ad.title,
        `Budget: ${ad.budget}`,
        `Channel: ${ad.channel}`,
        `Asset: ${ad.asset}`,
        `Audience: ${ad.audience}`,
        `Copy: ${ad.copy}`,
        `Success: ${ad.success}`
      ].join("\n");
      card.innerHTML = `
        <h2>${escapeHtml(ad.budget)} - ${escapeHtml(ad.title)}</h2>
        <p><strong>Channel:</strong> ${escapeHtml(ad.channel)}</p>
        <p><strong>Asset:</strong> ${escapeHtml(ad.asset)}</p>
        <p><strong>Audience:</strong> ${escapeHtml(ad.audience)}</p>
        <p><strong>Copy:</strong> ${escapeHtml(ad.copy)}</p>
        <p><strong>Success:</strong> ${escapeHtml(ad.success)}</p>
        <div><button class="copy-button" type="button">Copy Ad Brief</button></div>
      `;
      card.querySelector("button").addEventListener("click", () => copyToClipboard(copy, "Ad brief copied."));
      grid.append(card);
    });
    elements.views.ads.append(grid);
  }

  function openDetail(postId) {
    const post = data.posts.find((item) => item.id === postId);
    if (!post) return;
    const asset = assetFor(post);
    const platforms = Object.entries(post.platforms || {});
    const status = postStatus(post);
    const notes = postNotes(post);

    elements.detailContent.innerHTML = `
      <h2 class="detail-title">${escapeHtml(post.title)}</h2>
      <div class="post-meta">
        <span class="badge">${escapeHtml(formatLongDate(post.date))}</span>
        <span class="badge">${escapeHtml(formatTime(post.time))}</span>
        <span class="badge">${escapeHtml(post.audience)}</span>
        <span class="badge status-${escapeHtml(status)}">${escapeHtml(status.replaceAll("_", " "))}</span>
      </div>
      <div class="detail-hero">
        <img src="${escapeHtml(asset?.file || "")}" alt="${escapeHtml(asset?.alt || "")}">
        <div>
          <p><strong>Pillar:</strong> ${escapeHtml(post.pillar)}</p>
          <p><strong>Asset:</strong> ${escapeHtml(asset?.label || post.asset)}</p>
          <p><strong>Asset use:</strong> ${escapeHtml(asset?.use || "")}</p>
          <p><strong>Notes:</strong> ${escapeHtml(post.notes || "")}</p>
          ${post.ctaLink ? `<p><strong>Link:</strong> <a href="${escapeHtml(post.ctaLink)}" target="_blank" rel="noreferrer">${escapeHtml(post.ctaLink)}</a></p>` : ""}
        </div>
      </div>
      <div class="detail-actions">
        <label class="field">
          <span>Status</span>
          <select class="status-select" data-status-select>
            ${["draft", "needs_edit", "needs_rule_check", "posted", "skipped"].map((item) => `<option value="${item}" ${item === status ? "selected" : ""}>${item.replaceAll("_", " ")}</option>`).join("")}
          </select>
        </label>
        <button class="copy-button" type="button" data-copy-asset-path>Copy Asset Path</button>
        ${post.ctaLink ? `<button class="copy-button" type="button" data-copy-link>Copy Link</button>` : ""}
      </div>
      <label class="field">
        <span>Local Notes</span>
        <textarea class="notes-box" data-local-notes placeholder="DMs, comments, posted URL, edits...">${escapeHtml(notes)}</textarea>
      </label>
      <h3>Platform Variants</h3>
      <div id="variantList"></div>
    `;

    elements.detailContent.querySelector("[data-status-select]").addEventListener("change", (event) => {
      setPostStatus(post.id, event.target.value);
      openDetail(post.id);
    });

    elements.detailContent.querySelector("[data-local-notes]").addEventListener("input", (event) => {
      setPostNotes(post.id, event.target.value);
    });

    elements.detailContent.querySelector("[data-copy-asset-path]").addEventListener("click", () => {
      copyToClipboard(asset?.file || "", "Asset path copied.");
    });

    const linkButton = elements.detailContent.querySelector("[data-copy-link]");
    if (linkButton) {
      linkButton.addEventListener("click", () => copyToClipboard(post.ctaLink, "Link copied."));
    }

    const variantList = elements.detailContent.querySelector("#variantList");
    platforms.forEach(([platform, variants]) => {
      variants.forEach((variant, index) => {
        const fullText = captionText(variant);
        const card = document.createElement("section");
        card.className = "variant-card";
        card.innerHTML = `
          <div class="variant-head">
            <span class="platform-label">${escapeHtml(platform)} - Variation ${index + 1}: ${escapeHtml(variant.label || "Default")}</span>
            <span class="badge">${fullText.length} chars</span>
          </div>
          <textarea class="caption-box" readonly>${escapeHtml(fullText)}</textarea>
          <div class="platform-tools">
            <button class="copy-button" type="button" data-copy-caption>Copy Caption</button>
            <button class="copy-button" type="button" data-copy-package>Copy Package</button>
            <button class="open-button" type="button" data-open-platform>Open ${escapeHtml(platform)}</button>
          </div>
        `;
        card.querySelector("[data-copy-caption]").addEventListener("click", () => {
          copyToClipboard(fullText, `${platform} caption copied.`);
        });
        card.querySelector("[data-copy-package]").addEventListener("click", () => {
          const packageText = [
            `Post: ${post.title}`,
            `Date: ${formatLongDate(post.date)} ${formatTime(post.time)}`,
            `Platform: ${platform}`,
            `Asset: ${asset?.file || ""}`,
            `Link: ${post.ctaLink || ""}`,
            "",
            fullText
          ].join("\n");
          copyToClipboard(packageText, `${platform} package copied.`);
        });
        card.querySelector("[data-open-platform]").addEventListener("click", () => openPlatform(platform, fullText));
        variantList.append(card);
      });
    });

    elements.panel.classList.add("is-open");
    elements.panel.setAttribute("aria-hidden", "false");
  }

  function closeDetail() {
    elements.panel.classList.remove("is-open");
    elements.panel.setAttribute("aria-hidden", "true");
  }

  function platformUrl(platform, text) {
    const encoded = encodeURIComponent(text);
    const urls = {
      instagram: "https://www.instagram.com/",
      facebook: "https://www.facebook.com/",
      tiktok: "https://www.tiktok.com/upload",
      threads: "https://www.threads.net/",
      bluesky: `https://bsky.app/intent/compose?text=${encoded}`,
      x: `https://twitter.com/intent/tweet?text=${encoded}`,
      linkedin: "https://www.linkedin.com/feed/",
      reddit: "https://www.reddit.com/"
    };
    return urls[platform] || "about:blank";
  }

  function openPlatform(platform, text) {
    window.open(platformUrl(platform, text), "_blank", "noopener,noreferrer");
  }

  async function copyToClipboard(text, message) {
    try {
      await navigator.clipboard.writeText(text);
      showToast(message);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.append(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
      showToast(message);
    }
  }

  function showToast(message) {
    elements.toast.textContent = message;
    elements.toast.classList.add("is-visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => {
      elements.toast.classList.remove("is-visible");
    }, 1800);
  }

  function switchView(view) {
    state.view = view;
    elements.tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === view));
    Object.entries(elements.views).forEach(([name, element]) => {
      element.classList.toggle("is-active", name === view);
    });
    render();
  }

  function render() {
    if (state.view === "calendar") renderCalendar();
    if (state.view === "queue") renderQueue();
    if (state.view === "templates") renderTemplates();
    if (state.view === "ads") renderAds();
  }

  function init() {
    fillPlatformFilter();
    elements.tabs.forEach((tab) => {
      tab.addEventListener("click", () => switchView(tab.dataset.view));
    });
    elements.platformFilter.addEventListener("change", (event) => {
      state.platform = event.target.value;
      render();
    });
    elements.statusFilter.addEventListener("change", (event) => {
      state.status = event.target.value;
      render();
    });
    elements.searchFilter.addEventListener("input", (event) => {
      state.search = event.target.value;
      render();
    });
    document.querySelectorAll("[data-close-panel]").forEach((element) => {
      element.addEventListener("click", closeDetail);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeDetail();
    });
    const params = new URLSearchParams(window.location.search);
    const requestedView = params.get("view");
    if (requestedView && elements.views[requestedView]) {
      switchView(requestedView);
    } else {
      renderCalendar();
    }

    const requestedPost = params.get("post");
    if (requestedPost) {
      window.setTimeout(() => openDetail(requestedPost), 120);
    }
  }

  init();
})();
