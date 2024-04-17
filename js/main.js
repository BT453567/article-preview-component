const socialBar = document.getElementById("socialBar");
const avatarContainer = document.getElementById("avatar-image-container");
const nameContainer = document.getElementById("name-container");
const bottomContainer = document.getElementById("right-col-bottom-container");
const mobileSocialBar = document.getElementById("social-links-mobile");

document.getElementById("share-icon-button").addEventListener("click", function() {
    if(window.innerWidth >= 481) {
        socialBar.classList.toggle("hide");
    } else {
        avatarContainer.classList.toggle("hide");
        nameContainer.classList.toggle("hide");
        bottomContainer.classList.toggle("dark-colour-background");
        mobileSocialBar.classList.toggle("hide");
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth <= 480) {
        socialBar.classList.add("hide");
    } else {
        bottomContainer.classList.remove("dark-colour-background");
        avatarContainer.classList.remove("hide");
        nameContainer.classList.remove("hide");
        mobileSocialBar.classList.add("hide");
    }
});



  