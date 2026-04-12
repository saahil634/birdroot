const footer = document.getElementById("reveal-footer");

if (footer) {
  const revealThreshold = 120;

  function atBottom() {
    return window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - revealThreshold;
  }

  function syncFooterVisibility(visible) {
    footer.classList.toggle("is-visible", visible);
    footer.setAttribute("aria-hidden", String(!visible));
  }

  function handleScroll() {
    syncFooterVisibility(atBottom());
  }

  function handlePointerMove(event) {
    if (event.clientY >= window.innerHeight - 72) {
      syncFooterVisibility(true);
      return;
    }

    if (!atBottom()) {
      syncFooterVisibility(false);
    }
  }

  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("mousemove", handlePointerMove);
}
