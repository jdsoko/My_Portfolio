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
        $(window).scrollTop(0)

    })
}

//event listener for when user clicks 'projects'
function generateProject(){
    $('ul').on('click', 'a#projects', function(event){
        
        $('.displayedContent').html(renderProjects()).hide().fadeIn(700);
        $(window).scrollTop(0)
    })
}

//event listener for when user clicks 'about'
function generateAbout(){
    $('ul').on('click', 'a#about', function(event){
        
        $('.displayedContent').html(renderAbout()).hide().fadeIn(700);
        $(window).scrollTop(0)
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
      <span class="iconLink"><a href="mailto:johndsoko@outlook.com?" target="_blank" aria-label="Email link"><i class='fas fa-envelope'></i></a></span>  
      <span class="iconLink"><a href="https://www.linkedin.com/in/john-sokolowski-97039518a/" target="_blank" aria-label="LinkedIn link"><i class='fab fa-linkedin'></i></a></span>  
      <span class="iconLink"><a href="https://github.com/jdsoko" target="_blank" aria-label="GitHub link"><i class='fab fa-github'></i></a></span>  
    </div>
    <div class="space"></div>`
}

//renders 'projects' content
function renderProjects(){
    return `<section class="projectContent">
    <h3 class="projectName">Ju$t for Fund</h3>
    <img src="image/just-for-fund-screenshot(2).png" class="projectPic" alt="A screenshot of a Game of Thrones trivia quiz">
    <div class="projectInfo">
    <h4 class="projectTech"><span class="utilize">Utilizes:</span> React, JSX, CSS, Node, Express, PostgreSQL, JWT Auth</h4>
    <p class="projectDescription">An app that enables users with a registered account to create and delete financial budgets. They can also input and track purchases for each budget and sort those purchases by category. For group budgeting, users can enter the username of another user they wish to share the budget with, enabling that user access to that specific budget and its purchases. The app is intended for anyone who wants to be able to track their purchases and properly budget, but especially who is looking to budget along with someone else. I built this app because my fiance and I recently had a son and we were looking to be able to more closely manage our finances together.</p>
    
            <div class="projectLinks">
    <span><a href="https://github.com/jdsoko/Just_For_Fund_Client" target="_blank">Repo</a></span>
    <span><a href="https://just-for-fund.now.sh/" target="_blank">Live</a></span>
            </div> 
    </div>
    <h3 class="projectName">GameReview</h3>
    <img src="image/GameReview_Pic.png" class="projectPic" alt="A screenshot of my GameReview project">
    <div class="projectInfo">
    <h4 class="projectTech projectnum2"><span class="utilize">Utilizes:</span> React, JSX, CSS, Node, Express, PostgreSQL, JWT Auth</h4>
    <p class="projectDescription">An app that enables users with a registered account to search through a list of games, and then select a specific game in order to read reviews of the game posted by other users. Registered users can also add missing games to the list and post their own written reviews with an accompanying star rating. I made the app as a place for people to easily be able to express their opinions on whatever video game they desire. My reason for making it was because video games are a hobby of mine and I wanted to provide people a platform to share their views on their favorite video games.</p>
    
            <div class="projectLinks">
    <span><a href="https://github.com/jdsoko/GameReview" target="_blank">Repo</a></span>
    <span><a href="https://gamereview.now.sh/" target="_blank">Live</a></span>
            </div>
    </div>
           
    <h3 class="projectName">What to Play Next?</h3>
    <img src="image/What_To_Play_Screenshot.png" class="projectPic" alt="A screenshot of my What to Play Next project">
    
    <div class="projectInfo">
    <h4 class="projectTech projectnum2"><span class="utilize">Utilizes:</span> HTML, CSS, JavaScript, Flexbox, jQuery, APIs</h4>
    <p class="projectDescription">A program that enables users to submit the title of a game they just completed and, utilizing the RAWG Video Game Database, returns a list of suggested games for the user to play next. The user is also able to click on each game in order to get more information about it and even purchase it. The app is intended as a tool for gamers so that they do not have to worry about what game they want to play next. I built the app because I am indecisive and oftentimes struggle with finding new games to play that are similar to other games I have enjoyed.</p>
    
            <div class="projectLinks">
    <span><a href="https://github.com/jdsoko/What_To_Play_Next" target="_blank">Repo</a></span>
    <span><a href="https://jdsoko.github.io/What_To_Play_Next/" target="_blank">Live</a></span>
            </div>
    </div>
    <h3 class="projectName">Quiz of Thrones</h3>
    <img src="image/Quiz_App_Screenshot.png" class="projectPic" alt="A screenshot of a Game of Thrones trivia quiz">
    <div class="projectInfo">
    <h4 class="projectTech"><span class="utilize">Utilizes:</span> HTML, CSS, JavaScript, Flexbox, jQuery</h4>
    <p class="projectDescription">A short, but hopefully challenging, trivia quiz that seeks to test your knowledge of a number of potentially obscure facts from one of my all-time favorite television shows, Game of Thrones. The quiz is intended for anyone who is a fan of Game of Thrones and thinks they know a lot about it. I made the app because I thought it would be a fun way to explore my love and knowledge of the show.</p>
    
            <div class="projectLinks">
    <span><a href="https://github.com/jdsoko/Game-of-Thrones-Quiz" target="_blank">Repo</a></span>
    <span><a href="https://jdsoko.github.io/Game-of-Thrones-Quiz/" target="_blank">Live</a></span>
            </div> 
    </div>
   
            <div class="space"></div>
    </section> `
    
}

//renders 'about' content
function renderAbout(){
    return `<section class="about">
                <p>
                        My name is John, and I am based out of Missouri. 
                </p>
            
                <p>My favorite part of web development is the styling because I enjoy creating a pleasing aesthetic. I also look forward to collaborating on a team with other web developers so that I can learn from them and create even better projects.
                </p>
                    
                <p>
                    Outside of coding, I enjoy reading, creative writing, playing video games, listening to music, and spending time with my friends. In addition to being a programmer, I hope
                    to also one day be a published author. 
                </p>
                <p>
                I have recently started <a class="blogLink" href="https://john-sokolowski.weebly.com/" target="_blank">a new blog</a>, if that interests you.
            </p>
            </section>
`

}


function runSite(){
    generateContact();
    generateProject();
    generateAbout();
}

$(runSite);