let calculation = localStorage.getItem('calculation') || 0;
    calculationTab();

    function resetCalculation(){
      localStorage.removeItem('calculation');
      calculation='';
      console.log(eval(calculation));
      calculationTab();

    }

    function updateCalculation(value){
      console.log(calculation);
      calculation+=value;
      console.log(calculation);
      localStorage.setItem('calculation',calculation);
      calculationTab();
    }

    function calculateNubers(){
      calculation = eval(calculation);
      console.log(calculation);
      localStorage.setItem('calculation',calculation);
      calculationTab();
    }
    function calculationTab(){
      document.querySelector('.js-calculation-tab').innerHTML=calculation;
    }