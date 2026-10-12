(function () {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const endpoint = "https://formspree.io/f/xdalzygp";
  const status = document.querySelector("[data-form-status]");
  let locked = false;

  form.action = endpoint;
  form.method = "POST";

  form.addEventListener("submit", async event => {
    event.preventDefault();
    const lang = window.getPortfolioLanguage?.() || "en";
    const t = window.I18N[lang].contact;
    if (locked) return;
    if (!form.checkValidity()) {
      status.textContent = t.error;
      form.reportValidity();
      return;
    }
    locked = true;
    const button = form.querySelector("button[type='submit']");
    button.disabled = true;
    button.textContent = t.sending;

    try {
      const data = new FormData(form);
      data.append("_subject", "Portfolio — New contact message");
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });

      if (!response.ok) throw new Error(`Formspree returned ${response.status}`);
      status.textContent = t.success;
      form.reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);
      status.textContent = t.sendError;
    } finally {
      locked = false;
      button.disabled = false;
      button.textContent = t.send;
    }
  });
})();
