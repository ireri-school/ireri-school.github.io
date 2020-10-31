const imgToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src')
    };
};

const options = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target)
                observer.unobserve(item.target)
            }
        })
    }, options)
    imgToLoad.forEach((img) => {
        imgObserver.observe(img)
    })
}
else {
    allImages.forEach((img) => {
        loadImages(img)
    })
}