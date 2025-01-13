
const endpoint = "http://localhost/TI_Proj/GetProducts.php";

async function GetProducts () {
    let products = [];
    try {
        const response = await fetch(endpoint);
        products = await response.json();
    } catch (error) {
        console.log("error-> " + error);
    }

    return products;
}

function LoadContent(products) {
    const cardContainer = document.getElementById("Cards_Container");
    products.forEach(product => {
       

        const div = document.createElement('div');
        div.className = "h-auto w-auto md:w-[30%] bg-[#2E2E2E] flex flex-col flex-wrap";

        div.innerHTML = 
        `
                <img src="https://img.pikbest.com/origin/09/13/98/01HpIkbEsTUqr.jpg!w700wp" class="h-[45%]">
                    <div class=" h-[55%] flex gap-5 p-6 flex-col ">
                        <h1 class="text-2xl text-[#F3D382] font-bold font-tertiary">${product.NOME}</h1>
                        <h2 class="text-sm md:text-lg h-[80px]  text-white  text-start">
                            ${product.DESCRICAO}</h2>
                        <button class="w-[10rem] bg-transparent  h-[3rem] border-yellow-600 border-[2px] glow-gold flex items-center justify-center
                            text-xl font-primary text-[#ffd700] font-bold p-4 hover:scale-105 transition-all duration-500">
                            Order Now
                            <style> 
                                .glow-gold { box-shadow: 0 0 10px #ffd700;}
                            </style>
                        </button>
                    </div>
        `;
        cardContainer.appendChild(div);
    })
}

async function Init() {
    const products = await GetProducts();
    LoadContent(products.slice(0,3));
}

window.addEventListener('load', Init);
