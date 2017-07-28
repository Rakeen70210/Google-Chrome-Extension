# Google-Chrome-Extension
This Chrome Extension will notify you of any new posts made to the specified subreddit of your choice. Notifications will be displayed as regular Chrome Notifications, on the bottom right corner of your screen. 

# Instructions:
All of the main code is located in the "app" folder. 

JavaScript.js and background.js are the two main files that contain the code

popup.html contains some html code: the GUI the user sees when they click on the extension.

1. In order to use this extension, on Chrome go to the extensions page through settings and enable "developer mode"(top of page). Then click on "Load Unpacked Extension..."

2. Check the box that says "Enable" to enable the extension, and on the top right corner you should see the extension with a red "Reddit" icon.

3. Click on the icon and you will be shown a small page with a textbox that contains a reddit url. Feel free to change this to any subreddit you wish.

NOTE: Make sure any links you specify in the textbox are valid reddit urls.

4. Click on the "submit" button and wait 1 minute, after which you should start seeing notifications pop up if the specified reddit page has been updated with new posts. The extension will repeatedly update you with any new posts every 1 minute. In order to turn it off you must uncheck the box which says "Enable" on the extensions page.

NOTE: I suggest using "https://www.reddit.com/new/" as it always gets updated with new posts, and is the fastest way to test this extension.
