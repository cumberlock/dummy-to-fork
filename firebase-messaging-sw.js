//importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
//importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');
importScripts('firebase-app.js');
importScripts('firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyBs-mmPWkn8TrT3-rN7OaMSnXTrbYhO8JY",
  authDomain: "php-test-e37a6.firebaseapp.com",
  projectId: "php-test-e37a6",
  storageBucket: "php-test-e37a6.appspot.com",
  messagingSenderId: "385347176363",
  appId: "1:385347176363:web:d1f12ecc4006d0fcd874ee",
  measurementId: "G-BFD8TX2G1D"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});