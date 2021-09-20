---
sidebar_position: 6
---

# History Collection

Display the current auction’s content:

Current: Date of Auction, Noun name (number), Prev/Next Noun arrows, Current Bid, Auction Timer, Place Bid input & button, last 3 bids (address, bid amount, and link to Etherscan), and Bid History link

Past: Date of Auction, Noun name (number), Prev/Next Noun arrows, Winning Bid, Winner’s Address, last 3 bids (address, bid amount, and link to Etherscan), and Bid History link

## Imports

[`Bid`](#)
[`AuctionTimer`](#)
[`CurrentBid`](#)
[`Winner`](#)
[`BidHistory`](#)
[`AuctionNavigation`](#)
[`AuctionActivityWrapper`](#)
[`AuctionActivityNounTitle`](#)
[`AuctionActivityDateHeadline`](#)
[`BidHistoryBtn`](#)
[`StandaloneNoune`](#)

## Exports

Nothing.

## Explanation

Receives **_startTime_** (BigNumber) prop from **_auction_** object in [`AuctionActivity`](#). Converts to “human-readable” format (MM DD YYY) using [`moment.js`](#).

## Types

[`AuctionActivityProps`](#)
