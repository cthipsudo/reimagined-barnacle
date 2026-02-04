console.log("Hello");
fetch("https://api.tvmaze.com/search/shows?q=dragon")
  .then((response) => {
    console.log("Response received", response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error("Error:", error));
