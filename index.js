
 
function convert() {
  
    let numberBeingConverted = Number(document.getElementById("numberBeingConverted").value);
console.log(numberBeingConverted);   

    document.getElementById("meter1").textContent = numberBeingConverted;
    document.getElementById("feet2").textContent  = numberBeingConverted;
    document.getElementById("liter1").textContent  = numberBeingConverted;
    document.getElementById("gallon2").textContent  = numberBeingConverted;
    document.getElementById("kilo1").textContent  = numberBeingConverted;
    document.getElementById("pound2").textContent   = numberBeingConverted;

    let feet1 = numberBeingConverted * 3.28084
    document.getElementById("feet1").textContent = feet1.toFixed(3)

    let meter2 = numberBeingConverted / 3.28084
    document.getElementById("meter2").textContent = meter2.toFixed(3)

    let gallon1 = numberBeingConverted * 0.264
    document.getElementById("gallon1").textContent = gallon1.toFixed(3)

    let liter2 = numberBeingConverted / 0.264
    document.getElementById("liter2").textContent = liter2.toFixed(3)

    let pound1 = numberBeingConverted * 2.205 
    document.getElementById("pound1").textContent = pound1.toFixed(3)

    let kilo2 = numberBeingConverted / 2.205
    document.getElementById("kilo2").textContent = kilo2.toFixed(3)
    
    
    
    
    

    

}