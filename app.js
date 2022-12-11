const form = document.querySelector('#searchForm');
const input = document.querySelector('#searchTerm');
const div = document.querySelector('#newGif');
const removeBtn = document.querySelector('#remove');
const body = document.querySelector('body');

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  search();
  input.value = '';
});

async function search() {
  const q = input.value;
  const res = await axios.get('https://api.giphy.com/v1/gifs/search', { params: { api_key: 'rvlJisTO0w0gMGC42gaM62GAeC3Y4H4N', q, limit: 1 } });
  console.log('response ===>>>', res);
  const img = document.createElement('img');
  img.src = res.data.data[0].images.original.url;
  div.append(img);
  console.log(res);
}

removeBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  div.remove();
  newDiv = document.createElement('div');
  newDiv.id = 'newGif';
  body.append(newDiv);
});
