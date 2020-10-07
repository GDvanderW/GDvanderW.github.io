var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0')
var factApiUrl = 'http://numbersapi.com/'+mm+'/'+dd+'/date';

fetch(factApiUrl)
    .then( (data) => {
        if(data.ok){
            return data.text()
        }
        throw new Error('Response not ok.'); 
    })
    .then( factofday1 => generateInformationHtml(factofday1))
    .catch( error => console.error('Error:', error))


const generateInformationHtml = (data) => {
    document.getElementById("random_fact").innerHTML = data;}

    document.getElementById("myBtn").addEventListener("click", function() {
        fetch(factApiUrl)
            .then( (data) => {
                if(data.ok){
                    return data.text()
                }
                throw new Error('Response not ok.'); 
                })
            .then( factofday1 => generateInformationHtml(factofday1))
            .catch( error => console.error('Error:', error))
    
    
    const generateInformationHtml = (data) => {
        console.log(data)
        document.getElementById("random_fact").innerHTML = data;}
          });