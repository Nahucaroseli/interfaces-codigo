document.addEventListener("DOMContentLoaded", () => {

    loader();

    function loader() {
        setTimeout(function () {
            document.getElementById('spinner').style.visibility = "hidden";
            document.getElementById('content').style.visibility = "visible";
        }, 5000);
    }


    const menu = document.querySelector(".toggle-menu");
    const nav = document.querySelector(".mobile-nav");

    menu.addEventListener("click", function(){
        nav.classList.toggle("mobile-nav-active");
    })

})

