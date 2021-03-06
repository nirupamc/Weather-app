const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById('city_name');

const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const dataHide = document.querySelector(".middle_layer");
// api.openweathermap.org/data/2.5/weather?q=Delhi&appid=7d180d02b4893351621f2dba63273c3c;




const getInfo = async(event) =>{
    event.preventDefault();
    console.log("hi");
    let cityVal=cityName.value;

    if(cityVal===""){
        city_name.innerText=`please write somthing befor search`;
        dataHide.classList.add('data_hide');
    }
    else
    {
        try{
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=7d180d02b4893351621f2dba63273c3c`;
            const response = await fetch(url);
            const data =await response.json();
            const arrData=[data];

            city_name.innerText= `${arrData[0].name}, ${arrData[0].sys.country}`;

            temp_real_val.innerText=arrData[0].main.temp;
            const tempMood=arrData[0].weather[0].main;


            //temp icon

            if (tempMood === "Clear"){
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68'></i>"

            }else if (tempMood === "Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6'></i>"
            }else if (tempMood === "Rain"){
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b4be'></i>"
            }else{
                {
                    temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6'></i>"
                }
            }
            dataHide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText=`please enter city name properly`;
            dataHide.classList.add('data_hide');
        }

    }


}
submitBtn.addEventListener('click',getInfo);
