window.addEventListener('scroll', function() {
    var icon = document.querySelector('.instagram-icon');
    var footer = document.querySelector('footer');
    var iconRect = icon.getBoundingClientRect();
    var footerRect = footer.getBoundingClientRect();

    if (iconRect.top + iconRect.height >= footerRect.top) {
        icon.style.opacity = '0';
    } else {
        icon.style.opacity = '1';
    }
});

