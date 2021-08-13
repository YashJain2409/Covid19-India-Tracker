fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "22d4a8b684mshee4d057849fee43p1bf00bjsn39442eda7fb1",
      "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"
    }
  })
  .then(function(response) {
    response.json().then(function(data) {
      getValues(data);
    });
  })
  .catch(function(err) {
    console.error(err);
  });

function getValues(data) {
  var activeCase = Number(data.total_values.active);
  var confirmedCase = Number(data.total_values.confirmed);
  var recoveredCase = Number(data.total_values.recovered);
  var deathCase = Number(data.total_values.deaths);
  var lastUpdatedTime = data.total_values.lastupdatedtime;
  setValues(activeCase, confirmedCase, recoveredCase, deathCase, lastUpdatedTime);
}

function setValues(activeCase, confirmedCase, recoveredCase, deathCase, lastUpdatedTime) {
  document.querySelector(".lastUpdated").textContent = "Last Updated: " + lastUpdatedTime;
  document.querySelector(".numActive").textContent = activeCase.toLocaleString('en-IN');
  document.querySelector(".numConfirmed").textContent = confirmedCase.toLocaleString('en-IN');
  document.querySelector(".numRecovered").textContent = recoveredCase.toLocaleString('en-IN');
  document.querySelector(".numDeath").textContent = deathCase.toLocaleString('en-IN');
}
