const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



// populate nav links
const nav = document.querySelectorAll('nav a');

for (let i = 0; i < nav.length; i++) {
  nav[i].textContent = siteContent["nav"][`nav-item-${i+1}`];
};

// populate cta content
const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = "DOM IS AWESOME";

const ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = "Get Started";

document.getElementById('cta-img').setAttribute('src','img/header-img.png');

// populate top-content
const topCont = document.querySelectorAll('.top-content .text-content');

topCont[0].children[0].textContent = 'FEATURES';
topCont[0].children[1].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

topCont[1].children[0].textContent = 'ABOUT';
topCont[1].children[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

document.getElementById('middle-img').src ='img/mid-page-accent.jpg';

// populate bottom-content
const bottomCont = document.querySelectorAll('.bottom-content .text-content');

const bottomContObj = {
  0: {
    heading: 'SERVICES',
    p: 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  1: {
    heading: 'PRODUCT',
    p: 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  2: {
    heading: 'VISION',
    p: 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  }
};

for (let i = 0; i < bottomCont.length; i++) {
  bottomCont[i].children[0].textContent = bottomContObj[i].heading

  bottomCont[i].children[1].textContent = bottomContObj[i].p
}

// populate contact information
document.querySelector('.contact h4').textContent = 'CONTACT';

const contactPTag = document.querySelectorAll('.contact p');

const contactInfo = ['123 Way 456 Street<br>Somewhere, USA', '1 (888) 888-8888','sales@greatidea.io'];

console.log(contactPTag);

for (let i = 0; i < contactPTag.length; i++) {
  contactPTag[i].innerHTML = contactInfo[i];
}

// populate copyright tag
const footer = document.getElementsByTagName('footer');
footer[0].textContent = "Copyright Great Idea! 2018";
