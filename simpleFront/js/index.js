async function fetchUserData(){
    // a/ method we use to make the js wait until the data is fetched
    const res = await fetch('http://127.0.0.1:5002/api/users/getAllUsers')
    console.log(res);
    const data = await res.json();
    console.log(data);
}
fetchUserData();