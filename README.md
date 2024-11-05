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
    [ ] Home
    [ ] View Cards with filters
    [ ] View Inventory
    [ ] View Popular Decks
    [ ] Import Decklist
    [ ] View Personal Decks
    [ ] Prep to Buy Cards (chose which rarity of card)
    [ ] Edit Decks
    [ ] View Card Details
    [ ] View Set
    [ ] Input Cards (admin)
    [ ] Input Cards (user)

## Rubric breakdown by week


| Rubric Points                                                                       | Nov 6 | Nov 9 | Nov 13 | Nov 16 | Nov 20 | Nov 23 | Nov 26 | Dec 4 | Dec 7 - Final |
|-------------------------------------------------------------------------------------|-------|-------|--------|--------|--------|--------|--------|-------|----------------|
| **Project scope is 2-3 times larger than Inventory Management**  30 pts             |  0    |   3   |    9   |   12   |   15   |   21   |   24   |  27   |      30        |
| **Technology: use local storage**          5 pts                                    |  0    |   5   |    5   |    5   |    5   |    5   |    5   |   5   |       5        |
| **Technology: Client side state stores (e.g. tanstack query or context)**   5 pts   |  0    |   2   |    2   |    3   |    3   |    4   |    4   |   5   |       5        |
| **Technology: Toasts / global notifications or alerts**  5 pts                      |  0    |   0   |    5   |    5   |    5   |    5   |    5   |   5   |       5        |
| **Technology: Error handling (both on api requests and render errors)**  5 pts      |  0    |   0   |    2   |    4   |    5   |    5   |    5   |   5   |       5        |
| **Technology: Network Calls that read and write data**   5 pts                      |  0    |   5   |    5   |    5   |    5   |    5   |    5   |   5   |       5        |
| **Technology: Developer type helping (typescript)**     5 pts                       |  5    |   5   |    5   |    5   |    5   |    5   |    5   |   5   |       5        |
| **Technology: 10+ pages or views**                       5 pts                      |  0    |  .5   |  1.5   |    3   |  3.5   |    4   |  4.5   |   5   |       5        |
| **Technology: CI/CD pipeline**                           5 pts                      |  5    |   5   |    5   |    5   |    5   |    5   |    5   |   5   |       5        |
| **Technology: tests run in pipeline, pipeline aborts if they fail**   5 pts         |  0    |   0   |    5   |    5   |    5   |    5   |    5   |   5   |       5        |
| **Technology: linting in pipeline**                      5 pts                      |  0    |   0   |    0   |    5   |    5   |    5   |    5   |   5   |       5        |
| **Technology: 3+ generic form input components**         9 pts                      |  0    |   0   |    3   |    3   |    6   |    6   |    9   |   9   |       9        |
| **Technology: 4+ generic layout components**             12 pts                     |  0    |   0   |    4   |    8   |    8   |    8   |   12   |  12   |      12        |
| **Technology: authentication and user account support**  10 pts                     | 10    |  10   |   10   |   10   |   10   |   10   |   10   |  10   |      10        |
| **Technology: authorized pages and public pages**        5 pts                      |  0    |   0   |  2.5   |  2.5   |    3   |    3   |    5   |   5   |       5        |
| **Experience: all experiences mobile friendly**          5 pts                      |  0    |   1   |    2   |  2.5   |    3   |  3.5   |    4   | 4.5   |       5        |
| **Experience: 3 instances where elements re-order themselves**  5 pts               |  0    |   0   |    0   |  1.6   |  1.6   |  3.2   |  3.2   |   5   |       5        |
| **Professional, organized and smooth experience**  20 pts                           |  0    |   2   |    2   |    6   |   10   |   12   |   14   |  16   |      20        |

## Tasks completed by week

| Week   | Tasks Completed                           |
|--------|-------------------------------------------|
| Nov 6  | [ ] CI/CD pipeline                        |
|        | [ ] User authentication                   |
|        | [ ] Figma/Sketch mockups                  |
|        | [ ] Tailwind schema                       |
| Nov 9  | [ ] Home page implemented                 |
|        | [ ] Local DB with seed data               |
|        | [ ] View cards (no filters)               |
| Nov 13 | [ ] View cards (with filters)             |
|        | [ ] Start error handling                  |
|        | [ ] View card details                     |
|        | [ ] Testing pipeline                      |
|        | [ ] Local state storage                   |
| Nov 16 | [ ] Toasts                                |
|        | [ ] Linting in pipeline                   |
|        | [ ] Add cards to inventory GUI            |
|        | [ ] View inventory                        |
| Nov 20 | [ ] Create decks                          |
|        | [ ] View decks based on set               |
|        | [ ] View popular decks                    |
| Nov 23 | [ ] Export decklist                       |
|        | [ ] View/edit decks                       |
| Nov 26 | [ ] Import decklist                       |
| Dec 4  | [ ] Admin add cards                       |
|        | [ ] Prep to buy cards                     |
| Dec 7  | [ ] Cleanup/refactor/whatever else        |

