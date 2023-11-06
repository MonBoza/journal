import './css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import {Entry} from "./journal.js";

function gatherInputs() {
  event.preventDefault();
  const titleText = document.getElementById("title-input").value;
  const bodyText = document.getElementById("body-input").value;
  const responseDiv = document.getElementById("response");
  let newEntry = new Entry();
  newEntry.body = bodyText;
  newEntry.title = titleText;
  
  const h2 = document.createElement("h2");
  h2.append(titleText);
  responseDiv.append(h2);

  const p = document.createElement("p");  
  p.append(newEntry.getTeaser());
  p.append(document.createElement("br"));
  p.append("Word Count: " + newEntry.countWords());
  p.append(document.createElement("br"));
  p.append(newEntry.countLetters());
  responseDiv.append(p);
}


window.addEventListener("load",function() {
  this.document.getElementById("inputForm").addEventListener("submit",gatherInputs);
});