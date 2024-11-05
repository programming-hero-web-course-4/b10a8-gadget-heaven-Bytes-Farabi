import { toast } from "react-toastify";

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    return storedListStr ? JSON.parse(storedListStr) : [];
};

const handleAddToCartList = (product) => {
    const storedList = getStoredReadList();

    // Check if the product is already in the cart list by comparing product IDs
    if (storedList.some(item => item.product_id === product.product_id)) {
        toast('This product is already in the cart');
    } else {
        // Add the full product object to the cart list
        storedList.push(product);
        localStorage.setItem('read-list', JSON.stringify(storedList));
        toast('This product has been added to your cart');
    }
};


const getStoredWishList = () => {
    // read-list
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        // already exists. do not add it
        toast('already exists in the cart list')
        document.getElementById('wishlistBtn').disabled = true;
        document.getElementById('wishlistBtn').style.color = 'gray';
        document.getElementById('wishlistBtn').style.border = '1px solid gray';
    }
    else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
        toast('Added to WishList')
    }
}

export { handleAddToCartList, addToStoredWishList, getStoredReadList, getStoredWishList }