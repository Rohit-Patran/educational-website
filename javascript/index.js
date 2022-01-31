
let navbar = document.querySelector('.navbar');
let nav_link = document.querySelectorAll('.nav-link');
let nav_links = document.querySelector('.nav-links');
let nav_burger_icon = document.querySelectorAll('.bar');
let hamburger_icon = document.querySelector('.nav-burger-icon')

nav_burger_icon.forEach(icon => {
    icon.addEventListener('click',()=>{
        nav_links.classList.toggle('active');
        if(document.body.scrollTop <= navbar.offsetHeight)
        {
            navbar.classList.remove('scroll');
            nav_burger_icon.forEach(bar=>{
                bar.classList.remove('nav-scroll');
            });
        }
        else
        {
            navbar.classList.add('scroll');
            nav_burger_icon.forEach(bar=>{
                bar.classList.add('nav-scroll');
            });
        }
    });
})
window.onscroll = ()=>{
    if(document.body.scrollTop >= navbar.offsetHeight)
    {
        navbar.classList.add('scroll');
        nav_burger_icon.forEach(bar =>{
            bar.classList.add('nav-scroll');
        });
        nav_link.forEach(nav_item=>{
            nav_item.classList.add('scroll');
        });
    }
    else
    {
        navbar.classList.remove('scroll');
        nav_burger_icon.forEach(bar=>{
            bar.classList.remove('nav-scroll');
        });
        nav_link.forEach(nav_item=>{
            nav_item.classList.remove('scroll');
        })
    }
}
