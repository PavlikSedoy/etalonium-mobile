// Dinamic Title on Home Section
var Messenger = function(el){
    'use strict';
    var m = this;

    m.init = function(){
        m.codeletters = "&#*+%?£@§$";
        m.message = 0;
        m.current_length = 0;
        m.fadeBuffer = false;
        m.messages = [
            'Welcome to Decentrilize Fashion World',
            'Choose your creatives and promote them',
            'Become a producer in world of fashion',
            'Make Dream profitable'
        ];

        setTimeout(m.animateIn, 100);
    };

    m.generateRandomString = function(length){
        var random_text = '';
        while(random_text.length < length){
            random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
        }

        return random_text;
    };

    m.animateIn = function(){
        if(m.current_length < m.messages[m.message].length){
            m.current_length = m.current_length + 2;
            if(m.current_length > m.messages[m.message].length) {
                m.current_length = m.messages[m.message].length;
            }

            var message = m.generateRandomString(m.current_length);
            el.innerHTML = message;

            setTimeout(m.animateIn, 20);
        } else {
            setTimeout(m.animateFadeBuffer, 20);
        }
    };

    m.animateFadeBuffer = function(){
        if(m.fadeBuffer === false){
            m.fadeBuffer = [];
            for(var i = 0; i < m.messages[m.message].length; i++){
                m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
            }
        }

        var do_cycles = false;
        var message = '';

        for(var i = 0; i < m.fadeBuffer.length; i++){
            var fader = m.fadeBuffer[i];
            if(fader.c > 0){
                do_cycles = true;
                fader.c--;
                message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
            } else {
                message += fader.l;
            }
        }

        el.innerHTML = message;

        if(do_cycles === true){
            setTimeout(m.animateFadeBuffer, 50);
        } else {
            setTimeout(m.cycleText, 2000);
        }
    };

    m.cycleText = function(){
        m.message = m.message + 1;
        if(m.message >= m.messages.length){
            m.message = 0;
        }

        m.current_length = 0;
        m.fadeBuffer = false;
        el.innerHTML = '';

        setTimeout(m.animateIn, 200);
    };

    m.init();
}

console.clear();

// Run scripts, when page loaded
window.onload = function () {
    console.log('test');
    var messenger = new Messenger(document.getElementById('home-title'));
}

// var file = document;
// var size = file.getsize(); // file size
//
// function timeout_trigger() {
//     var loaded = file.getLoaded(); // loaded part
//     p = parseInt(loaded / size);
//
//     // $(".progress").css("max-width",p+"%");
//     $(".progress-view").text(p+"%");
//     if(p!=100) {
//         setTimeout('timeout_trigger()', 20);
//     }
// }
// timeout_trigger();