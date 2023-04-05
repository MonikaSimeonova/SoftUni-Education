function ticketsSolve(arr,criteria){

    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const tickets = [];

    for (const line of arr) {
        let[destination,price, status] = line.split('|')
        price = Number(price);
        const currentTicket = new Ticket(destination, price, status);
        tickets.push(currentTicket)
    }

    const sorted = tickets.sort((a,b)=>{
        if(criteria === 'destination'){
            return a.destination.localeCompare(b.destination)
        }else if(criteria === 'status'){
            return a.status.localeCompare(b.status)
        }else{
            return a.price - b.price
        }
    })
    // console.table(sorted);
    return sorted;

}
ticketsSolve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')




