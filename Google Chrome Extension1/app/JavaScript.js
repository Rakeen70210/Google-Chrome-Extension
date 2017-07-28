
//Wait for the document(popup.html) to fully load before executing any javascript
document.addEventListener('DOMContentLoaded', function ()
{
    var button = document.getElementById('button1');
    // onClick's logic below:
    button.addEventListener('click', function ()
    {
        //Clear any previously stored data
        chrome.storage.local.clear(function (callback)
        {
            //If there was an error clearing local storage.
            var error = chrome.runtime.lastError;
            if (error)
            {
                console.error(error);
            }
            else
            {
                console.log("local storage cleared");
            }
        });

        //Now get the specified url.
        url = getValue();

        //Get the JSON data by using the specified url
        getJSON(url);

        //Store the url in local storage and set the alarm to activate every 1 minute
        chrome.storage.local.set({ "url": url });
        chrome.alarms.create("alarm", { delayInMinutes: 1, periodInMinutes: 1 });
    });
});

//This function obtains the url from user input and adds the ".json" tag to the end of the url
function getValue()
{
    var val = document.getElementById('text').value + ".json"; //obtain user input from html
    return val;

    //url(val + ".json"); //cals the function "url" and adds ".json" tag to end of user specified url
}


//This function takes in a specified url with proper ".json" tag at the end of the url and proceeds to get JSON data back from the server
function getJSON(url)
{
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.send();
    req.onreadystatechange = function ()
    {
        if (this.readyState === 4 && this.status === 200)
        {
            var jsonData = JSON.parse(this.responseText);
            parseJSON(jsonData); //if data retreival is successful, call "parseJSON" function 
        }
    };
}

//This function parses the JSON data retrieved from the server and stores it all in an array
function parseJSON(jsonData)
{
    var dataStorage = {}; //create an array to hold information from reddit

    //now store the information obtained from the URL array, looping through all 25(default value) posts
    for (var i = 0; i < 25; i++)
    {

        //get the title and url of each post
        var title = JSON.stringify(jsonData.data.children[i].data.title);
        var url = JSON.stringify(jsonData.data.children[i].data.url);
        var thumbnail = JSON.stringify(jsonData.data.children[i].data.thumbnail);
        //store the title and its respective url in each index of the array
        dataStorage[title] = url;

    }

    chrome.storage.local.set({ data: dataStorage });
}