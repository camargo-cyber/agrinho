/* ===================================
   MENU RESPONSIVO
=================================== */

const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

/* ===================================
   CONTADORES ANIMADOS
=================================== */

const counters = document.querySelectorAll(".contador");

const iniciarContadores = () => {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);
        let current = 0;

        const updateCounter = () => {

            const increment = target / 80;

            if(current < target){
                current += increment;
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            }else{
                counter.textContent = target + "%";
            }
        };

        updateCounter();
    });
};

/* ===================================
   ATIVAR CONTADORES AO APARECER
=================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            iniciarContadores();

            observer.disconnect();
        }
    });

});

observer.observe(document.querySelector("#impactos"));