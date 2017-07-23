var xmlhttp = new XMLHttpRequest();
var jsonGAUrls;

const BB_ITEMS_JSON = "bb-items.json";
//const BB_ITEMS_JSON_PATH = "/" + "json" + "/" + BB_ITEMS_JSON;

const PLATFORM_CC_ROOT_FOLDER = "courses";
const PATH_TO_HTML_CONTENT = "Banking_Specialist_Dev";
const SOLUTION_PATH = "dynamic-links/"+BB_ITEMS_JSON;
const OPEN_IN_NEW_WINDOW = true;

$( document ).ready(function() {
  readSectionUrls();
});

function readSectionUrls(){
  console.log('Attempting to fetch json object.');
  xmlhttp = new XMLHttpRequest();
  //var jsonUrl = window.location.origin + jsonUrl + BB_ITEMS_JSON_PATH;

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // console.log('Successfully fetched JSON object.');
      // console.log('RESPONSE'+this.responseText);
      jsonGAUrls = JSON.parse(this.responseText);
    }
  };
  xmlhttp.open("GET", SOLUTION_PATH, true);
  xmlhttp.send();
}

function openGA(element, event){
  event.preventDefault();
  var module = element.getAttribute("module");
  var activityId = element.id;

  var jsonModule = jsonGAUrls[module];
  if(OPEN_IN_NEW_WINDOW){
    window.open(jsonModule[activityId]);
  }
  else{
    window.location.href = jsonModule[activityId];
  }
  return false;
}

function setContentCollectionPath(){
  var pathname = window.location.pathname;
  var pathParts = pathname.split('/');
  var courseId = pathParts.indexOf()
}
