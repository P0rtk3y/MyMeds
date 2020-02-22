class Medications {
    constructor(){
        this.medications = []
        this.adapter = new MedicationsAdapter()
        this.initBindingAndEventListeners()
        this.fetchAndLoadMedications()
    }

    initBindingAndEventListeners(){
        this.div = document.querySelector('#login-input')
        this.buttonEvent = document.querySelector('#buttons')
        this.buttonEvent.addEventListener("click", this.eventFunc.bind(this))
    }

    fetchAndLoadMedications(){
        this.adapter
            .getMedications()
            .then(medications => {
                medications.forEach(medication => this.medications.push(new Medication(medication)))
                }
            )
            .then(() => this.enableSearch())
    }

    enableSearch(){
        this.div.innerHTML = ""
        this.search = document.createElement('input')
        this.div.appendChild(this.search)
    }

    eventFunc(e){
        e.preventDefault()
        if (e.target !== e.currentTarget){
            let clickedButton = e.target.id;
            switch (clickedButton){
                case 'med-button': alert("why?!")
                    break;
                // case 'logout-button': window.location.reload(true)
                //     break;
            }
        } 
        e.stopPropagation() 
    }
}