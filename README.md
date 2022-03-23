# Task CybSafe

* Task Started at Sat 22 Mar 2022
* Author: Diogo Esteves

#### Table of Contents

1. [Installation Instructions](#installation-instructions)
2. [Test Instructions](#test-instructions)
3. [Architecture](#architecture-decisions)

- Task can be found : [task](https://cybsafewiki.notion.site/CybSafe-React-Challenge-a2954659c5ed4a11a9e6cda2c737f1a5)

## Installation Instructions

### Available Scripts

#### `npm run dev`

#### `npm run lint`

#### `npm build`

#### `npm run start`

## Test Instructions

- Testes aren't implemented since in two hours a had to make a decision, and I choose the implementation as priority.

#### `npm test`

#### `npm run test:ci`

## Architecture Decisions

General:

- Architecture was think to be pre-rendered at build time so the final bundle will have pre-generated pages so the app
  will be really fast.
- I will discuss other implementation with detain on the review interview.

Accessibility:

- Not optimized I will explain what I would do it on the review interview.

Styles:

- I didn't take any attention to the styles I will explain my view and the wanted design on the review interview.

File Structure:

- The file structure was built with these task necessities in mind and is fully scalable and easy to navigate and
  maintain.
- Every aspect of the respective folder lives inside, so it will be easy to onboard new team members.

Code:

- Code is not even close to my standards, but I will explain every optimization on the review interview.

Documentation:

- Did not have much time, so I had to choose between extensive documentation on each folder like
  using [storybook](https://storybook.js.org/) or a quick explanation on `README.md`.
- Please don't take it like I did not mind about documentation, just did not seem a priority, in my opinion, does not
  mean that documentation is not important to the contrary.
