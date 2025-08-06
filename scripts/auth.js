//Dom elemnts
const loginForm=document.getElementById('login-form')



const signupForm=document.getElementById('signup-form')
const users= JSON.parse(localStorage.getItem('checked')) || []
console.log(users)
let currentUser=null

document.addEventListener('DOMContentLoaded', () => {
    //logging user

    loginForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        try {
            if (!username || !password) {
                throw new Error('All fields are required');
            }
            const userFound = users.find(user => user.username === username && user.password === password);
            if (userFound) {
                currentUser = userFound;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                alert('Login successful');
                window.location.href = '../index.html'; 
            } else {
                alert('Invalid credentials');
            }
        }catch(error){
            console.log(error)
        }
    })

    //creating user
    signupForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const username=document.getElementById('username').value
        const email=document.getElementById('email').value
        const password=document.getElementById('password').value
        try{
            if(!username || !email || !password){
                throw new Error('All fields are required')
            }
            const user={username, email, password}
            users.push(user)
            localStorage.setItem('checked', JSON.stringify(users))
            currentUser=user
            localStorage.setItem('currentUser', JSON.stringify(currentUser))
            
            signupForm.reset()
            alert('Signup successful')
            window.location.href='../index.html'
            
        }catch(error){
            console.log(error)
            alert(error)
        }
    })
});



