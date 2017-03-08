export function selectBook(book){
    //Action creator needs to return an action
    return{
        type:'BOOK_SELECTED',
        payload:book        
    };
}
