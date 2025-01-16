const endpoint = "http://localhost/Projeto/src/scripts/GetProducts.php";
let products = [];

const FetchProducts = async () => {
    try {
        const response = await fetch(endpoint);
        products = await response.json();
    } catch (error) {
        console.log("error-> " + error);
    }

    return products;
}

export async function GetProducts() {
    if(!products || products.length === 0) {
        await FetchProducts();
    }
    return products;
}