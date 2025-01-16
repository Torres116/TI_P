import { renderCategorieCardProduct , RenderProductCard} from "../scripts/Cards.js";
import { GetProducts as  GetProducts_Db} from "../scripts/Db.js";

const categories = ['Appetizers',"Sushi & Sashimi","Main Courses","Grill & BBQ",'Desserts','Drinks'];
let categoryShowcaseIndex = 1;
let products = [];


function RenderCategoriesShowcase() {
    const categoriesCardsContainer = document.getElementById('CatCard_Container');
    categoriesCardsContainer.innerHTML = ''; //Limpa os anteriores
    const filterProducts = products.filter(e => e.CATEGORY_ID.includes(categoryShowcaseIndex));
    filterProducts.forEach((product,index) => {
        const div = renderCategorieCardProduct(product,index);
        categoriesCardsContainer.appendChild(div);
    });
}

async function LoadCategories() {
    const categoriesContainer = document.getElementById('CatButtons_Container');
    categoriesContainer.innerHTML = '';
    categories.forEach((category, index) => {
        const button = document.createElement('button');
        button.className = 
        `w-[12rem] h-[50px] ${categoryShowcaseIndex - 1 === index ? 'bg-[#F5BE32] text-black' : 'bg-transparent'} border-white border-[2px] p-2 text-center ` + 
        "cursor-pointer hover:scale-105 transition-all duration-300 ";
        button.id = `category-${index}`;
        button.innerText = category;
        button.addEventListener('click',()=> {
            categoryShowcaseIndex = index + 1;
            LoadCategories();
        });
        // Evento click
        categoriesContainer.appendChild(button);
    });
    RenderCategoriesShowcase();
};

function LoadContent(products) {
    const cardContainer = document.getElementById("Cards_Container");
    products.forEach(product => {
        const div = RenderProductCard(product);
        cardContainer.appendChild(div);
    });

    LoadCategories();
};

async function Init() {
    products = await GetProducts_Db();
    LoadContent(products.slice(0,3));
    CheckUserSession();
}

window.addEventListener('load', Init);


function CheckUserSession(){
    $(document).ready(function(){
        $.ajax({
            url: "http://localhost/Projeto/src/scripts/checkSession.php",
            method: 'GET',
            dataType: 'json',
            sucess: function (res){
                if(res.logged_in) {
                    console.log("logged");
                } else {
                    console.log("not logged");
                }
            },

            error: function(ee) {
                console.log(ee);
            }
        });
    });
}