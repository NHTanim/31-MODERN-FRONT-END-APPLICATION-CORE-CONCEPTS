fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => showUserName(data));

        function showUserName(data){
            let userHTML =''
            data.forEach(user => {
                  userHTML = userHTML + `
                  <div class="users">
                    <h1>${user.name}</h1>
                    <p>Email : ${user.email}</p>
                    <p>${user.company.name}. ${user.company.catchPhrase}. ${user.company.bs}</p>
                 </div>`
            });
            const userContainer = document.getElementById('user-container');
            userContainer.innerHTML = userHTML;
        }