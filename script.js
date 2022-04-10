window.onload = function() 
{
    var message = window.document.getElementById('message')
    var picture  = window.document.getElementById('picture')
    var date = new Date()
    var hour = date.getHours()

    if(hour >= 0 && hour < 12){
        picture.src = 'images/morning.png'
        picture.alt = 'Morning Picture'
        message.innerHTML = `It is ${hour} am`
        document.body.style.background = '#e2cd9f'
    }
    else if(hour >= 12 && hour < 18){
        message.innerHTML = `It is ${hour-12} pm`
        picture.src = 'images/afternoon.png'
        picture.alt = 'Afternoon Picture'
        document.body.style.background = '#b9846f'
    }
    else{
        message.innerHTML = `It is ${hour-12} pm `
        picture.src = 'images/night.png'
        picture.alt = 'Night Picture'
        document.body.style.background = '#515154'
    }
}