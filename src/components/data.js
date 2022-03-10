export const questions = {
    "React JS": [
        {
            id: 1,
            question: 'What is the virtual DOM?',
            answer: 'DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.'
        },
        {
            id: 2,
            question: 'How do you create a React app?',
            answer: 'Install the create-react-app package using the command prompt or terminal.'
        },
        {
            id: 3,
            question: 'What is an event in React?',
            answer: 'An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc.'
        },
        {
            id: 4,
            question: ' What are synthetic events in React?',
            answer: "Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers."
        },
        {
            id: 5,
            question: 'What are the components in React?',
            answer: 'Components are the building blocks of any React application, and a single app usually consists of multiple components. A component is essentially a piece of the user interface. It splits the user interface into independent, reusable parts that can be processed separately.'
        },
        {
            id: 6,
            question: 'What are Pure Components?',
            answer: "React.PureComponent handles the shouldComponentUpdate() method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box."
        },
        {
            id: 7,
            question: 'What is state in React?',
            answer: 'State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components.'
        },
        {
            id: 8,
            question: 'What are props in React?',
            answer: 'Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes. They are data passed down from a parent component to a child component.'
        },
        {
            id: 9,
            question: 'What is the difference between state and props?',
            answer: "Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function."
        },
        {
            id: 10,
            question: 'What are inline conditional expressions?',
            answer: 'You can use either if statements or ternary expressions which are available from JS to conditionally render expressions.'
        },
        {
            id: 11,
            question: 'What is the use of refs?',
            answer: 'The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.'
        },
        {
            id: 12,
            question: 'What are forward refs?',
            answer: 'Ref forwarding is a feature that lets some components take a ref they receive, and pass it further down to a child.'
        },
        {
            id: 13,
            question: 'Why are String Refs legacy?',
            answer: "If you worked with React before, you might be familiar with an older API where the ref attribute is a string, like ref={'textInput'}, and the DOM node is accessed as this.refs.textInput. We advise against it because string refs have below issues, and are considered legacy."
        },
        {
            id: 14,
            question: 'What is Virtual DOM?',
            answer: "The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the 'real' DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation."
        },
        {
            id: 15,
            question: 'What is React Fiber?',
            answer: 'Fiber is the new reconciliation engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.'
        },
        {
            id: 16,
            question: 'What is the virtual DOM?',
            answer: 'DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.'
        },
        {
            id: 17,
            question: 'What are controlled components?',
            answer: 'A component that controls the input elements within the forms on subsequent user input is called Controlled Component, i.e, every state mutation will have an associated handler function.'
        },
        {
            id: 18,
            question: 'What are uncontrolled components?',
            answer: 'The Uncontrolled Components are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it.'
        },
        {
            id: 19,
            question: 'What is Lifting State Up in React?',
            answer: "When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components."
        },
        {
            id: 20,
            question: 'What are Higher-Order Components?',
            answer: "A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature."
        },
    ],
    "JavaScript": [
        {
            id: 1,
            question: "What is JavaScript?",
            answer: "JavaScript is a client-side and server-side scripting language inserted into HTML pages and is understood by web browsers. JavaScript is also an Object-based Programming language."
        },
        {
            id: 2,
            question: "What is the use of isNaN function?",
            answer: "isNan function returns true if the argument is not a number; otherwise, it is false."
        },
        {
            id: 3,
            question: "What is negative Infinity?",
            answer: "Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero."
        },
        {
            id: 4,
            question: "Is it possible to break JavaScript Code into several lines?",
            answer: "Breaking within a string statement can be done by using a backslash, ‘\,’ at the end of the first line."
        },
        {
            id: 5,
            question: "Which company developed JavaScript?",
            answer: "Netscape is the software company that developed JavaScript."
        },
        {
            id: 6,
            question: "What is the data type of variables in JavaScript?",
            answer: "All variables in JavaScript are object data types."
        },
        {
            id: 7,
            question: "What are undeclared and undefined variables?",
            answer: "Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered.Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned."
        },
        {
            id: 8,
            question: "What is a prompt box?",
            answer: "A prompt box is a box that allows the user to enter input by providing a text box. A label and box will be provided to enter the text or number."
        },
        {
            id: 9,
            question: "What is ‘this’ keyword in JavaScript?",
            answer: "‘This’ keyword refers to the object from where it was called."
        },
        {
            id: 10,
            question: "What is the working of timers in JavaScript?",
            answer: "Timers are used to execute a piece of code at a set time or repeat the code in a given interval. This is done by using the functions setTimeout, setInterval, and clearInterval."
        },
        {
            id: 11,
            question: "What is === operator?",
            answer: "=== is called a strict equality operator, which returns true when the two operands have the same value without conversion."
        },
        {
            id: 12,
            question: "Does JavaScript support automatic type conversion?",
            answer: "Yes, JavaScript does support automatic type conversion. It is the common way of type conversion used by JavaScript developers."
        },
        {
            id: 13,
            question: "What is called Variable typing in Javascript?",
            answer: "Variable typing is used to assign a number to a variable. The same variable can be assigned to a string."
        },
        {
            id: 14,
            question: "How can you convert the string of any base to an integer in JavaScript?",
            answer: "The parseInt() function is used to convert numbers between different bases. parseInt() takes the string to be converted as its first parameter. The second parameter is the base of the given string."
        },
        {
            id: 15,
            question: "Difference between “==” and “===”?",
            answer: "“==” checks only for equality in value, whereas “===” is a stricter equality test and returns false if either the value or the type of the two variables are different."
        },
        {
            id: 16,
            question: "What would be the result of 3+2+”7″?",
            answer: "Since 3 and 2 are integers, they will be added numerically. And since 7 is a string, its concatenation will be done. So the result would be 57."
        },
        {
            id: 17,
            question: "How to detect the operating system on the client machine?",
            answer: "In order to detect the operating system on the client machine, the navigator. Platform string (property) should be used."
        },
        {
            id: 18,
            question: "What do you mean by NULL in Javascript?",
            answer: "The NULL value is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number, and no array object."
        },
        {
            id: 19,
            question: "What is the function of the delete operator?",
            answer: "The delete keyword is used to delete the property as well as its value."
        },
        {
            id: 20,
            question: "What is the use of Void (0)?",
            answer: "Void(0) is used to prevent the page from refreshing, and parameter “zero” is passed while calling.Void(0) is used to call another method without refreshing the page."
        },
    ],
    "Html": [
        {
            id: 1,
            question: "What is HTML?",
            answer: "HTML is short for HyperText Markup Language and is the language of the World Wide Web.It is the standard text formatting language used for creating and displaying pages on the Web.HTML documents are made up of two things: the content and the tags that format it for proper display on pages."
        },
        {

            id: 2,
            question: "What are tags?",
            answer: "Content is placed in between HTML tags in order to properly format it.It makes use of the less than symbol(<) and the greater than symbol(>).A slash symbol is also used as a closing tag."
        },
        {
            id: 3,
            question: "Do all HTML tags come in a pair?",
            answer: "No, there are single HTML tags that do not need a closing tag.Examples are the <img> tag and <br> tags."

        },
        {
            id: 4,
            question: "Do all character entities display properly on all systems?",
            answer: "No, there are some character entities that cannot be displayed when the operating system that the browser is running on does not support the characters.When that happens, these characters are displayed as boxes."
        },
        {
            id: 5,
            question: "What is an image map?",
            answer: "Image map lets you link to many different web pages using a single image.You can define shapes in images that you want to make part of an image mapping."
        },
        {
            id: 6,
            question: "What is the advantage of collapsing white space?",
            answer: "White spaces are a blank sequence of space characters, which is treated as a single space character in HTML.Because the browser collapses multiple spaces into a single space, you can indent lines of text without worrying about multiple spaces."
        },
        {
            id: 7,
            question: "Can attribute values be set to anything or are there specific values that they accept?",
            answer: "Some attribute values can be set to only predefined values.Other attributes can accept any numerical value that represents the number of pixels for a size."
        },
        {
            id: 8,
            question: "How do you insert a copyright symbol on a browser page?",
            answer: "To insert the copyright symbol, you need to type & copy; or & #169; in an HTML file."
        },
        {
            id: 9,
            question: "How do you create links to sections within the same page?",
            answer: "Links can be created using the < a > tag, with referencing through the use of the number symbol."
        },
        {
            id: 10,
            question: "What is the use of alternative text in image mapping?",
            answer: "When you use image maps, it can easily become confusing and difficult to determine which hotspots correspond to which links.Using alternative text lets, you put a descriptive text on each hotspot link."
        },
        {
            id: 11,
            question: "Do older HTML files work on newer browsers?",
            answer: "Yes, older HTML files are compliant to the HTML standard.Most older files work on the newer browsers, though some features may not work."
        },
        {
            id: 12,
            question: "Does a hyperlink apply to text only?",
            answer: "No, hyperlinks can be used in the text as well as images.That means you can convert an image into a link that will allow users to link to another page when clicked.Surround the image within the <a href =” “>…</a> tag combinations."
        },
        {
            id: 13,
            question: "How do you change the number type in the middle of a list?",
            answer: "The <li> tag includes two attributes – type and value.The type attribute can be used to change the numbering type for any list item.The value attribute can change the number index."
        },
        {
            id: 14,
            question: "What are style sheets?",
            answer: "Style sheets enable you to build consistent, transportable, and well - defined style templates.These templates can be linked to several different web pages, making it easy to maintain and change the look and feel of all the web pages within site."
        },
        {
            id: 15,
            question: "How do you create multicolored text in a webpage?",
            answer: "To create text with different colors, use the <font color =”color”>…</font> tags for every character that you want to apply color.You can use this tag combination as many times as needed, surrounding a single character or an entire word."
        },
        {
            id: 16,
            question: "What is the advantage of grouping several checkboxes together?",
            answer: "Although checkboxes don’t affect one another, grouping checkboxes together help to organize them.Checkbox buttons can have their name and do not need to belong to a group.A single web page can have many different groups of checkboxes."
        },
        {
            id: 17,
            question: "What will happen if you overlap sets of tags?",
            answer: "If two sets of HTML tags are overlapped, only the first tag will be recognized.You will find this problem when the text does not display properly on the browser screen."
        },
        {
            id: 18,
            question: "What other ways can be used to align images and wrap text?",
            answer: "Tables can be used to position text and images.Another useful way to wrap text around an image is to use style sheets."
        },
        {
            id: 19,
            question: "Can a single text link point to two different web pages?",
            answer: "No.The <a> tag can accept only a single href attribute, and it can point to only a single web page."
        },
        {
            id: 20,
            question: "What is the difference between the directory and menu lists and the unordered list?",
            answer: "The key difference is that the directory and menu lists do not include attributes for changing the bullet style."
        },
        {
            id: 21,
            question: "Can you change the color of bullets?",
            answer: "The bullet color is always the same as that of the first character in the list item.If you surround the < li > and the first character with a set of < font > tags with the color attribute set, the bullet color, and the first character will be a different color from the text."
        },
        {
            id: 22,
            question: "What are the limits of the text field size?",
            answer: "The default size for a text field is around 13 characters.However, if you include the size attribute, you can set the size value to be as low as 1. The maximum size value will be determined by the browser width.If the size attribute is set to 0, the size will be set to the default size of 13 characters."

        },
        {
            id: 23,
            question: "Do <th> tags always need to come at the start of a row or column?",
            answer: "Any < tr > tag can be changed to a < th > tag.This causes the text contained within the < th > tag to be displayed as bold in the browser.Although < th > tags are mainly used for headings, they do not need to be used exclusively for headings."
        },
        {
            id: 24,
            question: "What is the relationship between the border and rule attributes?",
            answer: "Default cell borders, with a thickness of 1 pixel, are automatically added between cells if the border attribute is set to a nonzero value.Likewise, If the border attribute is not included, a default 1 - pixel border appears if the rules attribute is added to the < table > tag."
        },
        {
            id: 25,
            question: "What is a marquee?",
            answer: "A marquee allows you to put a scrolling text in a web page.To do this, place whatever text you want to appear scrolling within the <marquee> and </marquee> tags."
        },
    ],
    "CSS": [
        {
            id: 1,
            question: "What is CSS?",
            answer: "CSS outlines the style of an HTML webpage. It is a language by which we can set the behavior of an HTML webpage. It describes how the HTML content will be shown on screen."
        },
        {
            id: 2,
            question: "Why is the external style sheet useful",
            answer: "External style sheet is very useful as we write all the styling codes in a single file and it can be used anywhere by just referring to the link of that external style sheet file."
        },
        {
            id: 3,
            question: "What are the uses of an embedded style sheet?",
            answer: "Embedded style sheet gives us the privilege to define styles in one place in an HTML document."
        },
        {
            id: 4,
            question: "How to use CSS selector?",
            answer: "By using the CSS selector, we can choose the content which we want to style so that we can say that it is a bridge between the style sheet and the HTML files."
        },
        {
            id: 5,
            question: "Explain the term Responsive web design.",
            answer: "It is a method in which we design and develop a web page according to the user activities and conditions which are based on various components like the size of the screen, portability of the web page on the different devices, etc. It is done by using different flexible layouts and grids."
        },
        {
            id: 6,
            question: "What are CSS counters?",
            answer: "CSS counters are variables that can be incremented by rules of CSS that inspector track how many times the variable has been used."
        },
        {
            id: 7,
            question: "How will you add border images to an HTML element?",
            answer: "We can set the image to be used as the border-image alongside an element by using the property of CSS “border-image”."
        },
        {
            id: 8,
            question: "What are gradients in CSS?",
            answer: "It is a property of CSS which allows you to display a smooth transformation between two or more than two specified colors."
        },
        {
            id: 9,
            question: "What is CSS flexbox?",
            answer: "It allows you to design a flexible responsive layout structure without using any float or positioning property of CSS. To use CSS flexbox you need to define a flex container initially."
        },
        {
            id: 10,
            question: "What is the difference between padding and margin?",
            answer: "In CSS, the margin is the property by which we can create space around elements. We can even create space to the exterior defined borders."
        },
        {
            id: 11,
            question: "What is the use of the Box Model in CSS?",
            answer: "In CSS, the box model is a box that binds all the HTML elements and it includes features like margins, border, padding, and the actual content."
        },
        {
            id: 12,
            question: "How can we add icons to the web page?",
            answer: "We can add icons to the HTML webpage by using an icon library like font-awesome. We have to add the name of the given icon class to any inline HTML element. (<i> or <span>) . Icons in the icon libraries are scalable vectors that can be customized with CSS."
        },
        {
            id: 13,
            question: "What is CSS opacity?",
            answer: "It is the property that elaborates on the transparency of an element."
        },
        {
            id: 14,
            question: "Define ‘important’ declarations used in CSS.",
            answer: "Important declarations are defined as that declaration which is having more importance than the normal declaration."
        },
        {
            id: 15,
            question: "Differentiate between inline and block element.",
            answer: "Inline element does not have an element to set width and height and also it does not have the line break."
        },
        {
            id: 16,
            question: "How can image repetition of the backup be controlled?",
            answer: "Background-repetition property controls the repetition of images in the background. Use no-repeat if the image is to be displayed once in the background."
        },
        {
            id: 17,
            question: "What is the use of the background-position property?",
            answer: "It can be used to define the initial position of a background image. The default position is the top left of the page. The positions that can be set include top, bottom, left, right, and center."
        },
        {
            id: 18,
            question: "How to maintain the CSS specifications?",
            answer: "It is maintained using the World Wide Web Consortium."
        },
        {
            id: 19,
            question: "What is a declaration block?",
            answer: "It is basically a catalog of directions comprising the property, followed by a colon, and finally the value enclosed within braces."
        },
        {
            id: 20,
            question: "What are the different font attributes available?",
            answer: "The various font attributes available include font-variant, font-weight, font-style, font-family, line-height of font size, caption, icon, and font-family."
        },
    ],
    "Bootstrap": [
        {
            id: 1,
            question: "What is Bootstrap?",
            answer: "Bootstrap is a platform for web development based on a front-end framework. It is used to create exceptional responsive designs using HTML, and CSS."
        },
        {
            id: 2,
            question: "Explain why Bootstrap is preferred for website development.",
            answer: "Bootstrap has better features as compared to other web development platforms. It provides extensive browser support for almost every known browser such as Opera, Chrome, Firefox, Safari, etc."
        },
        {
            id: 3,
            question: "What are Class loaders in Bootstrap?",
            answer: "A class loader is a part of JRE or Java Runtime Environment which loads Java classes into Java virtual environment. Class loaders also perform the process of converting a named class into its equivalent binary form."
        },
        {
            id: 4,
            question: "What is Bootstrap Grid System?",
            answer: "Bootstrap includes a responsive, mobile-first fluid grid system that appropriately scales up to 12 columns as the device or viewport size increases. It includes predefined classes for easy layout options, as well as powerful mixins for generating more semantic layouts."
        },
        {
            id: 5,
            question: "Why do we use Jumbotron in Bootstrap?",
            answer: "Jumbotron is used for highlighting content in bootstrap. It could either be a slogan or probably a headline. It increases the heading size and gives a margin for the content of the landing page."
        },
        {
            id: 6,
            question: "What is a progress bar in bootstrap?",
            answer: "Progress bar is used with HTML tag style in HTML element using <progress> keyword. In bootstrap we use html5 <progress> with CSS classes that have special features in bootstrap, that is only made for the progress bar."
        },
        {
            id: 7,
            question: "How do you make images responsive?",
            answer: "Bootstrap allows to make the images responsive by adding a class .img-responsive to the <img> tag. This class applies max-width: 100%; and height: auto; to the image so that it scales nicely to the parent element."
        },
        {
            id: 8,
            question: "What is Bootstrap collapsing elements?",
            answer: "Bootstrap collapsing elements enable you to collapse any particular element without writing any JavaScript code or the accordion markup."
        },
        {
            id: 9,
            question: "What is media object in Bootstrap and what are their types?",
            answer: "Media objects in Bootstrap help you to put media object like image, video or audio to the left or right of the content blocks."
        },
        {
            id: 10,
            question: "Explain the uses of carousel plugin in Bootstrap.",
            answer: "Carousel plugin in bootstrap is used to make sliders in the web pages or your site. There are several carousel plugins that are used in bootstrap to display large contents within a small space by adding sliders."
        },
        {
            id: 11,
            question: "What are glyphicons?",
            answer: "Glyphicons are icon fonts which can be used in your web projects. Glyphicons Halflings are not free and require licensing."
        },
        {
            id: 12,
            question: "What do you mean by Bootstrap well?",
            answer: "Bootstrap well is nothing but a container that makes the content appear sunken. Sometimes it may also give an inset effect on the webpage. Thus, a developer can create a well and also wrap the content in the well with the help of <div> and class .well."
        },
        {
            id: 13,
            question: "What is Bootstrap breadcrumb?",
            answer: "Breadcrumbs are a great way to show hierarchy-based information for a site. In the case of blogs, breadcrumbs can show the dates of publishing, categories, or tags. They indicate the current page’s location within a navigational hierarchy."
        },
        {
            id: 14,
            question: "What is a Bootstrap Container?",
            answer: "A bootstrap container is a class which is useful and creates a central area within the page where our site content can be put within."
        },
        {
            id: 15,
            question: "What are bootstrap alerts and how will you create them?",
            answer: "Bootstrap Alerts provide a way to style messages to the user. They provide contextual feedback messages for typical user actions. You can add an optional close icon to alert. Also, you can add a basic alert by creating a wrapper <div> and adding a class of .alert and one of the four contextual classes."
        },
        {
            id: 16,
            question: "What are the bootstrap media objects?",
            answer: "The media objects are abstract object styles for building various types of components like blog comments, Tweets, etc. "
        },
        {
            id: 17,
            question: "What is the Bootstrap Grid System?",
            answer: "The Bootstrap Grid System is a responsive, mobile-first system that scales up to 12 columns as per the increase in the device or viewport size."
        },
        {
            id: 18,
            question: "What is Normalize in Bootstrap?",
            answer: "Bootstrap uses Normalize to establish cross-browser consistency."
        },
        {
            id: 19,
            question: "What is the purpose of using the Scrollspy plugin?",
            answer: "The purpose of using the Scrollspy plugin in Bootstrap is that it allows you to target certain sections of the page based on the scroll position."
        },
        {
            id: 20,
            question: "What is the Bootstrap Panel?",
            answer: "When there is a need for putting the contents in a bordered box with some padding around, the panel components are used."
        },
    ],
};