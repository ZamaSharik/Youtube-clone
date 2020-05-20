let nextToken;
let prevToken;
let pageNumber =1;
function searchByKeyword() {
    var query = document.getElementById('incomingQuery').value;
    var results = gapi.client.youtube.search.list({
      part: "snippet",
      type: "video",
      q: query,
      order: "viewCount",
      maxResults: 14
    });
    results.execute(function (response) {
      printResults(response);
    })
  }