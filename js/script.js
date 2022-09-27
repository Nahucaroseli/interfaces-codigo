document.addEventListener("DOMContentLoaded", () => {

    loader();

    function loader() {
        setTimeout(function () {
            document.getElementById('spinner').style.visibility = "hidden";
            document.getElementById('content').style.visibility = "visible";
        }, 5000);
    }


    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav-list");

    menu.addEventListener("click", function(){
        nav.classList.toggle('nav-list-active');
    })

})

