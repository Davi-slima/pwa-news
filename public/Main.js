if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/serviceWorker.js',
            { useCache: true }).then(function (registration) {
                console.log('Success in registration', registration.scope);
            }, function (err) {
                console.log('Failure in serviceWorker');
            }).catch(function (err) {
                console.log(err);
            })
    })
}