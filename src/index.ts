import { User } from './models/User';
import axios from 'axios';
// axios.post('http://localhost:3000/users', {
//     name:'myname',
//     age: 20,
// });
// axios.get('http://localhost:3000/users/1');


const user = new User({id: 1,});
user.set({
    name:'newName',
    age: 999
});
user.set({
    age: 7777
});
console.log(user.get('name'))
console.log(user.get('age'))


user.on('change', ()=>{
 console.log('Change #1');
 
})
user.on('change', ()=>{
 console.log('Change #2');
 
})
user.on('save', ()=>{
 console.log('Save #1');
 
})
user.trigger('change')

console.log(user);
user.fetch()
user.set({name: 'ppp', age: 999})
user.save();