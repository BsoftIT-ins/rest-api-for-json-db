

/**
 * Get all products
 */

const getAllProduct = () => {
    try {
        fetch('api/v1/products')
        .then(res => res.json())
        .then(res=> {
            console.log(res);
        })
        .catch(error => {
            console.log(error.message);
        })
    } catch (error) {
        console.log(error.message);
    }
}
getAllProduct();
