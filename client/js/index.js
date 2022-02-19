$('#foreground').eraser();

document.getElementById('resetBtn').onclick = function () {
    $('#foreground').eraser('reset');
};

document.getElementById('clearBtn').onclick = function () {
    $('#foreground').eraser('clear');
};