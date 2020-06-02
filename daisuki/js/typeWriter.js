var charIndex = -1;
var stringLength = 0;
var inputText;

function writeContent(init) {
    if (init) {
        inputText = document.getElementById("contentToWrite").innerHTML;
    }
    if (charIndex == -1) {
        charIndex = 0;
        stringLength = inputText.length;
    }
    var initString = document.getElementById("myContent").innerHTML;
    initString = initString.replace(/<SPAN.*$/gi, "");
    var theChar = inputText.charAt(charIndex);
    var nextFourChars = inputText.substr(charIndex, 4);
    if (nextFourChars == "<BR>" || nextFourChars == "<br>") {
        theChar = "<BR>";
        charIndex += 3;
    }
    initString = initString + theChar + "<SPAN id='blink'>_</SPAN>";
    document.getElementById("myContent").innerHTML = initString;
    var el_height = $("#wrap")[0].scrollHeight  //  ===>  获得滚动条的高度
     //  ===> 设置滚动条的位置，滚动到底部
    if (el_height) {
        $("#wrap").scrollTop(el_height);
       
    }
    console.log($('#wrap').scrollTop())
    charIndex = charIndex / 1 + 1;
    if (charIndex % 2 == 1) {
        // document.getElementById("blink").style.display = "none";
        document.getElementById("blink").style.opacity = "0";
    } else {
        document.getElementById("blink").style.display = "inline";
        document.getElementById("blink").style.opacity = "1";
    }
    if (charIndex <= stringLength) {
        setTimeout("writeContent(false)", 140);
    } else {
        blinkSpan();
    }
}

var currentStyle = "inline";

function blinkSpan() {
    if (currentStyle == "1") {
        currentStyle = "0";
    } else {
        currentStyle = "1";
    }
    document.getElementById("blink").style.opacity = currentStyle;
    setTimeout("blinkSpan()", 100);
}
