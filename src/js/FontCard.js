const currentDocument = document.currentScript.ownerDocument; //Required for the HTML Document to be able to access other scripts HTML.

connectedCallback() { // Called each time the element is inserted into DOM.
  const shadowRoot = this.attachShadow({mode: 'open'}); // Create a Shadow DOM and store it in a variable.

  const template = currentDocument.querySelector('font-card-template'); // Storing the template element in a variable.
  const instance = template.content.cloneNode(true); // Storing cloned content from the template element. Content is cloned for reuse.
  shadowRoot.appendChild(instance); //Attach our newly cloned content to the shadow

  const userId = this.getAttribute('user-id'); // Get attribute by the name of user-id and store its value in a variable.

  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`) //Fetch request. Requesting data, via an API, from a server.
    .then((response) => response.text()) //Promise for resolution of request (Async). Fetched data stored in response variable and then, using a function, we read out that data as a string and store it in the response variable.
    .then((responseText) => { 
      this.render(JSON.parse(responseText));//Promise for resolution of request (Async). Fetched data stored in responseText variable and then, using a function, we parse that data as a Javascript Object.
    })
    .catch((error) => {console.log(error);}); //Promise for rejection of request (Async). Error is returned and stored in error variable then logged to console.
}

render(userData) {

}