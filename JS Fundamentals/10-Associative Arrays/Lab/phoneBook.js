function phoneBook(input) {

    let phone = {};

    for (const entry of input) {
        //let list = entry.split(' ');
        //let name = list[0];
        //let phoneNumber = list[1];

        let [name, phoneNumber] = entry.split(' ');

        phone[name] = phoneNumber;

        //console.log(`${name} -> ${phone[name]}`);
    }
    for (const name in phone) {
        console.log((`${name} -> ${phone[name]}`));
    }
}
phoneBook(['Tim 0834212554',

    'Peter 0877547887',

    'Bill 0896543112',

    'Tim 0876566344'])