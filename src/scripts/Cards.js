
export function renderCategorieCardProduct(product,index = -1) {
    
    console.log(product);
    const div = document.createElement('div');

    div.className = " md:w-[48%] bg-[#2E2E2E] rounded-xl h-auto md:h-[250px] flex flex-col md:flex-row items-center p-4  ";
    div.innerHTML = `
            <div class="h-full p-2 md:w-[40%] flex items-center justify-center ">
                <img src="https://fitnessfactory.pt/images/blog_article/261f2ddd-b138-401a-bef5-8e41268538a6.jpg"
                    class="h-[98%] object-contain">
            </div>
            <div class="md:w-[60%] h-auto text-start p-2">
                <h1 class="font-tertiary text-[#F3D382] font-bold text-lg">
                    ${product.NAME}
                </h1>
                <h2 class="font-[Inter] font-thin text-white py-4 w-[90%] text-xl ">
                    ${product.DESCRIPTION}
                </h2>

                <div class="flex flex-row flex-wrap py-4 gap-2 justify-between">
                    <h2 class="font-dm font-bold text-[#F3D382] text-2xl">${product.PRICE}$</h2> 
                    <button class="w-auto bg-transparent h-[3rem]  border-yellow-600 border-[2px] flex items-center justify-center
                        text-md font-primary text-[#ffd700] font-bold p-4 hover:scale-110 hover:text-white transition-all duration-300">
                        RESERVE
                    </button>
                </div>
            </div>
    `;
    return div;
    
};

export function RenderProductCard(product) {
    
    const div = document.createElement('div');
    div.className = "h-auto w-auto md:w-[30%] bg-[#2E2E2E] flex flex-col flex-wrap rounded-md";

    div.innerHTML = 
    `
            <img src="https://img.pikbest.com/origin/09/13/98/01HpIkbEsTUqr.jpg!w700wp" class="h-[45%] rounded-t-md">
                <div class=" h-[55%] flex gap-5 p-6 flex-col ">
                    <h1 class="text-2xl text-[#F3D382] text-start font-bold font-tertiary">${product.NAME}</h1>
                    <h2 class=" md:text-lg h-[80px] font-tertiary  text-white  text-start">
                        ${product.DESCRIPTION} </h2>
                    <button class="w-[10rem] bg-transparent  h-[3rem] border-yellow-600 border-[2px] flex items-center justify-center
                        text-xl font-primary text-[#ffd700] font-bold p-4 hover:scale-110 transition-all duration-300  hover:text-white">
                        Order Now
                    </button>
                </div>
    `;
    return div;
};