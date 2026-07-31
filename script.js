/* ==================================
      Nur AI - script.js
   Interactive Website Functions
================================== */


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