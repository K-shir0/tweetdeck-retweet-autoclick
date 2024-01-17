console.log('clicker.js loaded');
document.addEventListener('click', function (e) {
    setTimeout(function () {
            if (e.target.classList.contains('js-icon-retweet')) {
                var retweetButton = document.querySelector('button[data-action="retweet"]');
                if (retweetButton) {
                    console.log('true')
                    retweetButton.click();
                }
            }
        }
        , 500);
});