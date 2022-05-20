// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const init = () => {
  const hearts = document.querySelectorAll('article footer li span')
  hearts.forEach(heart => {
    heart.addEventListener('click', () => mimicServerCall()
      .catch((error)=> {
        const modal = document.getElementById('modal');
        const message = document.getElementById('modal-message');
        modal.removeAttribute("class");
        message.textContent = error;
        setTimeout(() => {
          modal.className = "hidden";
          message.textContent = "";
        }, 3000);
      })
      .then((res) => {
        if(!res){
          return
        }
        if(heart.className === "activated-heart") {
          heart.removeAttribute("class")
        } else {
          heart.className = "activated-heart"
        }
      })
    )
  });
}

document.addEventListener("DOMContentLoaded", init)



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
