const showSearchResults = (e) => {
  const keyword = e.value.toLowerCase();
  fetchDataCovid(keyword);
};

const fetchDataCovid = (keyword) => {
  fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
    .then((response) => response.json())
    .then((res) => {
      const data = res.data;
      let searchResults = data.map((res) => {
        filterResults(res, keyword);
      });
    });
};

const filterResults = (res, keyword) => {
  if (res.provinsi.toLowerCase().includes(keyword)) {
    console.log(res.provinsi);
  }
};
