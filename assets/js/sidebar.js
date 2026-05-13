document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.querySelector(".right-sidebar-button");
  const sidebar = document.querySelector(".right-sidebar");
  const overlay = document.querySelector(".right-sidebar-overlay");
  const closeBtn = document.querySelector(".right-sidebar-close");

  if (!openBtn || !sidebar || !overlay || !closeBtn) {
    console.warn("Sidebar required elements missing on this page");
    return;
  }

  function openSidebar(e) {
    if (e) e.preventDefault();
    sidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("sidebar-open");
    sidebar.setAttribute("aria-hidden", "false");
  }

  function closeSidebar(e) {
    if (e) e.preventDefault();
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("sidebar-open");
    sidebar.setAttribute("aria-hidden", "true");
  }

  openBtn.addEventListener("click", openSidebar);
  closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeSidebar(e);
  });

  const dropdownIcons = document.querySelectorAll(".right-sidebar .dropdown-icon");

  dropdownIcons.forEach(function (icon) {
    icon.addEventListener("click", function (e) {
      e.preventDefault();
      const parent = icon.closest(".menu-item-has-children");
      if (parent) parent.classList.toggle("open");
    });
  });

  // Active Menu State
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const menuLinks = document.querySelectorAll(".menu-list a");
  
  menuLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
      // Also add active to parent if it's a sub-menu item
      const parentLi = link.closest(".menu-item-has-children");
      if (parentLi) {
        const parentLink = parentLi.querySelector("a");
        if (parentLink) parentLink.classList.add("active");
      }
    }
  });
});
