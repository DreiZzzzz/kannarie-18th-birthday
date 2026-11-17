(() => {
  "use strict";

  const data = invitationData;
  const byId = (id) => document.getElementById(id);
  const setText = (id, value) => { byId(id).textContent = value; };

  setText("invite-line", data.invitationLine);
  setText("celebrant-name", data.celebrantName);
  setText("event-date", data.date);
  setText("event-time", data.time);
  setText("arrival-note", data.arrivalNote);
  setText("venue-name", data.venue);
  setText("venue-address", data.venueAddress);
  byId("location-link").href = data.mapUrl;
  setText("dress-heading", data.dressCode.heading);
  setText("dress-color", data.dressCode.color);
  setText("dress-note", data.dressCode.note);
  setText("closing-line", data.dressCode.closing);
  setText("signature-name", data.celebrantName);
  byId("attire-gallery").hidden = !data.dressCode.showAttireExamples;

  const params = new URLSearchParams(window.location.search);
  const guest = (params.get("guest") || "").trim();
  const requestedSeats = Number.parseInt(params.get("seats"), 10);
  const seats = Number.isFinite(requestedSeats) && requestedSeats > 0 ? Math.min(requestedSeats, 20) : data.defaultSeats;
  const seatWord = seats === 1 ? "seat" : "seats";
  setText("reservation", guest
    ? `Dear ${guest}, we have reserved ${seats} ${seatWord} for you.`
    : data.defaultReservation);

  const fillList = (id, names) => {
    const fragment = document.createDocumentFragment();
    names.forEach((name) => {
      const item = document.createElement("li");
      item.textContent = name;
      fragment.appendChild(item);
    });
    byId(id).appendChild(fragment);
  };
  fillList("roses-list", data.roses);
  fillList("candles-list", data.candles);
  fillList("bills-list", data.blueBills);
  fillList("shots-list", data.shots);

  document.querySelectorAll(".tabs").forEach((tabs) => {
    const buttons = [...tabs.querySelectorAll("[role='tab']")];
    const activate = (button) => {
      buttons.forEach((tab) => {
        const selected = tab === button;
        tab.classList.toggle("active", selected);
        tab.setAttribute("aria-selected", String(selected));
        const panel = byId(tab.getAttribute("aria-controls"));
        panel.hidden = !selected;
        panel.classList.toggle("active", selected);
      });
    };
    buttons.forEach((button, index) => {
      button.addEventListener("click", () => activate(button));
      button.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const next = buttons[(index + direction + buttons.length) % buttons.length];
        activate(next);
        next.focus();
      });
    });
  });

  const eventTime = new Date(data.eventDateTime).getTime();
  const updateCountdown = () => {
    const remaining = Math.max(0, eventTime - Date.now());
    const day = 86400000;
    const hour = 3600000;
    const minute = 60000;
    setText("days", Math.floor(remaining / day));
    setText("hours", String(Math.floor((remaining % day) / hour)).padStart(2, "0"));
    setText("minutes", String(Math.floor((remaining % hour) / minute)).padStart(2, "0"));
    setText("seconds", String(Math.floor((remaining % minute) / 1000)).padStart(2, "0"));
  };
  updateCountdown();
  window.setInterval(updateCountdown, 1000);

  const dots = [...document.querySelectorAll(".dot")];
  const sections = [...document.querySelectorAll(".page")];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const page = Number(entry.target.dataset.page);
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === page);
        if (index === page) dot.setAttribute("aria-current", "page");
        else dot.removeAttribute("aria-current");
      });
      entry.target.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
    });
  }, { root: document.querySelector(".pages"), threshold: 0.55 });
  sections.forEach((section) => observer.observe(section));
})();
