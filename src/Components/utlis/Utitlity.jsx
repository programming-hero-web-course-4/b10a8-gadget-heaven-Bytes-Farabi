import { toast } from "react-toastify";

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    return storedListStr ? JSON.parse(storedListStr) : [];
};

const handleAddToCartList = (product) => {
    const storedList = getStoredReadList();

    if (storedList.some(item => item.product_id === product.product_id)) {
        toast('This product is already in the cart');
    } 
    else 
    {
        storedList.push(product);
        localStorage.setItem('read-list', JSON.stringify(storedList));
        toast('This product has been added to your cart');
    }
};


const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else {
        return [];
    }
}

const addToStoredWishList = (product) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.some(item => item.product_id === product.product_id)) {
        toast('This product is already in the wishlist');
        document.getElementById('wishlistBtn').disabled = true;
        return; 
    } else {
        storedWishList.push(product);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
        toast('Added to Wishlist');
    }
}

export { handleAddToCartList, addToStoredWishList, getStoredReadList, getStoredWishList }