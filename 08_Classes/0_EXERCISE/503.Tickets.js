function solve(inputArr, criteria) {
    let tickets = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    for (const ticketInput of inputArr) {
        let [destination, price, status] = ticketInput.split('|');
        let curTicket = new Ticket(destination, price, status);
        tickets.push(curTicket);
    }
    if (criteria === 'destination') {
        tickets = tickets.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (criteria === 'price ') {
        tickets = tickets.sort((a, b) => a.price- b.price);
    } else {
        tickets = tickets.sort((a, b) => a.status.localeCompare(b.status));
    }
    return tickets;
}

let result = solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'
);

result.forEach(ticket => {
    console.log(`${ticket.destination} - ${ticket.price} - ${ticket.status}`)
});