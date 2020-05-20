function init() {
  const formDivId = document.createElement("div");
  formDivId.setAttribute('id', 'search-form');
  const label = document.createElement("div");
  label.setAttribute('id', 'label');
  label.innerHTML = "YouTube Query Search";
  formDivId.appendChild(label);

  const lineBreak = document.createElement("br");
  formDivId.appendChild(lineBreak);

  const inputType = document.createElement("input");
  inputType.setAttribute("type", "text");
  inputType.setAttribute("id", "incomingQuery");
  inputType.setAttribute("name", "inputQuery");
  inputType.setAttribute("placeholder", "Enter the keyword");
  inputType.setAttribute("size", 50);
  formDivId.appendChild(inputType);

  const button = document.createElement("button");
  button.setAttribute("id", "querySearch");
  button.setAttribute('onclick', 'searchByKeyword();');
  button.innerHTML = "Search";
  formDivId.appendChild(button);

  const nextButton = document.createElement("button");
  nextButton.setAttribute("id", "buttonNext");
  nextButton.innerHTML = "Next Page";
  nextButton.setAttribute("onclick", "nextPage()");
  formDivId.appendChild(nextButton);

  const lineBreak = document.createElement("br");
  formDivId.appendChild(lineBreak);

  const prevButton = document.createElement("button");
  prevButton.setAttribute("id", "buttonPrev");
  prevButton.innerHTML = "Previous Page";
  prevButton.setAttribute("onclick", "prevPage()");
  formDivId.appendChild(prevButton);
  
  document.querySelector('body').prepend(formDivId);

}

function init2() {
  gapi.client.setApiKey('AIzaSyDiXfGbdU645g0kbAPks8c39vqSewdA3Ug');
  gapi.client.load('youtube', 'v3', function () {});
}






