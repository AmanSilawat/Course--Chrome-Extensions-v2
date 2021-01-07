# Course--Chrome-Extensions-v2

This course tutorials on this link: [codedamn](https://www.youtube.com/playlist?list=PLYxzS__5yYQlWil-vQ-y7NR902ovyq1Xi)

---

##Environment

1. extension popup Environment
2. user page Environment
3. Isolated Environment (background script)

---

1. **browser action** <br>
   No Access to any chrome API.
   Make a extension popup view on click your extension icon.
   Use browser actions to put icons in the main Google Chrome toolbar, to the right of the address bar. In addition to its icon, a browser action can have a tooltip, a badge, and a popup.
   <br />
    ```json
    {
        "name": "My extension",
        ...
        "browser_action": {
            "default_icon": {                    // optional
            "16": "images/icon16.png",           // optional
            "24": "images/icon24.png",           // optional
            "32": "images/icon32.png"            // optional
            },
            "default_title": "Google Mail",      // optional; shown in tooltip
            "default_popup": "popup.html"        // optional
        },
        ...
    }
    ```
    <br/>
2. **user page Environment**<br>
   content_scripts : Adding a script any of the page user visits.
   <br>

    ```json
    "content_scripts": [
    {
        "matches": ["http://*.nytimes.com/*"],
        "css": ["myStyles.css"],
        "js": ["contentScript.js"]
    }
    ],
    ...
    ```
    <br />

    - matches: Required. Specifies which pages this content script will be injected into.

        ###### use some values in matches property

        > - Specific url : https://www.google.com/
        > - Only sub domain for Specific url: https://www.google.com/*
        > - all url: ["http://*/*", "https://*/*"] (this is a wild card)

    - css: your style file path: './style.js'
    - js: your JavaScript file path: './script.js'
<br><br />
3. **Isolated Environment**: background script
   Access all the chrome API's. not access any dom property.
    <br />
    ```json
        {
            "name": "Awesome Test Extension",
            ...
            "background": {
                "scripts": ["background.js"],
                "persistent": false
            },
            ...
        }

    ```

<br/>
