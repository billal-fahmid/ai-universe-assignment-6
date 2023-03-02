const loadData = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayAllData(data.data.tools))
}

const displayAllData = (data) => {
    const cardContainer = document.getElementById('card-container');
    data.forEach(singleData => {
        console.log(singleData)
        const {image,features,name,published_in}=singleData;
        
        // features.forEach(feature=>console.log(feature))
        // const ol = document.createElement('ol');
        cardContainer.innerHTML += `  
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure class="py-10 px-10"><img class="rounded-lg" src="${image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">Features</h2>
           <ol>
           ${features.map(feature=>{
            return `<li> ${feature}</li>`
            
         })}
           </ol>
            
            <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>`
    })
}

loadData()