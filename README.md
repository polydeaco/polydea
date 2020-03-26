# Polydea
Multi video streaming platform built with Angular, Google Firebase and a host of 3rd party libraries. Here's a list of the built in features :

## User Authentication
Utilizes oAuth functionality  for sign in/out via social media ,  as well as authGuard for the dash board and subscriber only pages. Suscribers can see exlusive content and and go ad-free expreince to the platform as well as automatic discount applied in the shopping cart. 

## User Subscriptions
Managed by [Stripe Subscriptions](https://github.com/stripe-samples/set-up-subscriptions) and intergrated with oAuth. Package are like such :

### Free
google IMA and banner ad's, no more then 5 consectutive playlist skips. 

### Premium 
No ad interruptions, unlimied skips, custom playlists, shopping cart discounts.

## Shop
Everything from shopping cart, payments and invoices is managed by [Snipcart](https://github.com/snipcart) 

## Analytics
Configure all user events and relavant data to Google analytics.

## Back End
All data is stored via google Firebase/Firestore database. Use cloud functions to create data sets for video types like :
### latest
return the last 12 added  videos
### most_viewed
return the most watched video for today, past week, month, and overall
### Play_count
return  the overall plays for each video and playlist
### Plays
Returns play count today, past week, month, and overall.
### suggested
uses overall data to suggest 12 vidoes. 

## Dashboard
Admin ONLY access. Shows relavent site data from analytics as well as CRUD for videos, ad spots, products and  blogs to dtabase 

## Video Player
Custom configuation of [Videojs](https://github.com/videojs) via [videojs-playlist](https://github.com/brightcove/videojs-playlist) and ,many other plugins like [videojs-logobrand](https://github.com/Mewte/videojs-logobrand). [videojs-share](https://github.com/mkhazov/videojs-share) and most importantly [Google IMA](https://github.com/googleads/videojs-ima) to help monitize the platform.

## carousel
Pretty much [slickjs](https://github.com/kenwheeler/slick/) 

## Infinite scroll
Not sure if we need a plugin for this yet. 

## Deployment
Command line deployment via [Severless](https://github.com/serverless/serverless)

# Pages
The UI/UX is very stardard for media outlets but includes an integrated shopping experience.

## Home 
Very much like [Vicetv.com](https://www.vicetv.com/en_us)

## Explore (/explore?q=XXXX)
Users can perform fuzzy search and filter results by "genre & mood" [chips](https://material.angular.io/components/chips/overview) provided by admin. Query params for each search input. Layout example [vicetv](https://www.vicetv.com/en_us/search?query=detroit&q=detroit). 

## Video Playlist pages ( /playlist/XXXX )
Very similar layout/look as [Vice video page](https://www.vicetv.com/en_us/video/wednesday-march-4-2020/5e4c0a59d11b9971890a3de5) . The rest of the videos ont he same palylist are in the playlist section, and will automatically play next. Inlude 6 recently added products from the shop below the player in a carousel . 

## Shows (/shows)
User can view and search the list of Shows. Same layout as [Vice Show page](https://www.vicetv.com/en_us/shows).

## Music (/music)
User can view and search the list of Shows, each item forwards to the Playlist page.. [Vice Show page](https://www.vicetv.com/en_us/shows).

## Shop (/shop)
Store experience much like [foolsgoldrecs](https://store.foolsgoldrecs.com/)

