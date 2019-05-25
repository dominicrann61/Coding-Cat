# Chrome Extensions



## Content Scripts

Content Scripts are scripts that can change the style and manipulate a website that the user is on.
Content Scripts are stuck in the website and cannot reach out and recive global browser events.
A Background script however can reach out and get global events and can control the browser a bit more.

Manifest:
```"content_scripts": [{
        "matches": [
            "<all_urls>"
        ],
        "js": ["content.js"]
    }]```