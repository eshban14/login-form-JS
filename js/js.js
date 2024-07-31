
$(".info-item .btn").click(function(){
    $(".container").toggleClass("log-in");
  });
  $(".container-form .btn").click(function(){
    $(".container").addClass("active");
  })

  function loginsc(){
    let username = document.getElementById('username').value
    let pw = document.getElementById('pw').value
    let sc_code = document.getElementById('sc_code').value
    
    
    let username_ad = "eshban"
    let password = "younis"
    let sccode = "texno"

    if(username_ad == username && password == pw || sccode === sc_code){
        document.getElementById('uptext').innerHTML = 'Welcome!'
        document.getElementById('sctext').innerHTML = 'Welcome!'
    }else{
        alert('wrong try again')
    }
  }