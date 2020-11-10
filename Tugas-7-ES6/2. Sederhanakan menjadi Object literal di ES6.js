const newFunction = (firstName, lastName) => {
    return {
      firstName,
      lastName,
      fullName(){
        console.log(firstName + " " + lastName)
        return
      }
    }
  }

  //Driver Code
  newFunction("William", "Imoh").fullName()
