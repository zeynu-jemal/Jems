/* ==================================
      Nur AI - script.js
   Interactive Website Functions
================================== */

// Comprehensive Multi-Dua Dataset
const categoriesData = {
  morning: [
    {
      arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ",
      transliteration: "Asbahna wa-asbahal-mulku lillah, walhamdu lillah",
      translation: "We have entered the morning and the kingdom belong to Allah, all praise is due to Allah.",
      recommendation: "Recite 1 time in the morning",
      target: 1,
      count: 0
    },
    {
      arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
      transliteration: "Subhanallahi wa bihamdihi",
      translation: "Glory be to Allah and His is the praise.",
      recommendation: "Recite 100 times",
      target: 100,
      count: 0
    },
    {
      arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
      transliteration: "Allahumma bika asbahna, wa bika amsayna, wa bika nahya...",
      translation: "O Allah, by You we enter the morning and by You we enter the evening...",
      recommendation: "Recite 1 time",
      target: 1,
      count: 0
    }
  ],
  evening: [
    {
      arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ",
      transliteration: "Amsayna wa-amsal-mulku lillah, walhamdu lillah",
      translation: "We have reached the evening and the kingdom belongs to Allah...",
      recommendation: "Recite 1 time in the evening",
      target: 1,
      count: 0
    },
    {
      arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
      transliteration: "A'udhu bikalimatillahi-ttammati min sharri ma khalaq",
      translation: "I seek refuge in the perfect words of Allah from the evil of what He created.",
      recommendation: "Recite 3 times",
      target: 3,
      count: 0
    }
  ],
  sleep: [
    {
      arabic: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي وَبِكَ أَرْفَعُهُ",
      transliteration: "Bismika Rabbi wada'tu janbi wa bika arfa'uh",
      translation: "In Your name my Lord, I lie down and in Your name I rise.",
      recommendation: "Recite 1 time before sleeping",
      target: 1,
      count: 0
    },
    {
      arabic: "سُبْحَانَ اللَّهِ",
      transliteration: "SubhanAllah",
      translation: "Glory be to Allah",
      recommendation: "Recite 33 times before sleep",
      target: 33,
      count: 0
    },
    {
      arabic: "الْحَمْدُ لِلَّهِ",
      transliteration: "Alhamdulillah",
      translation: "Praise be to Allah",
      recommendation: "Recite 33 times before sleep",
      target: 33,
      count: 0
    },
    {
      arabic: "اللَّهُ أَكْبَرُ",
      transliteration: "Allahu Akbar",
      translation: "Allah is the Greatest",
      recommendation: "Recite 34 times before sleep",
      target: 34,
      count: 0
    }
  ],
  postPrayer: [
    {
      arabic: "أَسْتَغْفِرُ اللَّهَ (٣×)",
      transliteration: "Astaghfirullah (3x)",
      translation: "I seek forgiveness from Allah.",
      recommendation: "Recite 3 times after prayer",
      target: 3,
      count: 0
    },
    {
      arabic: "اللَّهُمَّ أَنْتَ السَّلاَمُ وَمِنْكَ السَّلاَمُ، تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالإِكْرَامِ",
      transliteration: "Allahumma antas-salamu wa minkas-salam...",
      translation: "O Allah, You are Peace and from You comes peace...",
      recommendation: "Recite 1 time after prayer",
      target: 1,
      count: 0
    }
  ]
};

let currentCategory = 'morning';
let currentDuaIndex = 0;

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
  renderDua();
});

function switchCategory(category) {
  currentCategory = category;
  currentDuaIndex = 0;
  
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  renderDua();
}

function renderDua() {
  const duaList = categoriesData[currentCategory];
  const dua = duaList[currentDuaIndex];

  document.getElementById('arabicText').innerText = dua.arabic;
  document.getElementById('transliteration').innerText = dua.transliteration;
  document.getElementById('translation').innerText = dua.translation;
  document.getElementById('recommendation').innerText = dua.recommendation;
  document.getElementById('targetCount').innerText = dua.target;
  document.getElementById('currentCount').innerText = dua.count;

  document.getElementById('duaTracker').innerText = `Dua ${currentDuaIndex + 1} of ${duaList.length}`;
}

function nextDua() {
  const total = categoriesData[currentCategory].length;
  currentDuaIndex = (currentDuaIndex + 1) % total;
  renderDua();
}

function prevDua() {
  const total = categoriesData[currentCategory].length;
  currentDuaIndex = (currentDuaIndex - 1 + total) % total;
  renderDua();
}

function incrementCount() {
  const dua = categoriesData[currentCategory][currentDuaIndex];
  if (dua.count < dua.target) {
    dua.count++;
    document.getElementById('currentCount').innerText = dua.count;
    
    // Mobile haptic feedback (optional)
    if (navigator.vibrate) navigator.vibrate(30);
  }
}

function resetCount() {
  categoriesData[currentCategory][currentDuaIndex].count = 0;
  document.getElementById('currentCount').innerText = 0;
}



document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('globalSearchInput');
    const resultsOverlay = document.getElementById('searchResultsOverlay');
    const resultsList = document.getElementById('searchResultsList');
    const clearBtn = document.getElementById('clearSearchBtn');

    let debounceTimer;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();

        if (query.length > 0) {
            clearBtn.style.display = 'block';
        } else {
            clearBtn.style.display = 'none';
            resultsOverlay.style.display = 'none';
            return;
        }

        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            if (query.length >= 2) {
                performGlobalSearch(query);
            }
        }, 350);
    });

    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.style.display = 'none';
        resultsOverlay.style.display = 'none';
    });

    // Close dropdown on click outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.global-search-container')) {
            resultsOverlay.style.display = 'none';
        }
    });

    async function performGlobalSearch(query) {
        resultsOverlay.style.display = 'block';
        resultsList.innerHTML = '<div class="no-results"><i class="fas fa-spinner fa-spin"></i> Searching across datasets...</div>';

        try {
            // Concurrent API requests to Quran, Bukhari, Muslim, and Tafsir
            const [quranRes, bukhariRes, muslimRes] = await Promise.all([
                fetch(`https://api.alquran.cloud/v1/search/${encodeURIComponent(query)}/all/en.sahih`).then(r => r.json()).catch(() => null),
                fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-bukhari.min.json`).then(r => r.json()).catch(() => null),
                fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-muslim.min.json`).then(r => r.json()).catch(() => null)
            ]);

            let combinedResults = [];

            // 1. Process Quran Search Matches
            if (quranRes && quranRes.data && quranRes.data.matches) {
                const qMatches = quranRes.data.matches.slice(0, 3).map(m => ({
                    category: 'Qur\'an',
                    badgeClass: 'badge-quran',
                    title: `Surah ${m.surah.englishName} (${m.surah.number}:${m.numberInSurah})`,
                    text: m.text,
                    link: `qur'an.html?surah=${m.surah.number}&ayah=${m.numberInSurah}`
                }));
                combinedResults.push(...qMatches);
            }

            // 2. Process Sahih Bukhari Matches
            if (bukhariRes && bukhariRes.hadiths) {
                const qLower = query.toLowerCase();
                const bMatches = bukhariRes.hadiths
                    .filter(h => String(h.hadithnumber) === query || (h.text && h.text.toLowerCase().includes(qLower)))
                    .slice(0, 3)
                    .map(h => ({
                        category: 'Bukhari',
                        badgeClass: 'badge-bukhari',
                        title: `Sahih Bukhari #${h.hadithnumber}`,
                        text: h.text,
                        link: `buhari.html?hadith=${h.hadithnumber}`
                    }));
                combinedResults.push(...bMatches);
            }

            // 3. Process Sahih Muslim Matches
            if (muslimRes && muslimRes.hadiths) {
                const qLower = query.toLowerCase();
                const mMatches = muslimRes.hadiths
                    .filter(h => String(h.hadithnumber) === query || (h.text && h.text.toLowerCase().includes(qLower)))
                    .slice(0, 3)
                    .map(h => ({
                        category: 'Muslim',
                        badgeClass: 'badge-muslim',
                        title: `Sahih Muslim #${h.hadithnumber}`,
                        text: h.text,
                        link: `muslim.html?hadith=${h.hadithnumber}`
                    }));
                combinedResults.push(...mMatches);
            }

            // 4. Add Tafsir Search Direct Link Option
            combinedResults.push({
                category: 'Tafsir',
                badgeClass: 'badge-tafsir',
                title: `Explore Tafsir for "${query}"`,
                text: `Click to view commentary & exegesis related to this keyword on the Tafsir Explorer.`,
                link: `tafsir.html`
            });

            renderSearchResults(combinedResults);

        } catch (err) {
            console.error('Search error:', err);
            resultsList.innerHTML = '<div class="no-results">Error performing search. Please try again.</div>';
        }
    }

    function renderSearchResults(results) {
        if (results.length === 0) {
            resultsList.innerHTML = '<div class="no-results">No matches found across Quran or Hadith collections.</div>';
            return;
        }

        resultsList.innerHTML = results.map(res => `
            <a href="${res.link}" class="search-item">
                <div class="search-item-header">
                    <span class="search-badge ${res.badgeClass}">${res.category}</span>
                    <span class="search-item-title">${res.title}</span>
                </div>
                <div class="search-item-text">${res.text}</div>
            </a>
        `).join('');
    }
});


// ================================
// Back To Top Button
// ================================


const topButton =
document.createElement("button");


topButton.innerHTML="⬆️";

topButton.className="top-button";


document.body.appendChild(topButton);



window.addEventListener("scroll",()=>{


if(window.scrollY > 500){

topButton.style.display="block";

}

else{

topButton.style.display="bright";

}


});


topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};





// ================================
// Dark Mode
// ================================

const darkButton = document.createElement("button");

darkButton.innerHTML = "🌙";
darkButton.className = "dark-toggle";

document.body.appendChild(darkButton);


darkButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        darkButton.innerHTML = "☀️";
        localStorage.setItem("theme","dark");
    }
    else{
        darkButton.innerHTML = "🌙";
        localStorage.setItem("theme","light");
    }

});


// Remember theme

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    darkButton.innerHTML="☀️";
}



// ================================
// Smooth Scroll
// ================================

document.querySelectorAll("a").forEach(link=>{

    link.addEventListener("click",function(e){

        const target=this.getAttribute("href");

        if(target.startsWith("#")){

            e.preventDefault();

            document.querySelector(target)
            .scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});



// ================================
// Live Search
// ================================


const searchInput =
document.querySelector(".search-section input");


const cards =
document.querySelectorAll(".card");


if(searchInput){

searchInput.addEventListener("keyup",()=>{

let value =
searchInput.value.toLowerCase();


cards.forEach(card=>{

let text =
card.innerText.toLowerCase();


if(text.includes(value)){

card.style.display="block";

}

else{

card.style.display="none";

}

});


});

}




// ================================
// Card Animation
// ================================


const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});


document.querySelectorAll(".card")
.forEach(card=>{

observer.observe(card);

});




// ================================
// Button Effects
// ================================


document.querySelectorAll(".btn")
.forEach(button=>{


button.addEventListener("click",()=>{


button.style.transform="scale(.95)";


setTimeout(()=>{

button.style.transform="scale(1)";

},150);


});


});




// ================================
// Mobile Navigation
// ================================


const menu =
document.querySelector(".mobile-menu");

menu.onclick=()=>{

document
.querySelector(".nav-links")
.classList.toggle("active");

};



menu.addEventListener("click",()=>{


document
.querySelector(".nav-links")
.classList.toggle("active");


});




// ================================
// Welcome Message
// ================================


window.onload=()=>{


setTimeout(()=>{


console.log(
"🌙 Welcome to Nur AI - Knowledge • Wisdom • Guidance"
);


},1000);


};

// ================================
// Dynamic Footer Year
// ================================


const year =
document.querySelector("footer");


if(year){

year.innerHTML +=
`<p>Built with ❤️ ${new Date().getFullYear()}</p>`;

}
