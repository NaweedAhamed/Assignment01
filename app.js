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