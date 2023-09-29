// 1. Create a variable called header that points to the header tag.
const header = document.querySelector('header');

// 2. Create a div element with a class name header-container.
const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

// 3. Create a div element with a class name header-left.
const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

// 4. Create an img element and assign its source to logo.png.
const headerLogo = document.createElement('img');
headerLogo.src = '/logo.png';

// 5. Create a h1 element and set its text content to UnEarthed.
const headerTitle = document.createElement('h1');
headerTitle.textContent = 'UnEarthed';

// 6. Append the logo and the title to the div with the class name header-left.
headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);

// 7. Create a div element with a class name header-right.
const headerRight = document.createElement('div');
headerRight.className = 'header-right';

// 8. Create a button element and set its text content to Home.
const headerButton = document.createElement('button');
headerButton.textContent = 'Home';

// 9. Register a click event listener to the button that redirects the window to the root page.
headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/';
});

// 10. Append the button to the div with the class name header-right.
headerRight.appendChild(headerButton);

// 11. Append the left and right header div elements to the div with the class name header-container.
headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

// 12. Append the header-container element to the header element.
header.appendChild(headerContainer);
