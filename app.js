// ===== Shopify Config =====
const SHOPIFY = {
  domain: 'turquoiseprincess.myshopify.com',
  token:  'a4e0d97236af97c0a90452fedf019079',
  api:    '2024-10',
};
const SHOPIFY_URL = `https://${SHOPIFY.domain}/api/${SHOPIFY.api}/graphql.json`;

async function shopifyFetch(query, variables = {}) {
  const res = await fetch(SHOPIFY_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY.token,
    },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors) console.error('Shopify API error:', json.errors);
  return json.data;
}

// ===== i18n =====
const i18n = {
  en: {
    brand: 'Turquoise Princess',
    nav_home: 'Home', nav_collections: 'Collections', nav_about: 'About', nav_contact: 'Contact',
    cart_title: 'Shopping Cart', cart_empty: 'Your cart is empty',
    cart_total: 'Total:', cart_checkout: 'Proceed to Checkout',
    hero_tag: 'Authentic Native American Style',
    hero_title: 'Where Earth Meets<br>Elegance',
    hero_sub: 'Handcrafted turquoise jewelry that tells the story of the American Southwest. Each piece is a unique work of art.',
    hero_cta: 'Shop Collection', hero_cta2: 'Our Story',
    hero_badge: 'Free Shipping<br>Over $99',
    stat1: 'Unique Pieces', stat2: 'Happy Customers', stat3: 'Authentic Stone',
    feat1_title: 'Free US Shipping', feat1_desc: 'On orders over $99',
    feat2_title: 'Secure Payment', feat2_desc: '256-bit SSL encrypted',
    feat3_title: '30-Day Returns', feat3_desc: 'Hassle-free returns',
    feat4_title: 'Certified Authentic', feat4_desc: 'Genuine turquoise stones',
    col_tag: 'Handcrafted with Love', col_title: 'Our Collections',
    col_desc: 'Each piece is lovingly crafted by skilled artisans using genuine turquoise stones sourced from the American Southwest.',
    tab_all: 'All', tab_necklace: 'Necklaces', tab_ring: 'Rings', tab_bracelet: 'Bracelets', tab_earring: 'Earrings',
    about_tag: 'Our Story', about_title: 'Born from the Heart of the Southwest',
    about_p1: 'Founded in Santa Fe, New Mexico, Turquoise Princess was born from a deep love for the ancient art of turquoise jewelry making. For over 15 years, we have been connecting people with the beauty and healing energy of genuine turquoise.',
    about_p2: 'Every piece in our collection is handcrafted by skilled artisans using traditional techniques passed down through generations. We work directly with mines to ensure each stone is 100% genuine and ethically sourced.',
    about_badge: 'Years of Craftsmanship', about_cta: 'Explore Our Jewelry',
    val1: '100% Genuine Turquoise', val2: 'Ethically Sourced', val3: 'Handcrafted by Artisans', val4: 'Certificate of Authenticity',
    testi_tag: 'Customer Love', testi_title: 'What Our Customers Say',
    testi1: '"The necklace I bought is absolutely stunning. The turquoise color is so vibrant and the silver work is incredibly detailed. I get compliments every time I wear it!"',
    testi2: '"I\'ve ordered three pieces now and each one is perfect. The quality is outstanding and shipping was fast. This is my go-to place for gifts and treats for myself!"',
    testi3: '"Beautiful craftsmanship! The bracelet came with a certificate of authenticity which really gave me confidence in the purchase. Will definitely shop here again."',
    news_title: 'Join Our Tribe', news_desc: 'Subscribe for exclusive offers, new arrivals, and the story behind each piece.',
    news_placeholder: 'Enter your email address', news_btn: 'Subscribe',
    contact_tag: 'Get in Touch', contact_title: "We'd Love to Hear From You",
    contact_addr_label: 'Address', contact_email_label: 'Email', contact_phone_label: 'Phone',
    contact_hours_label: 'Hours', contact_hours: 'Mon–Fri: 9am–6pm PST',
    form_name: 'Your Name', form_email: 'Your Email', form_subject: 'Subject', form_message: 'Your Message', form_send: 'Send Message',
    footer_desc: 'Bringing the beauty of authentic turquoise jewelry to your doorstep, one handcrafted piece at a time.',
    footer_shop: 'Shop', footer_help: 'Help', footer_company: 'Company',
    footer_faq: 'FAQ', footer_shipping: 'Shipping Policy', footer_returns: 'Returns', footer_size: 'Size Guide',
    footer_privacy: 'Privacy Policy', footer_terms: 'Terms of Service',
    footer_copy: '© 2026 Turquoise Princess. All rights reserved.',
    add_to_cart: 'Add to Cart', loading: 'Loading...',
    toast_added: 'Added to cart!',
    toast_subscribe: 'Thank you for subscribing!',
    toast_message: 'Message sent! We\'ll get back to you soon.',
    no_products: 'No products found. Add products in your Shopify admin.',
  },
  zh: {
    brand: '绿松石公主',
    nav_home: '首页', nav_collections: '商品系列', nav_about: '关于我们', nav_contact: '联系我们',
    cart_title: '购物车', cart_empty: '您的购物车是空的',
    cart_total: '合计：', cart_checkout: '前往结账',
    hero_tag: '正宗美洲印第安风格',
    hero_title: '大地之美<br>匠心之作',
    hero_sub: '每一件绿松石首饰都诉说着美国西南部的故事。纯手工打造，独一无二的艺术珍品。',
    hero_cta: '浏览系列', hero_cta2: '我们的故事',
    hero_badge: '满$99<br>免费配送',
    stat1: '独家珍品', stat2: '满意客户', stat3: '正品宝石',
    feat1_title: '美国境内免费配送', feat1_desc: '订单满$99即可享受',
    feat2_title: '安全支付', feat2_desc: '256位SSL加密保护',
    feat3_title: '30天退换货', feat3_desc: '无忧退换，轻松购物',
    feat4_title: '正品认证', feat4_desc: '天然绿松石保证',
    col_tag: '用心打造每一件', col_title: '我们的系列',
    col_desc: '每一件作品均由技艺精湛的工匠使用来自美国西南部的天然绿松石精心制作而成。',
    tab_all: '全部', tab_necklace: '项链', tab_ring: '戒指', tab_bracelet: '手链', tab_earring: '耳环',
    about_tag: '我们的故事', about_title: '源自西南部的心之所向',
    about_p1: '绿松石公主创立于新墨西哥州圣达菲，诞生于对古老绿松石首饰工艺的深厚热爱。15年来，我们不断将绿松石的美丽与疗愈能量带给每一位爱好者。',
    about_p2: '我们系列中的每一件作品，都由工匠采用代代相传的传统工艺手工制作。我们直接与矿山合作，确保每块宝石100%天然且以道德方式采购。',
    about_badge: '年匠心传承', about_cta: '探索我们的首饰',
    val1: '100%天然绿松石', val2: '道德采购', val3: '工匠手工制作', val4: '附真品证书',
    testi_tag: '客户好评', testi_title: '听听顾客怎么说',
    testi1: '"我买的项链美得令人窒息！绿松石的颜色如此鲜艳，银制工艺精美绝伦。每次佩戴都会收到赞美！"',
    testi2: '"我已经购买了三件，每一件都完美无缺。品质卓越，发货快速。这里是我买礼物和犒赏自己的首选！"',
    testi3: '"工艺精美绝伦！手链附有真品证书，让我对这次购买充满信心。一定还会再次光顾！"',
    news_title: '加入我们的部落', news_desc: '订阅获取专属优惠、新品资讯及每件作品背后的故事。',
    news_placeholder: '请输入您的电子邮箱', news_btn: '立即订阅',
    contact_tag: '联系我们', contact_title: '期待与您交流',
    contact_addr_label: '地址', contact_email_label: '邮箱', contact_phone_label: '电话',
    contact_hours_label: '营业时间', contact_hours: '周一至周五：上午9点–下午6点（太平洋时间）',
    form_name: '您的姓名', form_email: '您的邮箱', form_subject: '主题', form_message: '您的留言', form_send: '发送消息',
    footer_desc: '将正宗绿松石首饰的美丽送到您的门口，每一件都是独特的手工艺品。',
    footer_shop: '购物', footer_help: '帮助', footer_company: '公司',
    footer_faq: '常见问题', footer_shipping: '配送政策', footer_returns: '退换货', footer_size: '尺寸指南',
    footer_privacy: '隐私政策', footer_terms: '服务条款',
    footer_copy: '© 2026 绿松石公主 版权所有',
    add_to_cart: '加入购物车', loading: '加载中...',
    toast_added: '已加入购物车！',
    toast_subscribe: '感谢您的订阅！',
    toast_message: '消息已发送！我们将尽快回复您。',
    no_products: '暂无商品。请在 Shopify 后台添加商品。',
  }
};

// ===== State =====
let currentLang = 'en';
let activeFilter = 'all';
let shopifyProducts = [];   // fetched from Shopify
let shopifyCart = null;     // Shopify cart object { id, checkoutUrl, lines }

// ===== Category Map =====
// Shopify productType → internal filter key
const CATEGORY_MAP = {
  'necklace': 'necklace', 'necklaces': 'necklace',
  'ring': 'ring', 'rings': 'ring',
  'bracelet': 'bracelet', 'bracelets': 'bracelet',
  'earring': 'earring', 'earrings': 'earring',
};

// ===== Init =====
document.addEventListener('DOMContentLoaded', async () => {
  setupCartBtn();
  setupScroll();
  renderProductsLoading();
  await fetchProducts();
  renderProducts('all');
});

function setupCartBtn() {
  document.getElementById('cartBtn').addEventListener('click', openCart);
}

function setupScroll() {
  window.addEventListener('scroll', () => {
    const h = document.getElementById('header');
    h.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ===== Fetch Products from Shopify =====
async function fetchProducts() {
  const query = `
    query {
      products(first: 50) {
        edges {
          node {
            id
            title
            productType
            tags
            priceRange {
              minVariantPrice { amount currencyCode }
            }
            compareAtPriceRange {
              minVariantPrice { amount }
            }
            images(first: 1) {
              edges { node { url altText } }
            }
            variants(first: 1) {
              edges {
                node {
                  id
                  price { amount }
                  compareAtPrice { amount }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const data = await shopifyFetch(query);
    if (!data || !data.products) return;

    shopifyProducts = data.products.edges.map(({ node }) => {
      const variant    = node.variants.edges[0]?.node;
      const image      = node.images.edges[0]?.node;
      const price      = parseFloat(variant?.price?.amount || 0);
      const compareAt  = parseFloat(variant?.compareAtPrice?.amount || 0);
      const tags       = node.tags.map(t => t.toLowerCase());
      const typeKey    = CATEGORY_MAP[node.productType?.toLowerCase()] || 'necklace';

      let badge = null;
      if (tags.includes('sale'))    badge = 'Sale';
      else if (tags.includes('new')) badge = 'New';

      return {
        id:        node.id,
        variantId: variant?.id,
        name_en:   node.title,
        name_zh:   node.title,       // fallback: same title (can be localised via metafields)
        price,
        original:  compareAt > price ? compareAt : null,
        badge,
        badge_zh:  badge === 'Sale' ? '特惠' : badge === 'New' ? '新品' : null,
        category:  typeKey,
        img:       image?.url || 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
        rating:    4.8,
        reviews:   Math.floor(Math.random() * 150 + 30),
      };
    });
  } catch (err) {
    console.error('Failed to fetch Shopify products:', err);
  }
}

// ===== Language =====
function toggleLang() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  document.getElementById('langToggle').textContent = currentLang === 'en' ? '中文' : 'English';
  document.documentElement.lang = currentLang;
  applyTranslations();
  renderProducts(activeFilter);
  renderCartItems();
}

function applyTranslations() {
  const t = i18n[currentLang];
  const htmlKeys = ['hero_title', 'hero_badge'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      htmlKeys.includes(key) ? (el.innerHTML = t[key]) : (el.textContent = t[key]);
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
}

// ===== Products =====
function renderProductsLoading() {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = Array(4).fill(`
    <div class="product-card" style="opacity:0.5;pointer-events:none">
      <div class="product-img" style="background:#f0f0f0;aspect-ratio:1"></div>
      <div class="product-info">
        <div style="height:12px;background:#eee;border-radius:4px;margin-bottom:8px"></div>
        <div style="height:18px;background:#eee;border-radius:4px;margin-bottom:12px;width:70%"></div>
        <div style="height:14px;background:#eee;border-radius:4px;width:50%"></div>
      </div>
    </div>`).join('');
}

function filterProducts(category) {
  activeFilter = category;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  event.currentTarget.classList.add('active');
  renderProducts(category);
}

function goToCategory(category) {
  activeFilter = category;
  document.querySelectorAll('.tab').forEach(t => {
    t.classList.toggle('active', t.dataset.filter === category);
  });
  renderProducts(category);
  setTimeout(() => {
    document.getElementById('collections').scrollIntoView({ behavior: 'smooth' });
  }, 50);
}

function renderProducts(filter) {
  const grid = document.getElementById('productsGrid');
  const t    = i18n[currentLang];
  const list = filter === 'all'
    ? shopifyProducts
    : shopifyProducts.filter(p => p.category === filter);

  if (list.length === 0) {
    grid.innerHTML = `<p style="color:var(--gray);text-align:center;grid-column:1/-1;padding:40px 0">${t.no_products}</p>`;
    return;
  }

  grid.innerHTML = list.map(p => {
    const name     = currentLang === 'en' ? p.name_en : p.name_zh;
    const badge    = currentLang === 'en' ? p.badge : p.badge_zh;
    const catLabel = { necklace: t.tab_necklace, ring: t.tab_ring, bracelet: t.tab_bracelet, earring: t.tab_earring };
    const badgeClass = p.badge === 'Sale' ? 'sale' : p.badge === 'New' ? 'new' : '';
    const stars    = '★'.repeat(Math.floor(p.rating));
    const encodedId = encodeURIComponent(p.id);

    return `
    <div class="product-card" data-id="${encodedId}">
      <div class="product-img">
        <img src="${p.img}" alt="${name}" loading="lazy" />
        ${badge ? `<span class="product-badge ${badgeClass}">${badge}</span>` : ''}
        <button class="product-wishlist" onclick="toggleWishlist(this)" title="Wishlist">🤍</button>
      </div>
      <div class="product-info">
        <p class="product-cat">${catLabel[p.category] || p.category}</p>
        <h3 class="product-name">${name}</h3>
        <div class="product-rating">
          <span class="stars-small">${stars}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-footer">
          <div class="product-price">
            <span class="price-current">$${p.price.toFixed(2)}</span>
            ${p.original ? `<span class="price-original">$${p.original.toFixed(2)}</span>` : ''}
          </div>
          <button class="add-cart-btn" onclick="addToCart('${encodedId}')">${t.add_to_cart}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function toggleWishlist(btn) {
  btn.textContent = btn.textContent === '🤍' ? '❤️' : '🤍';
}

// ===== Shopify Cart API =====
const CART_FRAGMENT = `
  id
  checkoutUrl
  totalQuantity
  cost { totalAmount { amount currencyCode } }
  lines(first: 50) {
    edges {
      node {
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id
            price { amount }
            product { title images(first:1) { edges { node { url } } } }
          }
        }
      }
    }
  }
`;

async function cartCreate(variantId) {
  const data = await shopifyFetch(`
    mutation cartCreate($lines: [CartLineInput!]) {
      cartCreate(input: { lines: $lines }) {
        cart { ${CART_FRAGMENT} }
        userErrors { field message }
      }
    }
  `, { lines: [{ merchandiseId: variantId, quantity: 1 }] });
  return data?.cartCreate?.cart;
}

async function cartLinesAdd(cartId, variantId) {
  const data = await shopifyFetch(`
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart { ${CART_FRAGMENT} }
        userErrors { field message }
      }
    }
  `, { cartId, lines: [{ merchandiseId: variantId, quantity: 1 }] });
  return data?.cartLinesAdd?.cart;
}

async function cartLinesUpdate(cartId, lineId, quantity) {
  const data = await shopifyFetch(`
    mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart { ${CART_FRAGMENT} }
        userErrors { field message }
      }
    }
  `, { cartId, lines: [{ id: lineId, quantity }] });
  return data?.cartLinesUpdate?.cart;
}

async function cartLinesRemove(cartId, lineId) {
  const data = await shopifyFetch(`
    mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart { ${CART_FRAGMENT} }
        userErrors { field message }
      }
    }
  `, { cartId, lineIds: [lineId] });
  return data?.cartLinesRemove?.cart;
}

// ===== Cart Actions =====
async function addToCart(encodedId) {
  const productId = decodeURIComponent(encodedId);
  const product   = shopifyProducts.find(p => p.id === productId);
  if (!product || !product.variantId) return;

  const btn = document.querySelector(`[data-id="${encodedId}"] .add-cart-btn`);
  if (btn) { btn.disabled = true; btn.textContent = '...'; }

  try {
    if (!shopifyCart) {
      shopifyCart = await cartCreate(product.variantId);
    } else {
      // Check if variant already in cart
      const existingLine = shopifyCart.lines.edges.find(
        e => e.node.merchandise.id === product.variantId
      );
      if (existingLine) {
        shopifyCart = await cartLinesUpdate(shopifyCart.id, existingLine.node.id, existingLine.node.quantity + 1);
      } else {
        shopifyCart = await cartLinesAdd(shopifyCart.id, product.variantId);
      }
    }
    updateCartCount();
    renderCartItems();
    showToast(i18n[currentLang].toast_added);
    openCart();
  } catch (err) {
    console.error('Add to cart error:', err);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = i18n[currentLang].add_to_cart;
    }
  }
}

async function removeFromCart(lineId) {
  if (!shopifyCart) return;
  shopifyCart = await cartLinesRemove(shopifyCart.id, lineId);
  updateCartCount();
  renderCartItems();
}

async function changeQty(lineId, quantity) {
  if (!shopifyCart) return;
  if (quantity <= 0) {
    await removeFromCart(lineId);
    return;
  }
  shopifyCart = await cartLinesUpdate(shopifyCart.id, lineId, quantity);
  updateCartCount();
  renderCartItems();
}

function updateCartCount() {
  const count = shopifyCart?.totalQuantity || 0;
  document.getElementById('cartCount').textContent = count;
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const footer    = document.getElementById('cartFooter');
  const t         = i18n[currentLang];
  const lines     = shopifyCart?.lines?.edges || [];

  if (lines.length === 0) {
    container.innerHTML = `<p class="cart-empty">${t.cart_empty}</p>`;
    footer.style.display = 'none';
    return;
  }

  container.innerHTML = lines.map(({ node }) => {
    const { id, quantity, merchandise } = node;
    const title  = merchandise.product.title;
    const price  = parseFloat(merchandise.price.amount);
    const imgUrl = merchandise.product.images.edges[0]?.node.url || '';
    return `
    <div class="cart-item">
      <img src="${imgUrl}" alt="${title}" />
      <div class="cart-item-info">
        <p class="cart-item-name">${title}</p>
        <p class="cart-item-price">$${(price * quantity).toFixed(2)}</p>
        <div class="cart-item-qty">
          <button onclick="changeQty('${id}', ${quantity - 1})">−</button>
          <span>${quantity}</span>
          <button onclick="changeQty('${id}', ${quantity + 1})">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${id}')">🗑</button>
    </div>`;
  }).join('');

  const total = parseFloat(shopifyCart?.cost?.totalAmount?.amount || 0);
  document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
  footer.style.display = 'block';
  document.querySelector('.cart-checkout').textContent = t.cart_checkout;
  document.querySelector('.cart-total span:first-child').textContent = t.cart_total;
}

// ===== Shopify Checkout =====
function proceedToCheckout() {
  if (shopifyCart?.checkoutUrl) {
    window.location.href = shopifyCart.checkoutUrl;
  }
}

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== Mobile Menu =====
function toggleMenu() {
  document.getElementById('nav').classList.toggle('open');
}
document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('nav').classList.remove('open'));
});

// ===== Forms =====
function subscribeNewsletter(e) {
  e.preventDefault();
  const email = document.getElementById('emailInput').value.trim();
  if (!email) return;

  fetch('https://a.klaviyo.com/client/subscriptions/?company_id=WGrd9q', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'revision': '2023-12-15'
    },
    body: JSON.stringify({
      data: {
        type: 'subscription',
        attributes: {
          profile: {
            data: {
              type: 'profile',
              attributes: { email: email }
            }
          }
        },
        relationships: {
          list: {
            data: { type: 'list', id: 'TZ5vPB' }
          }
        }
      }
    })
  })
  .then(res => {
    if (res.ok || res.status === 202) {
      showToast(i18n[currentLang].toast_subscribe);
      document.getElementById('emailInput').value = '';
    } else {
      showToast(currentLang === 'zh' ? '订阅失败，请稍后再试' : 'Subscription failed. Please try again.');
    }
  })
  .catch(() => {
    showToast(currentLang === 'zh' ? '网络错误，请稍后再试' : 'Network error. Please try again.');
  });
}

function handleContactForm(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  fetch('https://formspree.io/f/xwvwnyvj', {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  })
  .then(res => {
    if (res.ok) {
      showToast(i18n[currentLang].toast_message);
      form.reset();
    } else {
      showToast(currentLang === 'zh' ? '发送失败，请稍后再试' : 'Failed to send. Please try again.');
    }
  })
  .catch(() => {
    showToast(currentLang === 'zh' ? '网络错误，请稍后再试' : 'Network error. Please try again.');
  });
}

// ===== Toast =====
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}
