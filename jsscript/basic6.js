class Vehicle
{
    constructor(model)
    {
        this.model=model;
    }
    #startEngine()
    {

        console.log("Engine started");
    }

    start()
    {
        this.#startEngine();
        console.log(`${this.model} used`);

    }

}
let v=new Vehicle("Maruti")
v.start();