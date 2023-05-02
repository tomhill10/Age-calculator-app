# Age-calculator-app

Frontend Mentor - Age calculator app - HTML CSS JAVASCRIPT

- First time building an app with Javascript
- Trying to break down what I need to achieve with Javascript.

I have three data inputs.

- I need to validate the data so that the dates and years match etc.
- Set max values so people can't be > current date
- Take values from inputs and take them from the current date to get an output.

Age of person = current date - birth date

had a look at the date or new date() constructor. Might be able to parse in the values from the inputs to create a date then - that from current date!

Stuff I learned:

- Put Javascript <script></script> at the bottom of the page!!!!
- Managed to get an event listender to work. Have to make sure that I am not calling a function inside of itself. i.e. Don't write the function out in full inside of the event listener!!! DUR!
- I think I have managed to make the month check if the correct amount of days in said month. With the .getDate() object. or new Date. Read an article and here we are.
