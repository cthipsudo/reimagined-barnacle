// console.log("Hello");
//============================ Using Fetch to grab APIs ========================//
// fetch("https://api.tvmaze.com/search/shows?q=dragon")
//   .then((response) => {
//     console.log("Response received", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch("https://api.tvmaze.com/search/shows?q=dog");
//   })
//   .then((res) => {
//     console.log("response 2 recieved", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.error("Error:", error));

// const loadTVShows = async () => {
//   try {
//     const response = await fetch("https://api.tvmaze.com/searc/shows?q=dragon");
//     const data = await response.json();
//     console.log(data);
//     const response2 = await fetch("https://api.tvmaze.com/search/shows?q=dog");
//     const data2 = await response2.json();
//     console.log(data2);
//   } catch (error) {
//     console.log("Bad Connection", error);
//   }
// };

// loadTVShows();

//============================ Using AXIOS to grab APIs ========================//
// axios
//   .get("https://catfact.ninja/facs")
//   .then((res) => {
//     console.log("RESPONSE:", res);
//   })
//   .catch((error) => {
//     console.log("ERROR!", error);
//   });

const getCatFact = async () => {
  const res = await axios.get("https://catfact.ninja/facts");
  console.log(res.data);
};

//getCatFact();

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (error) {
    return "NO Jokes available";
  }
};

//getDadJoke();

const btn = document.querySelector("#jokeButton");
const pContainer = document.querySelector("#jokeContainer");

btn.addEventListener("click", async () => {
  pContainer.innerText = await getDadJoke();
});
