function bold(){
    document.execCommand('bold',true,null)
}

function underline(){
    document.execCommand('underline',true,null)
}

function Italic(){
    document.execCommand('italic',true,null)
}

function fontColor() {
    var fontColor = document.querySelector('input[type="color"]').value;
    if (fontColor) {
        document.execCommand('styleWithCSS', false, true);
        document.execCommand('foreColor', false, fontColor);
    }
}

function left() {
    document.querySelectorAll('.left').forEach(function(element){
        element.addEventListener('click',function(){
            document.getElementById('Editor').style.textAlign = 'left'
        })
    })
    
}
function right() {
    document.querySelectorAll('.right').forEach(function(element){
        element.addEventListener('click',function(){
            document.getElementById('Editor').style.textAlign = 'right'
        })
    })
    
}

function justify() {
    document.querySelectorAll('.justify').forEach(function(element){
        element.addEventListener('click',function(){
            document.getElementById('Editor').style.textAlign = 'justify'
        })
    })
    
}

function center() {
    document.querySelectorAll('.center').forEach(function(element){
        element.addEventListener('click',function(){
            document.getElementById('Editor').style.textAlign = 'center'
        })
    })
    
}

function executeCommand(command) {
    document.execCommand(command, false, null);
  }

  function undo() {
    document.execCommand('undo', false, null);
  }

  function redo() {
    document.execCommand('redo', false, null);
  }

