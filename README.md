# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

# Mortgage Calculator

## Overview

### The challenge

This project is a web-based mortgage calculator built using React.js. It allows users to calculate monthly mortgage payments based on input values such as mortgage amount, term, and interest rate. The calculator supports two calculation types: repayment and interest-only, providing users with flexible options based on their financial planning needs. The application also features error handling for input validation and displays detailed results, including monthly repayments and total repayment over the mortgage term. It serves as a practical tool for individuals seeking to estimate their mortgage payments quickly and efficiently.

### Screenshot

Include a screenshot of your project here.

### Links

[Provide links to your deployed project, demo, or any other relevant links.](https://jelilking.github.io/mortgage-repayment-calculator) cl

## My process

### Built with

- React.js
- jsx
- CSS

### What I learned

During the development of this mortgage calculator project, I gained valuable experience and learned:

- React.js Fundamentals: Deepened my understanding of React.js state management and component lifecycle.
- Form Handling in React: Learned how to manage form inputs, validation, and error handling using React's state and event handling.
- Calculation Logic: Implemented mortgage calculation logic, including repayment and interest-only scenarios, using JavaScript.
- CSS Styling: Explored CSS techniques for layout design, including responsive design principles and custom styling for form elements.
- Deployment: Deployed the application using GitHub Pages, enhancing my understanding of deployment workflows and configuration.
- Then some code i find interesting:

```jsx
<div
  className={`input-container start-placeholder ${
    error.mortgageAmount ? "error" : ""
  }`}
  data-placeholder="£"
>
  <input
    type="text"
    value={mortgageAmount}
    onChange={handleAmount}
    className={`start-placeholder input ${error.mortgageAmount ? "error" : ""}`}
  />
</div>
```

These learnings have equipped me with practical skills and insights that I can apply to future React.js projects and continue to refine my development abilities.

### Continued development

I plan to continue developing my React.js skills by exploring more advanced concepts in state management.

### Useful resources

ChatGPT

## Author

- Jelilking

## Acknowledgments

Appriciation to my friend Josh who helped with most of the styling.
