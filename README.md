# Advanced Frontend Final

## Project Description

This project will helps players of Trading Card Games (TCG) (Pokemon to start out) to add to and track their inventories by set, view popular decks, import decklists and more. It would allow players to see what cards they need to buy in order to build a deck that they want and potentially link them to sites to buy said cards.

I will be working on this project by myself. I am still looking into what framework to use, but I will likely use Vite with a C# backend

## Project Requirements

The project will be able to do the following:

1. Allow users to create an account
2. Allow users to save cards to their inventory
3. Allow users to view their inventory
4. Allow users to view popular decks
5. Allow users to import decklists
6. Allow users to view their decks
7. Allow users to buy the cards that they are missing

## A list of new things you will need to do to accomplish your project (e.g. websockets)

Looking at some of the firefox browser apis, I might be able to work with the clipboard api to add lists to the clipboard. It might also be fun to do something with the vibration api for mobile devices. I will also likely need to find someone's api to get some data that I can fetch on occasion

## 10+ pages/views via a router

    [x] Home
    [ ] View Cards with filters
    [x] View Inventory
    [ ] View Popular Decks
    [ ] Import Decklist
    [ ] View Personal Decks
    [ ] Prep to Buy Cards (chose which rarity of card)
    [ ] Edit Decks
    [x] View Card Details
    [ ] View Set
    [ ] Input Cards (admin)
    [ ] Input Cards (user)

## Rubric breakdown by week

| Rubric Points                                                                   | Nov 6 | Nov 9 | Nov 13 | Nov 16 | Nov 20 | Nov 23 | Nov 26 | Dec 4 | Dec 7 - Final |
| ------------------------------------------------------------------------------- | ----- | ----- | ------ | ------ | ------ | ------ | ------ | ----- | ------------- |
| **Project scope is 2-3 times larger than Inventory Management** 30 pts          | 0     | 3     | 9      | 12     | 15     | 21     | 24     | 27    | 30            |
| **Technology: use local storage** 5 pts                                         | 0     | 5     | 5      | 5      | 5      | 5      | 5      | 5     | 5             |
| **Technology: Client side state stores (e.g. tanstack query or context)** 5 pts | 0     | 2     | 2      | 3      | 3      | 4      | 4      | 5     | 5             |
| **Technology: Toasts / global notifications or alerts** 5 pts                   | 0     | 0     | 5      | 5      | 5      | 5      | 5      | 5     | 5             |
| **Technology: Error handling (both on api requests and render errors)** 5 pts   | 0     | 0     | 2      | 4      | 5      | 5      | 5      | 5     | 5             |
| **Technology: Network Calls that read and write data** 5 pts                    | 0     | 5     | 5      | 5      | 5      | 5      | 5      | 5     | 5             |
| **Technology: Developer type helping (typescript)** 5 pts                       | 5     | 5     | 5      | 5      | 5      | 5      | 5      | 5     | 5             |
| **Technology: 10+ pages or views** 5 pts                                        | 0     | .5    | 1.5    | 3      | 3.5    | 4      | 4.5    | 5     | 5             |
| **Technology: CI/CD pipeline** 5 pts                                            | 5     | 5     | 5      | 5      | 5      | 5      | 5      | 5     | 5             |
| **Technology: tests run in pipeline, pipeline aborts if they fail** 5 pts       | 0     | 0     | 5      | 5      | 5      | 5      | 5      | 5     | 5             |
| **Technology: linting in pipeline** 5 pts                                       | 0     | 0     | 0      | 5      | 5      | 5      | 5      | 5     | 5             |
| **Technology: 3+ generic form input components** 9 pts                          | 0     | 0     | 3      | 3      | 6      | 6      | 9      | 9     | 9             |
| **Technology: 4+ generic layout components** 12 pts                             | 0     | 0     | 4      | 8      | 8      | 8      | 12     | 12    | 12            |
| **Technology: authentication and user account support** 10 pts                  | 10    | 10    | 10     | 10     | 10     | 10     | 10     | 10    | 10            |
| **Technology: authorized pages and public pages** 5 pts                         | 0     | 0     | 2.5    | 2.5    | 3      | 3      | 5      | 5     | 5             |
| **Experience: all experiences mobile friendly** 5 pts                           | 0     | 1     | 2      | 2.5    | 3      | 3.5    | 4      | 4.5   | 5             |
| **Experience: 3 instances where elements re-order themselves** 5 pts            | 0     | 0     | 0      | 1.6    | 1.6    | 3.2    | 3.2    | 5     | 5             |
| **Professional, organized and smooth experience** 20 pts                        | 0     | 2     | 2      | 6      | 10     | 12     | 14     | 16    | 20            |

## Tasks completed by week

| Week   | Tasks Completed                    |
| ------ | ---------------------------------- |
| Nov 6  | [x] CI/CD pipeline                 |
|        | [x] User authentication            |
|        | [x] Figma/Sketch mockups           |
|        | [x] Tailwind schema                |
| Nov 9  | [x] Home page implemented          |
|        | [x] AWS DB with seed data          |
|        | [x] View cards (no filters)        |
| Nov 13 | [ ] View cards (with filters)      |
|        | [O] Start error handling           | not sure what else I can do?
|        | [O] View card details              |
|        | [x] Testing pipeline               |
|        | [X] Local state storage            |
| Nov 16 | [x] Toasts                         |
|        | [x] Linting in pipeline            |
|        | [O] Add cards to inventory GUI     |
|        | [X] View inventory                 |
| Nov 20 | [ ] Create decks                   |
|        | [ ] View decks based on set        | Not sure what I meant by this
|        | [ ] View popular decks             | I don't think that I can find any apis for this - might just create some examples myself to use
| Nov 23 | [ ] Export decklist                |
|        | [ ] View/edit decks                |
| Nov 26 | [ ] Import decklist                |
| Dec 4  | [ ] Admin add cards                |
|        | [ ] Prep to buy cards              |
| Dec 7  | [ ] Cleanup/refactor/whatever else |

## Nov 6

I got both my api and my frontend up on kubernetes - they don't talk to each other yet there or locally yet. It took me longer than I thought to get them to this point. I have three pages designed in figma as a wireframe. I didn't hvae time to look into colors but with it being a pokemon adjacent app foremost, I will likely make it blue (near the color of the card back) to start out with. So I don't have an official tailwind schema yet, but I've at least thougth about it.

I haven't had much time to work on it, but I forsee that I will have more time for the next checkpoint to catch back up. I think I did front load myself a little but it should be manageable.

## Nov 9

I got everything up to some degree, I still need to seed the database with a little bit more usable data (images mainly, but i'm working on that) I have the start of being able to show cards, I need to figure out how I want to filter/display them fully for next time as well. I feel like I'm almost starting down the route of 90% of the way done with everything because I'm not exactly sure how everything will look just yet (and how reliant everything is on images which is the hardest part right now). Though, I did lay out some groundwork for future days and it might end up changing what I had planned with it. Automate things rather than manually make them like I had planned.

## Nov 13

I'm going to be adding a little more after completing this, but I wanted to get this done and turned in before I forget.. getting secrets/api to communicate with the frontend set up properly with my db took a lot longer than it likely should have (partially due to me not realizing that I was trying to access the wrong site for almost 2 hours). Because of this I wasn't able to get some things in like I wanted to. I put in some local state storage to hold my cards that I can get, but I don't think that I am using/implementing it correctly, its still something that I have almost no idea on how to do properly. I have implemented Toasts but there's almost no place that they can be used as of right now - they do show up when you can't pull anything from the db as I saw very frequently testing it out.

I do have some error handling (once again, very familiar with the page). Its not ideal at the moment because it locks you out from seeing everything else but I will be working on that as I go. Network calls now officially work again on k8s with my CI fully working after figuring out my secrets bug (the spaces in are very important {{ secrets.key }}). I haven't had time to put tests in like I had planned for this week, let alone in the pipeline so that will have to be bumped to next week. I don't have any reuable (input) components, but I prob could for the colored bars as I am using those on multiple pages. Authentication works locally, on k8s I redirect back to localhost even though I have a redirect back to k8s so I'm not sure what's up there. No auth locked pages yet - that will come next time when I start implementing an inventory page.

## Nov 16

I don't feel like writing this up after I finish tonight, but I will be adding some stuff between now and then. Alright, theres some stuff that I have pushed back a little more. I spent more time working on filling out more of my database to use which took up some time. Because of this I didn't get as far into figuring out how to filter cards as I had planned. I also didn't look into more about getting the details view to look good, but part of that required some more data in the database to fill out the bottom sections. Those will be done by Sunday to some degree (missing a lot of data still to make it look full). I'm not sure what else I need to do for error handling, I have the generic 'something went wrong' page there, but I don't know what else is needed for that, so some additional info on that would be nice. I did get an inventory page started and the cards look nice in it I think, but I need to figure out how to better display it, especially when there's a lot of cards. 

I feel like tanstack is up to date now, It seems to be working, but I haven't started using mutations yet (I'll hopefully get that done sometime after sending this in or on Sunday). As far as the actual rubric goes, I need to focus on getting generic inputs/components. I haven't even started on those yet. I also haven't started on making it looks good on mobile to any reasonable degree. I can't figure out what keywords to use to rearange the cards on mobile.

| Rubric Points                                                                   | Nov 16 | expected |
| ------------------------------------------------------------------------------- | ------ | -------- |
| **Project scope is 2-3 times larger than Inventory Management** 30 pts          | 12     |  9-10?   |
| **Technology: use local storage** 5 pts                                         | 5      | 0        |
| **Technology: Client side state stores (e.g. tanstack query or context)** 5 pts | 3      | 5        |
| **Technology: Toasts / global notifications or alerts** 5 pts                   | 5      | 5        |
| **Technology: Error handling (both on api requests and render errors)** 5 pts   | 4      | 4?       |
| **Technology: Network Calls that read and write data** 5 pts                    | 5      | 5        |
| **Technology: Developer type helping (typescript)** 5 pts                       | 5      | 5        |
| **Technology: 10+ pages or views** 5 pts                                        | 3      | 2        |
| **Technology: CI/CD pipeline** 5 pts                                            | 5      | 5        | 
| **Technology: tests run in pipeline, pipeline aborts if they fail** 5 pts       | 5      | 5        |    
| **Technology: linting in pipeline** 5 pts                                       | 5      | 5        |
| **Technology: 3+ generic form input components** 9 pts                          | 3      | 0        |
| **Technology: 4+ generic layout components** 12 pts                             | 8      | 0        | 
| **Technology: authentication and user account support** 10 pts                  | 10     | 5        | auth yes, account no
| **Technology: authorized pages and public pages** 5 pts                         | 2.5    | 0        |
| **Experience: all experiences mobile friendly** 5 pts                           | 2.5    | 0        |
| **Experience: 3 instances where elements re-order themselves** 5 pts            | 1.6    | 0        |
| **Professional, organized and smooth experience** 20 pts                        | 6      | 6        |
