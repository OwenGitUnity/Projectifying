//interfaces
// interface IsPerson {
//     name: string;
//     age: number
//     speak(a: string): void;
//     spend(a:number): number;
// }

// const me: IsPerson = {
//     name: 'shaun',
//     age: 30,
//     speak (text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number { 
//         console.log('i spent', amount);
//         return amount;
//     }
    
// };
// const greetPerson = (person: IsPerson) => {
//     console.log('hello', person.name);
// }
// greetPerson(me)

// console.log(me);


import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice ('yoshi', 'web work', 250);
docTwo = new Payment ('luigi', 'plumbing work', 200);

let docs: HasFormatter[] = [];
docs.push(docOne)
docs.push(docTwo)

console.log(docs);


const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the mario website', 300)

let invoices : Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv =>{
    console.log(inv.client, inv.details, inv.amount, inv.format());
})



const form = document.querySelector(".new-item-form")as HTMLFormElement; 

const type = document.querySelector('#type')as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom')as HTMLInputElement;
const details = document.querySelector('#details')as HTMLInputElement;
const amount = document.querySelector('#amount')as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc : HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    console.log(doc);
    
    list.render(doc, type.value, 'end');

});
    
// }) ; 
// class sentComponent {
//    public sentBy: string;
//    public explanation: string|number;
//    public amount: number;

//     constructor(c: string, a: string, d: number) {
//         this.sentBy = c;
//         this.explanation = a;
//         this.amount = d;
//     }
//         content(){
//             return `${this.sentBy} owes $${this.amount} for ${this.explanation}`;
//         };

    
// }
//     const sentOne = new sentComponent('yoshi', 'is the ceo of the yoshi company', 970);
// const sentTwo = new sentComponent('bowser', 'is the ceo of the bowser company', 1550);

// let sent : sentComponent[] = [];
// sent.push(sentOne);
// sent.push(sentTwo);

// sent.forEach(inv =>{
//     console.log(inv.sentBy, inv.explanation, inv.amount, inv.content());
// })

// const form = document.querySelector(".new-item-form")as HTMLFormElement; 

// const type = document.querySelector('#type')as HTMLSelectElement;
// const tofrom = document.querySelector('#tofrom')as HTMLInputElement;
// const details = document.querySelector('#details')as HTMLInputElement;
// const amount = document.querySelector('#amount')as HTMLInputElement;

// form.addEventListener('submit', (e: Event) => {
//     e.preventDefault();

//     console.log(
//         type.value,
//         tofrom.value,
//         details.value,
//         amount.valueAsNumber
//     );
// });        