const menSwiper = new Swiper('#menSwiper', {
  loop: false,
  navigation: {
    nextEl: '#menSwiper .swiper-button-next',
    prevEl: '#menSwiper .swiper-button-prev',
  },
  pagination: {
    el: '.men-pagination',
    clickable: true,
  },
});

const womenSwiper = new Swiper('#womenSwiper', {
  loop: false,
  navigation: {
    nextEl: '#womenSwiper .swiper-button-next',
    prevEl: '#womenSwiper .swiper-button-prev',
  },
  pagination: {
    el: '.women-pagination',
    clickable: true,
  },
});

const menTabBtn = document.getElementById('menTab');
const womenTabBtn = document.getElementById('womenTab');
const menSwiperEl = document.getElementById('menSwiper');
const womenSwiperEl = document.getElementById('womenSwiper');
const menPagination = document.querySelector('.men-pagination');
const womenPagination = document.querySelector('.women-pagination');

menTabBtn.addEventListener('click', () => {
  menSwiperEl.style.display = 'block';
  menPagination.style.display = 'block';

  womenSwiperEl.style.display = 'none';
  womenPagination.style.display = 'none';

  menTabBtn.classList.add('bg-custom-green');
  menTabBtn.classList.remove('bg-divider');
  womenTabBtn.classList.remove('bg-custom-green');
  womenTabBtn.classList.add('bg-divider');

  menSwiper.update();
});

womenTabBtn.addEventListener('click', () => {
  womenSwiperEl.style.display = 'block';
  womenPagination.style.display = 'block';

  menSwiperEl.style.display = 'none';
  menPagination.style.display = 'none';

  womenTabBtn.classList.add('bg-custom-green');
  womenTabBtn.classList.remove('bg-divider');
  menTabBtn.classList.remove('bg-custom-green');
  menTabBtn.classList.add('bg-divider');

  womenSwiper.update();
});

const words = ["TEAM.", "LIMITS.", "PAIN.", "DOUBT."];
const teamEl = document.getElementById("team");
let index = 0;

function slideWords() {
  teamEl.classList.add("slide-out-down");

  setTimeout(() => {
    teamEl.textContent = words[index];
    index = (index + 1) % words.length;

    teamEl.classList.remove("slide-out-down", "slide-in-active", "slide-in-down");

    teamEl.style.transform = "translateY(-100%)";
    teamEl.style.opacity = 0;

    void teamEl.offsetWidth;

    teamEl.classList.add("slide-in-active");

    setTimeout(() => {
      teamEl.style.transform = "";
      teamEl.style.opacity = "";
      teamEl.classList.remove("slide-in-active");
    }, 500);
  }, 500);
}

teamEl.textContent = words[0];
index = 1;

setInterval(slideWords, 4000);


const videoSwiper = new Swiper('#videoSwiper', {
  loop: false,
  navigation: {
    nextEl: '#videoSwiper .swiper-button-next',
    prevEl: '#videoSwiper .swiper-button-prev',
  },
  pagination: {
    el: '#videoSwiper .swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,
});


  videoSwiper.on('slideChange', () => {
    const iframes = document.querySelectorAll('#videoSwiper iframe');
    iframes.forEach(iframe => {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "stopVideo", args: [] }),
        "*"
      );
    });
  });




document.querySelectorAll('button[id^="faq"]').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    const content = document.getElementById(btn.getAttribute('aria-controls'));
    const icon = btn.querySelector('svg');

    if (expanded) {
      btn.setAttribute('aria-expanded', 'false');
      content.classList.remove('active');
      icon.classList.remove('rotate-180');
    } else {
      document.querySelectorAll('button[id^="faq"]').forEach(otherBtn => {
        otherBtn.setAttribute('aria-expanded', 'false');
        const otherContent = document.getElementById(otherBtn.getAttribute('aria-controls'));
        otherContent.classList.remove('active');
        otherBtn.querySelector('svg').classList.remove('rotate-180');
      });
      btn.setAttribute('aria-expanded', 'true');
      content.classList.add('active');
      icon.classList.add('rotate-180');
    }
  });
});


document.addEventListener("scroll", () => {
  const arrow = document.getElementById("arrow");
  const scrollY = window.scrollY; 
  const fadeStart = 0;    
  const fadeUntil = 500;  

  let opacity = 1;

  if (scrollY <= fadeStart) {
    opacity = 1;
  } else if (scrollY >= fadeUntil) {
    opacity = 0;
  } else {

    opacity = 1 - (scrollY - fadeStart) / (fadeUntil - fadeStart);
  }

  arrow.style.opacity = opacity;
});


const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImage = lightboxOverlay.querySelector('img');
const lightboxClose = document.getElementById('lightbox-close');

const galleryImages = document.querySelectorAll('.container img');

galleryImages.forEach(img => {
  if (!img.classList.contains('no-lightbox')) {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      lightboxImage.src = img.src;
      lightboxOverlay.style.display = 'flex';
    });
  } else {
    img.style.cursor = 'default';
  }
});

lightboxClose.addEventListener('click', () => {
  lightboxOverlay.style.display = 'none';
  lightboxImage.src = '';
});

lightboxOverlay.addEventListener('click', e => {
  if(e.target === lightboxOverlay) {
    lightboxOverlay.style.display = 'none';
    lightboxImage.src = '';
  }
});

document.addEventListener('keydown', e => {
  if(e.key === 'Escape' && lightboxOverlay.style.display === 'flex') {
    lightboxOverlay.style.display = 'none';
    lightboxImage.src = '';
  }
});


const img = document.getElementById('photo');
const images = ['src/img/spolecnefotky/1.jpg', 'src/img/spolecnefotky/2.jpg', 'src/img/spolecnefotky/3.jpg', 'src/img/spolecnefotky/4.jpg', 'src/img/spolecnefotky/5.jpg', 'src/img/spolecnefotky/6.jpg', 'src/img/spolecnefotky/7.jpg', 'src/img/spolecnefotky/8.jpg'];
let currentIndex = 0;

function changeImage() {
  img.style.opacity = 0;

  img.addEventListener('transitionend', function handler() {
    currentIndex = (currentIndex + 1) % images.length;
    img.src = images[currentIndex];

    img.style.opacity = 1;

    img.removeEventListener('transitionend', handler);
  });
}

setInterval(changeImage, 4500);




function sendform() {
  const phoneNumber = '776468014';
  const activeForm = document.querySelector('.tab-content:not(.hidden)');
  if (!activeForm) {
    alert('Formulář nebyl nalezen.');
    return false;
  }

  const labelsByForm = {
    coaching: {
      'jmeno': 'Jméno a příjmení',
      'your-email': 'E-mail',
      'vek': 'Věk',
      'vaha': 'Váha',
      'vyska': 'Výška',
      'pas': 'Obvod pasu (v cm)',
      'delkacviceni': 'Jak dlouho pravidelně cvičíš?',
      'cil': 'Jaký je tvůj hlavní cíl?',
      'jidlo': 'Jaké potraviny aktuálně nejčastěji volíš?',
      'kalorie': 'Kolik kalorií zhruba denně přijmeš?',
      'stravovaci_navyky': 'Jak bys zhodnotil(a) své stravovací návyky?',
      'jedlik': 'Jsi spíš jedlík nebo ti stačí málo?',
      'pocet_jidel': 'Kolikrát denně ti vyhovuje jíst?',
      'preference_jidla': 'Preferuješ spíše kombinaci více potravin, nebo jednoduchost?',
      'intolerance': 'Intolerance nebo alergie (pokud máš)',
      'suplementy': 'Jaké suplementy aktuálně používáš?',
      'leky': 'Bereš nějaké léky? Pokud ano, uveď jaké.',
      'treninky_tydne': 'Kolikrát týdně chceš cvičit?',
      'stres': 'Na škále 1–10: Jak moc jsi denně ve stresu?',
      'aktivita': 'Jak moc jsi aktivní během dne? (počet kroků, kardio apod.)',
      'zraneni': 'Máš nějaká zranění nebo fyzická omezení?',
      'disciplina': 'Jak bys ohodnotil(a) svou disciplínu od 1 do 10?',
      'prace': 'Jaké máš zaměstnání?',
      'navyky[]': 'Kouříš? Piješ alkohol?',
      'menstruace': '(Pro ženy) Máš problémy s menstruačním cyklem?',
      'spani': 'Kolik hodin denně průměrně spíš?',
      'info_navic': 'Chceš sdílet nějaké další informace, které by mohly být důležité?',
      'pozadavek': 'Máš nějaký speciální požadavek? (jídlo, trénink, časové možnosti...?)',
      'skupina': 'Chceš být přidán(a) do společné WhatsApp skupiny?'
    },
    consult: {
      'jmeno': 'Jméno a příjmení',
      'your-email': 'E-mail',
      'vek': 'Věk',
      'duvod': 'Jaký je tvůj hlavní důvod pro konzultaci?',
      'cil': 'Jaké výsledky bys chtěl/a díky konzultaci získat?',
      'cviceni': 'Cvičíš momentálně? Jak často a jak dlouho?',
      'vyziva': 'Máš zkušenosti s výživou?',
      'cas': 'Kolik času máš aktuálně týdně na trénink / péči o sebe?',
      'motivace': 'Jak bys popsal/a svou aktuální motivaci?',
      'termin': 'Kdy ti většinou nejlépe vyhovuje konzultace?',
      'info': 'Je něco, co bych měl vědět, abych ti mohl co nejlépe pomoct?'
    },
    acne: {
      'your-name': 'Jméno a příjmení',
      'your-email': 'E-mail',
      'delka': 'Jak dlouho se potýkáte s akné?',
      'vyskyt': 'Kde se akné nejčastěji vyskytuje?',
      'sklony[]': 'Máte sklony k:',
      'zarudnuti': 'Dochází k zarudnění, svědění nebo bolestivým ložiskům?',
      'procedury': 'Jaké produkty nebo procedury jste doposud zkoušeli?',
      'lecba': 'Užíváte nyní nějaké léčivé přípravky na pleť?',
      'doplnky': 'Užíváte nyní nějaké doplňky stravy? Pokud ano, jaké?',
      'zkušenosti': 'Máte zkušenosti s odborníkem na výživu nebo dermatologem?',
      'makroziviny': 'Znáte své makroživiny (bílkoviny, tuky a sacharidy za den)?',
      'strava': 'Jaká je vaše strava?',
      'konzument[]': 'Konzumujete pravidelně:',
      'voda': 'Kolik vody denně přibližně vypijete?',
      'pohyb': 'Máte zařazené pravidelné pohybové aktivity? Jaké?',
      'spanek': 'Jaký je váš spánkový režim? (čas usínání, délka spánku, časté buzení)',
      'stres': 'Pociťujete dlouhodobě stres? Jaký způsob relaxace využíváte?',
      'menstruace': 'Máte pravidelný menstruační cyklus (pro ženy)?',
      'antikoncepce': 'Užíváte antikoncepci? Pokud ano, jakou a jak dlouho?',
      'zazivani': 'Máte zažívací potíže (nadýmání, nepravidelná stolice, reflux apod.)?',
      'diagnozy[]': 'Byla vám někdy diagnostikována:',
      'cile': 'Jaké jsou vaše hlavní cíle v péči o pleť?',
      'motivace': 'Co vás motivuje ke změně?',
      'otevrenost': 'Jste otevřeni změnám ve stravě a doplňcích?',
      'preference': 'Preferujete:',
      'alergie': 'Máte nějaké alergie nebo intolerance?',
      'dalsi_info': 'Jakékoliv další informace, které bych měl vědět:'
    }
  };

  const formId = activeForm.id;
  const labels = labelsByForm[formId] || {};

  const formData = new FormData(activeForm);
  let groupedData = {};

  for (const [key, value] of formData.entries()) {
    if (groupedData[key]) {
      groupedData[key] += ', ' + value;
    } else {
      groupedData[key] = value;
    }
  }

  let messageLines = [];
  for (const key in groupedData) {
    const label = labels[key] || key;
    messageLines.push(`${label}: ${groupedData[key]}`);
  }

  const message = encodeURIComponent(messageLines.join('\n'));
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappURL, '_blank');

  return false;
}

