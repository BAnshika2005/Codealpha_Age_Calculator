function calculateAge(){
    const birthDateInput = document.getElementById("birthDate").value;
    if(!birthDateInput){
        alert("please enter your birth date");
        return;
    }

    const birthDate = new Date(birthDateInput);
    const today = new Date();

    let years = today.getFullYear()-birthDate.getFullYear();
    let months = today.getMonth()-birthDate.getMonth();
    let days = today.getDate()-birthDate.getDate();

    if (months<0 || (months === 0 && days <0)){
        years--;
        months +=12;
    }

    if (days <0){
        const lastMonth = new Date(
            today.getFullYear(),
            today.getMonth()-1,
            birthDate.getDate()
        );
        days = Math.floor((today-lastMonth)/(1000*60*60*24));
        months--;
        }
        if(months<0){
            months+=12;
            years--;
        }

        const ageResult = document.getElementById("ageResult");
        ageResult.textContent =`${years} years, ${months}months, and ${days}days`;
    }
