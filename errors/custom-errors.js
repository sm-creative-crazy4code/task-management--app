//here we are crearting a new coustum error class that is inherited from parent class known as error
class coustumApiError extends Error{

constructor(message,statusCode){

    super(message) //super class is a methid that invokes the method of a parent class
    this.statusCode=statusCode
}

}

// setting up a function that creates a new coustum error

const createCustomError = (message,statusCode)=>{
    return  new coustumApiError(message,statusCode);


}

// exporting both of them

module.exports={createCustomError,coustumApiError}