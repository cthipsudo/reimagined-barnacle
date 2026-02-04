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

// Factory Functions

function hex(r, g, b) {
  return `# ${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };
  color.hex = function () {
    const { r, g, b } = this;
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };
  return color;
}

const aColor = makeColor(0, 0, 255);

// Constructor Functions

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }

// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b})`;
// };

// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
// };

// Color.prototype.rgba = function (a = 1.0) {
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b}, ${a})`;
// };

// const color1 = new Color(45, 245, 80);
// const color2 = new Color(0, 0, 0);

// JS Class Constructor

class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.b = b;
    this.g = g;
    this.name = name;
  }
  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  hex() {
    const { r, g, b } = this;
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }
  rgba(a = 1.0) {
    return `${this.innerRGB()}, ${a}`;
  }
}

const c1 = new Color(120, 250, 240, "boogie");
