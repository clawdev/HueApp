// Function to turn on lights

function changeStateOn() {
    return axios.put('https://192.168.0.230/api/7kMWhVbulfgbU6A7ltuJEZidPxEvg7NVzcAJ0nbl/lights/1/state', {"on":true, "sat":250, "bri":250,"hue":2000});
}


// Function to turn off lights

function changeStateOff() {
    return axios.put('https://192.168.0.230/api/7kMWhVbulfgbU6A7ltuJEZidPxEvg7NVzcAJ0nbl/lights/1/state', {"on":false, "sat":250, "bri":250,"hue":2000});
}

