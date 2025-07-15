function addToCard(id, ks) {


    let jsonPayload = {
        'typ': 'addToCard',
        'id': id,
        'ks': ks,
    }

    fetch(HOST + 'cart', {
        method: 'POST',
        body: JSON.stringify(jsonPayload)
    })
        .then((response) => response.json())
        .then((data) => checkStatusAdd(data));

}

function checkStatusAdd(data) {
    if (data.SUCCESS === 'OK') {
        getCartData()
        let storeTopBox = document.getElementById('storeTopBox')
        storeTopBox.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        
    }
}
