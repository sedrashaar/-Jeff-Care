// mobile menu
  const burger = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // spotlight cursor glow on cards
  document.querySelectorAll('.company-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
      card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
    });
  });

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  // back to top
  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    toTop.classList.toggle('show', window.scrollY > 500);
  });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ---------- language toggle (EN / NL) ----------
  const translations = {
    en: {
      nav_group: "Group",
      nav_structure: "Structure",
      nav_companies: "Companies",
      nav_leadership: "Leadership",
      nav_registry: "Registry",
      nav_contact: "Contact",
      hero_pill: "Holding &amp; Management Office · Amstelveen, NL",
      hero_h1: 'One operator.<br><span class="gradient-text">Three companies.</span>',
      hero_lede: "G Jeff Care B.V. holds the shares of, and directs, three operating companies across staffing and digital services — run from a single office in Amstelveen.",
      cta_primary: "View the group",
      cta_ghost: "Registry extract",
      console_label: "REGISTRY STATUS",
      console_status: "ACTIVE",
      console_k_kvk: "KVK number",
      console_k_rsin: "RSIN",
      console_k_established: "Established",
      console_k_companies: "Companies held",
      console_k_seat: "Seat",
      marquee_item: `<b>Jeff Logistics B.V.</b><span class="sep">•</span>
        <b>Blom Service B.V.</b><span class="sep">•</span>
        <b>205 Management B.V.</b><span class="sep">•</span>
        <span>KVK 42088591</span><span class="sep">•</span>
        <span>Est. 18 Jun 2026</span><span class="sep">•</span>
        <span>Amstelveen, NL</span><span class="sep">•</span>`,
      group_eyebrow: "SBI 70102 · Holding &amp; management activities",
      group_h2: "One office, three mandates.",
      group_copy: "Registered under Dutch law, the company's purpose is straightforward: hold shares, and provide management services to the businesses it owns. G Jeff Care sits above the operating companies — setting direction, taking on the managing-director role where needed, and keeping the group's structure and accountability in one place.",
      bento_1: "<b>18 Jun 2026</b><span>Date of incorporation</span>",
      bento_2: "<b>1 of 1</b><span>Sole director &amp; shareholder</span>",
      bento_3: "<b>3</b><span>Operating companies held</span>",
      bento_4: "<b>Amstelveen</b><span>Statutory seat &amp; office</span>",
      structure_eyebrow: "Group structure",
      structure_h2: "How the group is connected.",
      structure_p: "One holding company at the centre, three operating companies underneath — each keeping its own trading name, its own clients, and its own KVK filing.",
      net_sub1: "Logistics staffing",
      net_sub2: "Construction &amp; delivery",
      net_sub3: "Web &amp; marketing",
      net_bottom: "Sole shareholder &amp; director throughout: Gordon Jeff Blom",
      companies_eyebrow: "Portfolio",
      companies_h2: "The companies in the group.",
      companies_p: "Three separate ventures, each filed with its own KVK registration — all directed from G Jeff Care B.V.",
      card1_tag: "Logistics staffing",
      card1_p: "Warehouse and logistics workforce placement for operators across the Amsterdam region, built on a founding team's six years placing staff across Scandinavia.",
      card1_visit: "Visit jefflogistics.nl",
      card2_tag: "Construction &amp; delivery",
      card2_p: "Vetted construction crews and delivery teams dispatched to contractors across the Netherlands within 48 hours, with G Jeff Care holding sole managing-director responsibility.",
      card2_meta_k1: "Office",
      card2_meta_k2: "Managed by",
      card2_visit: "Visit blomservice.nl",
      card3_tag: "Web &amp; digital marketing",
      card3_p: "An Amsterdam-based agency building websites, apps, and marketing campaigns for Dutch and international brands, with G Jeff Care as managing director and sole authority.",
      card3_visit: "Visit 205management.nl",
      leadership_eyebrow: "Leadership",
      leadership_h2: "The person behind the office.",
      leader_role: "Algemeen Directeur — Sole Authority",
      leader_bio: "Born in Vallensbæk, Denmark, Gordon Jeff Blom is the sole director and shareholder of G Jeff Care B.V. and, through it, the managing authority behind Jeff Logistics, Blom Service, and 205 Management. His background placing workers across Scandinavian warehouses and ports informs the staffing side of the group, while the same office directs its digital agency — one point of accountability across every company the group holds.",
      registry_eyebrow: "On record",
      registry_h2: "Registry extract.",
      registry_p: "Core details from the Dutch Trade Register (Kamer van Koophandel), shown here for reference.",
      reg_k1: "Statutory name",
      reg_k2: "KVK number",
      reg_k4: "Legal form",
      reg_k6: "Registered address",
      reg_k8: "Date of incorporation",
      reg_v8: "18 June 2026",
      registry_foot: "This overview reflects public Trade Register data as filed with the Dutch Chamber of Commerce, provided for information purposes only.",
      foot_p: "Holding &amp; management office, Amsterdamseweg 153 C, 1182 GT Amstelveen, the Netherlands.",
      foot_h4_2: "The Group",
      foot_h4_3: "Enquiries",
      foot_link1: "Logistics staffing",
      foot_link2: "Construction &amp; delivery",
      foot_link3: "Web &amp; marketing",
      foot_bottom_right: "Amstelveen, the Netherlands",
      contact_pill: "Get in touch",
      contact_h1: "Talk to the office, or to one of the companies.",
      contact_lede: "Whether it's a question for G Jeff Care B.V. itself or for one of the operating companies it directs — here's how to reach the right people.",
      contact_general_eyebrow: "General enquiries",
      contact_general_h2: "G Jeff Care B.V.",
      contact_k_email: "Email",
      contact_k_address: "Address",
      contact_k_kvk: "KVK",
      contact_general_copy: "For matters relating to the holding company itself — governance, group structure, or media enquiries — reach us directly at the address above. For day-to-day business with one of the operating companies, use the contacts below.",
      contact_companies_eyebrow: "Direct lines",
      contact_companies_h2: "Reach the operating companies.",
      contact_form_eyebrow: "Send a message",
      contact_form_h2: "Or write to us directly.",
      contact_form_p: "This opens a pre-filled message in your own email application, addressed to G Jeff Care B.V. — nothing is sent from this page.",
      contact_label_name: "Name",
      contact_label_email: "Your email",
      contact_label_subject: "Subject",
      contact_label_message: "Message",
      contact_submit: "Open email to send",
      foot_privacy: "Privacy Policy",
      foot_terms: "Terms of Service",
      privacy_eyebrow: "Legal",
      privacy_h1: "Privacy Policy",
      privacy_updated: "Last updated: 8 July 2026",
      privacy_intro: "This policy explains what information G Jeff Care B.V. (\"we\", \"us\") collects through this website, why, and what rights you have. We aim to collect as little personal data as possible.",
      privacy_who_h: "Who we are",
      privacy_who_p: "G Jeff Care B.V., registered with the Dutch Chamber of Commerce (KVK) under number 42088591, Amsterdamseweg 153 C, 1182 GT Amstelveen, the Netherlands.",
      privacy_data_h: "What data we collect",
      privacy_data_p1: "This site does not run its own server-side backend. The contact form on our Contact page does not transmit data to us directly — it opens your own email application with a pre-filled message. Any name, email address, or message content you enter is only sent if and when you choose to send that email yourself, using your own email provider.",
      privacy_data_p2: "If you email us directly (for example at info@jeffcare.nl), we process the information you send — such as your name, email address, and message — only to respond to your enquiry, and we keep it no longer than necessary for that purpose.",
      privacy_cookies_h: "Cookies and external resources",
      privacy_cookies_p1: "We do not use tracking or advertising cookies. This site loads typefaces from Google Fonts, which may involve your browser connecting to Google's servers and sharing your IP address. We only load these fonts after you accept this in the cookie banner; if you decline, the site falls back to your device's built-in fonts.",
      privacy_cookies_p2: "Your choice is stored locally in your browser (not on our servers) so we don't ask again on your next visit, until you clear your browser data.",
      privacy_rights_h: "Your rights",
      privacy_rights_p: "Under the GDPR, you have the right to access, correct, or request deletion of any personal data we hold about you, and the right to object to or restrict our processing of it. To exercise these rights, contact us at info@jeffcare.nl. You also have the right to lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens).",
      privacy_changes_h: "Changes to this policy",
      privacy_changes_p: "We may update this policy from time to time. The date at the top of this page reflects the most recent revision.",
      privacy_contact_h: "Contact",
      privacy_contact_p: 'Questions about this policy or your data can be sent to <a href="mailto:info@jeffcare.nl">info@jeffcare.nl</a>.',
      terms_eyebrow: "Legal",
      terms_h1: "Terms of Service",
      terms_updated: "Last updated: 8 July 2026",
      terms_intro: "By using this website, you agree to the terms below. If you don't agree, please don't use the site.",
      terms_purpose_h: "Purpose of this site",
      terms_purpose_p: "This site provides general information about G Jeff Care B.V. (KVK 42088591) as a holding and management office, and about the operating companies it directs. Nothing on this site constitutes an offer, solicitation, or professional advice of any kind.",
      terms_accuracy_h: "Accuracy of information",
      terms_accuracy_p: "We aim to keep the information on this site accurate and up to date, including details drawn from the Dutch Trade Register. However, we make no warranty as to completeness or accuracy, and the Trade Register itself remains the authoritative source for registration data.",
      terms_links_h: "Third-party links",
      terms_links_p: "This site links to the independent websites of Jeff Logistics B.V., Blom Service B.V., and 205 Management B.V., as well as to external services. We are not responsible for the content, availability, or policies of third-party sites you reach through these links.",
      terms_ip_h: "Intellectual property",
      terms_ip_p: "The design, text, and graphics on this site belong to G Jeff Care B.V. unless otherwise noted, and may not be reproduced without permission.",
      terms_liability_h: "Limitation of liability",
      terms_liability_p: "To the extent permitted by law, G Jeff Care B.V. is not liable for any damages arising from your use of this site or reliance on the information it contains.",
      terms_law_h: "Governing law",
      terms_law_p: "These terms are governed by the laws of the Netherlands. Any disputes will be submitted to the competent court in the district where G Jeff Care B.V. is registered.",
      terms_contact_h: "Contact",
      terms_contact_p: 'Questions about these terms can be sent to <a href="mailto:info@jeffcare.nl">info@jeffcare.nl</a>.',
      cookie_text: 'We use Google Fonts to display this site\'s typefaces, which may share your IP address with Google. See our <a href="privacy.html" style="color:var(--accent);">Privacy Policy</a>.',
      cookie_accept: "Accept",
      cookie_decline: "Decline"
    },
    nl: {
      nav_group: "Groep",
      nav_structure: "Structuur",
      nav_companies: "Bedrijven",
      nav_leadership: "Leiding",
      nav_registry: "Register",
      nav_contact: "Contact",
      hero_pill: "Holding- &amp; managementkantoor · Amstelveen, NL",
      hero_h1: 'Eén bestuurder.<br><span class="gradient-text">Drie bedrijven.</span>',
      hero_lede: "G Jeff Care B.V. houdt de aandelen van drie werkmaatschappijen in uitzendwerk en digitale dienstverlening en geeft er leiding aan — vanuit één kantoor in Amstelveen.",
      cta_primary: "Bekijk de groep",
      cta_ghost: "Uittreksel KVK",
      console_label: "REGISTERSTATUS",
      console_status: "ACTIEF",
      console_k_kvk: "KVK-nummer",
      console_k_rsin: "RSIN",
      console_k_established: "Opgericht",
      console_k_companies: "Deelnemingen",
      console_k_seat: "Zetel",
      marquee_item: `<b>Jeff Logistics B.V.</b><span class="sep">•</span>
        <b>Blom Service B.V.</b><span class="sep">•</span>
        <b>205 Management B.V.</b><span class="sep">•</span>
        <span>KVK 42088591</span><span class="sep">•</span>
        <span>Vanaf 18 jun 2026</span><span class="sep">•</span>
        <span>Amstelveen, NL</span><span class="sep">•</span>`,
      group_eyebrow: "SBI 70102 · Holding- en managementactiviteiten",
      group_h2: "Eén kantoor, drie opdrachten.",
      group_copy: "Onder Nederlands recht is het doel van de onderneming eenvoudig: het houden van aandelen en het verlenen van managementdiensten aan de bedrijven die zij bezit. G Jeff Care staat boven de werkmaatschappijen — bepaalt de koers, treedt waar nodig op als statutair bestuurder, en houdt de structuur en verantwoording van de groep op één plek.",
      bento_1: "<b>18 jun 2026</b><span>Datum oprichting</span>",
      bento_2: "<b>1 van 1</b><span>Enig bestuurder &amp; aandeelhouder</span>",
      bento_3: "<b>3</b><span>Werkmaatschappijen</span>",
      bento_4: "<b>Amstelveen</b><span>Statutaire zetel &amp; kantoor</span>",
      structure_eyebrow: "Groepsstructuur",
      structure_h2: "Hoe de groep is verbonden.",
      structure_p: "Eén holding in het midden, drie werkmaatschappijen eronder — elk met een eigen handelsnaam, eigen klanten en een eigen KVK-inschrijving.",
      net_sub1: "Uitzendwerk logistiek",
      net_sub2: "Bouw &amp; bezorging",
      net_sub3: "Web &amp; marketing",
      net_bottom: "Enig aandeelhouder &amp; bestuurder van alle drie: Gordon Jeff Blom",
      companies_eyebrow: "Portefeuille",
      companies_h2: "De bedrijven in de groep.",
      companies_p: "Drie afzonderlijke ondernemingen, elk met een eigen KVK-inschrijving — allemaal aangestuurd vanuit G Jeff Care B.V.",
      card1_tag: "Uitzendwerk logistiek",
      card1_p: "Werving en plaatsing van magazijn- en logistiek personeel voor opdrachtgevers in de regio Amsterdam, gebaseerd op zes jaar ervaring van het oprichtende team met uitzendwerk in Scandinavië.",
      card1_visit: "Bezoek jefflogistics.nl",
      card2_tag: "Bouw &amp; bezorging",
      card2_p: "Gescreende bouwvakkers en bezorgteams, binnen 48 uur ingezet bij opdrachtgevers door heel Nederland, met G Jeff Care als enig statutair bestuurder.",
      card2_meta_k1: "Kantoor",
      card2_meta_k2: "Bestuurd door",
      card2_visit: "Bezoek blomservice.nl",
      card3_tag: "Web &amp; digitale marketing",
      card3_p: "Een in Amsterdam gevestigd bureau dat websites, apps en marketingcampagnes bouwt voor Nederlandse en internationale merken, met G Jeff Care als statutair bestuurder.",
      card3_visit: "Bezoek 205management.nl",
      leadership_eyebrow: "Leiding",
      leadership_h2: "De persoon achter het kantoor.",
      leader_role: "Algemeen Directeur — Alleen/zelfstandig bevoegd",
      leader_bio: "Geboren in Vallensbæk, Denemarken, is Gordon Jeff Blom enig bestuurder en aandeelhouder van G Jeff Care B.V. en daarmee het bestuurlijk gezag achter Jeff Logistics, Blom Service en 205 Management. Zijn ervaring met het plaatsen van personeel in Scandinavische magazijnen en havens vormt de basis van de uitzendtak van de groep, terwijl hetzelfde kantoor ook het digitale bureau aanstuurt — één aanspreekpunt voor elk bedrijf binnen de groep.",
      registry_eyebrow: "Geregistreerd",
      registry_h2: "Uittreksel handelsregister.",
      registry_p: "Kerngegevens uit het Handelsregister van de Kamer van Koophandel, hier ter referentie weergegeven.",
      reg_k1: "Statutaire naam",
      reg_k2: "KVK-nummer",
      reg_k4: "Rechtsvorm",
      reg_k6: "Bezoekadres",
      reg_k8: "Datum oprichting",
      reg_v8: "18 juni 2026",
      registry_foot: "Dit overzicht geeft openbare gegevens weer zoals geregistreerd bij de Kamer van Koophandel, uitsluitend ter informatie.",
      foot_p: "Holding- en managementkantoor, Amsterdamseweg 153 C, 1182 GT Amstelveen, Nederland.",
      foot_h4_2: "De Groep",
      foot_h4_3: "Contact",
      foot_link1: "Uitzendwerk logistiek",
      foot_link2: "Bouw &amp; bezorging",
      foot_link3: "Web &amp; marketing",
      foot_bottom_right: "Amstelveen, Nederland",
      contact_pill: "Neem contact op",
      contact_h1: "Spreek het kantoor, of één van de bedrijven.",
      contact_lede: "Of het nu een vraag is voor G Jeff Care B.V. zelf, of voor één van de werkmaatschappijen die zij aanstuurt — hier vind je de juiste contactgegevens.",
      contact_general_eyebrow: "Algemene vragen",
      contact_general_h2: "G Jeff Care B.V.",
      contact_k_email: "E-mail",
      contact_k_address: "Adres",
      contact_k_kvk: "KVK",
      contact_general_copy: "Voor zaken die de holding zelf betreffen — governance, groepsstructuur of persvragen — kun je direct terecht op bovenstaand adres. Voor dagelijkse zaken met één van de werkmaatschappijen gebruik je de contactgegevens hieronder.",
      contact_companies_eyebrow: "Directe lijnen",
      contact_companies_h2: "Bereik de werkmaatschappijen.",
      contact_form_eyebrow: "Stuur een bericht",
      contact_form_h2: "Of schrijf ons rechtstreeks.",
      contact_form_p: "Dit opent een vooraf ingevuld bericht in je eigen e-mailprogramma, gericht aan G Jeff Care B.V. — er wordt niets verzonden vanaf deze pagina.",
      contact_label_name: "Naam",
      contact_label_email: "Jouw e-mailadres",
      contact_label_subject: "Onderwerp",
      contact_label_message: "Bericht",
      contact_submit: "Open e-mail om te versturen",
      foot_privacy: "Privacybeleid",
      foot_terms: "Algemene voorwaarden",
      privacy_eyebrow: "Juridisch",
      privacy_h1: "Privacybeleid",
      privacy_updated: "Laatst bijgewerkt: 8 juli 2026",
      privacy_intro: "Dit beleid legt uit welke informatie G Jeff Care B.V. (\"wij\", \"ons\") via deze website verzamelt, waarom, en welke rechten je hebt. We willen zo min mogelijk persoonsgegevens verzamelen.",
      privacy_who_h: "Wie wij zijn",
      privacy_who_p: "G Jeff Care B.V., ingeschreven bij de Kamer van Koophandel onder nummer 42088591, Amsterdamseweg 153 C, 1182 GT Amstelveen, Nederland.",
      privacy_data_h: "Welke gegevens wij verzamelen",
      privacy_data_p1: "Deze site heeft geen eigen server-backend. Het contactformulier op onze contactpagina stuurt geen gegevens rechtstreeks naar ons — het opent je eigen e-mailprogramma met een vooraf ingevuld bericht. Een naam, e-mailadres of berichttekst die je invoert wordt alleen verzonden als en wanneer je die e-mail zelf verstuurt, via je eigen e-mailprovider.",
      privacy_data_p2: "Als je ons rechtstreeks e-mailt (bijvoorbeeld naar info@jeffcare.nl), verwerken wij de gegevens die je stuurt — zoals je naam, e-mailadres en bericht — uitsluitend om je vraag te beantwoorden, en bewaren we deze niet langer dan daarvoor nodig is.",
      privacy_cookies_h: "Cookies en externe bronnen",
      privacy_cookies_p1: "Wij gebruiken geen tracking- of advertentiecookies. Deze site laadt lettertypen van Google Fonts, waarbij je browser mogelijk verbinding maakt met de servers van Google en je IP-adres deelt. We laden deze lettertypen pas nadat je dit accepteert in de cookiebanner; als je weigert, valt de site terug op de standaardlettertypen van je apparaat.",
      privacy_cookies_p2: "Je keuze wordt lokaal in je browser opgeslagen (niet op onze servers), zodat we het niet opnieuw vragen bij je volgende bezoek, totdat je je browsergegevens wist.",
      privacy_rights_h: "Jouw rechten",
      privacy_rights_p: "Onder de AVG heb je het recht op inzage, correctie of verwijdering van persoonsgegevens die wij van je hebben, en het recht om bezwaar te maken tegen of beperking te vragen van onze verwerking daarvan. Neem voor deze rechten contact op via info@jeffcare.nl. Je hebt ook het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens.",
      privacy_changes_h: "Wijzigingen in dit beleid",
      privacy_changes_p: "We kunnen dit beleid van tijd tot tijd bijwerken. De datum bovenaan deze pagina toont de meest recente versie.",
      privacy_contact_h: "Contact",
      privacy_contact_p: 'Vragen over dit beleid of je gegevens kun je sturen naar <a href="mailto:info@jeffcare.nl">info@jeffcare.nl</a>.',
      terms_eyebrow: "Juridisch",
      terms_h1: "Algemene voorwaarden",
      terms_updated: "Laatst bijgewerkt: 8 juli 2026",
      terms_intro: "Door deze website te gebruiken, ga je akkoord met onderstaande voorwaarden. Ga je hier niet mee akkoord, gebruik de site dan niet.",
      terms_purpose_h: "Doel van deze site",
      terms_purpose_p: "Deze site biedt algemene informatie over G Jeff Care B.V. (KVK 42088591) als holding- en managementkantoor, en over de werkmaatschappijen die zij aanstuurt. Niets op deze site vormt een aanbod, uitnodiging of professioneel advies.",
      terms_accuracy_h: "Juistheid van informatie",
      terms_accuracy_p: "Wij streven ernaar de informatie op deze site actueel en juist te houden, inclusief gegevens uit het Handelsregister. Wij geven echter geen garantie over volledigheid of juistheid; het Handelsregister zelf blijft de gezaghebbende bron voor registratiegegevens.",
      terms_links_h: "Links naar derden",
      terms_links_p: "Deze site linkt naar de onafhankelijke websites van Jeff Logistics B.V., Blom Service B.V. en 205 Management B.V., evenals naar externe diensten. Wij zijn niet verantwoordelijk voor de inhoud, beschikbaarheid of het beleid van sites van derden die je via deze links bereikt.",
      terms_ip_h: "Intellectueel eigendom",
      terms_ip_p: "Het ontwerp, de tekst en de afbeeldingen op deze site zijn eigendom van G Jeff Care B.V., tenzij anders vermeld, en mogen niet zonder toestemming worden overgenomen.",
      terms_liability_h: "Beperking van aansprakelijkheid",
      terms_liability_p: "Voor zover wettelijk toegestaan is G Jeff Care B.V. niet aansprakelijk voor schade die voortvloeit uit je gebruik van deze site of het vertrouwen op de daarin opgenomen informatie.",
      terms_law_h: "Toepasselijk recht",
      terms_law_p: "Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement waar G Jeff Care B.V. is geregistreerd.",
      terms_contact_h: "Contact",
      terms_contact_p: 'Vragen over deze voorwaarden kun je sturen naar <a href="mailto:info@jeffcare.nl">info@jeffcare.nl</a>.',
      cookie_text: 'We gebruiken Google Fonts om de lettertypen van deze site weer te geven, waarbij je IP-adres mogelijk wordt gedeeld met Google. Zie ons <a href="privacy.html" style="color:var(--accent);">privacybeleid</a>.',
      cookie_accept: "Accepteren",
      cookie_decline: "Weigeren"
    }
  };

  const langToggle = document.getElementById('langToggle');
  const i18nEls = document.querySelectorAll('[data-i18n]');

  function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;
    i18nEls.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.documentElement.lang = lang;
    if (langToggle) langToggle.textContent = lang === 'en' ? 'NL' : 'EN';
    try { localStorage.setItem('gjc-lang', lang); } catch (e) {}
  }

  let currentLang = 'en';
  try {
    const saved = localStorage.getItem('gjc-lang');
    if (saved === 'en' || saved === 'nl') currentLang = saved;
  } catch (e) {}
  applyLanguage(currentLang);

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'nl' : 'en';
      applyLanguage(currentLang);
      updateCookieBannerText();
    });
  }

  // ---------- consent-gated Google Fonts ----------
  function loadGoogleFonts() {
    if (document.getElementById('gjc-fonts-link')) return;
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnect);

    const link = document.createElement('link');
    link.id = 'gjc-fonts-link';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap';
    document.head.appendChild(link);
  }

  // ---------- cookie consent banner ----------
  let cookieBanner = null;
  function updateCookieBannerText() {
    if (!cookieBanner) return;
    const dict = translations[currentLang] || translations.en;
    const textEl = cookieBanner.querySelector('.gjc-cookie-text');
    const acceptEl = cookieBanner.querySelector('.gjc-cookie-accept');
    const declineEl = cookieBanner.querySelector('.gjc-cookie-decline');
    if (textEl) textEl.innerHTML = dict.cookie_text;
    if (acceptEl) acceptEl.textContent = dict.cookie_accept;
    if (declineEl) declineEl.textContent = dict.cookie_decline;
  }

  function showCookieBanner() {
    const dict = translations[currentLang] || translations.en;
    cookieBanner = document.createElement('div');
    cookieBanner.setAttribute('role', 'dialog');
    cookieBanner.setAttribute('aria-label', 'Cookie notice');
    cookieBanner.style.cssText = 'position:fixed; left:16px; right:16px; bottom:16px; z-index:200; max-width:640px; margin:0 auto; background:var(--surface); border:1px solid var(--border); border-radius:14px; padding:18px 20px; box-shadow:0 16px 40px rgba(0,0,0,0.18); display:flex; flex-wrap:wrap; align-items:center; gap:14px; font-family:Arial, sans-serif;';
    cookieBanner.innerHTML = `
      <p class="gjc-cookie-text" style="flex:1 1 260px; margin:0; font-size:0.86rem; color:var(--text-soft); line-height:1.5;">${dict.cookie_text}</p>
      <div style="display:flex; gap:10px; flex-shrink:0;">
        <button class="gjc-cookie-decline" type="button" style="font-size:0.84rem; font-weight:600; padding:9px 16px; border-radius:10px; border:1px solid var(--border); background:none; color:var(--text); cursor:pointer;">${dict.cookie_decline}</button>
        <button class="gjc-cookie-accept" type="button" style="font-size:0.84rem; font-weight:600; padding:9px 16px; border-radius:10px; border:none; background:var(--accent); color:var(--accent-ink); cursor:pointer;">${dict.cookie_accept}</button>
      </div>
    `;
    document.body.appendChild(cookieBanner);

    cookieBanner.querySelector('.gjc-cookie-accept').addEventListener('click', () => {
      try { localStorage.setItem('gjc-cookie-consent', 'accepted'); } catch (e) {}
      loadGoogleFonts();
      cookieBanner.remove();
      cookieBanner = null;
    });
    cookieBanner.querySelector('.gjc-cookie-decline').addEventListener('click', () => {
      try { localStorage.setItem('gjc-cookie-consent', 'declined'); } catch (e) {}
      cookieBanner.remove();
      cookieBanner = null;
    });
  }

  (function initCookieConsent() {
    let consent = null;
    try { consent = localStorage.getItem('gjc-cookie-consent'); } catch (e) {}
    if (consent === 'accepted') {
      loadGoogleFonts();
    } else if (consent !== 'declined') {
      showCookieBanner();
    }
  })();

  // ---------- contact form: build a mailto link on submit (no backend) ----------
  const cfForm = document.getElementById('contactForm');
  if (cfForm) {
    cfForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cf-name').value.trim();
      const email = document.getElementById('cf-email').value.trim();
      const subject = document.getElementById('cf-subject').value.trim();
      const message = document.getElementById('cf-message').value.trim();
      if (!name || !email || !subject || !message) return;
      const body = `${message}\n\n— ${name} (${email})`;
      const mailto = `mailto:info@jeffcare.nl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    });
  }

  // ---------- single-page router (hash-based "pages") ----------
  const routeIds = ['home', 'group', 'structure', 'companies', 'leadership', 'registry', 'contact', 'privacy', 'terms'];

  function showRoute(id) {
    if (!routeIds.includes(id)) id = 'home';
    routeIds.forEach(rid => {
      const el = document.getElementById(rid);
      if (!el) return;
      el.classList.toggle('active', rid === id);
    });
    document.querySelectorAll('[data-route]').forEach(a => {
      a.classList.toggle('active-link', a.getAttribute('data-route') === id);
    });
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function routeFromHash() {
    const id = (location.hash || '#home').slice(1);
    showRoute(id);
  }

  window.addEventListener('hashchange', routeFromHash);
  routeFromHash();


