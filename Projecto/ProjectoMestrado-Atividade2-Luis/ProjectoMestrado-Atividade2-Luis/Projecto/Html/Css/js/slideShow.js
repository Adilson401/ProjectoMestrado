/* Presentation automatic slide show now  */
  
    document.addEventListener("DOMContentLoaded", function(){
        const images = [
            "../imagens/banner_iphone.png",
            "../imagens/banner_ipad.png",
            "../imagens/banner_Mac.png"
        ];
        const titles = [
            "iPhone",
            "iPad",
            "Mac"
        ];
        const subtitles = [
            "Dês as boas-vindas à mais recente geração do iPhone.",
            "Agora turbinando pelo chip M3.",
            "Potencialmente pelo M5."
        ];
        let current = 0;
        const heroImg = document.getElementById("heroImage");
        const dots = document.querySelectorAll(".hero-dot");
        const heroTitle = document.querySelector(".hero-title");
        const heroSubtitle = document.querySelector(".hero-subtitle");


        function showSlide(index){
            current = index;
            heroImg.src = images[current];
            if(heroTitle) heroTitle.textContent = titles[current] || "";
            if(heroSubtitle) heroSubtitle.textContent = subtitles[current] || "";
            dots.forEach((d,i)=>{
                if(i === current){
                    d.classList.remove('bg-secondary');
                    d.classList.add('bg-dark');
                    d.style.opacity = '1';
                } else {
                    d.classList.remove('bg-dark');
                    d.classList.add('bg-secondary');
                    d.style.opacity = '0.3';
                }
            });
        }

        function nextSlide(){
            current = (current + 1) % images.length;
            showSlide(current);
        }

        dots.forEach((dot,i)=>{
            dot.addEventListener('click', ()=> showSlide(i));
        });

        setInterval(nextSlide, 3000);
    });
  
