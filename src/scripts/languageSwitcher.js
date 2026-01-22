// Language switcher functionality
console.log('languageSwitcher.js loaded - not a module');
class LanguageSwitcher {
  constructor() {
    console.log('LanguageSwitcher initialized');
    this.currentLang = localStorage.getItem('alfabotanica-lang') || 'es';
    console.log('Current language:', this.currentLang);
    this.init();
  }

  init() {
    // Set initial language
    this.setLanguage(this.currentLang);

    // Add event listeners to language buttons
    document.querySelectorAll('.language-btn').forEach(btn => {
      console.log('Found language button:', btn.dataset.lang);
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = e.target.dataset.lang;
        console.log('Language button clicked:', lang);
        this.setLanguage(lang);
      });
    });
  }

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('alfabotanica-lang', lang);

    // Update active button
    document.querySelectorAll('.language-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all text elements with data attributes
    this.updateTexts();
  }

  updateTexts() {
    console.log('updateTexts called for language:', this.currentLang);
    console.log('window.translations available:', !!window.translations);

    if (!window.translations) {
      console.error('Translations not available on window object');
      return;
    }

    const langData = window.translations[this.currentLang];
    console.log('Language data:', langData);

    // Test with just one element first
    const testElement = document.querySelector('[data-lang-target="shop"]');
    if (testElement) {
      console.log('Found shop element, current text:', testElement.textContent);
      testElement.textContent = langData.shop || 'No translation';
      console.log('Updated shop element to:', testElement.textContent);
    } else {
      console.log('Shop element not found');
    }

      // Update navigation
      const shopLink = document.querySelector('[data-lang-target="shop"]');
      if (shopLink) shopLink.textContent = langData.shop;

      const rootsLink = document.querySelector('[data-lang-target="roots"]');
      if (rootsLink) rootsLink.textContent = langData.roots;

      const contactLink = document.querySelector('[data-lang-target="contact"]');
      if (contactLink) contactLink.textContent = langData.contact;

      // Update hero section
      const heroSubtitle = document.querySelector('[data-lang-target="heroSubtitle"]');
      if (heroSubtitle) heroSubtitle.innerHTML = langData.heroSubtitle;

      const heroTitle = document.querySelector('[data-lang-target="heroTitle"]');
      if (heroTitle) heroTitle.innerHTML = langData.heroTitle;

      const heroDesc = document.querySelector('[data-lang-target="heroDescription"]');
      if (heroDesc) heroDesc.textContent = langData.heroDescription;

      const exploreBtn = document.querySelector('[data-lang-target="exploreCollection"]');
      if (exploreBtn) exploreBtn.textContent = langData.exploreCollection;

      // Update shop section
      const openingCollection = document.querySelector('[data-lang-target="openingCollection"]');
      if (openingCollection) openingCollection.textContent = langData.openingCollection;

      const collectionSubtitle = document.querySelector('[data-lang-target="collectionSubtitle"]');
      if (collectionSubtitle) collectionSubtitle.textContent = langData.collectionSubtitle;

      const productsAvailable = document.querySelector('[data-lang-target="productsAvailable"]');
      if (productsAvailable) productsAvailable.textContent = langData.productsAvailable;

      // Update product titles and descriptions
      const rosemaryTitle = document.querySelector('[data-lang-target="rosemaryTitle"]');
      if (rosemaryTitle) rosemaryTitle.textContent = langData.rosemaryTitle;

      const rosemaryDesc = document.querySelector('[data-lang-target="rosemaryDesc"]');
      if (rosemaryDesc) rosemaryDesc.textContent = langData.rosemaryDesc;

      const chamomileTitle = document.querySelector('[data-lang-target="chamomileTitle"]');
      if (chamomileTitle) chamomileTitle.textContent = langData.chamomileTitle;

      const chamomileDesc = document.querySelector('[data-lang-target="chamomileDesc"]');
      if (chamomileDesc) chamomileDesc.textContent = langData.chamomileDesc;

      const balmTitle = document.querySelector('[data-lang-target="balmTitle"]');
      if (balmTitle) balmTitle.textContent = langData.balmTitle;

      const balmDesc = document.querySelector('[data-lang-target="balmDesc"]');
      if (balmDesc) balmDesc.textContent = langData.balmDesc;

      // Update philosophy section
      const philosophyTitle = document.querySelector('[data-lang-target="philosophyTitle"]');
      if (philosophyTitle) philosophyTitle.textContent = langData.philosophyTitle;

      const philosophyText = document.querySelector('[data-lang-target="philosophyText"]');
      if (philosophyText) philosophyText.textContent = langData.philosophyText;

      // Update philosophy list items


      const plasticFree = document.querySelector('[data-lang-target="plasticFree"]');
      if (plasticFree) plasticFree.textContent = langData.plasticFree;

      const veganCruelty = document.querySelector('[data-lang-target="veganCrueltyFree"]');
      if (veganCruelty) veganCruelty.textContent = langData.veganCrueltyFree;

      // Update footer
      const gardenClub = document.querySelector('[data-lang-target="gardenClub"]');
      if (gardenClub) gardenClub.textContent = langData.gardenClub;

      const gardenClubText = document.querySelector('[data-lang-target="gardenClubText"]');
      if (gardenClubText) gardenClubText.textContent = langData.gardenClubText;

      const emailInput = document.querySelector('[data-lang-target="emailPlaceholder"]');
      if (emailInput) emailInput.placeholder = langData.emailPlaceholder;

      const subscribeBtn = document.querySelector('[data-lang-target="subscribe"]');
      if (subscribeBtn) subscribeBtn.textContent = langData.subscribe;

      // Update footer links
      const bestSellers = document.querySelector('[data-lang-target="bestSellers"]');
      if (bestSellers) bestSellers.textContent = langData.bestSellers;

      const subscription = document.querySelector('[data-lang-target="subscription"]');
      if (subscription) subscription.textContent = langData.subscription;

      const gifting = document.querySelector('[data-lang-target="gifting"]');
      if (gifting) gifting.textContent = langData.gifting;

      const shippingPolicy = document.querySelector('[data-lang-target="shippingPolicy"]');
      if (shippingPolicy) shippingPolicy.textContent = langData.shippingPolicy;

      const contactUs = document.querySelector('[data-lang-target="contactUs"]');
      if (contactUs) contactUs.textContent = langData.contactUs;

      const stockists = document.querySelector('[data-lang-target="stockists"]');
      if (stockists) stockists.textContent = langData.stockists;

      const copyright = document.querySelector('[data-lang-target="copyright"]');
      if (copyright) copyright.textContent = langData.copyright;

      const instagram = document.querySelector('[data-lang-target="instagram"]');
      if (instagram) instagram.textContent = langData.instagram;

      const pinterest = document.querySelector('[data-lang-target="pinterest"]');
      if (pinterest) pinterest.textContent = langData.pinterest;
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new LanguageSwitcher();
});