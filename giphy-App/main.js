
const button = document.querySelector('.btn');
const searchQuery = document.querySelector('.search');
const requiredNumber = document.querySelector('#requiredNumber');

requiredNumber.addEventListener('keyup', enterpressed);
function enterpressed(event){
    if(requiredNumber.value === '' || requiredNumber.value === undefined || requiredNumber.value === null){
        return alert('Add some text first')
  } else if(event.key === 'Enter'){
    giphySearch(); 
    }
}

searchQuery.addEventListener('keyup', enterpressed);
function enterpressed(event){
    if(searchQuery.value === '' || searchQuery.value === undefined || searchQuery.value === null){
        return alert('Add some text first')
  } else if(event.key === 'Enter'){
    giphySearch(); 
    }
}

button.addEventListener('click', () => {
    if(searchQuery.value === '' || searchQuery.value === undefined || searchQuery.value === null){
        return alert('Enter some text first')
  } 
giphySearch();
})

function giphySearch(){
    const input = document.querySelector('#searchInput').value; 
    const requiredResult = document.querySelector('#requiredNumber').value;
    const url = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=8Z83DoNxjr9BUrHOrEt2xr4ZYFxodA6Z&limit=${requiredResult}`;    
    fetch(url)
    .then(response => response.json())
    .then(giphyData => {            
        // console.log(giphyData);
        renderRetrievedData(giphyData.data);
    })
}

function renderRetrievedData(items){
    const searchResult = document.querySelector('#searchResult');
    searchResult.innerHTML = "";
    items.forEach(element => {
        const searchItem = document.createElement('div')
        // searchItem.classList.add('results');
        searchItem.innerHTML =`<img src="${element.images.original.url}">`
        searchResult.appendChild(searchItem);
    });
}
























     