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
      skip_to_content: "Skip to content",
      hero_pill: "Holding &amp; Management Office · Amsterdam, NL",
      hero_h1: 'One operator.<br><span class="gradient-text">Three companies.</span>',
      hero_lede: "G Jeff Care B.V. holds the shares of, and directs, three operating companies across staffing and digital services — run from a single office in Amsterdam.",
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
        <span>Amsterdam, NL</span><span class="sep">•</span>`,
      group_eyebrow: "SBI 70102 · Holding &amp; management activities",
      group_h2: "One office, three mandates.",
      group_copy: "Registered under Dutch law, the company's purpose is straightforward: hold shares, and provide management services to the businesses it owns. G Jeff Care sits above the operating companies — setting direction, taking on the managing-director role where needed, and keeping the group's structure and accountability in one place.",
      bento_1: "<b>18 Jun 2026</b><span>Date of incorporation</span>",
      bento_2: "<b>1 of 1</b><span>Sole director &amp; shareholder</span>",
      bento_3: "<b>3</b><span>Operating companies held</span>",
      bento_4: "<b>Amsterdam</b><span>Statutory seat &amp; office</span>",
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
      foot_p: "Holding &amp; management office, Amsterdamseweg 153 C, 1182 GT Amsterdam, the Netherlands.",
      foot_h4_2: "The Group",
      foot_h4_3: "Enquiries",
      foot_link1: "Logistics staffing",
      foot_link2: "Construction &amp; delivery",
      foot_link3: "Web &amp; marketing",
      foot_bottom_right: "Amsterdam, the Netherlands",
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
      privacy_who_p: "G Jeff Care B.V., registered with the Dutch Chamber of Commerce (KVK) under number 42088591, Amsterdamseweg 153 C, 1182 GT Amsterdam, the Netherlands.",
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
      skip_to_content: "Naar inhoud springen",
      hero_pill: "Holding- &amp; managementkantoor · Amsterdam, NL",
      hero_h1: 'Eén bestuurder.<br><span class="gradient-text">Drie bedrijven.</span>',
      hero_lede: "G Jeff Care B.V. houdt de aandelen van drie werkmaatschappijen in uitzendwerk en digitale dienstverlening en geeft er leiding aan — vanuit één kantoor in Amsterdam.",
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
        <span>Amsterdam, NL</span><span class="sep">•</span>`,
      group_eyebrow: "SBI 70102 · Holding- en managementactiviteiten",
      group_h2: "Eén kantoor, drie opdrachten.",
      group_copy: "Onder Nederlands recht is het doel van de onderneming eenvoudig: het houden van aandelen en het verlenen van managementdiensten aan de bedrijven die zij bezit. G Jeff Care staat boven de werkmaatschappijen — bepaalt de koers, treedt waar nodig op als statutair bestuurder, en houdt de structuur en verantwoording van de groep op één plek.",
      bento_1: "<b>18 jun 2026</b><span>Datum oprichting</span>",
      bento_2: "<b>1 van 1</b><span>Enig bestuurder &amp; aandeelhouder</span>",
      bento_3: "<b>3</b><span>Werkmaatschappijen</span>",
      bento_4: "<b>Amsterdam</b><span>Statutaire zetel &amp; kantoor</span>",
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
      foot_p: "Holding- en managementkantoor, Amsterdamseweg 153 C, 1182 GT Amsterdam, Nederland.",
      foot_h4_2: "De Groep",
      foot_h4_3: "Contact",
      foot_link1: "Uitzendwerk logistiek",
      foot_link2: "Bouw &amp; bezorging",
      foot_link3: "Web &amp; marketing",
      foot_bottom_right: "Amsterdam, Nederland",
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
      privacy_who_p: "G Jeff Care B.V., ingeschreven bij de Kamer van Koophandel onder nummer 42088591, Amsterdamseweg 153 C, 1182 GT Amsterdam, Nederland.",
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
    },
    de: {
      nav_group: "Gruppe",
      nav_structure: "Struktur",
      nav_companies: "Unternehmen",
      nav_leadership: "Geschäftsführung",
      nav_registry: "Handelsregister",
      nav_contact: "Kontakt",
      skip_to_content: "Zum Inhalt springen",
      hero_pill: "Holding- &amp; Managementbüro · Amsterdam, NL",
      hero_h1: 'Ein Geschäftsführer.<br><span class="gradient-text">Drei Unternehmen.</span>',
      hero_lede: "G Jeff Care B.V. hält die Anteile von drei operativen Unternehmen in den Bereichen Personalvermittlung und digitale Dienstleistungen und leitet sie — von einem einzigen Büro in Amsterdam aus.",
      cta_primary: "Die Gruppe ansehen",
      cta_ghost: "Handelsregisterauszug",
      console_label: "REGISTERSTATUS",
      console_status: "AKTIV",
      console_k_kvk: "KVK-Nummer",
      console_k_rsin: "RSIN",
      console_k_established: "Gegründet",
      console_k_companies: "Gehaltene Unternehmen",
      console_k_seat: "Sitz",
      marquee_item: `<b>Jeff Logistics B.V.</b><span class="sep">•</span>
        <b>Blom Service B.V.</b><span class="sep">•</span>
        <b>205 Management B.V.</b><span class="sep">•</span>
        <span>KVK 42088591</span><span class="sep">•</span>
        <span>Gegr. 18. Jun 2026</span><span class="sep">•</span>
        <span>Amsterdam, NL</span><span class="sep">•</span>`,
      group_eyebrow: "SBI 70102 · Holding- und Managementaktivitäten",
      group_h2: "Ein Büro, drei Aufgaben.",
      group_copy: "Nach niederländischem Recht ist der Zweck des Unternehmens klar umrissen: Anteile halten und Managementdienstleistungen für die Unternehmen erbringen, die es besitzt. G Jeff Care steht über den operativen Unternehmen — gibt die Richtung vor, übernimmt bei Bedarf die Rolle des Geschäftsführers und hält die Struktur und Rechenschaftspflicht der Gruppe an einem Ort.",
      bento_1: "<b>18. Jun 2026</b><span>Gründungsdatum</span>",
      bento_2: "<b>1 von 1</b><span>Alleiniger Geschäftsführer &amp; Gesellschafter</span>",
      bento_3: "<b>3</b><span>Gehaltene operative Unternehmen</span>",
      bento_4: "<b>Amsterdam</b><span>Satzungssitz &amp; Büro</span>",
      structure_eyebrow: "Gruppenstruktur",
      structure_h2: "Wie die Gruppe verbunden ist.",
      structure_p: "Eine Holdinggesellschaft im Zentrum, drei operative Unternehmen darunter — jedes mit eigenem Handelsnamen, eigenen Kunden und eigener KVK-Eintragung.",
      net_sub1: "Personalvermittlung Logistik",
      net_sub2: "Bau &amp; Lieferung",
      net_sub3: "Web &amp; Marketing",
      net_bottom: "Alleiniger Gesellschafter &amp; Geschäftsführer aller drei: Gordon Jeff Blom",
      companies_eyebrow: "Portfolio",
      companies_h2: "Die Unternehmen der Gruppe.",
      companies_p: "Drei eigenständige Unternehmen, jedes mit eigener KVK-Eintragung — alle geleitet von G Jeff Care B.V.",
      card1_tag: "Personalvermittlung Logistik",
      card1_p: "Vermittlung von Lager- und Logistikpersonal für Auftraggeber in der Region Amsterdam, aufbauend auf sechs Jahren Erfahrung des Gründerteams in der Personalvermittlung in Skandinavien.",
      card1_visit: "jefflogistics.nl besuchen",
      card2_tag: "Bau &amp; Lieferung",
      card2_p: "Geprüfte Bauteams und Lieferteams, die innerhalb von 48 Stunden an Auftragnehmer in den gesamten Niederlanden entsandt werden, wobei G Jeff Care die alleinige Geschäftsführung innehat.",
      card2_meta_k1: "Büro",
      card2_meta_k2: "Geleitet von",
      card2_visit: "blomservice.nl besuchen",
      card3_tag: "Web &amp; digitales Marketing",
      card3_p: "Eine in Amsterdam ansässige Agentur, die Websites, Apps und Marketingkampagnen für niederländische und internationale Marken entwickelt, mit G Jeff Care als Geschäftsführer und alleiniger Vertretungsbefugnis.",
      card3_visit: "205management.nl besuchen",
      leadership_eyebrow: "Geschäftsführung",
      leadership_h2: "Die Person hinter dem Büro.",
      leader_role: "Algemeen Directeur — Alleinige Vertretungsbefugnis",
      leader_bio: "Gordon Jeff Blom, geboren in Vallensbæk, Dänemark, ist alleiniger Geschäftsführer und Gesellschafter der G Jeff Care B.V. und dadurch die leitende Instanz hinter Jeff Logistics, Blom Service und 205 Management. Seine Erfahrung in der Personalvermittlung in skandinavischen Lagerhäusern und Häfen prägt den Personalbereich der Gruppe, während dasselbe Büro auch die Digitalagentur leitet — ein einziger Ansprechpartner für jedes Unternehmen der Gruppe.",
      registry_eyebrow: "Eingetragen",
      registry_h2: "Handelsregisterauszug.",
      registry_p: "Kerndaten aus dem niederländischen Handelsregister (Kamer van Koophandel), hier zu Referenzzwecken dargestellt.",
      reg_k1: "Satzungsmäßiger Name",
      reg_k2: "KVK-Nummer",
      reg_k4: "Rechtsform",
      reg_k6: "Eingetragene Adresse",
      reg_k8: "Gründungsdatum",
      reg_v8: "18. Juni 2026",
      registry_foot: "Diese Übersicht gibt öffentliche Handelsregisterdaten wieder, wie sie bei der niederländischen Handelskammer hinterlegt sind, ausschließlich zu Informationszwecken.",
      foot_p: "Holding- und Managementbüro, Amsterdamseweg 153 C, 1182 GT Amsterdam, Niederlande.",
      foot_h4_2: "Die Gruppe",
      foot_h4_3: "Anfragen",
      foot_link1: "Personalvermittlung Logistik",
      foot_link2: "Bau &amp; Lieferung",
      foot_link3: "Web &amp; Marketing",
      foot_bottom_right: "Amsterdam, Niederlande",
      contact_pill: "Kontakt aufnehmen",
      contact_h1: "Sprechen Sie mit dem Büro oder mit einem der Unternehmen.",
      contact_lede: "Ob es sich um eine Frage an G Jeff Care B.V. selbst handelt oder an eines der von ihr geleiteten operativen Unternehmen — hier finden Sie die richtigen Ansprechpartner.",
      contact_general_eyebrow: "Allgemeine Anfragen",
      contact_general_h2: "G Jeff Care B.V.",
      contact_k_email: "E-Mail",
      contact_k_address: "Adresse",
      contact_k_kvk: "KVK",
      contact_general_copy: "Für Angelegenheiten, die die Holding selbst betreffen — Governance, Gruppenstruktur oder Presseanfragen — wenden Sie sich direkt an die oben genannte Adresse. Für das Tagesgeschäft mit einem der operativen Unternehmen nutzen Sie bitte die untenstehenden Kontaktdaten.",
      contact_companies_eyebrow: "Direkte Kontakte",
      contact_companies_h2: "Die operativen Unternehmen erreichen.",
      contact_form_eyebrow: "Nachricht senden",
      contact_form_h2: "Oder schreiben Sie uns direkt.",
      contact_form_p: "Dies öffnet eine vorausgefüllte Nachricht in Ihrem eigenen E-Mail-Programm, adressiert an G Jeff Care B.V. — von dieser Seite wird nichts versendet.",
      contact_label_name: "Name",
      contact_label_email: "Ihre E-Mail-Adresse",
      contact_label_subject: "Betreff",
      contact_label_message: "Nachricht",
      contact_submit: "E-Mail zum Versenden öffnen",
      foot_privacy: "Datenschutzerklärung",
      foot_terms: "Nutzungsbedingungen",
      privacy_eyebrow: "Rechtliches",
      privacy_h1: "Datenschutzerklärung",
      privacy_updated: "Zuletzt aktualisiert: 8. Juli 2026",
      privacy_intro: "Diese Richtlinie erläutert, welche Informationen G Jeff Care B.V. („wir“, „uns“) über diese Website erhebt, warum, und welche Rechte Sie haben. Wir bemühen uns, so wenig personenbezogene Daten wie möglich zu erheben.",
      privacy_who_h: "Wer wir sind",
      privacy_who_p: "G Jeff Care B.V., eingetragen bei der niederländischen Handelskammer (KVK) unter der Nummer 42088591, Amsterdamseweg 153 C, 1182 GT Amsterdam, Niederlande.",
      privacy_data_h: "Welche Daten wir erheben",
      privacy_data_p1: "Diese Website betreibt kein eigenes serverseitiges Backend. Das Kontaktformular auf unserer Kontaktseite übermittelt keine Daten direkt an uns — es öffnet Ihr eigenes E-Mail-Programm mit einer vorausgefüllten Nachricht. Ein von Ihnen eingegebener Name, eine E-Mail-Adresse oder ein Nachrichteninhalt wird nur versendet, wenn und sofern Sie diese E-Mail selbst über Ihren eigenen E-Mail-Anbieter versenden.",
      privacy_data_p2: "Wenn Sie uns direkt eine E-Mail senden (zum Beispiel an info@jeffcare.nl), verarbeiten wir die von Ihnen gesendeten Informationen — wie Name, E-Mail-Adresse und Nachricht — ausschließlich zur Beantwortung Ihrer Anfrage und bewahren sie nicht länger auf, als für diesen Zweck erforderlich ist.",
      privacy_cookies_h: "Cookies und externe Ressourcen",
      privacy_cookies_p1: "Wir verwenden keine Tracking- oder Werbe-Cookies. Diese Website lädt Schriftarten von Google Fonts, wodurch Ihr Browser möglicherweise eine Verbindung zu den Servern von Google herstellt und Ihre IP-Adresse teilt. Wir laden diese Schriftarten erst, nachdem Sie dies im Cookie-Banner akzeptiert haben; lehnen Sie ab, greift die Website auf die integrierten Schriftarten Ihres Geräts zurück.",
      privacy_cookies_p2: "Ihre Wahl wird lokal in Ihrem Browser gespeichert (nicht auf unseren Servern), sodass wir bei Ihrem nächsten Besuch nicht erneut danach fragen, bis Sie Ihre Browserdaten löschen.",
      privacy_rights_h: "Ihre Rechte",
      privacy_rights_p: "Gemäß der DSGVO haben Sie das Recht auf Auskunft, Berichtigung oder Löschung personenbezogener Daten, die wir über Sie speichern, sowie das Recht, der Verarbeitung zu widersprechen oder sie einzuschränken. Um diese Rechte auszuüben, kontaktieren Sie uns unter info@jeffcare.nl. Sie haben zudem das Recht, sich bei der niederländischen Datenschutzbehörde (Autoriteit Persoonsgegevens) zu beschweren.",
      privacy_changes_h: "Änderungen dieser Richtlinie",
      privacy_changes_p: "Wir können diese Richtlinie von Zeit zu Zeit aktualisieren. Das Datum oben auf dieser Seite zeigt die letzte Überarbeitung.",
      privacy_contact_h: "Kontakt",
      privacy_contact_p: 'Fragen zu dieser Richtlinie oder Ihren Daten können Sie an <a href="mailto:info@jeffcare.nl">info@jeffcare.nl</a> senden.',
      terms_eyebrow: "Rechtliches",
      terms_h1: "Nutzungsbedingungen",
      terms_updated: "Zuletzt aktualisiert: 8. Juli 2026",
      terms_intro: "Durch die Nutzung dieser Website stimmen Sie den nachstehenden Bedingungen zu. Falls Sie nicht zustimmen, nutzen Sie die Website bitte nicht.",
      terms_purpose_h: "Zweck dieser Website",
      terms_purpose_p: "Diese Website bietet allgemeine Informationen über G Jeff Care B.V. (KVK 42088591) als Holding- und Managementbüro sowie über die von ihr geleiteten operativen Unternehmen. Nichts auf dieser Website stellt ein Angebot, eine Aufforderung oder eine professionelle Beratung jeglicher Art dar.",
      terms_accuracy_h: "Richtigkeit der Informationen",
      terms_accuracy_p: "Wir bemühen uns, die Informationen auf dieser Website aktuell und korrekt zu halten, einschließlich Angaben aus dem niederländischen Handelsregister. Wir übernehmen jedoch keine Gewähr für Vollständigkeit oder Richtigkeit; das Handelsregister selbst bleibt die maßgebliche Quelle für Registrierungsdaten.",
      terms_links_h: "Links zu Dritten",
      terms_links_p: "Diese Website verlinkt zu den unabhängigen Websites von Jeff Logistics B.V., Blom Service B.V. und 205 Management B.V. sowie zu externen Diensten. Wir sind nicht verantwortlich für den Inhalt, die Verfügbarkeit oder die Richtlinien von Websites Dritter, die Sie über diese Links erreichen.",
      terms_ip_h: "Geistiges Eigentum",
      terms_ip_p: "Das Design, die Texte und die Grafiken auf dieser Website gehören G Jeff Care B.V., sofern nicht anders angegeben, und dürfen ohne Genehmigung nicht reproduziert werden.",
      terms_liability_h: "Haftungsbeschränkung",
      terms_liability_p: "Soweit gesetzlich zulässig, haftet G Jeff Care B.V. nicht für Schäden, die aus der Nutzung dieser Website oder dem Vertrauen auf die darin enthaltenen Informationen entstehen.",
      terms_law_h: "Anwendbares Recht",
      terms_law_p: "Diese Bedingungen unterliegen dem Recht der Niederlande. Streitigkeiten werden dem zuständigen Gericht in dem Bezirk vorgelegt, in dem G Jeff Care B.V. eingetragen ist.",
      terms_contact_h: "Kontakt",
      terms_contact_p: 'Fragen zu diesen Bedingungen können Sie an <a href="mailto:info@jeffcare.nl">info@jeffcare.nl</a> senden.',
      cookie_text: 'Wir verwenden Google Fonts, um die Schriftarten dieser Website darzustellen, wodurch Ihre IP-Adresse mit Google geteilt werden kann. Siehe unsere <a href="privacy.html" style="color:var(--accent);">Datenschutzerklärung</a>.',
      cookie_accept: "Akzeptieren",
      cookie_decline: "Ablehnen"
    },
    fr: {
      nav_group: "Groupe",
      nav_structure: "Structure",
      nav_companies: "Entreprises",
      nav_leadership: "Direction",
      nav_registry: "Registre",
      nav_contact: "Contact",
      skip_to_content: "Passer au contenu",
      hero_pill: "Bureau de holding &amp; de gestion · Amsterdam, NL",
      hero_h1: 'Un seul dirigeant.<br><span class="gradient-text">Trois entreprises.</span>',
      hero_lede: "G Jeff Care B.V. détient les parts de trois entreprises opérationnelles dans les secteurs du recrutement et des services numériques, et les dirige — depuis un seul bureau à Amsterdam.",
      cta_primary: "Découvrir le groupe",
      cta_ghost: "Extrait du registre",
      console_label: "STATUT AU REGISTRE",
      console_status: "ACTIF",
      console_k_kvk: "Numéro KVK",
      console_k_rsin: "RSIN",
      console_k_established: "Créée le",
      console_k_companies: "Entreprises détenues",
      console_k_seat: "Siège",
      marquee_item: `<b>Jeff Logistics B.V.</b><span class="sep">•</span>
        <b>Blom Service B.V.</b><span class="sep">•</span>
        <b>205 Management B.V.</b><span class="sep">•</span>
        <span>KVK 42088591</span><span class="sep">•</span>
        <span>Créée le 18 juin 2026</span><span class="sep">•</span>
        <span>Amsterdam, NL</span><span class="sep">•</span>`,
      group_eyebrow: "SBI 70102 · Activités de holding et de gestion",
      group_h2: "Un bureau, trois mandats.",
      group_copy: "Enregistrée sous le droit néerlandais, l'objet de la société est simple : détenir des parts et fournir des services de gestion aux entreprises qu'elle possède. G Jeff Care se situe au-dessus des entreprises opérationnelles — elle en fixe l'orientation, assume le rôle de gérant lorsque nécessaire, et centralise la structure et la responsabilité du groupe.",
      bento_1: "<b>18 juin 2026</b><span>Date de constitution</span>",
      bento_2: "<b>1 sur 1</b><span>Gérant &amp; actionnaire unique</span>",
      bento_3: "<b>3</b><span>Entreprises opérationnelles détenues</span>",
      bento_4: "<b>Amsterdam</b><span>Siège statutaire &amp; bureau</span>",
      structure_eyebrow: "Structure du groupe",
      structure_h2: "Comment le groupe est organisé.",
      structure_p: "Une société holding au centre, trois entreprises opérationnelles en dessous — chacune conservant son propre nom commercial, ses propres clients et sa propre immatriculation KVK.",
      net_sub1: "Recrutement logistique",
      net_sub2: "Construction &amp; livraison",
      net_sub3: "Web &amp; marketing",
      net_bottom: "Actionnaire &amp; gérant unique des trois : Gordon Jeff Blom",
      companies_eyebrow: "Portefeuille",
      companies_h2: "Les entreprises du groupe.",
      companies_p: "Trois entreprises distinctes, chacune immatriculée séparément au KVK — toutes dirigées depuis G Jeff Care B.V.",
      card1_tag: "Recrutement logistique",
      card1_p: "Placement de personnel d'entrepôt et de logistique pour des opérateurs dans la région d'Amsterdam, fondé sur six années d'expérience de l'équipe fondatrice dans le placement de personnel en Scandinavie.",
      card1_visit: "Visiter jefflogistics.nl",
      card2_tag: "Construction &amp; livraison",
      card2_p: "Équipes de construction et de livraison vérifiées, déployées auprès d'entrepreneurs dans tous les Pays-Bas en 48 heures, G Jeff Care assumant seule la fonction de gérant.",
      card2_meta_k1: "Bureau",
      card2_meta_k2: "Géré par",
      card2_visit: "Visiter blomservice.nl",
      card3_tag: "Web &amp; marketing digital",
      card3_p: "Une agence basée à Amsterdam qui conçoit des sites web, des applications et des campagnes marketing pour des marques néerlandaises et internationales, G Jeff Care agissant comme gérant et autorité unique.",
      card3_visit: "Visiter 205management.nl",
      leadership_eyebrow: "Direction",
      leadership_h2: "La personne derrière le bureau.",
      leader_role: "Algemeen Directeur — Autorité unique",
      leader_bio: "Né à Vallensbæk, au Danemark, Gordon Jeff Blom est le gérant et actionnaire unique de G Jeff Care B.V. et, à travers elle, l'autorité dirigeante derrière Jeff Logistics, Blom Service et 205 Management. Son expérience du placement de personnel dans les entrepôts et ports scandinaves nourrit le volet recrutement du groupe, tandis que le même bureau dirige son agence numérique — un seul point de responsabilité pour chaque entreprise du groupe.",
      registry_eyebrow: "Enregistré",
      registry_h2: "Extrait du registre.",
      registry_p: "Informations essentielles issues du registre du commerce néerlandais (Kamer van Koophandel), présentées ici à titre de référence.",
      reg_k1: "Dénomination statutaire",
      reg_k2: "Numéro KVK",
      reg_k4: "Forme juridique",
      reg_k6: "Adresse enregistrée",
      reg_k8: "Date de constitution",
      reg_v8: "18 juin 2026",
      registry_foot: "Cet aperçu reflète les données publiques du registre du commerce telles que déposées auprès de la Chambre de commerce néerlandaise, fournies à titre d'information uniquement.",
      foot_p: "Bureau de holding &amp; de gestion, Amsterdamseweg 153 C, 1182 GT Amsterdam, Pays-Bas.",
      foot_h4_2: "Le Groupe",
      foot_h4_3: "Renseignements",
      foot_link1: "Recrutement logistique",
      foot_link2: "Construction &amp; livraison",
      foot_link3: "Web &amp; marketing",
      foot_bottom_right: "Amsterdam, Pays-Bas",
      contact_pill: "Nous contacter",
      contact_h1: "Parlez au bureau, ou à l'une des entreprises.",
      contact_lede: "Qu'il s'agisse d'une question pour G Jeff Care B.V. elle-même ou pour l'une des entreprises opérationnelles qu'elle dirige — voici comment joindre les bonnes personnes.",
      contact_general_eyebrow: "Demandes générales",
      contact_general_h2: "G Jeff Care B.V.",
      contact_k_email: "E-mail",
      contact_k_address: "Adresse",
      contact_k_kvk: "KVK",
      contact_general_copy: "Pour toute question concernant la holding elle-même — gouvernance, structure du groupe ou demandes médias — contactez-nous directement à l'adresse ci-dessus. Pour les affaires courantes avec l'une des entreprises opérationnelles, utilisez les coordonnées ci-dessous.",
      contact_companies_eyebrow: "Lignes directes",
      contact_companies_h2: "Contacter les entreprises opérationnelles.",
      contact_form_eyebrow: "Envoyer un message",
      contact_form_h2: "Ou écrivez-nous directement.",
      contact_form_p: "Ceci ouvre un message pré-rempli dans votre propre application de messagerie, adressé à G Jeff Care B.V. — rien n'est envoyé depuis cette page.",
      contact_label_name: "Nom",
      contact_label_email: "Votre e-mail",
      contact_label_subject: "Objet",
      contact_label_message: "Message",
      contact_submit: "Ouvrir l'e-mail à envoyer",
      foot_privacy: "Politique de confidentialité",
      foot_terms: "Conditions d'utilisation",
      privacy_eyebrow: "Mentions légales",
      privacy_h1: "Politique de confidentialité",
      privacy_updated: "Dernière mise à jour : 8 juillet 2026",
      privacy_intro: "Cette politique explique quelles informations G Jeff Care B.V. (« nous ») collecte via ce site, pourquoi, et quels sont vos droits. Nous visons à collecter le moins de données personnelles possible.",
      privacy_who_h: "Qui nous sommes",
      privacy_who_p: "G Jeff Care B.V., immatriculée à la Chambre de commerce néerlandaise (KVK) sous le numéro 42088591, Amsterdamseweg 153 C, 1182 GT Amsterdam, Pays-Bas.",
      privacy_data_h: "Quelles données nous collectons",
      privacy_data_p1: "Ce site ne dispose pas de serveur backend propre. Le formulaire de contact de notre page Contact ne nous transmet aucune donnée directement — il ouvre votre propre application de messagerie avec un message pré-rempli. Tout nom, adresse e-mail ou contenu de message que vous saisissez n'est envoyé que si et lorsque vous choisissez d'envoyer cet e-mail vous-même, via votre propre fournisseur de messagerie.",
      privacy_data_p2: "Si vous nous écrivez directement (par exemple à info@jeffcare.nl), nous traitons les informations que vous nous envoyez — nom, adresse e-mail et message — uniquement pour répondre à votre demande, et nous ne les conservons pas plus longtemps que nécessaire à cette fin.",
      privacy_cookies_h: "Cookies et ressources externes",
      privacy_cookies_p1: "Nous n'utilisons pas de cookies de suivi ou publicitaires. Ce site charge des polices depuis Google Fonts, ce qui peut amener votre navigateur à se connecter aux serveurs de Google et à partager votre adresse IP. Nous ne chargeons ces polices qu'après votre acceptation via la bannière de cookies ; en cas de refus, le site utilise les polices intégrées de votre appareil.",
      privacy_cookies_p2: "Votre choix est enregistré localement dans votre navigateur (et non sur nos serveurs), afin que nous ne vous le demandions pas à nouveau lors de votre prochaine visite, jusqu'à ce que vous effaciez les données de votre navigateur.",
      privacy_rights_h: "Vos droits",
      privacy_rights_p: "En vertu du RGPD, vous avez le droit d'accéder, de corriger ou de demander la suppression de toute donnée personnelle que nous détenons à votre sujet, ainsi que le droit de vous opposer à leur traitement ou d'en demander la limitation. Pour exercer ces droits, contactez-nous à info@jeffcare.nl. Vous avez également le droit de déposer une plainte auprès de l'autorité néerlandaise de protection des données (Autoriteit Persoonsgegevens).",
      privacy_changes_h: "Modifications de cette politique",
      privacy_changes_p: "Nous pouvons mettre à jour cette politique de temps à autre. La date en haut de cette page reflète la révision la plus récente.",
      privacy_contact_h: "Contact",
      privacy_contact_p: 'Les questions concernant cette politique ou vos données peuvent être envoyées à <a href="mailto:info@jeffcare.nl">info@jeffcare.nl</a>.',
      terms_eyebrow: "Mentions légales",
      terms_h1: "Conditions d'utilisation",
      terms_updated: "Dernière mise à jour : 8 juillet 2026",
      terms_intro: "En utilisant ce site, vous acceptez les conditions ci-dessous. Si vous n'êtes pas d'accord, veuillez ne pas utiliser le site.",
      terms_purpose_h: "Objet de ce site",
      terms_purpose_p: "Ce site fournit des informations générales sur G Jeff Care B.V. (KVK 42088591) en tant que bureau de holding et de gestion, ainsi que sur les entreprises opérationnelles qu'elle dirige. Rien sur ce site ne constitue une offre, une sollicitation ou un conseil professionnel de quelque nature que ce soit.",
      terms_accuracy_h: "Exactitude des informations",
      terms_accuracy_p: "Nous nous efforçons de maintenir les informations de ce site exactes et à jour, y compris les données issues du registre du commerce néerlandais. Nous ne garantissons toutefois ni leur exhaustivité ni leur exactitude ; le registre du commerce reste la source faisant autorité pour les données d'immatriculation.",
      terms_links_h: "Liens vers des tiers",
      terms_links_p: "Ce site renvoie vers les sites indépendants de Jeff Logistics B.V., Blom Service B.V. et 205 Management B.V., ainsi que vers des services externes. Nous ne sommes pas responsables du contenu, de la disponibilité ou des politiques des sites tiers auxquels vous accédez via ces liens.",
      terms_ip_h: "Propriété intellectuelle",
      terms_ip_p: "Le design, les textes et les graphismes de ce site appartiennent à G Jeff Care B.V., sauf mention contraire, et ne peuvent être reproduits sans autorisation.",
      terms_liability_h: "Limitation de responsabilité",
      terms_liability_p: "Dans la mesure permise par la loi, G Jeff Care B.V. ne pourra être tenue responsable des dommages résultant de votre utilisation de ce site ou de la confiance accordée aux informations qu'il contient.",
      terms_law_h: "Droit applicable",
      terms_law_p: "Ces conditions sont régies par le droit néerlandais. Tout litige sera soumis au tribunal compétent du district où G Jeff Care B.V. est immatriculée.",
      terms_contact_h: "Contact",
      terms_contact_p: 'Les questions concernant ces conditions peuvent être envoyées à <a href="mailto:info@jeffcare.nl">info@jeffcare.nl</a>.',
      cookie_text: 'Nous utilisons Google Fonts pour afficher les polices de ce site, ce qui peut partager votre adresse IP avec Google. Consultez notre <a href="privacy.html" style="color:var(--accent);">politique de confidentialité</a>.',
      cookie_accept: "Accepter",
      cookie_decline: "Refuser"
    },
    es: {
      nav_group: "Grupo",
      nav_structure: "Estructura",
      nav_companies: "Empresas",
      nav_leadership: "Dirección",
      nav_registry: "Registro",
      nav_contact: "Contacto",
      skip_to_content: "Saltar al contenido",
      hero_pill: "Oficina de holding y gestión · Ámsterdam, NL",
      hero_h1: 'Un solo administrador.<br><span class="gradient-text">Tres empresas.</span>',
      hero_lede: "G Jeff Care B.V. posee las participaciones de tres empresas operativas en los sectores de contratación de personal y servicios digitales, y las dirige — desde una única oficina en Ámsterdam.",
      cta_primary: "Ver el grupo",
      cta_ghost: "Extracto del registro",
      console_label: "ESTADO DEL REGISTRO",
      console_status: "ACTIVA",
      console_k_kvk: "Número KVK",
      console_k_rsin: "RSIN",
      console_k_established: "Constituida",
      console_k_companies: "Empresas participadas",
      console_k_seat: "Domicilio",
      marquee_item: `<b>Jeff Logistics B.V.</b><span class="sep">•</span>
        <b>Blom Service B.V.</b><span class="sep">•</span>
        <b>205 Management B.V.</b><span class="sep">•</span>
        <span>KVK 42088591</span><span class="sep">•</span>
        <span>Constituida el 18 jun 2026</span><span class="sep">•</span>
        <span>Ámsterdam, NL</span><span class="sep">•</span>`,
      group_eyebrow: "SBI 70102 · Actividades de holding y gestión",
      group_h2: "Una oficina, tres mandatos.",
      group_copy: "Constituida conforme al derecho neerlandés, el objeto de la empresa es sencillo: poseer participaciones y prestar servicios de gestión a las empresas de las que es titular. G Jeff Care se sitúa por encima de las empresas operativas — marca la dirección, asume el papel de administrador cuando es necesario y mantiene la estructura y la rendición de cuentas del grupo en un solo lugar.",
      bento_1: "<b>18 jun 2026</b><span>Fecha de constitución</span>",
      bento_2: "<b>1 de 1</b><span>Administrador y accionista único</span>",
      bento_3: "<b>3</b><span>Empresas operativas participadas</span>",
      bento_4: "<b>Ámsterdam</b><span>Domicilio social y oficina</span>",
      structure_eyebrow: "Estructura del grupo",
      structure_h2: "Cómo está conectado el grupo.",
      structure_p: "Una sociedad holding en el centro, tres empresas operativas por debajo — cada una con su propio nombre comercial, sus propios clientes y su propia inscripción en el KVK.",
      net_sub1: "Contratación de personal logístico",
      net_sub2: "Construcción y reparto",
      net_sub3: "Web y marketing",
      net_bottom: "Accionista y administrador único de las tres: Gordon Jeff Blom",
      companies_eyebrow: "Cartera",
      companies_h2: "Las empresas del grupo.",
      companies_p: "Tres empresas independientes, cada una con su propia inscripción en el KVK — todas dirigidas desde G Jeff Care B.V.",
      card1_tag: "Contratación de personal logístico",
      card1_p: "Colocación de personal de almacén y logística para operadores en la región de Ámsterdam, basada en seis años de experiencia del equipo fundador colocando personal en Escandinavia.",
      card1_visit: "Visitar jefflogistics.nl",
      card2_tag: "Construcción y reparto",
      card2_p: "Equipos de construcción y reparto verificados, desplegados ante contratistas en toda Holanda en un plazo de 48 horas, con G Jeff Care como único administrador.",
      card2_meta_k1: "Oficina",
      card2_meta_k2: "Gestionada por",
      card2_visit: "Visitar blomservice.nl",
      card3_tag: "Web y marketing digital",
      card3_p: "Una agencia con sede en Ámsterdam que crea sitios web, aplicaciones y campañas de marketing para marcas neerlandesas e internacionales, con G Jeff Care como administrador y autoridad única.",
      card3_visit: "Visitar 205management.nl",
      leadership_eyebrow: "Dirección",
      leadership_h2: "La persona detrás de la oficina.",
      leader_role: "Algemeen Directeur — Autoridad única",
      leader_bio: "Nacido en Vallensbæk, Dinamarca, Gordon Jeff Blom es el administrador y accionista único de G Jeff Care B.V. y, a través de ella, la autoridad directiva detrás de Jeff Logistics, Blom Service y 205 Management. Su experiencia colocando personal en almacenes y puertos escandinavos alimenta el área de contratación del grupo, mientras que la misma oficina dirige su agencia digital — un único punto de responsabilidad para cada empresa del grupo.",
      registry_eyebrow: "Inscrita",
      registry_h2: "Extracto del registro.",
      registry_p: "Datos esenciales del Registro Mercantil neerlandés (Kamer van Koophandel), mostrados aquí a título de referencia.",
      reg_k1: "Denominación estatutaria",
      reg_k2: "Número KVK",
      reg_k4: "Forma jurídica",
      reg_k6: "Domicilio registrado",
      reg_k8: "Fecha de constitución",
      reg_v8: "18 de junio de 2026",
      registry_foot: "Este resumen refleja los datos públicos del Registro Mercantil tal como constan en la Cámara de Comercio neerlandesa, facilitados únicamente con fines informativos.",
      foot_p: "Oficina de holding y gestión, Amsterdamseweg 153 C, 1182 GT Ámsterdam, Países Bajos.",
      foot_h4_2: "El Grupo",
      foot_h4_3: "Consultas",
      foot_link1: "Contratación de personal logístico",
      foot_link2: "Construcción y reparto",
      foot_link3: "Web y marketing",
      foot_bottom_right: "Ámsterdam, Países Bajos",
      contact_pill: "Contáctanos",
      contact_h1: "Habla con la oficina, o con una de las empresas.",
      contact_lede: "Ya sea una consulta para G Jeff Care B.V. o para una de las empresas operativas que dirige, aquí encontrarás cómo contactar con las personas adecuadas.",
      contact_general_eyebrow: "Consultas generales",
      contact_general_h2: "G Jeff Care B.V.",
      contact_k_email: "Correo electrónico",
      contact_k_address: "Dirección",
      contact_k_kvk: "KVK",
      contact_general_copy: "Para asuntos relativos a la propia sociedad holding — gobernanza, estructura del grupo o consultas de prensa — contáctanos directamente en la dirección indicada arriba. Para asuntos del día a día con una de las empresas operativas, utiliza los contactos que figuran a continuación.",
      contact_companies_eyebrow: "Líneas directas",
      contact_companies_h2: "Contacta con las empresas operativas.",
      contact_form_eyebrow: "Enviar un mensaje",
      contact_form_h2: "O escríbenos directamente.",
      contact_form_p: "Esto abre un mensaje precompletado en tu propia aplicación de correo, dirigido a G Jeff Care B.V. — desde esta página no se envía nada.",
      contact_label_name: "Nombre",
      contact_label_email: "Tu correo electrónico",
      contact_label_subject: "Asunto",
      contact_label_message: "Mensaje",
      contact_submit: "Abrir correo para enviar",
      foot_privacy: "Política de privacidad",
      foot_terms: "Términos de servicio",
      privacy_eyebrow: "Legal",
      privacy_h1: "Política de privacidad",
      privacy_updated: "Última actualización: 8 de julio de 2026",
      privacy_intro: "Esta política explica qué información recopila G Jeff Care B.V. («nosotros») a través de este sitio web, por qué, y qué derechos tienes. Nuestro objetivo es recopilar la menor cantidad posible de datos personales.",
      privacy_who_h: "Quiénes somos",
      privacy_who_p: "G Jeff Care B.V., inscrita en la Cámara de Comercio neerlandesa (KVK) con el número 42088591, Amsterdamseweg 153 C, 1182 GT Ámsterdam, Países Bajos.",
      privacy_data_h: "Qué datos recopilamos",
      privacy_data_p1: "Este sitio no dispone de un backend propio en servidor. El formulario de contacto de nuestra página de Contacto no nos transmite datos directamente — abre tu propia aplicación de correo electrónico con un mensaje precompletado. Cualquier nombre, dirección de correo o contenido del mensaje que introduzcas solo se envía si y cuando decides enviar ese correo tú mismo, a través de tu propio proveedor de correo.",
      privacy_data_p2: "Si nos escribes directamente (por ejemplo, a info@jeffcare.nl), procesamos la información que nos envías — como tu nombre, dirección de correo y mensaje — únicamente para responder a tu consulta, y no la conservamos más tiempo del necesario para ese fin.",
      privacy_cookies_h: "Cookies y recursos externos",
      privacy_cookies_p1: "No utilizamos cookies de seguimiento ni publicitarias. Este sitio carga tipografías de Google Fonts, lo que puede implicar que tu navegador se conecte a los servidores de Google y comparta tu dirección IP. Solo cargamos estas tipografías después de que las aceptes en el banner de cookies; si las rechazas, el sitio utiliza las tipografías integradas de tu dispositivo.",
      privacy_cookies_p2: "Tu elección se guarda localmente en tu navegador (no en nuestros servidores), de modo que no volvamos a preguntarte en tu próxima visita, hasta que borres los datos de tu navegador.",
      privacy_rights_h: "Tus derechos",
      privacy_rights_p: "En virtud del RGPD, tienes derecho a acceder, corregir o solicitar la eliminación de cualquier dato personal que conservemos sobre ti, así como el derecho a oponerte a su tratamiento o a solicitar su limitación. Para ejercer estos derechos, contáctanos en info@jeffcare.nl. También tienes derecho a presentar una reclamación ante la autoridad neerlandesa de protección de datos (Autoriteit Persoonsgegevens).",
      privacy_changes_h: "Cambios en esta política",
      privacy_changes_p: "Podemos actualizar esta política de vez en cuando. La fecha en la parte superior de esta página refleja la revisión más reciente.",
      privacy_contact_h: "Contacto",
      privacy_contact_p: 'Las preguntas sobre esta política o tus datos pueden enviarse a <a href="mailto:info@jeffcare.nl">info@jeffcare.nl</a>.',
      terms_eyebrow: "Legal",
      terms_h1: "Términos de servicio",
      terms_updated: "Última actualización: 8 de julio de 2026",
      terms_intro: "Al utilizar este sitio web, aceptas los términos que se indican a continuación. Si no estás de acuerdo, te rogamos que no utilices el sitio.",
      terms_purpose_h: "Finalidad de este sitio",
      terms_purpose_p: "Este sitio ofrece información general sobre G Jeff Care B.V. (KVK 42088591) como oficina de holding y gestión, y sobre las empresas operativas que dirige. Nada en este sitio constituye una oferta, solicitud o asesoramiento profesional de ningún tipo.",
      terms_accuracy_h: "Exactitud de la información",
      terms_accuracy_p: "Procuramos mantener la información de este sitio precisa y actualizada, incluidos los datos procedentes del Registro Mercantil neerlandés. No obstante, no garantizamos su exhaustividad ni exactitud; el propio Registro Mercantil sigue siendo la fuente autorizada para los datos de inscripción.",
      terms_links_h: "Enlaces a terceros",
      terms_links_p: "Este sitio enlaza con los sitios web independientes de Jeff Logistics B.V., Blom Service B.V. y 205 Management B.V., así como con servicios externos. No somos responsables del contenido, la disponibilidad ni las políticas de los sitios de terceros a los que accedas a través de estos enlaces.",
      terms_ip_h: "Propiedad intelectual",
      terms_ip_p: "El diseño, los textos y los gráficos de este sitio pertenecen a G Jeff Care B.V., salvo que se indique lo contrario, y no pueden reproducirse sin autorización.",
      terms_liability_h: "Limitación de responsabilidad",
      terms_liability_p: "En la medida permitida por la ley, G Jeff Care B.V. no será responsable de los daños derivados del uso de este sitio o de la confianza depositada en la información que contiene.",
      terms_law_h: "Legislación aplicable",
      terms_law_p: "Estos términos se rigen por la legislación de los Países Bajos. Cualquier disputa se someterá al tribunal competente del distrito en el que esté registrada G Jeff Care B.V.",
      terms_contact_h: "Contacto",
      terms_contact_p: 'Las preguntas sobre estos términos pueden enviarse a <a href="mailto:info@jeffcare.nl">info@jeffcare.nl</a>.',
      cookie_text: 'Utilizamos Google Fonts para mostrar las tipografías de este sitio, lo que puede compartir tu dirección IP con Google. Consulta nuestra <a href="privacy.html" style="color:var(--accent);">Política de privacidad</a>.',
      cookie_accept: "Aceptar",
      cookie_decline: "Rechazar"
    },
    it: {
      nav_group: "Gruppo",
      nav_structure: "Struttura",
      nav_companies: "Aziende",
      nav_leadership: "Direzione",
      nav_registry: "Registro",
      nav_contact: "Contatti",
      skip_to_content: "Vai al contenuto",
      hero_pill: "Ufficio di holding e gestione · Amsterdam, NL",
      hero_h1: 'Un solo amministratore.<br><span class="gradient-text">Tre aziende.</span>',
      hero_lede: "G Jeff Care B.V. detiene le quote di tre aziende operative nei settori del lavoro in somministrazione e dei servizi digitali, e le dirige — da un unico ufficio ad Amsterdam.",
      cta_primary: "Scopri il gruppo",
      cta_ghost: "Estratto del registro",
      console_label: "STATO REGISTRO",
      console_status: "ATTIVA",
      console_k_kvk: "Numero KVK",
      console_k_rsin: "RSIN",
      console_k_established: "Costituita",
      console_k_companies: "Aziende detenute",
      console_k_seat: "Sede",
      marquee_item: `<b>Jeff Logistics B.V.</b><span class="sep">•</span>
        <b>Blom Service B.V.</b><span class="sep">•</span>
        <b>205 Management B.V.</b><span class="sep">•</span>
        <span>KVK 42088591</span><span class="sep">•</span>
        <span>Costituita il 18 giu 2026</span><span class="sep">•</span>
        <span>Amsterdam, NL</span><span class="sep">•</span>`,
      group_eyebrow: "SBI 70102 · Attività di holding e gestione",
      group_h2: "Un ufficio, tre mandati.",
      group_copy: "Costituita secondo il diritto olandese, lo scopo della società è semplice: detenere quote e fornire servizi di gestione alle aziende di cui è proprietaria. G Jeff Care si colloca al di sopra delle aziende operative — ne stabilisce l'indirizzo, assume se necessario il ruolo di amministratore e mantiene in un unico luogo la struttura e la responsabilità del gruppo.",
      bento_1: "<b>18 giu 2026</b><span>Data di costituzione</span>",
      bento_2: "<b>1 di 1</b><span>Amministratore e socio unico</span>",
      bento_3: "<b>3</b><span>Aziende operative detenute</span>",
      bento_4: "<b>Amsterdam</b><span>Sede legale e ufficio</span>",
      structure_eyebrow: "Struttura del gruppo",
      structure_h2: "Come è collegato il gruppo.",
      structure_p: "Una holding al centro, tre aziende operative al di sotto — ciascuna con il proprio nome commerciale, i propri clienti e la propria iscrizione al KVK.",
      net_sub1: "Lavoro in somministrazione logistico",
      net_sub2: "Edilizia e consegne",
      net_sub3: "Web e marketing",
      net_bottom: "Socio e amministratore unico di tutte e tre: Gordon Jeff Blom",
      companies_eyebrow: "Portafoglio",
      companies_h2: "Le aziende del gruppo.",
      companies_p: "Tre imprese distinte, ciascuna con la propria iscrizione al KVK — tutte dirette da G Jeff Care B.V.",
      card1_tag: "Lavoro in somministrazione logistico",
      card1_p: "Collocamento di personale di magazzino e logistica per operatori nella regione di Amsterdam, basato su sei anni di esperienza del team fondatore nel collocamento di personale in Scandinavia.",
      card1_visit: "Visita jefflogistics.nl",
      card2_tag: "Edilizia e consegne",
      card2_p: "Squadre di cantiere e di consegna verificate, inviate presso appaltatori in tutti i Paesi Bassi entro 48 ore, con G Jeff Care quale unico amministratore.",
      card2_meta_k1: "Ufficio",
      card2_meta_k2: "Gestita da",
      card2_visit: "Visita blomservice.nl",
      card3_tag: "Web e marketing digitale",
      card3_p: "Un'agenzia con sede ad Amsterdam che realizza siti web, app e campagne di marketing per marchi olandesi e internazionali, con G Jeff Care come amministratore e unica autorità.",
      card3_visit: "Visita 205management.nl",
      leadership_eyebrow: "Direzione",
      leadership_h2: "La persona dietro l'ufficio.",
      leader_role: "Algemeen Directeur — Autorità unica",
      leader_bio: "Nato a Vallensbæk, in Danimarca, Gordon Jeff Blom è amministratore e socio unico di G Jeff Care B.V. e, tramite essa, l'autorità dirigenziale dietro Jeff Logistics, Blom Service e 205 Management. La sua esperienza nel collocamento di personale nei magazzini e nei porti scandinavi orienta l'area risorse umane del gruppo, mentre lo stesso ufficio dirige anche l'agenzia digitale — un unico punto di responsabilità per ogni azienda del gruppo.",
      registry_eyebrow: "Iscritta",
      registry_h2: "Estratto del registro.",
      registry_p: "Dati essenziali del Registro delle Imprese olandese (Kamer van Koophandel), riportati qui a titolo di riferimento.",
      reg_k1: "Denominazione statutaria",
      reg_k2: "Numero KVK",
      reg_k4: "Forma giuridica",
      reg_k6: "Indirizzo registrato",
      reg_k8: "Data di costituzione",
      reg_v8: "18 giugno 2026",
      registry_foot: "Questa panoramica riflette i dati pubblici del Registro delle Imprese depositati presso la Camera di Commercio olandese, forniti a solo scopo informativo.",
      foot_p: "Ufficio di holding e gestione, Amsterdamseweg 153 C, 1182 GT Amsterdam, Paesi Bassi.",
      foot_h4_2: "Il Gruppo",
      foot_h4_3: "Richieste",
      foot_link1: "Lavoro in somministrazione logistico",
      foot_link2: "Edilizia e consegne",
      foot_link3: "Web e marketing",
      foot_bottom_right: "Amsterdam, Paesi Bassi",
      contact_pill: "Contattaci",
      contact_h1: "Parla con l'ufficio, o con una delle aziende.",
      contact_lede: "Che si tratti di una domanda per G Jeff Care B.V. stessa o per una delle aziende operative che dirige, ecco come raggiungere le persone giuste.",
      contact_general_eyebrow: "Richieste generali",
      contact_general_h2: "G Jeff Care B.V.",
      contact_k_email: "E-mail",
      contact_k_address: "Indirizzo",
      contact_k_kvk: "KVK",
      contact_general_copy: "Per questioni relative alla holding stessa — governance, struttura del gruppo o richieste stampa — contattaci direttamente all'indirizzo sopra indicato. Per le attività quotidiane con una delle aziende operative, utilizza i contatti riportati di seguito.",
      contact_companies_eyebrow: "Linee dirette",
      contact_companies_h2: "Contatta le aziende operative.",
      contact_form_eyebrow: "Invia un messaggio",
      contact_form_h2: "Oppure scrivici direttamente.",
      contact_form_p: "Questo apre un messaggio precompilato nella tua applicazione di posta elettronica, indirizzato a G Jeff Care B.V. — da questa pagina non viene inviato nulla.",
      contact_label_name: "Nome",
      contact_label_email: "La tua e-mail",
      contact_label_subject: "Oggetto",
      contact_label_message: "Messaggio",
      contact_submit: "Apri l'e-mail da inviare",
      foot_privacy: "Informativa sulla privacy",
      foot_terms: "Termini di servizio",
      privacy_eyebrow: "Note legali",
      privacy_h1: "Informativa sulla privacy",
      privacy_updated: "Ultimo aggiornamento: 8 luglio 2026",
      privacy_intro: "Questa informativa spiega quali informazioni G Jeff Care B.V. («noi») raccoglie tramite questo sito, perché, e quali diritti hai. Il nostro obiettivo è raccogliere la minor quantità possibile di dati personali.",
      privacy_who_h: "Chi siamo",
      privacy_who_p: "G Jeff Care B.V., iscritta alla Camera di Commercio olandese (KVK) con il numero 42088591, Amsterdamseweg 153 C, 1182 GT Amsterdam, Paesi Bassi.",
      privacy_data_h: "Quali dati raccogliamo",
      privacy_data_p1: "Questo sito non dispone di un proprio backend server. Il modulo di contatto della nostra pagina Contatti non ci trasmette dati direttamente — apre la tua applicazione di posta elettronica con un messaggio precompilato. Il nome, l'indirizzo e-mail o il contenuto del messaggio che inserisci vengono inviati solo se e quando scegli di inviare tu stesso quella e-mail, tramite il tuo provider di posta.",
      privacy_data_p2: "Se ci scrivi direttamente (ad esempio a info@jeffcare.nl), trattiamo le informazioni che ci invii — come nome, indirizzo e-mail e messaggio — esclusivamente per rispondere alla tua richiesta, e non le conserviamo più a lungo di quanto necessario a tale scopo.",
      privacy_cookies_h: "Cookie e risorse esterne",
      privacy_cookies_p1: "Non utilizziamo cookie di tracciamento o pubblicitari. Questo sito carica caratteri tipografici da Google Fonts, il che può comportare che il tuo browser si connetta ai server di Google condividendo il tuo indirizzo IP. Carichiamo questi caratteri solo dopo che li accetti nel banner dei cookie; se rifiuti, il sito utilizza i caratteri integrati del tuo dispositivo.",
      privacy_cookies_p2: "La tua scelta viene salvata localmente nel tuo browser (non sui nostri server), così da non chiedertela di nuovo alla prossima visita, finché non cancelli i dati del browser.",
      privacy_rights_h: "I tuoi diritti",
      privacy_rights_p: "Ai sensi del GDPR, hai il diritto di accedere, correggere o richiedere la cancellazione di qualsiasi dato personale che conserviamo su di te, oltre al diritto di opporti al trattamento o di richiederne la limitazione. Per esercitare questi diritti, contattaci a info@jeffcare.nl. Hai inoltre il diritto di presentare reclamo all'autorità olandese per la protezione dei dati (Autoriteit Persoonsgegevens).",
      privacy_changes_h: "Modifiche a questa informativa",
      privacy_changes_p: "Potremmo aggiornare questa informativa di tanto in tanto. La data in cima a questa pagina riflette la revisione più recente.",
      privacy_contact_h: "Contatti",
      privacy_contact_p: 'Le domande su questa informativa o sui tuoi dati possono essere inviate a <a href="mailto:info@jeffcare.nl">info@jeffcare.nl</a>.',
      terms_eyebrow: "Note legali",
      terms_h1: "Termini di servizio",
      terms_updated: "Ultimo aggiornamento: 8 luglio 2026",
      terms_intro: "Utilizzando questo sito, accetti i termini indicati di seguito. Se non sei d'accordo, ti preghiamo di non utilizzare il sito.",
      terms_purpose_h: "Finalità di questo sito",
      terms_purpose_p: "Questo sito fornisce informazioni generali su G Jeff Care B.V. (KVK 42088591) in qualità di ufficio di holding e gestione, e sulle aziende operative che dirige. Nulla su questo sito costituisce un'offerta, una sollecitazione o una consulenza professionale di alcun tipo.",
      terms_accuracy_h: "Accuratezza delle informazioni",
      terms_accuracy_p: "Ci impegniamo a mantenere le informazioni su questo sito accurate e aggiornate, inclusi i dati tratti dal Registro delle Imprese olandese. Tuttavia non forniamo alcuna garanzia di completezza o accuratezza; il Registro delle Imprese resta la fonte autorevole per i dati di registrazione.",
      terms_links_h: "Link a terze parti",
      terms_links_p: "Questo sito rimanda ai siti web indipendenti di Jeff Logistics B.V., Blom Service B.V. e 205 Management B.V., nonché a servizi esterni. Non siamo responsabili per il contenuto, la disponibilità o le politiche dei siti di terze parti raggiunti tramite questi link.",
      terms_ip_h: "Proprietà intellettuale",
      terms_ip_p: "Il design, i testi e la grafica di questo sito appartengono a G Jeff Care B.V., salvo diversa indicazione, e non possono essere riprodotti senza autorizzazione.",
      terms_liability_h: "Limitazione di responsabilità",
      terms_liability_p: "Nella misura consentita dalla legge, G Jeff Care B.V. non è responsabile per eventuali danni derivanti dall'utilizzo di questo sito o dall'affidamento sulle informazioni in esso contenute.",
      terms_law_h: "Legge applicabile",
      terms_law_p: "Questi termini sono disciplinati dalla legge dei Paesi Bassi. Eventuali controversie saranno sottoposte al tribunale competente del distretto in cui G Jeff Care B.V. è registrata.",
      terms_contact_h: "Contatti",
      terms_contact_p: 'Le domande su questi termini possono essere inviate a <a href="mailto:info@jeffcare.nl">info@jeffcare.nl</a>.',
      cookie_text: 'Utilizziamo Google Fonts per visualizzare i caratteri di questo sito, il che può condividere il tuo indirizzo IP con Google. Consulta la nostra <a href="privacy.html" style="color:var(--accent);">Informativa sulla privacy</a>.',
      cookie_accept: "Accetta",
      cookie_decline: "Rifiuta"
    },
    pl: {
      nav_group: "Grupa",
      nav_structure: "Struktura",
      nav_companies: "Spółki",
      nav_leadership: "Zarząd",
      nav_registry: "Rejestr",
      nav_contact: "Kontakt",
      skip_to_content: "Przejdź do treści",
      hero_pill: "Biuro holdingowo-zarządzające · Amsterdam, NL",
      hero_h1: 'Jeden zarządzający.<br><span class="gradient-text">Trzy spółki.</span>',
      hero_lede: "G Jeff Care B.V. posiada udziały trzech spółek operacyjnych działających w obszarze pośrednictwa pracy i usług cyfrowych oraz nimi zarządza — z jednego biura w Amsterdamie.",
      cta_primary: "Zobacz grupę",
      cta_ghost: "Wyciąg z rejestru",
      console_label: "STATUS REJESTRU",
      console_status: "AKTYWNA",
      console_k_kvk: "Numer KVK",
      console_k_rsin: "RSIN",
      console_k_established: "Założona",
      console_k_companies: "Posiadane spółki",
      console_k_seat: "Siedziba",
      marquee_item: `<b>Jeff Logistics B.V.</b><span class="sep">•</span>
        <b>Blom Service B.V.</b><span class="sep">•</span>
        <b>205 Management B.V.</b><span class="sep">•</span>
        <span>KVK 42088591</span><span class="sep">•</span>
        <span>Zał. 18 cze 2026</span><span class="sep">•</span>
        <span>Amsterdam, NL</span><span class="sep">•</span>`,
      group_eyebrow: "SBI 70102 · Działalność holdingów i zarządzania",
      group_h2: "Jedno biuro, trzy zadania.",
      group_copy: "Zarejestrowana zgodnie z prawem niderlandzkim spółka ma jasny cel: posiadanie udziałów oraz świadczenie usług zarządczych na rzecz spółek, których jest właścicielem. G Jeff Care znajduje się nad spółkami operacyjnymi — wyznacza kierunek, w razie potrzeby przejmuje funkcję dyrektora zarządzającego i utrzymuje strukturę oraz odpowiedzialność grupy w jednym miejscu.",
      bento_1: "<b>18 cze 2026</b><span>Data założenia</span>",
      bento_2: "<b>1 z 1</b><span>Jedyny dyrektor i udziałowiec</span>",
      bento_3: "<b>3</b><span>Posiadane spółki operacyjne</span>",
      bento_4: "<b>Amsterdam</b><span>Siedziba statutowa i biuro</span>",
      structure_eyebrow: "Struktura grupy",
      structure_h2: "Jak połączona jest grupa.",
      structure_p: "Jedna spółka holdingowa w centrum, trzy spółki operacyjne poniżej — każda z własną nazwą handlową, własnymi klientami i własnym wpisem do KVK.",
      net_sub1: "Pośrednictwo pracy w logistyce",
      net_sub2: "Budownictwo i dostawy",
      net_sub3: "Strony internetowe i marketing",
      net_bottom: "Jedyny udziałowiec i dyrektor wszystkich trzech: Gordon Jeff Blom",
      companies_eyebrow: "Portfolio",
      companies_h2: "Spółki w grupie.",
      companies_p: "Trzy odrębne przedsiębiorstwa, każde z własnym wpisem do KVK — wszystkie zarządzane z G Jeff Care B.V.",
      card1_tag: "Pośrednictwo pracy w logistyce",
      card1_p: "Pośrednictwo pracowników magazynowych i logistycznych dla operatorów w regionie Amsterdamu, oparte na sześcioletnim doświadczeniu zespołu założycielskiego w pośrednictwie pracy w Skandynawii.",
      card1_visit: "Odwiedź jefflogistics.nl",
      card2_tag: "Budownictwo i dostawy",
      card2_p: "Zweryfikowane ekipy budowlane i dostawcze, kierowane do wykonawców w całej Holandii w ciągu 48 godzin, przy czym G Jeff Care pełni funkcję jedynego dyrektora zarządzającego.",
      card2_meta_k1: "Biuro",
      card2_meta_k2: "Zarządzana przez",
      card2_visit: "Odwiedź blomservice.nl",
      card3_tag: "Strony internetowe i marketing cyfrowy",
      card3_p: "Agencja z siedzibą w Amsterdamie tworząca strony internetowe, aplikacje i kampanie marketingowe dla niderlandzkich i międzynarodowych marek, w której G Jeff Care pełni funkcję dyrektora zarządzającego i jedynego organu.",
      card3_visit: "Odwiedź 205management.nl",
      leadership_eyebrow: "Zarząd",
      leadership_h2: "Osoba stojąca za biurem.",
      leader_role: "Algemeen Directeur — jedyny organ",
      leader_bio: "Urodzony w Vallensbæk w Danii Gordon Jeff Blom jest jedynym dyrektorem i udziałowcem G Jeff Care B.V., a poprzez nią — organem zarządzającym stojącym za Jeff Logistics, Blom Service i 205 Management. Jego doświadczenie w pośrednictwie pracy w skandynawskich magazynach i portach kształtuje część grupy zajmującą się zatrudnieniem, podczas gdy to samo biuro kieruje również agencją cyfrową — jeden punkt odpowiedzialności dla każdej spółki w grupie.",
      registry_eyebrow: "Zarejestrowana",
      registry_h2: "Wyciąg z rejestru.",
      registry_p: "Podstawowe dane z niderlandzkiego rejestru handlowego (Kamer van Koophandel), przedstawione tutaj wyłącznie w celach referencyjnych.",
      reg_k1: "Nazwa statutowa",
      reg_k2: "Numer KVK",
      reg_k4: "Forma prawna",
      reg_k6: "Zarejestrowany adres",
      reg_k8: "Data założenia",
      reg_v8: "18 czerwca 2026",
      registry_foot: "Niniejsze zestawienie odzwierciedla publiczne dane rejestru handlowego złożone w niderlandzkiej Izbie Handlowej, udostępnione wyłącznie w celach informacyjnych.",
      foot_p: "Biuro holdingowo-zarządzające, Amsterdamseweg 153 C, 1182 GT Amsterdam, Holandia.",
      foot_h4_2: "Grupa",
      foot_h4_3: "Zapytania",
      foot_link1: "Pośrednictwo pracy w logistyce",
      foot_link2: "Budownictwo i dostawy",
      foot_link3: "Strony internetowe i marketing",
      foot_bottom_right: "Amsterdam, Holandia",
      contact_pill: "Skontaktuj się",
      contact_h1: "Porozmawiaj z biurem lub z jedną ze spółek.",
      contact_lede: "Niezależnie od tego, czy pytanie dotyczy samej G Jeff Care B.V., czy jednej ze spółek operacyjnych, którymi zarządza — tutaj znajdziesz właściwe osoby kontaktowe.",
      contact_general_eyebrow: "Zapytania ogólne",
      contact_general_h2: "G Jeff Care B.V.",
      contact_k_email: "E-mail",
      contact_k_address: "Adres",
      contact_k_kvk: "KVK",
      contact_general_copy: "W sprawach dotyczących samej spółki holdingowej — ładu korporacyjnego, struktury grupy lub zapytań medialnych — skontaktuj się z nami bezpośrednio pod adresem podanym powyżej. W sprawach bieżących z jedną ze spółek operacyjnych skorzystaj z danych kontaktowych poniżej.",
      contact_companies_eyebrow: "Bezpośrednie kontakty",
      contact_companies_h2: "Skontaktuj się ze spółkami operacyjnymi.",
      contact_form_eyebrow: "Wyślij wiadomość",
      contact_form_h2: "Albo napisz do nas bezpośrednio.",
      contact_form_p: "To otwiera wstępnie wypełnioną wiadomość w Twojej własnej aplikacji pocztowej, zaadresowaną do G Jeff Care B.V. — z tej strony nic nie jest wysyłane.",
      contact_label_name: "Imię i nazwisko",
      contact_label_email: "Twój e-mail",
      contact_label_subject: "Temat",
      contact_label_message: "Wiadomość",
      contact_submit: "Otwórz e-mail do wysłania",
      foot_privacy: "Polityka prywatności",
      foot_terms: "Warunki korzystania",
      privacy_eyebrow: "Informacje prawne",
      privacy_h1: "Polityka prywatności",
      privacy_updated: "Ostatnia aktualizacja: 8 lipca 2026",
      privacy_intro: "Niniejsza polityka wyjaśnia, jakie informacje G Jeff Care B.V. („my”) zbiera za pośrednictwem tej witryny, dlaczego oraz jakie masz prawa. Naszym celem jest zbieranie jak najmniejszej ilości danych osobowych.",
      privacy_who_h: "Kim jesteśmy",
      privacy_who_p: "G Jeff Care B.V., zarejestrowana w niderlandzkiej Izbie Handlowej (KVK) pod numerem 42088591, Amsterdamseweg 153 C, 1182 GT Amsterdam, Holandia.",
      privacy_data_h: "Jakie dane zbieramy",
      privacy_data_p1: "Ta strona nie posiada własnego zaplecza serwerowego. Formularz kontaktowy na naszej stronie Kontakt nie przesyła nam danych bezpośrednio — otwiera Twoją własną aplikację pocztową z wstępnie wypełnioną wiadomością. Wprowadzone imię, adres e-mail lub treść wiadomości są wysyłane wyłącznie wtedy, gdy sam zdecydujesz się wysłać tę wiadomość za pośrednictwem własnego dostawcy poczty.",
      privacy_data_p2: "Jeśli napiszesz do nas bezpośrednio (na przykład na info@jeffcare.nl), przetwarzamy przesłane przez Ciebie informacje — takie jak imię, adres e-mail i treść wiadomości — wyłącznie w celu odpowiedzi na Twoje zapytanie, i nie przechowujemy ich dłużej, niż jest to konieczne do tego celu.",
      privacy_cookies_h: "Pliki cookie i zasoby zewnętrzne",
      privacy_cookies_p1: "Nie używamy plików cookie służących do śledzenia ani reklamowych. Ta strona ładuje czcionki z Google Fonts, co może wiązać się z połączeniem Twojej przeglądarki z serwerami Google i udostępnieniem Twojego adresu IP. Ładujemy te czcionki dopiero po zaakceptowaniu tego w banerze plików cookie; w przypadku odmowy strona korzysta z wbudowanych czcionek Twojego urządzenia.",
      privacy_cookies_p2: "Twój wybór jest zapisywany lokalnie w Twojej przeglądarce (nie na naszych serwerach), dzięki czemu nie pytamy o niego ponownie przy kolejnej wizycie, dopóki nie wyczyścisz danych przeglądarki.",
      privacy_rights_h: "Twoje prawa",
      privacy_rights_p: "Zgodnie z RODO masz prawo do dostępu, poprawiania lub żądania usunięcia wszelkich danych osobowych, które o Tobie przechowujemy, a także prawo do sprzeciwu wobec ich przetwarzania lub żądania jego ograniczenia. Aby skorzystać z tych praw, skontaktuj się z nami pod adresem info@jeffcare.nl. Masz również prawo złożyć skargę do niderlandzkiego organu ochrony danych (Autoriteit Persoonsgegevens).",
      privacy_changes_h: "Zmiany w niniejszej polityce",
      privacy_changes_p: "Możemy od czasu do czasu aktualizować niniejszą politykę. Data u góry tej strony odzwierciedla najnowszą wersję.",
      privacy_contact_h: "Kontakt",
      privacy_contact_p: 'Pytania dotyczące niniejszej polityki lub Twoich danych można kierować na adres <a href="mailto:info@jeffcare.nl">info@jeffcare.nl</a>.',
      terms_eyebrow: "Informacje prawne",
      terms_h1: "Warunki korzystania",
      terms_updated: "Ostatnia aktualizacja: 8 lipca 2026",
      terms_intro: "Korzystając z tej strony, akceptujesz poniższe warunki. Jeśli się nie zgadzasz, prosimy nie korzystać ze strony.",
      terms_purpose_h: "Cel tej strony",
      terms_purpose_p: "Ta strona zawiera ogólne informacje o G Jeff Care B.V. (KVK 42088591) jako biurze holdingowo-zarządzającym oraz o spółkach operacyjnych, którymi zarządza. Nic na tej stronie nie stanowi oferty, zaproszenia ani porady zawodowej jakiegokolwiek rodzaju.",
      terms_accuracy_h: "Dokładność informacji",
      terms_accuracy_p: "Staramy się, aby informacje na tej stronie były dokładne i aktualne, w tym dane pochodzące z niderlandzkiego rejestru handlowego. Nie udzielamy jednak żadnej gwarancji co do kompletności lub dokładności; sam rejestr handlowy pozostaje wiążącym źródłem danych rejestrowych.",
      terms_links_h: "Linki do stron trzecich",
      terms_links_p: "Ta strona zawiera linki do niezależnych stron internetowych Jeff Logistics B.V., Blom Service B.V. i 205 Management B.V., a także do usług zewnętrznych. Nie ponosimy odpowiedzialności za treść, dostępność ani politykę stron trzecich, do których prowadzą te linki.",
      terms_ip_h: "Własność intelektualna",
      terms_ip_p: "Projekt, teksty i grafiki na tej stronie należą do G Jeff Care B.V., o ile nie zaznaczono inaczej, i nie mogą być powielane bez zgody.",
      terms_liability_h: "Ograniczenie odpowiedzialności",
      terms_liability_p: "W zakresie dozwolonym przez prawo G Jeff Care B.V. nie ponosi odpowiedzialności za jakiekolwiek szkody wynikające z korzystania z tej strony lub polegania na zawartych w niej informacjach.",
      terms_law_h: "Prawo właściwe",
      terms_law_p: "Niniejsze warunki podlegają prawu niderlandzkiemu. Wszelkie spory będą rozstrzygane przez właściwy sąd okręgu, w którym zarejestrowana jest G Jeff Care B.V.",
      terms_contact_h: "Kontakt",
      terms_contact_p: 'Pytania dotyczące niniejszych warunków można kierować na adres <a href="mailto:info@jeffcare.nl">info@jeffcare.nl</a>.',
      cookie_text: 'Używamy Google Fonts do wyświetlania czcionek tej strony, co może wiązać się z udostępnieniem Twojego adresu IP firmie Google. Zobacz naszą <a href="privacy.html" style="color:var(--accent);">Politykę prywatności</a>.',
      cookie_accept: "Akceptuj",
      cookie_decline: "Odrzuć"
    }
  };

  const LANG_CODES = ['en', 'nl', 'de', 'fr', 'es', 'it', 'pl'];
  const langSelect = document.getElementById('langSelect');
  const i18nEls = document.querySelectorAll('[data-i18n]');

  function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;
    i18nEls.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.documentElement.lang = lang;
    if (langSelect) langSelect.value = lang;
    try { localStorage.setItem('gjc-lang', lang); } catch (e) {}
  }

  let currentLang = 'en';
  try {
    const saved = localStorage.getItem('gjc-lang');
    if (saved && LANG_CODES.includes(saved)) {
      currentLang = saved;
    } else {
      const browserLang = (navigator.language || 'en').slice(0, 2).toLowerCase();
      if (LANG_CODES.includes(browserLang)) currentLang = browserLang;
    }
  } catch (e) {}
  applyLanguage(currentLang);

  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener('change', () => {
      currentLang = langSelect.value;
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
    link.href = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap';
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
    cookieBanner.style.cssText = 'position:fixed; left:16px; right:16px; bottom:16px; z-index:200; max-width:640px; margin:0 auto; background:var(--surface); border:1px solid var(--border); border-radius:4px; padding:18px 20px; box-shadow:0 16px 40px rgba(0,0,0,0.18); display:flex; flex-wrap:wrap; align-items:center; gap:14px; font-family:var(--body);';
    cookieBanner.innerHTML = `
      <p class="gjc-cookie-text" style="flex:1 1 260px; margin:0; font-size:0.86rem; color:var(--text-soft); line-height:1.5;">${dict.cookie_text}</p>
      <div style="display:flex; gap:10px; flex-shrink:0;">
        <button class="gjc-cookie-decline" type="button" style="font-size:0.84rem; font-weight:600; padding:9px 16px; border-radius:4px; border:1px solid var(--border); background:none; color:var(--text); cursor:pointer;">${dict.cookie_decline}</button>
        <button class="gjc-cookie-accept" type="button" style="font-size:0.84rem; font-weight:600; padding:9px 16px; border-radius:4px; border:none; background:var(--accent); color:var(--accent-ink); cursor:pointer;">${dict.cookie_accept}</button>
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


