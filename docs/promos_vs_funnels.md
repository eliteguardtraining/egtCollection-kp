# Promos vs Funnels

This document will outline the structural differences between the way a “funnel”
and a “promo” work. The main separation is that funnels are meant to be
evergreen, constantly running, and promos are usually run during a limited time
frame, generally one per month. Each has multiple components and pages as well
as multiple page states that serve to accomplish the marketing goal behind each.  
Funnels receive almost all their incoming traffic from paid traffic channels
meaning these are first time, cold visitors to our site.  Promos largely receive
traffic from existing customers and members of our email list.

## Funnels

*Example Repos: “elite” and “jump”*

Both our current funnels have a similar structure:

1. A visitor arrives on the Landing page, where they are prompted to enter their email address in order to receive a free workout.
2. This email address goes into our database as well as into Maropost (our email provider) and also calls identify to our tracking tools so from this point onward, this email address is a “user.”  The funnel also now knows their “createdAt” date and time; this is when they entered their email.
3. Visitor is now sent onward to the Sale page where they see their free workout video, as well as a sales pitch and full product available for purchase at a discount. At this point they will either go through and purchase, or bounce out.
4. If they go to purchase, the next step is an “Options” page where they select either the product they wanted or the product + a free VIP trial offer.
5. When they make their selection on the Options page, they get sent to the checkout page which is still on our nginx server and a static page outside of the app.

From the time that any person enters the funnel, there are 4 stages of the
“discount sale” that’s running:

* The first 12 hours  (discounted sale)
* Hour 13 until Day 3 (sale is over and product isn’t available)
* Day 4 – Day 6 (discount is open again)
* Day 6+ (discount is over and product can be bought at full price)

The “Sale Page” has multiple states based on which phase of the sale the user
is in. The page figures this out by taking the “createdAt” date of the incoming
user and any data in localstorage and then calculates which day they are on and
displays the correct version of the page to them. (All out inbound links from
email marketing to the page have a query parameter containing the createdAt
date).

The “Options” page essentially is a step of the sale so it should follow all the
same state rules as the sale page outlined above based on user’s timeline.

These pages feature timers that count down the time until the sales are over
when they are running.  These, along with a bit of text messaging and prices are
what change based on the state.

Along with the state changes based on the user timeline above, there are two
more states that aren’t based on time:

**Special=ab** – This is a a query parameter we pass to the sale page which
brings up a state of the discounted sale page where the product is available for
purchase, there is no timer, and the price is discounted by a further 25% on top
of the discount. (Goes for the options page as well)

**Special=xxx*** – This is a query parameter we pass to the sale page which
brings up the discounted sale page with or without a timer.  The “xxx” is
modified and we may use multiple states like this to give to our affiliates or
we may have none like this, but it should be in the code so it can be set
easily.

## Promos

*Example Repos: “egt-2” “pg-promo” “4wfs”*

The time structure of Promos:

1. Main Sale: 5-7 days (has options page step)
2. Main Sale Re-opens: +3 days after Main sale ended. (has options page step)
3. Upsell Re-offers + Abandons + Retargeting: +4 days after Main sale ended.
4. Downsell Offer: +7 days after Main sale ended. (has options page step)

Each of these pages open and close at pre-set times based on Eastern US time.  There are no page states based on users created date and there are fewer time based states.

### Main Sale Page

* Discounted state during sale and the re-open.  Two open and close times.
* Abandons state (25% off and no timer) when special=ab is present in URL.  This is not time based.
* RT state, opens discounted page when special=rt is present. Open and close times.
* Other special=xxx state, opens discounted page state and may have set timer or not.  Only will need sometimes when we have affiliates.

### Options Page

*Follows all the same rules as the page that precedes it, Sale page or Downsell page.*

### Upsell Re-Offer Page

* Only one state and has open/close times. No Options page.
* There are pre-existing pages for this in the boilerplate, just need to drop in correct product images and copy for each promo.

### Downsell Page

* Only one page state and has open/close times. Has Options page with same rules.
* There is a pre-existing page for this in the boilerplate, just need to drop in correct product images and copy for each promo.

### Notes on Promos:

* Pages that have open/close times should have a de-activated add-to-cart button when time is outside of our preset range.
* Main sale page should have the correct abandon list id relevant to the promo and this should be tested to be functioning before (Isaac please add notes on needing a database setup etc for this)
