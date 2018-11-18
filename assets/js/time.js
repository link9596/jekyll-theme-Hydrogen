ajax()
  function ajax(option){
    var xhr = null;
    if(window.XMLHttpRequest){
      xhr = new window.XMLHttpRequest();
    }else{ // ie
      xhr = new ActiveObject("Microsoft")
    }
    xhr.open("get","baidu.com");
    xhr.send(null);
    xhr.onreadystatechange = function(){
      var time = null,
          curDate = null;
      if(xhr.readyState===2){
        // Get time
        time = xhr.getResponseHeader("Date");
        console.log(xhr.getAllResponseHeaders())
        curDate = new Date(time);
        document.getElementById("sitetime").innerHTML = (parseInt((((curDate.getTime() / 1000) - 1514020000 ) / 86400 )));
      }
    }
  }
