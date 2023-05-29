export default function Form() {
    const inputs = document.querySelectorAll('input');

    const checkInputs = () => {
        let allFilled = true;

        inputs.forEach(input => {
            if (!input.value) {
                allFilled = false;
            }
        });
        return allFilled;
    }

    // You can call the checkInputs function whenever you want to check if all inputs have a value

    if (checkInputs()) {
        console.log('All inputs have a value');
    } else {
        console.log('Not all inputs have a value');
    }
}