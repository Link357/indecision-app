console.log('App.js is running')


var template = <p>Hello World! This is done with JSX from app.js!</p>;
var appRoot = document.getElementById('app');

ReactDOM.rendom(template, appRoot);