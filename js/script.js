$(document).ready(function() {

    // Load JSON file
    let openingAnimWindow = document.querySelector('#ani');
    let openingAnimData = {
        container: openingAnimWindow,
        animType: 'svg',
        loop: true,
        prerender: true,
        autoplay: true,
        // path: 'json/download-icon.json'
        path: 'animate.json'
    };
    // set bodymovin
    let openingAnim = bodymovin.loadAnimation(openingAnimData);

});