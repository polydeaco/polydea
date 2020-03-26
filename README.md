# Polydea stream.polydea.co
Multi video streaming platform built with Angular, Google Firebase and a host of 3rd party libraries. Here's a list of the built in features :

## User Authentication
Utilizes oAuth functionality  for sign in/out via social media ,  as well as authGuard for the dash board and subscriber only pages. Suscribers can see exlusive content and and go ad-free expreince to the platform as well as automatic discount applied in the shopping cart. 

## User Subscriptions
Managed by [Stripe Subscriptions](https://github.com/stripe-samples/set-up-subscriptions) and intergrated with oAuth. Package are like such :

### Free
Advertisemnets, no more thn 5 conesectutive playlist, skips only see free content 

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

## Slider
Pretty much [slickjs](https://github.com/kenwheeler/slick/) 

## Infinite scroll
Not sure if we need a plugin for this yet. 

## Deployment
Command line deployment via [Severless](https://github.com/serverless/serverless)

# Pages
The UI/UX is very stardard for media outlets but includes an integrated shopping experience.

## Home 
Very much like [Vicetv.com](https://www.vicetv.com/en_us

## Explore (/explore?q=XXXX)
Users can perform fuzzy search and filter genre wit tabs. 

## Video Playlist pages ( /playlist/XXXX )
Very similar layout/look as [Vice video page](https://www.vicetv.com/en_us/video/wednesday-march-4-2020/5e4c0a59d11b9971890a3de5) . Each video refers to a playlist. Inlude show productsslider from the shop which are for sale. 

## Shows (/shows)
User can view and search the list of Shows. 

## Music (/music)
User can view and search the list of Shows. 

## Shop (/shop)
Store experience much like 

