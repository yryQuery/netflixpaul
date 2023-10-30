var API_KEY = '39175514-d6402a22617e8d6f70fd55d27';
var query = 'ancient weapons';
var URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}`;
var imageList = document.getElementById('imageList');

fetch(URL)
    .then(response => response.json())
    .then(data => {
        if (parseInt(data.totalHits) > 0) {
            data.hits.forEach(hit => {
                var listItem = document.createElement('li');
                var link = document.createElement('a');
                link.href = hit.pageURL;
                link.textContent = hit.pageURL;
                listItem.appendChild(link);
                imageList.appendChild(listItem);

                var image = document.createElement('img');
                image.src = hit.previewURL;
                listItem.appendChild(image);
                imageList.appendChild(listItem);

                console.log(hit.pageURL);
            });
        } else {
            var listItem = document.createElement('li');
            listItem.textContent = 'No hits';
            imageList.appendChild(listItem);
            console.log('No hits');
        }
    })
    .catch(error => console.error('Error fetching data:', error));