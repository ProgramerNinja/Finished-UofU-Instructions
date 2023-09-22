fetch('https://api.github.com/repos/nodejs/node/issues?per_page=6', {
  cache: 'reload',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
