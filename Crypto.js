//const Search = document.getElementById("search");
//const data1 = document.getElementById("data");
//Search.addEventListener("click", () => {
//  let whatmarket = document.getElementById("market").value;
// console.log(whatmarket);
//const url =
//  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
//fetch(url)
// .then((res) => res.json())
// .then((filtereddata) => {
//console.log("its working");
// console.log(filtereddata);
//const data1 = document.getElementById("data");
//for (let i = 0; i < filtereddata.length; i++) {
//console.log()
//  data1.innerHTML +=
//    "<li>" +
//    filtereddata[i].id +
//    " " +
//    "price:" +
//    " " +
//   "$" +
//     filtereddata[i].current_price +
//      "<br></li>";
//  }
// })

//.catch((error) => {
//   console.log(error);
//  });
// //});

// const Search = document.getElementById("search");
// const data1 = document.getElementById("data");
// Search.addEventListener("click", () => {
//   let whatmarket = document.getElementById("market").value;
//   console.log(whatmarket);
//   const url =
//     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       // console.log(data)
//       data.forEach((obj) => {
//         console.log(obj);

//         const priceContainer = document.createElement("div");
//         priceContainer.classList.add("price-container");
//         const img = document.createElement("img");
//         img.src = obj.image;
//         img.classList.add("coin-img");
//         const p = document.createElement("p");
//         const coinName = obj.name;
//         const coinPrice = obj.current_price;
//         const coinInfo = document.createTextNode(`${coinName}: $${coinPrice}`);
//         p.appendChild(coinInfo);
//         priceContainer.appendChild(img);
//         priceContainer.appendChild(p);
//         data1.appendChild(priceContainer);
//       });
//       //   //console.log("its working");
//       //   console.log(filtereddata);
//       //   //const data1 = document.getElementById("data");
//       //   for (let i = 0; i < filtereddata.length; i++) {
//       //     //console.log()
//       //     data1.innerHTML +=
//       //       "<li>" +
//       //       filtereddata[i].id +
//       //       " " +
//       //       "price:" +
//       //       " " +
//       //       "$" +
//       //       filtereddata[i].current_price +
//       //       "<br></li>";
//       //   }
//     })

//     .catch((error) => {
//       console.log(error);
//     });
// });

const Search = document.getElementById("search");
const data1 = document.getElementById("data");
Search.addEventListener("click", () => {
  let whatmarket = document.getElementById("market").value;
  console.log(whatmarket);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      data.forEach((obj) => {
        console.log(obj);

        const priceContainer = document.createElement("div");
        priceContainer.classList.add("price-container");
        const img = document.createElement("img");
        img.src = obj.image;
        img.classList.add("coin-img");
        const p = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const coinName = obj.name;
        const coinPrice = obj.current_price;
        const coinInfo = document.createTextNode(`${coinName}: $${coinPrice}`);
        const high = document.createTextNode(`24h High: $${obj.high_24h}`);
        const low = document.createTextNode(`24h Low: $${obj.low_24h}`);
        p2.appendChild(high);
        p3.appendChild(low);

        p.appendChild(coinInfo);
        priceContainer.appendChild(img);
        priceContainer.appendChild(p);
        priceContainer.appendChild(p2);
        priceContainer.appendChild(p3);
        data1.appendChild(priceContainer);
      });
      //   //console.log("its working");
      //   console.log(filtereddata);
      //   //const data1 = document.getElementById("data");
      //   for (let i = 0; i < filtereddata.length; i++) {
      //     //console.log()
      //     data1.innerHTML +=
      //       "<li>" +
      //       filtereddata[i].id +
      //       " " +
      //       "price:" +
      //       " " +
      //       "$" +
      //       filtereddata[i].current_price +
      //       "<br></li>";
      //   }
    })

    .catch((error) => {
      console.log(error);
    });
});
