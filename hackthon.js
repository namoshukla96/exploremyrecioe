




gsap.to("#main",{
    backgroundcolor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        /*markers:true,*/
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
})




// Wrap the animation code in a function to call later
function animateText() {
  const textElements = document.querySelectorAll('.paragraph');

  // Iterate over each paragraph with class .animatedText
  textElements.forEach(textElement => {
    const words = textElement.textContent.split(' ');

    // Empty the paragraph
    textElement.textContent = '';

    // Iterate over each word and add it with animation
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.style.opacity = 0;
      textElement.appendChild(span);

      // Animate the opacity of the word using setTimeout
      setTimeout(() => {
        span.style.opacity = 2;
      }, index * 300); // Adjust the delay (in milliseconds) as needed
    });
  });
}
function filterRecipes() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const selectedType = document.getElementById('recipe-type').value;
    
    const filteredRecipes = recipes.filter(recipe => {
        const matchesType = selectedType === 'all' || recipe.type === selectedType;
        const matchesSearch = recipe.name.toLowerCase().includes(searchTerm) || recipe.keywords.includes(searchTerm);
        return matchesType && matchesSearch;
    });displayRecipes(filteredRecipes);

// Call the function when the page loads
window.addEventListener('load', animateText);

