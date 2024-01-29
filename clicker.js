document.addEventListener('click', function (e) {
    setTimeout(function () {
            if (e.target.classList.contains('js-icon-retweet') || e.target.classList.contains('icon-retweet-toggle')) {
                const retweetButton = document.querySelector('button[data-action="retweet"]');
                if (retweetButton) {
                    retweetButton.click();
                }
            }
        }
        , 50);
});