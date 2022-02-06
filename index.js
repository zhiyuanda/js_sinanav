var uls_left = document.querySelector('.nav-left');
var uls_right = document.querySelector('.nav-right');
var lis_left = uls_left.children;
var lis_right = uls_right.children;
for (var i = 0;i < lis_left.length;i++) {
    lis_left[i].onmouseover = function() {
        this.children[1].style.display = 'block';
    }
    lis_left[i].onmouseout = function() {
        this.children[1].style.display = 'none';
    }
}
for (var i = 0;i < lis_right.length;i++) {
    lis_right[i].onmouseover = function() {
        this.children[1].style.display = 'block';
    }
    lis_right[i].onmouseout = function() {
        this.children[1].style.display = 'none';
    }
}