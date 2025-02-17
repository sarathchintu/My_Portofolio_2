const hamburger=document.querySelector(".sidebar_logo");
const sidebarClose=document.querySelector(".sidebar_close_symbol");
const sidebarContainer=document.querySelector(".sidebar");

function openSidebar(){
    sidebarContainer.classList.add("sidebar_open");
};
function closeSidebar(){
    sidebarContainer.classList.remove("sidebar_open");
};
hamburger.addEventListener("click", openSidebar);
sidebarClose.addEventListener("click", closeSidebar);
