import moment from "moment/moment";

export const filterByCat = (notes, chosenCat) => {
     return notes.filter((item) => item.category === chosenCat)    
};

export const formatDate = (date) => {
const formattedDate = moment(date).format('DD/MMM/YYYY');
return formattedDate
}