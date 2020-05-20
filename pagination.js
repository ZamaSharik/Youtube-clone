function nextPage() {
    var query = document.getElementById('incomingQuery').value;
    var results = gapi.client.youtube.search.list({
      part: "snippet",
      type: "video",
      q: query,
      order: "viewCount",
      maxResults: 14,
      pageToken: nextToken
    });
    
    let place = document.querySelector('#mainid');
    results.execute((response) => {
      pageNumber += 1;
      while (place.firstChild) {
        place.removeChild(place.firstChild);
      }
      printResults(response,pageNumber);
    })
  }
  
  function prevPage() {
    var query = document.getElementById('incomingQuery').value;
    var results = gapi.client.youtube.search.list({
      part: "snippet",
      type: "video",
      q: query,
      order: "viewCount",
      maxResults: 14,
      pageToken: prevToken
    });
    prevToken = results.prevPageToken;
    let place = document.querySelector('#mainid');
    console.log(prevToken);
    results.execute((response) => {
      pageNumber -= 1;
      while (place.firstChild) {
        place.removeChild(place.firstChild);
      }
      if(pageNumber ===0){
        pageNumber=1;
      }
      printResults(response,pageNumber);
    })
  }
