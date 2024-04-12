const socialBar = document.getElementById("socialBar");
const avatarContainer = document.getElementById("avatar-image-container");
const nameContainer = document.getElementById("name-container");
const bottomContainer = document.getElementById("right-col-bottom-container");
const mobileSocialBar = document.getElementById("social-links-mobile");

document.getElementById("share-icon-button").addEventListener("click", function() {
    if(window.innerWidth >= 481) {
        if (socialBar.style.display == "none") {
            socialBar.style.display = "flex";
        } else {
            socialBar.style.display = "none";  
        }
    } else {
        
        if (avatarContainer.style.display == "none") {
            avatarContainer.style.display = "block";
            nameContainer.style.display = "block";
            bottomContainer.classList.remove("dark-colour-background");
            mobileSocialBar.style.display = "none";
        } else {
            avatarContainer.style.display = "none";
            nameContainer.style.display = "none";
            bottomContainer.classList.add("dark-colour-background");
            mobileSocialBar.style.display = "flex";
        }
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth <= 480) {
        socialBar.style.display = "none";
    } else {
        bottomContainer.classList.remove("dark-colour-background");
        avatarContainer.style.display = "block";
        nameContainer.style.display = "block";
        mobileSocialBar.style.display = "none";
        
    }
});