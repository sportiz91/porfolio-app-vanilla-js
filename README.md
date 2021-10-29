# Portfolio App (Vanilla JS)

This is my first App built with SCSS. The goal was to practice my SCSS skills. Hope you like it!

# Table of Contents

- [Quick Start](#quick-start)
- [Next Steps](#next-steps)
- [Learnings](#learnings)
- [Thanks](#thanks)
- [Reach me out](#reach-me-out)

# Quick Start

1. `Git Clone`
2. Open locally in your browser.

# Next Steps

None! Everything's done :)

# Learnings

This is a summary of my learnings building this simple app: <br>

1. SCSS: Setup SCSS in VSCode.
1. SCSS Basic Stuff: partials & imports, nesting, variables, functions, mixins.
1. How to make a basic Burger Icon: basic form & transition.
1. How to make a Navbar with two functionalities: navbar hiden and opened with the burger icon before certain width threshold; navbar seen at the top and fixed after certain width threshold.
1. Specific things(\*):
   - App Deployment in Vercel: When you deploy to vercel an static app, if you put the index.html in a subdirectory (and not in the root folder), you'll get a 404!
   - h1, h2, spans default margin/padding: by default, HTML elements like h1, h2, spans (and others) have default margin and padding configurations. If you use line-height in the body, you can "set up you own margin" between these items.
   - Fit-content in Grid system: if you wanna achive a 2x1 matrix where the first row fit to content and the second one cover the remaining height defined in the wrapper of the grid, you can determine min-content for the first row and then the second one will occupy the remaining space.
   - This that I never remember... : if you ../ you go one folder up!
   - Navbar on top of the "body": when I was opening the NAV with the burger button, the NAV was not showing on top of the elements of the body. That was not the inteded effect. Then I realized that, if I want to show something inside the header on top of something inside another section, I have to Z-index the header on top of the section. What I was trying to do was Z-index the specific element inside the header on top of the other section! (so no effect).
   - Tap into a before/after pseudo-element which has two classes attached: say a certain element has two classes attached to it. If you want to tap into the before/after element, you should point something like this -> class1.class2::before/after.
   - :nth-child pseudoclass: say you want to add a transition effect to list items that are inside an ul element. Although the name of the pseudoclass is "nth-child", if you want to add a transition effect to every li with a for loop (SCSS), you have to tap into the list items and not the ul.

(\*) Specific things are realizations that I had in the process of doing the app. They are written to have a memo of the things I don't have to forget next time. So, don't torture yourself if you don't understand them.

# Thanks

This project was possible thanks to codeSTACKr YouTube Channel. Learning a lot from his teachings. Please checkout his content: [codeSTACKr YouTube Channel](https://www.youtube.com/codeSTACKr).

# Reach me out

Please feel free to reach me out to discuss about coding! :) <br>
[Twitter](https://twitter.com/sportiz91)
