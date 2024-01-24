       // Instance Elements
       const create = document.createElement('div');
       const container = document.querySelector('.Container');


const form = document.querySelector('form').addEventListener('submit',(e)=>{
e.preventDefault();

const datas = document.querySelector('form input');

  if(datas.value === ''){
    Swal.fire({
      title: "Fill up first",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  }else{
    
 connect(datas.value)
 datas.value = ""
 
  }


})



const connect = async(city) =>{
    //urls
const API_KEY = 'fe5083595dfea24d2ff7f7e4ac91c484';

    try{
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const backData = await data.json();
//    destructure the datas i need
        const {weather,base,wind,clouds,sys,timezone,name,main} = backData;

      //create set Attributes
      create.classList.add('Information');

      //solve for celsius

      const solution = main.temp - 273.15;
   const math = Math.round(solution);

   const math2 = Math.round(main.feels_like - 273.15);

    create.innerHTML = `<h2>${name}<span><ion-icon name="locate-outline" id="icon"></ion-icon></span></h2>
      <h1>${math}<span>C</span></h1>
        <h4>${weather[0].description}</h4>
        <div class="sub">
        <h5>Humidity: ${main.humidity}</h5>
        <h5>Pressure: ${main.pressure}</h5>
        <h5>Feels like: ${math2}</h5>
               </div>`;


        container.appendChild(create)

    

    }catch(error){
      Swal.fire({
        title: "Invalid Country",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    }


}

