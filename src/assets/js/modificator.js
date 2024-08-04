import ActiveInit from "./active.js"

const Modificator = (function(){
    const MenuOpen = () => {
        const ContainerActive = document.querySelector('[data-model-menu-header]')

        const initOpenMenu = (event) => {
            event.preventDefault()
            ActiveInit.Aconsole.add_active(ContainerActive, 'toggle', 'active')
        }

        ContainerActive.addEventListener('click', initOpenMenu)
    }

    const parallax = () => {
        return
        const menu = document.querySelector('.dota-menu');
        if(!menu) return;

        const video = document.querySelector('.video-section .video .video-block');

        const forVideo = 40;

        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        const setMouseParallaxStyle = () => {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed)
            positionY = positionY + (distY * speed)

            video.style.cssText = `transform: translate(${positionX / forVideo}%, ${positionY / forVideo}%);`

            requestAnimationFrame(setMouseParallaxStyle)
        }

        setMouseParallaxStyle()

        const MoveCalculate = (event) => {
            const parallaxWidth = menu.offsetWidth
            const parallaxHeight = menu.offsetHeight
            
            const coordX = event.pageX - parallaxWidth / 2;
            const coordY = event.pageY - parallaxHeight / 2;
            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        }

        menu.addEventListener('mousemove', MoveCalculate)
        
    }

    return {
        MenuOpen,
        parallax
    }
}())


export default Modificator;