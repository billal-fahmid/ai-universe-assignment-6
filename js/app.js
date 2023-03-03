
let arry =[];
const loadData = () => {
    toggleLoader(true)
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            arry =data.data.tools
            displayAllData(data.data.tools)})
        
}


const cardContainer = document.getElementById('card-container');
const displayAllData = (data) => {

   
    
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

      
        cardContainer.innerHTML += `  
        <div class="card card-compact w-full max-w-96 bg-base-100 shadow-xl">
        <figure class="md:py-10 md:px-10"> <img class="rounded-lg md:h-48" src="${image}" alt="Shoes" /></figure>
        <div class="card-body">
         
           <h2 class="card-title text-[#111111]">Features</h2>

           <ol class="list-decimal pl-4" id="features-item">
           ${showAllFeatures(features)}
           </ol>

           <hr>
            <div class="card-actions flex justify-between items-center h-20 ">
                <div>
                <h2 class="card-title text-[#111111]">${name}</h2>
                <h3 class="text-[#585858]"><i class="fa-solid mr-2 fa-calendar-days"></i>${published_in}</h3>
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
    toggleLoader(false)

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
        <div class="card card-compact w-full max-w-96 bg-base-100 shadow-xl">
        
        <figure class="md:py-10 md:px-10"><img class="rounded-lg h-full md:h-48" src="${image}" alt="Shoes" /></figure>
        <div class="card-body">
         
           <h2 class="card-title text-[#111111]">Features</h2>

           <ol class="list-decimal pl-4" id="features-item">
           
           ${showAllFeatures(features)}
           </ol>

           <hr>
            <div class="card-actions flex justify-between items-center h-20 ">
                <div>
                <h2 class="card-title text-[#111111]">${name}</h2>
                <h3 class="text-[#585858]"><i class="fa-solid mr-2 fa-calendar-days"></i>${published_in}</h3>
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
    toggleLoader(false)

}
const toggleLoader=isLoading=>{
    const loader =document.getElementById('loader');
    if(isLoading){
        loader.classList.remove('hidden')
    }else{
        loader.classList.add('hidden')
    }
}

const showAllFeatures=(features)=>{
    let featureHtml ='';
    for(const feature of features){
        featureHtml +=`<li>${feature}</li>`
    }
    return featureHtml;
}

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

// modal data .........................

const showDetails = datas => {
    console.log(datas)
    const modalBody = document.getElementById('modal-body');
    const {image_link,image,description,accuracy,pricing,features,integrations,input_output_examples} = datas;
    for(const feature in features){
        console.log(feature.feature_name)
    }
    modalBody.innerHTML = `
    <div class="">
    <div class="flex justify-center h-[500px]">
        <div
            class="block max-w-sm rounded-lg bg-red-100 text-center shadow-lg dark:bg-neutral-700">
           
            <div class="px-6 py-2 ">
                <h5
                    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    ${description}
                </h5>
               

            </div>
            <div class="flex gap-4 py-5 px-5">
                <div class="h-28 w-32 bg-slate-50 flex justify-center items-center rounded">
                    <h5
                    class=" text-xl font-medium leading-tight text-green-600 dark:text-neutral-50">
                    ${pricing[0].price ? pricing[0].price : 'Free of Cast'}
                </h5>
                </div>
                <div class="h-28 w-32 bg-slate-50 flex justify-center items-center rounded">
                    <h5
                    class=" text-xl font-medium leading-tight text-orange-500 dark:text-neutral-50">
                    ${pricing[1].price ? pricing[1].price : 'Free of Cast'}
                </h5>
                </div>
                <div class="h-28 w-32 bg-slate-50 flex justify-center items-center rounded">
                    <h5
                    class=" text-xl text-red-600 font-medium leading-tight  dark:text-neutral-50">
                    ${pricing[2].price ? pricing[2].price : 'Free of Cast'}
                </h5>
                </div>
                
            </div>
            <div class="flex justify-between gap-4 py-5 px-5">
                <div class="text-left">
                    <h5
                    class=" text-xl  font-medium leading-tight  dark:text-neutral-50">
                    Features
                    </h5>
                    <ul >
                        ${showModalFeature(features)}
                    </ul>
                </div>
                <div class="text-left">
                    <h5
                    class=" text-xl  font-medium leading-tight  dark:text-neutral-50">
                     Integrations
                    </h5>
                    <ul class="text-left">
                         ${showAllFeatures(integrations)?showAllFeatures(integrations) : 'No data Found'}
                    </ul>
                </div>
            </div>
           
        </div>
    </div>
</div>
<!-- modal right site -->
<div class="">
    <div class="flex justify-center h-[500px]">
        <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
            <div class="flex justify-center space-x-2">
        <button id="btn-accuracy"
            type="button" 
            class="mb-2 ml-44 mt-2 bg-orange-500 flex absolute rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
             <span
            class="mr-2 inline-block whitespace-nowrap rounded-[0.27rem] bg-danger-100 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-danger-700"
            >${accuracy.score? accuracy.score : ''}</span
            >
            ${accuracy.score? 'Accuracy' :''}
           
        </button>
        </div>
                <img class="rounded-t-lg static"
                    src="${image_link[0] ? image_link[0] : image}" alt="" />
            </a>
            <div class="p-6  text-center">
                <h5
                    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    ${input_output_examples[0].input?input_output_examples[0].input : 'Can you give any example?'}
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                ${input_output_examples[0].output?input_output_examples[0].output : 'No! Not Yet! Take a break!!!'}
                </p>
            </div>
        </div>
    </div>
</div>
    
    `;
    const btnAccuracy = document.getElementById('btn-accuracy');
    if(accuracy.score===null){
        btnAccuracy.classList.add('hidden');
    }
}
const showModalFeature=(object)=>{
    let objectHtml ='';
    for(const key in object){
        objectHtml +=`<li>${object[key].feature_name}</li>`
    }
    return objectHtml;

}

document.getElementById('btn-sort').addEventListener('click' , function(){
    const sortByDate = arry.sort(function(a,b){
        return new Date(b.published_in) - new Date(a.published_in);
    })
    cardContainer.innerHTML =''
    displayAllData(sortByDate)
    cardContainer.innerHTML =''
    displayAllData2(sortByDate)
})




