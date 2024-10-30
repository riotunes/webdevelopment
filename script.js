function getDate() {
    date = prompt("Please insert today's date");
}

function writeDate() { 
 
    console.log("clicked");
    document.write("Today's date is: " + date);
}

onload = getDate;