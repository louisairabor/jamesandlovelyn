/* ═══════════════════════════════════════════════════════════════
   James & Lovelyn Nig. Ltd. — Main JavaScript
   ═══════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ── HAMBURGER MENU ───────────────────────────────────────── */
  const burger     = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  burger.addEventListener("click", function () {
    burger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });

  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      burger.classList.remove("open");
      mobileMenu.classList.remove("open");
    });
  });


  /* ── SCROLL REVEAL ────────────────────────────────────────── */
  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = (i % 4) * 0.1 + "s";
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach(function (el) {
    revealObserver.observe(el);
  });


  /* ── PRODUCT MODAL DATA ───────────────────────────────────── */
  var productData = [
    { title: "Palm Oil",                             desc: "Pure, high-quality palm oil carefully processed for food, cosmetic, and industrial applications, suitable for both local consumption and export supply. Our palm oil undergoes rigorous quality checks at every stage to ensure it meets both local and international standards.",                                                            img: "./assets/images/banga_clearoil.jpg",                        tags: ["Food Grade", "Export Ready", "Cosmetic Use", "Industrial"],         accent: "#2e6b35" },
    { title: "Unrefined Red Palm Oil",               desc: "Naturally unrefined red palm oil, rich in beta-carotene and Vitamin E, suitable for traditional cooking, cosmetic use, and export to health and diaspora markets worldwide. Retains all natural nutrients with no chemical processing.",                                                                                              img: "./assets/images/palmoil3.jpg",                              tags: ["Unrefined", "Rich in Vitamin E", "Beta-Carotene", "Export Ready"],  accent: "#c85c1a" },
    { title: "Palm Kernel Cake",                     desc: "Nutritious palm kernel cake, a high-protein by-product of oil extraction, commonly used for livestock feed and commercial agricultural applications. Available in bulk and bagged quantities for both local and export supply.",                                                                                                     img: "./assets/images/palm-kernel-cake-cattle-feed-500x500.webp", tags: ["High Protein", "Livestock Feed", "Agricultural", "Bulk Supply"],   accent: "#1a3c1f" },
    { title: "Crude Palm Sludge",                    desc: "Quality crude palm sludge suitable for industrial processing and other commercial applications, prepared and supplied for local and export markets. Consistently processed and available in large quantities.",                                                                                                                      img: "./assets/images/palm_sludge2.jpg",                          tags: ["Industrial Use", "Export Ready", "Bulk Available"],                accent: "#2e6b35" },
    { title: "Palm Kernel Nuts",                     desc: "Premium palm kernel nuts sourced from selected palm fruits, ideal for producing palm kernel oil and other industrial processing uses. Carefully sorted and graded to ensure consistent quality for buyers and processors.",                                                                                                          img: "./assets/images/palm-kernel-nuts1.jpg",                     tags: ["Premium Grade", "Oil Extraction", "Industrial", "Export Ready"],   accent: "#c85c1a" },
    { title: "Palm Kernel Shells",                   desc: "Clean palm kernel shells used as renewable biomass fuel for industrial energy generation and other commercial processing applications. An eco-friendly alternative energy source with high calorific value.",                                                                                                                        img: "./assets/images/palm-kernel-shells.jpg",                    tags: ["Biomass Fuel", "Renewable", "Industrial Energy", "Eco-Friendly"],  accent: "#1a3c1f" },
    { title: "First Crushed Cake – Premium First Press", desc: "High-quality palm kernel cake from the first pressing stage, supplied in 100kg bags for premium livestock feed and export supply. The first press yields the highest protein content, making it ideal for premium feed formulations.",                                                                                     img: "./assets/images/Bags-of-Cake-100kg.jpeg",                   tags: ["First Press", "100kg Bags", "Premium Grade", "Export Supply"],     accent: "#2e6b35" },
    { title: "First Crushed Cake – Standard First Press", desc: "Standard palm kernel cake from the first crushing stage, packaged in 100kg bags for livestock feed and commercial agricultural use. Reliable quality for commercial feed operations at competitive pricing.",                                                                                                             img: "./assets/images/First-Crushed-Cake.jpeg",                   tags: ["Standard Grade", "100kg Bags", "Livestock Feed", "Commercial"],    accent: "#c85c1a" },
    { title: "First Crushed Cake – Industrial Use",  desc: "Palm kernel cake from the crushing process, packed in 100kg bags and suitable for industrial processing and bulk feed production. Available in large volumes for industrial-scale buyers and feed manufacturers.",                                                                                                                  img: "./assets/images/Bags-of-Cakes.jpeg",                        tags: ["Industrial Grade", "100kg Bags", "Bulk Feed", "Large Volume"],     accent: "#1a3c1f" },
    { title: "Palm Kernel Crushing Process",         desc: "Palm kernels are crushed through a controlled, mechanised process to extract oil and produce palm kernel cake for feed and industrial applications. Our facility processes large volumes daily with consistent output quality.",                                                                                                     img: "./assets/images/Crushing-Engine.jpeg",                      tags: ["Mechanised", "High Capacity", "Controlled Process", "Daily Output"],accent: "#2e6b35" },
    { title: "Palm Kernel Oil Storage",              desc: "Extracted palm kernel oil is stored in dedicated tanks to preserve quality before bulk supply, processing, or export distribution. Our storage facilities maintain optimal conditions to prevent oxidation and preserve oil quality.",                                                                                               img: "./assets/images/Oil-Tank.jpeg",                             tags: ["Bulk Storage", "Quality Preserved", "Export Ready", "Large Capacity"], accent: "#c85c1a" },
    { title: "Premium Unshelled Palm Kernel Nuts",   desc: "Premium unshelled palm kernel nuts carefully harvested and sorted, ideal for direct processing, oil extraction, and export supply to local and international markets. Sourced from high-yield palm varieties for maximum oil content.",                                                                                            img: "./assets/images/palm-kernel-nuts-unshelled.jpg",            tags: ["Unshelled", "High Oil Content", "Export Ready", "Premium Sorted"], accent: "#1a3c1f" },
  ];


  /* ── MODAL LOGIC ──────────────────────────────────────────── */
  var overlay      = document.getElementById("productModal");
  var modalImg     = document.getElementById("modalImg");
  var modalTitle   = document.getElementById("modalTitle");
  var modalDesc    = document.getElementById("modalDesc");
  var modalTags    = document.getElementById("modalTags");
  var modalAccent  = document.getElementById("modalAccent");

  function openModal(index) {
    var p = productData[index];
    modalImg.src                   = p.img;
    modalImg.alt                   = p.title;
    modalTitle.textContent         = p.title;
    modalDesc.textContent          = p.desc;
    modalAccent.style.background   = p.accent;
    modalTags.innerHTML            = p.tags.map(function (t) {
      return '<span class="modal-tag">' + t + "</span>";
    }).join("");
    overlay.classList.add("open");
    document.body.style.overflow   = "hidden";
  }

  function closeModal() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".btn-learn").forEach(function (btn, i) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      openModal(i);
    });
  });

  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("modalCloseText").addEventListener("click", closeModal);
  document.getElementById("modalQuote").addEventListener("click", closeModal);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });


  /* ── PRODUCT SLIDER ───────────────────────────────────────── */
  (function () {
    var track    = document.getElementById("sliderTrack");
    var dotsWrap = document.getElementById("sliderDots");
    var progress = document.getElementById("progressFill");
    var btnPrev  = document.querySelector(".slider-btn.prev");
    var btnNext  = document.querySelector(".slider-btn.next");
    var cards    = Array.from(track.querySelectorAll(".product-card"));
    var total    = cards.length;
    var current  = 0;

    function getPerView() {
      if (window.innerWidth <= 560)  return 1;
      if (window.innerWidth <= 900)  return 2;
      if (window.innerWidth <= 1024) return 3;
      return 4;
    }

    function getStep()     { var pv = getPerView(); return pv === 1 ? 1 : pv; }
    function getMaxIndex() { return total - getPerView(); }
    function getCardWidth(){ return cards[0].getBoundingClientRect().width + 18; }

    function buildDots() {
      dotsWrap.innerHTML = "";
      var dotCount = Math.ceil(total / getPerView());
      for (var i = 0; i < dotCount; i++) {
        (function (idx) {
          var d = document.createElement("button");
          d.className = "dot";
          d.setAttribute("aria-label", "Go to slide " + (idx + 1));
          d.addEventListener("click", function () { goTo(idx * getStep()); });
          dotsWrap.appendChild(d);
        })(i);
      }
      updateDots();
    }

    function updateDots() {
      var dotIdx = Math.round(current / getStep());
      document.querySelectorAll(".dot").forEach(function (d, i) {
        d.classList.toggle("active", i === dotIdx);
      });
    }

    function goTo(idx) {
      var maxI = getMaxIndex();
      current  = Math.max(0, Math.min(idx, maxI));
      track.style.transform = "translateX(-" + current * getCardWidth() + "px)";
      updateDots();
      var pct = maxI === 0 ? 100 : (current / maxI) * 100;
      progress.style.width  = pct + "%";
      btnPrev.disabled      = current === 0;
      btnNext.disabled      = current >= maxI;
    }

    btnPrev.addEventListener("click", function () { goTo(current - getStep()); });
    btnNext.addEventListener("click", function () { goTo(current + getStep()); });

    function startTimer() {
      return setInterval(function () {
        var maxI = getMaxIndex();
        goTo(current < maxI ? current + getStep() : 0);
      }, 4500);
    }
    var timer = startTimer();

    track.addEventListener("mouseenter", function () { clearInterval(timer); });
    track.addEventListener("mouseleave", function () { timer = startTimer(); });

    var startX = 0;
    track.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener("touchend",   function (e) {
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) goTo(dx < 0 ? current + getStep() : current - getStep());
    });

    window.addEventListener("resize", function () { current = 0; buildDots(); goTo(0); });
    buildDots();
    goTo(0);
  })();


  /* ── CORE VALUES DOUGHNUT CHART ───────────────────────────── */
  var VALUES = [
    { label: "Integrity",      icon: "🛡️", color: "#2a7de1", hover: "#1a6dce" },
    { label: "Quality",        icon: "⭐",  color: "#52b347", hover: "#42a337" },
    { label: "Reliability",    icon: "🤝", color: "#e07b00", hover: "#d06b00" },
    { label: "Sustainability", icon: "🌍", color: "#1a9d8f", hover: "#0a8d7f" },
  ];

  var cvCanvas  = document.getElementById("cvPie");
  var cvCtx     = cvCanvas.getContext("2d");
  var tipEl     = document.getElementById("cvTooltip");
  var tipIcon   = document.getElementById("cvTipIcon");
  var tipName   = document.getElementById("cvTipName");
  var cvCards   = document.querySelectorAll(".cv-card");
  var activeIdx = null;

  var cvChart = new Chart(cvCtx, {
    type: "doughnut",
    data: {
      labels: VALUES.map(function (v) { return v.label; }),
      datasets: [{
        data: [25, 25, 25, 25],
        backgroundColor:      VALUES.map(function (v) { return v.color; }),
        hoverBackgroundColor: VALUES.map(function (v) { return v.hover; }),
        borderWidth:      5,
        borderColor:      "#f5f0e8",
        hoverBorderColor: "#f5f0e8",
        hoverOffset: 14,
      }],
    },
    options: {
      responsive:          true,
      maintainAspectRatio: true,
      cutout: "54%",
      animation: { animateRotate: true, duration: 900, easing: "easeInOutQuart" },
      plugins: {
        legend:  { display: false },
        tooltip: { enabled: false },
      },
      onHover: function (evt, elements) {
        cvCanvas.style.cursor = elements.length ? "pointer" : "default";
        if (elements.length) highlightSegment(elements[0].index);
      },
    },
  });

  cvCanvas.addEventListener("click", function (evt) {
    var pts = cvChart.getElementsAtEventForMode(evt, "nearest", { intersect: true }, false);
    if (pts.length) highlightSegment(pts[0].index);
  });

  cvCanvas.addEventListener("mouseleave", function () {
    if (activeIdx === null) resetHighlight();
  });

  function highlightSegment(i) {
    tipIcon.textContent = VALUES[i].icon;
    tipName.textContent = VALUES[i].label;
    tipEl.style.opacity = "1";
    cvCards.forEach(function (c) { c.classList.remove("active"); });
    cvCards[i].classList.add("active");
    activeIdx = i;
  }

  function resetHighlight() {
    tipEl.style.opacity = "0";
    cvCards.forEach(function (c) { c.classList.remove("active"); });
    activeIdx = null;
  }

  cvCards.forEach(function (card) {
    var i = parseInt(card.dataset.index, 10);
    card.addEventListener("mouseenter", function () {
      highlightSegment(i);
      cvChart.setActiveElements([{ datasetIndex: 0, index: i }]);
      cvChart.update("none");
    });
    card.addEventListener("mouseleave", function () {
      cvChart.setActiveElements([]);
      cvChart.update("none");
      if (activeIdx === i) resetHighlight();
    });
  });

  // Show first segment after chart animates in
  setTimeout(function () { highlightSegment(0); }, 1000);


  /* ── WHATSAPP FLOATING BUTTON ─────────────────────────────── */
  var phoneNumber     = "+2348066322301";
  var message         = "Hello James & Lovelyn Nig. Ltd., I am interested in your palm products.";
  var encodedMessage  = encodeURIComponent(message);
  var whatsappLink    = document.getElementById("whatsapp-link");

  if (whatsappLink) {
    whatsappLink.href = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;
  }

})(); // end IIFE