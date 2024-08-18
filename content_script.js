const queryParam = new URLSearchParams(window.location.search);
const query = queryParam.get('q');
if (query && !query.toLowerCase().includes('stardew valley')) {
  queryParam.set('q', query + ' Stardew Valley');
  window.location.search = queryParam.toString();
}
