# Tribal Credit Challenge

**Requirements:**
-   **Node.js**  12 or 14 and above
-   **Chrome browser** preferentially version 99 or above

**Instructions:**
1. Clone this repo
2. Open the folder cloned with `cd <name_of_folder>`
3. Install npm libraries with `npm install`
4. Run the test with `npm test`

The test command will open a cypress UI, there are two tests, you can run one test just clicking the name of the test or both clicking the link at the top right corner that says "Run 2 integration specs".

When you click a test a chrome browser test will be opened, if you run just one test you can check any step of the test, if you run both you only can navigate the last test runned, to close the test just click the stop button in the test browser.

**Important files:**
- The project core is inside the cypress folder.
- Inside a folder called *integration* has test files, where the magic lives.
- The page_definition folder has the selectors that are used in the test files, cypress does not use the page object model, which is not the natural way of cypress but I'm using a page definition to have better control of the selectors.
- Inside support folder is a command.js file, in this file you can add commands to don't repeat code, I use this file cause i only make a command, when project is bigger this option needs to be modified.
