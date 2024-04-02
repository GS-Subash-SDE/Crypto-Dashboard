const wrapper = document.querySelector("section");

// fetching date
fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
)
  .then((respone) => respone.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `<div class="img-cont">
                <img src=${element.image} alt="Image" />
              </div>
              <div class="details">

                <div class="row">
                  <span class="coin-name">${element.name}</span>
                  <span class="price">${element.current_price}</span>
                </div>
                <div class="row">
                  <span class="short-name">${element.symbol}</span>
                  <span class="percentage">${element.ath_change_percentage}%</span>
                </div>
              </div>`;
      wrapper.appendChild(card);
    });
  })
  .catch((err) => {
    wrapper.innerHTML = "Loading...";
    console.log("Error fetching data:", err);
  });
