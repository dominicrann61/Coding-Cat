# Chrome Extensions



## Pop Ups

A Popup is basically an on screen overlay that can display html to get user input, show stuff about the page (etc). It is very easy to create a popup that displays a p5 sketch just add:

```
    "browser_action": {
        "default_popup": "your p5 sketch's index.html"
    },
    
```