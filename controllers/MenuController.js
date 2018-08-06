const inquirer = require('inquirer');

module.exports = class MenuController {
    constructor(){
        this.mainMenuQuestions = [
            {
                type: 'list',
                name: 'mainMenuChoice',
                message: 'Please choose from an option below: ',
                choices: [
                    'Add new contact',
                    'Get current date',
                    'Exit'
                ]
            }
        ];
        this.contacts = [];
    }

    main() {
        console.log('Welcome to AddressBloc!');
        inquirer.prompt(this.mainMenuQuestions).then((response) => {
            switch(response.mainMenuChoice) {
                case "Add new contact":
                    this.addContact();
                    break;

                case "Get current date":
                    this.getDate();
                    break;

                case "Exit":
                    this.exit();

                default:
                    console.log('Invalid input!');
                    this.main();
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
    clear(){
        console.log('\x1Bc');
    }

    addContact() {
        this.clear();
        console.log('addContact called');
        this.main();
    }

    exit() {
        console.log('Thanks for using AddressBloc!');
        process.exit();
    }

    getDate(){
        var currentdate = new Date(); 
        var datetime = (currentdate.getMonth()+1)+ '/'
        + currentdate.getDate() + "/"
        + currentdate.getFullYear() + " @ "  
        + currentdate.getHours() + ":"  
        + currentdate.getMinutes()
        console.log(datetime);
        this.main();
    }

    getContactCount() {
        return this.contacts.length;
    }
    
}

