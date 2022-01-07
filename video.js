
//(function(){
    
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        video = document.getElementById('video');
        video.autoplay=true;
       
       
    
    function myFunction(){

        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true
        }).then((stream)=> {
            video.srcObject = stream;
        }).catch((err)=> {
           console.log('navigator.mediaDevices.getUserMedia error: ',err.message,err.name);
    
        });
        console.log('called');
        (function loop(){
            if(playing){
                canvas.getContext('2d').drawImage(video,0,0,canvas.clientWidth,canvas.height);
                setTimeout(loop,1000/30);
            }
        })
       

    }
   


    
//})();