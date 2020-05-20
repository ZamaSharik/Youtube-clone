function printResults(response,pageNumber) {
    let responeArray = response.items;
    let temp, clone;
    prevToken = response.prevPageToken;
    nextToken = response.nextPageToken;

    document.querySelector("#mainid").innerHTML = '';
    if (pageNumber===0 || pageNumber === undefined) {
      document.getElementById("currentPageNumber").value = 1;  
    } else {
      document.getElementById("currentPageNumber").value = pageNumber;  
    }
    
    for (var i = 0; i < responeArray.length; i++) {
      var item = responeArray[i];
      temp = document.querySelector("#templateid");
      clone = document.importNode(temp.content, true);
      var image = clone.querySelector("#img");
      image.setAttribute('src', item.snippet.thumbnails.high.url);
      clone.querySelector("#title").innerHTML = `Title:  ${item.snippet.title}`;
      clone.querySelector("#publishedDate").innerHTML = `Published Date:  ${item.snippet.publishedAt}`;
      clone.querySelector("#description").innerHTML = `Description:  ${item.snippet.description}`;
      
      document.querySelector("#mainid").appendChild(clone);
    }
  }
