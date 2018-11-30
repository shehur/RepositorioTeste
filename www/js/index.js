var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        window.location.href = 'http://app.perfectiva.com.br/wifi/manager/';

        cordova.InAppBrowser.open('http://app.perfectiva.com.br/wifi/manager/', '_self', 'location=no');
    }
};
