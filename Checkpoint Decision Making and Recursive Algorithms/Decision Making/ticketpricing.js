function getTicketPrice(age) {
    if (age <= 12) {
        return 'Ticket price: $10';
    } else if (age >= 13 && age <= 17) {
        return 'Ticket price: $15';
    } else if (age >= 18) {
        return 'Ticket price: $20';
    } else {
        return 'Invalid age';
    }
}

console.log(getTicketPrice(10)); 
console.log(getTicketPrice(15)); 
console.log(getTicketPrice(25)); 