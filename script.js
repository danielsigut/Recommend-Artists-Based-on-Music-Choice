// This array holds all the types of music
var musicID = ['EDM', 'Rap', 'Rock', 'Pop'];

// This array holds all the background colors of our divs
var colorArray = ['red', 'green', 'blue', 'purple'];

// This for loop will go through the musicID and create a new div with the ID of the current color
for (i = 0; i < musicID.length; i++) {
  let div = document.createElement('div');
  div.id = musicID[i];
  // Then it will go through th color array and set the background color using the current color
  for (j = 0; j < colorArray.length; j++) {
    div.style.backgroundColor = colorArray[i];
  }
  // We create new buttons for each genre of music and assign them the ID of the current genre + the word 'Button'
  let button = document.createElement('button');
  button.id = musicID[i] + 'Button';
  button.innerHTML = musicID[i];
  // this code means that the recommendArtists function will grab the ID
  // of whatever button is clicked
  button.onclick = function(){recommendArtists(this.id)};
  div.appendChild(button);
  // Then we just append the divs to the body
  document.body.append(div);
}

// This function recommends artists based on what type of music the user likes.
// The function takes in the ID of the button clicked to show artists.
// For example, if the user clicks the 'rock' button, the function will know
// because we passed in 'RockButton' as the parameter.
 function recommendArtists(id) {
  let h3 = document.createElement('h3');
  switch (id) {
    case 'EDMButton':
          h3.innerHTML = 'We recommend Tiesto and Avicii.';
          break;
    case 'RapButton':
          h3.innerHTML = 'We recommend Gucci Mane or Future.';
          break;
    case 'RockButton':
          h3.innerHTML = 'We recommend AC/DC.';
          break;
    case 'PopButton':
          h3.innerHTML = 'We recommend Demi Lovato.';
          break;
    default:
          h3.innerHTML = 'You didn\'t pick anything.';
  }
  // Finally, if an h3 already exists on the page, we are not going to keep
  // appending them to the body. It will only create jumble.
  if (document.querySelector('h3')) {
    document.querySelector('h3').remove();
  }
  document.body.append(h3);
}


// Hope you enjoyed this simple application!
