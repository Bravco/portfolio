The metadata generator frontend was built with the Nuxt.js framework with at the time latest version 3.6.2.

<br>

The very core of functionality and generation was provided by OpenAI, specifically its ChatGPT 3.5 program. The output was formatted and provided to the user via frontend.

<br>

All user, generated or inputed data was stored in a Firebase NoSQL database. User authentication was also created using Firebase Auth.

<br>

I used Stripe to manage transactions and subscriptions, because building a working transaction management is quite a difficult challenge for a developer.

<br>

Once the web app was done, I bought my own domain and hosted the app with Firebase Hosting and Firebase Functions for the Nuxt.js server-side.