// stolen shamelessly from w3schools
// https://www.w3schools.com/xml/xml_parser.asp
function retrieveXML(fileLoc) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getUpdates(this);
    }
  };
  xhttp.open("GET", fileLoc, true);
  xhttp.send();
}

function getUpdates(xml) {
    var xmlDoc;
    xmlDoc = xml.responseXML;
    items = xmlDoc.getElementsByTagName("item");

    for (var i = 0; i < items.length && i < 3; i++) {
        item = document.createElement("div");
        item.className = "updateItem";

        date = document.createElement("div");
        date.className = "updateDate";
        utcDate = new Date(items[i].getElementsByTagName("pubDate")[0].innerHTML);
        date.innerHTML = utcDate.toLocaleDateString();

        desc = document.createElement("div")
        desc.className = "updateDesc";
        desc.innerHTML = items[i].getElementsByTagName("title")[0].innerHTML;

        item.appendChild(date);
        item.appendChild(desc);
        document.getElementById("updateBox").appendChild(item);
    }
}