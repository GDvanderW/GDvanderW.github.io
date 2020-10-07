const nasaApiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=pqvIgkpAzk4OanIyP7dzXHxFMR3peIyUfpWNHjCB`

fetch(nasaApiUrl)
    .then( (data) => {
        if(data.ok){
            return data.json()
        }
        throw new Error('Response not ok.'); 
    })
    .then( nasa => generateNasaHtml(nasa))
    .catch( error => console.error('Error:', error))


const generateNasaHtml = (data) => {
    const html = `
        <div class="cam_name">${data.photos[0].camera.full_name}</div>
        <div class="front_cam"><img id="f_cam" src=${data.photos[0].img_src} alt="${data.photos[0].camera.full_name}"></div>
        <div class="cam_name">${data.photos[3].camera.full_name}</div>
        <div class="rear_cam"><img id="r_cam" src=${data.photos[3].img_src} alt="${data.photos[3].camera.full_name}"></div>
        <div class="cam_name">${data.photos[5].camera.full_name} (Bottom of rover)</div>
        <div class="mast_cam"><img id="b_cam" src=${data.photos[5].img_src} alt="${data.photos[5].camera.full_name}"><br/><br/><br/><br/><br/><br/></div>
    `
    const nasaDiv = document.querySelector('.nasa')
    nasaDiv.innerHTML = html}