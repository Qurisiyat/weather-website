// const input = document.getElementById('#input').value


  const weatherForm = document.querySelector('form')
  const search = document.querySelector('input')
  const message1 = document.querySelector('#message1')
  const message2 = document.querySelector('#message2')

    
    weatherForm.addEventListener('submit', (e) => {
            e.preventDefault()
            message1.textContent = 'loading...'
            message2.textContent = ''
           const place = search.value

        fetch("/weather?address=" + place).then((response)=>{
            response.json().then((data) => {
        if (data.error) {
            message1.textContent = data.error
        } else {
            message1.textContent = data.place
            message2.textContent = data.forecast


        }
        
    })
})


         
})
        
    

