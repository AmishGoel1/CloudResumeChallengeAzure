 document.addEventListener('DOMContentLoaded', function() {
    async function getcounter() {
        try {
            const response = await fetch('https://amishresumechallenge-evdeefdpf6btdfb7.westus2-01.azurewebsites.net/api/counterfunction?')
            const text = await response.text()
            const textelement = document.getElementById('countertext')
            textelement.textContent = text
        } catch (error) {
            console.log(error)
        }
    }
    getcounter()
 })