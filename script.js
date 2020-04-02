//starting content will fade in on page load
$(document).ready(function(){

    /*! Fades in page on load */
    $('.headerContent').css('display', 'none');
    $('.headerContent').fadeIn(1200);

    $('.displayedContent').css('display', 'none');
    $('.displayedContent').delay(1200).fadeIn(1200);

    



    
    });

//event listenter for when user clicks 'contact'
function generateContact(){
    $('ul').on('click', 'a#contact', function(event){
        $('.displayedContent').empty();
        $('.displayedContent').html(renderContact()).hide().fadeIn(700);
    })
}

//event listener for when user clicks 'projects'
function generateProject(){
    $('ul').on('click', 'a#projects', function(event){
        $('.displayedContent').html(renderProjects()).hide().fadeIn(700);
    })
}

//event listener for when user clicks 'about'
function generateAbout(){
    $('ul').on('click', 'a#about', function(event){
        $('.displayedContent').html(renderAbout()).hide().fadeIn(700);
    })
}

//renders 'contact' content
function renderContact(){
    return `<p class="contact">Thank you for your interest. If you wish to get it touch with me, feel free to use the form or the various links below:</p>
    <form class="contactForm"
    action="https://formspree.io/mknvnpyn"
    method="POST"
  >
    <label class="formLabel" for="name">
    Your name:
    <input required type="text" name="name">
    </label>
    <label class="formLabel" for="_replyto">
      Your email:
      <input required type="text" name="_replyto">
    </label>
    <label class="formLabel">
      Your message:
      <textarea required name="message"></textarea>
    </label>
  
  <div class="button">
    <button type="submit">Send</button>
    </div>
    </form>
    
    <div class="icons">
      <span class="iconLink"><a href="mailto:johndsoko@gmail.com?" target="_blank"><i class='fas fa-envelope'></i></a></span>  
      <span class="iconLink"><a href="https://www.linkedin.com/in/john-sokolowski-97039518a/" target="_blank"><i class='fab fa-linkedin'></i></a></span>  
      <span class="iconLink"><a href="https://github.com/jdsoko" target="_blank"><i class='fab fa-github'></i></a></span>  
    </div>
    <div class="space"></div>`
}

//renders 'projects' content
function renderProjects(){
    return `<div class="projectContent">
    <h3 class="projectName">Quiz of Thrones</h3>

    <img src="image/Quiz_App_Screenshot.png" class="projectPic" alt="A screenshot of a Game of Thrones trivia quiz">

    <h4 class="projectTech"><span class="utilize">Utilizes:</span> HTML, CSS, Javascript, Flexbox, jQuery</h4>
    <p class="projectDescription">A short, but hopefully challenging, trivia quiz that seeks to test your knowledge of a number of potentially obscure 
            facts from one of my all-time favorite television shows, Game of Thrones.</p>
    
            <div class="projectLinks">
    <span><a href="https://github.com/jdsoko/Game-of-Thrones-Quiz" target="_blank">Repo</a></span>
    <span><a href="https://jdsoko.github.io/Game-of-Thrones-Quiz/" target="_blank">Live</a></span>
            </div> 

        
            
    <h3 class="projectName">What to Play Next?</h3>

    <img src="image/What_To_Play_Screenshot.png" class="projectPic" alt="A screenshot of my What to Play Next project">

    <h4 class="projectTech projectnum2"><span class="utilize">Utilizes:</span> HTML, CSS, Javascript, Flexbox, jQuery, APIs</h4>
    <p class="projectDescription">A program that enables users to submit the title of a game they just completed and, utilizing the RAWG Video Game Database,
    returns a list of suggested games for the user to play next. The user is also able to click on each game in order to get more information about it and
    even purchase it.</p>
    
            <div class="projectLinks">
    <span><a href="https://github.com/jdsoko/What_To_Play_Next" target="_blank">Repo</a></span>
    <span><a href="https://jdsoko.github.io/What_To_Play_Next/" target="_blank">Live</a></span>
            </div>

    <h3 class="projectName">GameReview</h3>

    <img src="image/GameReview_Pic.png" class="projectPic" alt="A screenshot of my GameReview project">

    <h4 class="projectTech projectnum2"><span class="utilize">Utilizes:</span> React, JSX, CSS, Node, Express, PostgreSQL, JWT Auth</h4>
    <p class="projectDescription">An app that enables users with a registered account to search through a list of games, and then select a specific game in order 
    to read reviews of the game posted by other users. Registered users can also add missing games to the list and post their own written reviews with an accompanying star rating.</p>
    
            <div class="projectLinks">
    <span><a href="https://github.com/jdsoko/GameReview" target="_blank">Repo</a></span>
    <span><a href="https://gamereview.now.sh/" target="_blank">Live</a></span>
            </div>

            <div class="space"></div>
    </div> `
}

//renders 'about' content
function renderAbout(){
    return `<div class="about">
                <p>
                        My name is John, and I am based out of Missouri. 
                </p>
            
                <p>When it comes to web-development, my favorite step of the process is the CSS because I enjoying designing the aesthetic of a web-page. I also look forward to collaborating on a team with other web devlopers so that I can learn from them and create even better projects.
                </p>
                    
                <p>
                    Outside of coding, I enjoy reading, creative writing, playing video games, listening to music, and spending time with my friends. In addition to being a programmer, I hope
                    to also one day be a published author. 
                </p>
            </div>
`

}


function runSite(){
    generateContact();
    generateProject();
    generateAbout();
}

$(runSite);