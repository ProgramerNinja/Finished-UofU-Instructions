fetch(
  // Explain each parameter in comments below.
  //per_page will limit the return 10 items
  //state will only return issues with the open state
  //sort will sort the data by day created
  //directions sets the sort order by descending
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
