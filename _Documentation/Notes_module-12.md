# Javascript Basics
- if(condition){what happens}
- console.log(myAge > 17); => already checks if variable is over 17 without if
- if loop => whenever the first condition is met (true), the other conditions are not checked, it stops
- '&&' to add a condition to check --> all codnitions needs to be met for the function to return true
- || vertical bar = at least one condition needs to be met for it to be true
- | = alt + shift + L
- const VARIABLE = {} -> defines an object which contains key-value pairs (as many as we want)
- if(variable.key) access the value of the key:
    - e.g. const customer ={age: 11, withPar: true} --> key = age, value = 11 --> (customer.age) = 11
- whatever is between || comes together: if( A || B && C) = has to be either A or B & C -> just B, or just C doesn't count as true
- for-loop: start with 'for' -> for(counter; conditions; step) --> ++ = increment of 1
    -- for(let i = 0; i < 10; i++){console.log(i)}; will print 0 to 9 (won't work with const because const can't be re-valued)
- <= and >= work also
- counter of the for-loop is not the index of an array that is being used
- increment upwards, decrement downwards
- ++ -> increase by 1 /// += X -> increase by X
- if a for-loop increases a counter, the counter needs to be defined as a variable outside (before) the loop, it gets incremented in the loop
- for booleans, it's not needed to specify === true in the if condition, it's assumed: if(group[k].approved) = who is approved
    - for false= add '!' before the variable: if(!group[k].approved) = who is not approved

# Classes
- Classes: blue print for Objects -> creating new Data Types
- class: start with "class" then {} then propertires (like Objects but with = instead of ":")
- constructor always defined within a class
- constructors only defined once
- DON'T DEFINE PROPERTIES WITHIN THE CONSTRUCTOR (like Junus does in the videos)
- instanziieren = creating an object thanks to a class
    - *object = instance*
- after constructor comes the method
- methods are defined in the class and can only be applied to an instance (i.e. an object create through a class)
- likewise, an instance can only supports methods defined in its blueprint class
- methods are not functions and can't be called witout an instance

## Class inheritance --> sub-classes
- a class (even sub-class) needs to have constructor, if a sub-class have no crontructor defined, the constructor of super class applies
- content of the sub-class overwrites whatever the "super class" says (super class = parent class)
- sub-class can use methods from super class: super.method()
- static is usable without instancing a class -> makes properties globally available
- static is bound to the class, not the instance
- global porperties written in capital letters
- Object oriented coding: less code, related code gruped in a code
- JSON = JavaScript Object Notation
- to create a new object based on a class: new className();
- within a class, functions don't need to be defined with 'function' before
- dedicated .js file for each class -> classname.class.js --> all class.js files in a 'classes' folder
- Don't forget to link the .class.js into the index.html -> start with that of the script won't know the the class you're creating your variable(object) with
- Class inheritance: class superClassName extends className {}
- *canvas* = container = div
- canvas has x axis and y axis
- y axis start top left corner (not as in math)
- Collision additional video and exercise
    - https://www.loom.com/share/f57429e1b6c14b6d98384fb62ac32900?sid=900a824d-c1e1-4402-ad4f-e0d03e2f5219
    - https://github.com/innicovation21/Pong-Task/tree/main
- Offset additional video: https://www.loom.com/share/d2db79c4430b4b13968f4f854ed4f3ab?sid=92ea2827-a8c3-4744-9618-f8ac1b7a8cd2
- Save all the images in a imageHelper class in a dedicated .js file -> reference the class in the character
- Test that the images are displayed correctly by testing one on the FTP before buidling the whole thing
- javascript has no z-index
- draw method will draw items on top of each other, so alwasy start the function with the background first (code read top to bottom)
- When implementing interval --> use the method shown by Nico
- an interval (programming): a set of actions that happen during a set timeframe
    - no 2 intervals are identical
    - 2 intervals can have the same timeframe (i.e. rythm) but they won't have the same actions happening within them
    - like a orchester: each interval is an instrument playing it's own notes in its own timesheet
- interval array contains the IDs of each interval --> array length = number of intervals running
    - by clearing the interval array, we "clear" all the intervals 
- Arrow function have the feature to have methods linked to an instance / object
    - only use arrow function in a class when you need to make sure a method has to be linked to the instanced object
- 1 helper class per file -> all helper classes files in one folder
    - imageHelper
    - intervalHub
    - keyboard (static keys)
    - adding music & sounds
- super(); needs to be added in the constructor of a child class if we want to access the methods of the super class
- Fonts: always select one or 2 fall back font-families
- text-shadow: to add shadow to font text
- Debugging: try and catch function: https://www.w3schools.com/js/js_errors.asp
- Intervals:clearInterval(#ID) is a pre-existing function. it clears the ID of the interval and thus stops the interval
- Canvas: HTML elements can be put in fullscreen (inline code) but it should never be applied to <canvas>. Instead create a div in which to put canvas and the put the div in fullscreen
- Deactivate GoogleTranslate: https://stackoverflow.com/questions/12238396/how-to-disable-google-translate-from-html-in-chrome
- newImage(); is a predefined method in JS that replaced document.getelementbyID(#id) with the difference that the image is not called in the html but in the js file
- requestAnimationFrame: within the function "this" is not reqcognised, so we need to declare and define a new variable "self" that we can then use within the requestAnimationFrame function.










