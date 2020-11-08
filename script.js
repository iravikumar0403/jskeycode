var keyCode = document.getElementById('main')

var key = document.getElementById('key')
var keyLocation = document.getElementById('location')
var which = document.getElementById('which')
var code = document.getElementById('code')
document.onkeyup = function(e){
    document.getElementById('cards-container').style.display = "flex"
    keyCode.innerHTML = e.keyCode
    if (e.which === 32){
        key.innerHTML = "(Space)"
    }else{
        key.innerHTML = e.key
    }
    keyLocation.innerHTML = e.location
    addLocation(e.location)
    which.innerHTML = e.which
    code.innerHTML = e.code
}

function addLocation(loc){
    var locationInfo = document.createElement('p')
    locationInfo.id = 'location-desc'
    switch(loc){
        case 0:
            locationInfo.innerHTML = '(General Keys)'
            break;
        case 1:
            locationInfo.innerHTML = '(Left Side Modifier Keys)'
            break;
        case 2:
            locationInfo.innerHTML = '(Right Side Modifier Keys'
            break;
        case 3:
            locationInfo.innerHTML = '(Numpad Keys)'
            break;
        default:
            locationInfo.innerHTML = ''
    }
    keyLocation.appendChild(locationInfo)
}