// let usersContainer=document.getElementById("users");

// const getUsers=()=>{
//     return fetch('https://dummyjson.com/users')
//     .then(response=>response.json())
//     .then(response=>response)
//     .catch(error=>error)
// };
// const users = getUsers();
// const displayUsers = async()=>{
//     let user = await users;
//    !user?
//     // console.log({user});
//     userContainer.innerHTML="loading":
//       let userContainer = document.getElementById('users'); 
//     user.users.map(item=>{
//     let div = document.createElement('div');
//     div.className="person"
//     let img = document.createElement('img');
//     let name = document.createElement('h2');
//     let userName = document.createElement('p');
//         img.src=item.image;
//         name.innerHTML = `${item.firstName} ${item.lastName}`;
//         userName.innerHTML = item.username;
//         div.appendChild(img);

//         div.appendChild(name);
//         div.appendChild(userName);
//         userContainer.appendChild(div);
//     });
// };
// displayUsers()
const getUsers=()=>{
    return fetch('https://dummyjson.com/users')
    .then(response=>response.json())
    .then(response=>response)
    .catch(error=>error)
}
const users = getUsers()
const displayUsers = async()=>{
    let user = await users;
    console.log({user});
    let userContainer = document.getElementById('users');
    user.users.map(item=>{
    let div = document.createElement('div');
    let img = document.createElement('img');
    let name = document.createElement('h2');
    let userName = document.createElement('p');
        img.src=item.image;
        name.innerHTML = `${item.firstName} ${item.lastName}`;
        userName.innerHTML = item.username;
        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(userName);
        userContainer.appendChild(div);
    })
}
displayUsers()
