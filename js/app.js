const loadData = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayAllData(data.data.tools))
}

const displayAllData = (data) => {
    const cardContainer = document.getElementById('card-container');
    data.slice(0,6).forEach(singleData => {
        console.log(singleData)
        const {image,features,name,published_in}=singleData;
        
        // features.forEach(feature=>console.log(feature))
        // const ol = document.createElement('ol');
        cardContainer.innerHTML += `  
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure class="py-10 px-10"><img class="rounded-lg h-48" src="${image}" alt="Shoes" /></figure>
        <div class="card-body">
         
           <h2 class="card-title text-[#111111]">Features</h2>

           <ol class="list-decimal pl-4">
           ${features.map(feature=>(`<li class="text-[16px] font-semibold text-[#585858]">${feature}</li>`))}
           </ol>

           <hr>
            <div class="card-actions flex justify-between items-center h-20 ">
                <div>
                <h2 class="card-title text-[#111111]">${name}</h2>
                <h3 class="text-[#585858]">${published_in}</h3>
                </div>
                <div class="">
                
                <button class="btn btn-circle border-none bg-orange-300 hover:bg-orange-200">
                <i class="fa-solid fa-arrow-right"></i>
                </button>
                </div>
            </div>
        </div>
    </div>`
    })
}

