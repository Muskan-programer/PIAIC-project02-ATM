import inquirer from "inquirer";
async function startATMconversion() {
    console.log("wellcome to habib bank");
    let answers = await inquirer.prompt([
        {
            type: "input",
            name: "userId",
            message: "enter your userId ",
        },
        {
            type: "number",
            name: "userPin",
            message: "enter your user Password ",
        },
        {
            type: "list",
            name: "accountType",
            choices: ["current", "saving"],
            message: "select your account ",
        },
        {
            type: "list",
            name: "transactionType",
            choices: ["fast cash wihtdraw", "normal wihtdraw"],
            message: "select your transactionType",
        },
        {
            type: "list",
            name: "amount",
            choices: [1000, 10000, 2000, 5000],
            message: "select your amount (PKR)",
            when(answers) {
                return answers.transactionType === "fast cash wihtdraw";
            },
        },
        {
            type: " number",
            name: "amount",
            message: " selesct your amount (PKR)",
            when(answers) {
                return answers.transactionType === "normal wihtdraw";
            }
        }
    ]);
    if (answers.userId && answers.userPin) {
        console.log("process ypur request");
        const balance = Math.floor(Math.random() * 10000000);
        console.log("your current balance is ", balance.toLocaleString());
        const interamount = answers.amount;
        if (balance >= interamount) {
            let remaniningbalance = balance - interamount;
            console.log("transaction balance is remaning balance :", remaniningbalance.toLocaleString());
        }
        else {
            console.log("insufficient balance.please try again wiht lower amount");
        }
    }
}
startATMconversion();
