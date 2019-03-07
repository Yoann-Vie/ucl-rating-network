function fetchData(method, url, token = null, state = null){

    url = url.toLowerCase()

    const URI = "http://127.0.0.1:3000/"

    if(url === "login_check"){

        fetch(URI + url, {
            method: method,
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(state)
        })
        .then((response) => response.json())
        .then(
            data => localStorage.setItem("token", data.token)
        )
        .then(
            localStorage.setItem('isLogged', 1)
        )
        .then(
            setTimeout(function(){ 
                window.location.reload() 
            }, 1500)
        )
        .catch(error => console.log(error));
    }
    else{

        if(!token){
            return false;
        }

        return new Promise((resolve, reject) => {
                fetch(URI + url, {
                    method: method,
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + token
                    }
                })
                .then((response) => response.json())
                .then((res) => {
                    resolve(res);
                })
                .catch((error) => {
                    reject(error);
                });
    
        });

    }
}

export default fetchData;