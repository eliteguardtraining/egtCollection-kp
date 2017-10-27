# Guide to Setting Up a New Promo

## Overview

This project is meant to function as a boilerplate for EGT promos, wherein the
only steps necessary to rolling out a new promo is changing variables and images.

## The Process

### Devops
1. Create new repository
2. Copy entire boilerplate into new repository (do not forget hidden files)
3. Create dev branch in git repository
4. Create new modulus project for production (master branch)
5. Create new modulus project for integration (dev branch)
6. Set up codeship hooks for both branches/modulus projects
7. Update the reverse-proxy repository with new desired routes
8. Instantiate new compose databases (if desired)
9. Push initial commit and verify on codeship that the build succeeds

### Development
* Change promo prices in src/univeral/modules/Product/containers/Product/PromoContainer
* Change productId in src/univeral/modules/Product/containers/Product/PromoContainer
* Change abandonListId in src/univeral/modules/Product/containers/Product/PromoContainer
* Change offer dates in Promo, Upsell, and Downsell
* Change gaProduct for Promo, Upsell, and Downsell
* Make whatever design changes are necessary
* TODO: Add the many remaining steps
