$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
function logon() {
    window.location = "https://emilydkiehl.github.io/Occurren/matches.html";
}
function addUsers(){
   var users = [];
   var passes = [];
   
   users.push(document.getElementById('user').value);
   passes.push(document.getElementById('pass').value);
   
   window.location.href = 'https://emilydkiehl.github.io/Occurren/home.html';
   alert(users, passes);
}
function login(){
   var i;
   var userExists = new Boolean(false);
   for (i = 0; i < users.length; i++) { 
      if (users[i] = document.getElementById(username)){
         userExists = true;
      }
      else{
         userExists = false;
         alert("Check to make sure your username is correct");
      }
   for (i = 0; i < users.length; i++) { 
      if (passes[i] = document.getElementById(password)){
         userExists = true;
      }
      else{
         userExists = false;
         alert("Check to make sure your password is correct");
      }
      if (userExists = true){
         window.location.href = 'https://emilydkiehl.github.io/Occurren/home.html';
      }
document.getElementById("addaccount").addEventListener('click', alert("dffcf"));
document.getElementById("login").addEventListener('click', alert("rtdfj"));
      
      

}
