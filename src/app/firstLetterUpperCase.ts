import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function firstLetterUpperCase(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = <string>control.value;
        console.log('Control Value:', value);

        if (!value || value.length === 0) {
            return null; // Validation passed
        }

        const firstLetter = value[0];
        console.log('First Letter:', firstLetter);

        if (firstLetter !== firstLetter.toUpperCase()) {
            console.log('Validation Failed: The first letter must be uppercase');

            return {
                firstLetterUpperCase: {
                    message: 'The first letter must be uppercase'
                }
            };
        }

        console.log('Validation Passed');
        return null; // Validation passed
    };
}
