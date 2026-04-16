const footer = document.getElementById("reveal-footer");
const pdfModal = document.getElementById("pdf-modal");
const pdfModalTitle = document.getElementById("pdf-modal-title");
const pdfModalFrame = document.getElementById("pdf-modal-frame");
const pdfModalDownload = document.getElementById("pdf-modal-download");
const pdfTriggers = document.querySelectorAll("[data-pdf-viewer]");
const pdfCloseTriggers = document.querySelectorAll("[data-close-pdf]");
const externalLinks = document.querySelectorAll(".external-link");

if (footer) {
  const revealThreshold = 120;

  function atBottom() {
    return (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - revealThreshold
    );
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

function openPdfModal(src, title) {
  if (!pdfModal || !pdfModalFrame || !pdfModalTitle || !pdfModalDownload) {
    return;
  }

  pdfModalTitle.textContent = title;
  pdfModalFrame.src = src;
  pdfModalDownload.href = src;
  pdfModal.classList.add("is-open");
  pdfModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closePdfModal() {
  if (!pdfModal || !pdfModalFrame) {
    return;
  }

  pdfModal.classList.remove("is-open");
  pdfModal.setAttribute("aria-hidden", "true");
  pdfModalFrame.src = "";
  document.body.classList.remove("modal-open");
}

pdfTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const src = trigger.getAttribute("data-pdf-src");
    const title = trigger.getAttribute("data-pdf-title") || "PDF preview";

    if (!src) {
      return;
    }

    openPdfModal(src, title);
  });
});

pdfCloseTriggers.forEach((trigger) => {
  trigger.addEventListener("click", closePdfModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePdfModal();
  }
});

externalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    if (!href) {
      return;
    }

    event.preventDefault();
    window.open(href, "_blank", "noopener,noreferrer");
  });
});
