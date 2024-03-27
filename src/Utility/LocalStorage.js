
// for readed books

const getStoredReadedBooks = () => {
  const storedReadedBooks = localStorage.getItem("readed-books");
  if(storedReadedBooks) {
    return JSON.parse(storedReadedBooks)
  }
  return []
};

const saveReadedBooks = (id) => {
    const storedReadedBooks = getStoredReadedBooks();
    const exists = storedReadedBooks.find(bookId => bookId === id)
    if (!exists){
        storedReadedBooks.push(id)
        localStorage.setItem('readed-books', JSON.stringify(storedReadedBooks))
    }
};

// for wishlist books

const getStoredWishlistBooks = () => {
  const storedWishlistBooks = localStorage.getItem("Wishlist-books");
  if(storedWishlistBooks) {
    return JSON.parse(storedWishlistBooks)
  }
  return []
};

const saveWishlistBooks = (id) => {
    const storedWishlistBooks = getStoredWishlistBooks();
    const exists = storedWishlistBooks.find(bookId => bookId === id)
    if (!exists){
        storedWishlistBooks.push(id)
        localStorage.setItem('Wishlist-books', JSON.stringify(storedWishlistBooks))
    }
};

export { getStoredReadedBooks, saveReadedBooks, getStoredWishlistBooks, saveWishlistBooks };
