const searchForm = document.querySelector(".search-form"); //! search-button
const cartItem = document.querySelector(".cart-items-container"); //! sepet-button
const navbar = document.querySelector(".navbar"); //! menu-button


//! search butonunun acilip kapanmasi icin: (toggle - tiklayinca acilacak, tiklayinca kapanacak - ozelligiyle gecis yapacagiz)
const searchBtn = document.querySelector("#search-btn"); //! button
const cartBtn = document.querySelector("#cart-btn"); //! sepet
const menuBtn = document.querySelector("#menu-btn"); //! menu

searchBtn.addEventListener("click", function () {
    searchForm.classList.toggle("active");
    document.addEventListener("click", function(e){
        if (
            !e.composedPath().includes(searchBtn) && 
            !e.composedPath().includes(searchForm)
        ) {
            searchForm.classList.remove("active");
        }
    })
});
//! search butonunun acilip kapanmasi SON.

//! sepet (shopping cart) butonunun acilip kapanmasi icin: (toggle - tiklayinca acilacak, tiklayinca kapanacak - ozelligiyle gecis yapacagiz)
cartBtn.addEventListener("click", function () {
    cartItem.classList.toggle("active");
    document.addEventListener("click", function(e){
        if (
            !e.composedPath().includes(cartBtn) && 
            !e.composedPath().includes(cartItem)
        ) {
            cartItem.classList.remove("active");
        }
    }) 
});

//! menu butonunun acilip kapanmasi icin: (toggle - tiklayinca acilacak, tiklayinca kapanacak - ozelligiyle gecis yapacagiz)
menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    document.addEventListener("click", function(e){
        if (
            !e.composedPath().includes(menuBtn) && 
            !e.composedPath().includes(navbar)
        ) {
            navbar.classList.remove("active");
        }
    }) 
});

