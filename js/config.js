/*======================================
TREEHOUSE POS
CONFIG
======================================*/

const Config = {

    therapist: [],

    treatment: [],

    gift: [],

    paid: [],

    



    /*======================================
    LOAD
    ======================================*/

    async load() {

        await this.loadConfig();

        

    },



    /*======================================
    LOAD CONFIG
    ======================================*/

    async loadConfig() {

        const result = await API.getConfig();

        if (!result.success) {

            Notify.error(
    result.message
);

            return;

        }

        this.therapist = result.data.therapist;

        this.treatment = result.data.treatment;

        this.gift = result.data.gift;

        this.paid = result.data.paid;

        this.fillSelect(
            "therapist",
            this.therapist
        );

        this.fillSelect(
            "treatment",
            this.treatment
        );

        this.fillSelect(
            "gift",
            this.gift
        );

        this.fillSelect(
            "paid",
            this.paid
        );

        this.fillSelect(
    "editTherapist",
    this.therapist
);

this.fillSelect(
    "editTreatment",
    this.treatment
);

this.fillSelect(
    "editGift",
    this.gift
);

this.fillSelect(
    "editPaid",
    this.paid
);

    },






    /*======================================
    FILL SELECT
    ======================================*/

    fillSelect(id, list) {

        const select = document.getElementById(id);

        select.innerHTML = "";

        const option = document.createElement("option");

        option.value = "";

        option.textContent = "-- Pilih --";

        select.appendChild(option);

        list.forEach(function(item){

            const option = document.createElement("option");

            option.value = item;

            option.textContent = item;

            select.appendChild(option);

        });

    },



}