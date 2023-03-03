const loadData = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayAllData(data.data.tools))
}



const displayAllData = (data) => {

    // toggleLoader(true)
    const cardContainer = document.getElementById('card-container');
    console.log(data)
    if (data.length > 6) {
        aiTools = data.slice(0, 6)
        document.getElementById('btn-see-more').classList.remove('hidden')
    } else {
        document.getElementById('see-more').classList.add('hidden')
    }
    aiTools = data.slice(0, 6)
    console.log(aiTools)
    aiTools.forEach(singleData => {
        console.log(singleData)
        const { image, features, name, published_in, id } = singleData;

        // features.forEach(feature=>console.log(feature))
        // const ol = document.createElement('ol');
        cardContainer.innerHTML += `  
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure class="py-10 px-10"><img class="rounded-lg h-48" src="${image}" alt="Shoes" /></figure>
        <div class="card-body">
         
           <h2 class="card-title text-[#111111]">Features</h2>

           <ol class="list-decimal pl-4" id="features-item">
           ${features.map(feature => (`<li class="text-[16px] font-semibold text-[#585858]">${feature}</li>`))}
           </ol>

           <hr>
            <div class="card-actions flex justify-between items-center h-20 ">
                <div>
                <h2 class="card-title text-[#111111]">${name}</h2>
                <h3 class="text-[#585858]">${published_in}</h3>
                </div>
                <div class="">
                
                <button onclick="loadDetails('${id}')" data-te-toggle="modal"
                data-te-target="#exampleModalLg"
                data-te-ripple-init
                data-te-ripple-color="light"  class="btn btn-circle border-none bg-orange-300 hover:bg-orange-200">
               
                <i class="fa-solid fa-arrow-right"></i>
                </button>
                </div>
            </div>
        </div>
    </div>`


    })
    // toggleLoader(false)

}

// data load for show button click 
const loadData2 = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayAllData2(data.data.tools))
}
const displayAllData2 = (data) => {

    // toggleLoader(true)
    const cardContainer = document.getElementById('card-container');
    console.log(data)
    if (data.length > 6) {
        // aiTools = data.slice(0,6)
        document.getElementById('btn-see-more').classList.add('hidden')
    }

    cardContainer.innerHTML = ''
    console.log(aiTools)
    data.forEach(singleData => {
        console.log(singleData)
        const { image, features, name, published_in, id } = singleData;

        // features.forEach(feature=>console.log(feature))
        // const ol = document.createElement('ol');
        cardContainer.innerHTML += `  
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure class="py-10 px-10"><img class="rounded-lg h-48" src="${image}" alt="Shoes" /></figure>
        <div class="card-body">
         
           <h2 class="card-title text-[#111111]">Features</h2>

           <ol class="list-decimal pl-4" id="features-item">
           ${features.map(feature => (`<li class="text-[16px] font-semibold text-[#585858]">${feature}</li>`))}
           </ol>

           <hr>
            <div class="card-actions flex justify-between items-center h-20 ">
                <div>
                <h2 class="card-title text-[#111111]">${name}</h2>
                <h3 class="text-[#585858]">${published_in}</h3>
                </div>
                <div class="">
                
                <button onclick="loadDetails('${id}')" data-te-toggle="modal"
                data-te-target="#exampleModalLg"
                data-te-ripple-init
                data-te-ripple-color="light"  class="btn btn-circle border-none bg-orange-300 hover:bg-orange-200">
               
                <i class="fa-solid fa-arrow-right"></i>
                </button>
                </div>
            </div>
        </div>
    </div>`


    })
    // toggleLoader(false)

}
// const toggleLoader=isLoading=>{
//     const loader =document.getElementById('loader');
//     if(isLoading){
//         loader.classList.remove('hidden')
//     }else{
//         loader.classList.add('hidden')
//     }
// }


// const ol=document.getElementById('features-item');
// data.features.forEach(feature=>{
//     let li =document.createElement('li');
//     li.innerText = feature;
//     ol.appendChild(li)
// })
document.getElementById('btn-see-more').addEventListener('click', function () {
    loadData2()
    document.getElementById('see-more').classList.add('hidden')
})

const loadDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data.data))
}


const showDetails = datas => {
    console.log(datas)
    const modalBody = document.getElementById('modal-body');
    const {image_link,image,description} = datas;
    modalBody.innerHTML = `
    <div>
    <div class="flex justify-center ">
        <div
            class="block max-w-sm rounded-lg bg-red-100 text-center shadow-lg dark:bg-neutral-700">
           
            <div class="p-6">
                <h5
                    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Special title treatment
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    With supporting text below as a natural lead-in to additional
                    content.
                </p>

            </div>
            <div class="flex gap-4 py-5 px-5">
                <div class="h-28 w-32 bg-slate-50">

                </div>
                <div class="h-28 w-32 bg-slate-50">

                </div>
                <div class="h-28 w-32 bg-slate-50">

                </div>
                
            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
           
        </div>
    </div>
</div>
<!-- modal right site -->
<div>
    <div class="flex justify-center">
        <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                <img class="rounded-t-lg"
                    src="${image_link[0] ? image_link[0] : image}" alt="" />
            </a>
            <div class="p-6 text-center">
                <h5
                    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Card title
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </p>
            </div>
        </div>
    </div>
</div>
    
    `
}





