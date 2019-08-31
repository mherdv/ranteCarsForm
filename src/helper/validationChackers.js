function carsFormValidationChecking(formObject) {
    
    try {

      formObject.cars.forEach(carForm => {
        if (!!formObject.errorTexts) throw new Error();
        let areInputsValid = true;


        try {
          carForm.inputs.forEach(input => {


            if (!!!input.isValid) {
              areInputsValid = false;
              formObject.errorTexts = input.label + ' պարտադիր դաշտը լրացված չե կամ սխալ է լրացված  ';
              throw new Error();
            }
          })
        } catch (e) {
          throw new Error();
        }


        carForm.isValid = !!(carForm.working_volume && carForm.fuelType.value && areInputsValid);


        if (!carForm.isValid && !formObject.errorTexts) {

          if (!carForm.fuelType.value) {
            formObject.errorTexts = 'Շարժիչի վառելիք  դաշտը պարտադիր է';
          } else {
            formObject.errorTexts = 'Շարժիչի աշխատանքային ծավալ  պարտադիր դաշտը լրացված չե կամ լրացված է սխալ';
          }

          throw new Error();
        }
        else { formObject.errorTexts = '' }
      })
    } catch (e) {

    }

  }


  function setFormPrices(formObject) {
    if (!formObject.errorTexts.trim()) {

      let c;
      try {

        formObject.cars.forEach((car, index) => {
          c = car
          if (!car.priceForm || !car.priceForm.isValid) throw new Error;
          else {
            car.priceForm.cars.push(index)
          }



        })
      } catch (e) {
        // hasError = true;
        formObject.errorTexts = c.inputs[0].value + ' ավտոմեքենայի համար գին նշած չէ';

        formObject.prices.forEach(price => {
          price.cars = [];
        })




      }
    }
  }

  function removeEmptyPriceForms(formObject) {

    if (!!formObject.errorTexts.trim()) return
    for (let i = 0; i < formObject.prices.length; i++) {
      if (!formObject.prices[i].cars.length)
        formObject.prices.splice(i, 1)
    }
  }

  function partnerValidationChecking(formObject) {


    // if (formObject.errorTexts) return;

    try {
      console.log(formObject.partnerInfo)
      formObject.partnerInfoValidArray.forEach(input => {
        if (!!!input.isValid) {
          formObject.errorTexts = input.label + ' պարտադիր դաշտը լրացված չե կամ սխալ է լրացված  ';

          throw new Error();
        }

      })
    } catch (e) {

    }
  }


  export {removeEmptyPriceForms,setFormPrices ,carsFormValidationChecking ,partnerValidationChecking}