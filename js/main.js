let newsList = []
var links=document.getElementsByClassName("nav-item")
async function getNews(category) {
    let request = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1d2c37a4a4874379acb400eb87870c4d`)
    let myDate = await request.json()
    newsList = myDate.articles
    displayData()
}
getNews("sports")

for(var i=0;i<links.length;i++)
{
    links[i].addEventListener("click",function(e)
    {
var currentCategory=e.target.text
getNews(currentCategory)
    })
}
function displayData() {
    temp = '';
    newsList.forEach(element => {
        temp += ` <div class="col-md-3">
        <div class="item border p-2">
            <img src="${element.urlToImage}" alt="" class="w-100">
            <h5>${element.title}</h5>
            <p>${element.description}</p>
        </div>
    </div>`;
    });
    document.getElementById("rowData").innerHTML = temp;
}