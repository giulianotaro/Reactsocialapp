import {greetings} from "./../utils";

it ("test greetings() function", () => {
const result = greetings ("Giulia");
expect (result).toBe("Hello dear Giulia")
});