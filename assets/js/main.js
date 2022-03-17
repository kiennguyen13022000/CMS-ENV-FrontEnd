let arrowTop = '<svg class="arrow-top" width="5" height="3" viewBox="0 0 5 3" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
'                   <path fill-rule="evenodd" clip-rule="evenodd" d="M4.84723 2.85339C4.75347 2.94713 4.62632 2.99979 4.49373 2.99979C4.36115 2.99979 4.234 2.94713 4.14023 2.85339L2.49373 1.20689L0.847234 2.85339C0.752933 2.94447 0.626632 2.99487 0.495533 2.99373C0.364435 2.99259 0.239029 2.94001 0.146325 2.8473C0.0536206 2.7546 0.00103604 2.62919 -0.000103163 2.49809C-0.00124237 2.367 0.049155 2.24069 0.140234 2.14639L2.14023 0.146393C2.234 0.0526579 2.36115 2.81579e-08 2.49373 2.97389e-08C2.62632 3.132e-08 2.75347 0.0526579 2.84723 0.146393L4.84723 2.14639C4.94097 2.24016 4.99363 2.36731 4.99363 2.49989C4.99363 2.63248 4.94097 2.75963 4.84723 2.85339Z" fill="#1D69A0"></path>\n' +
'                </svg>';

let arrowBottom = '<svg class="arrow-bottom" width="5" height="3" viewBox="0 0 5 3" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                 <path fill-rule="evenodd" clip-rule="evenodd" d="M0.146296 0.146393C0.24006 0.0526576 0.367214 -2.02228e-07 0.499796 -1.96433e-07C0.632378 -1.90637e-07 0.759532 0.0526576 0.853296 0.146393L2.4998 1.79289L4.1463 0.146393C4.2406 0.0553142 4.3669 0.00491683 4.498 0.00605605C4.6291 0.00719526 4.7545 0.0597799 4.84721 0.152484C4.93991 0.245188 4.99249 0.370594 4.99363 0.501693C4.99477 0.632791 4.94438 0.759092 4.8533 0.853393L2.8533 2.85339C2.75953 2.94713 2.63238 2.99979 2.4998 2.99979C2.36721 2.99979 2.24006 2.94713 2.1463 2.85339L0.146296 0.853393C0.0525609 0.759629 -9.68256e-05 0.632475 -9.68198e-05 0.499893C-9.6814e-05 0.367311 0.052561 0.240157 0.146296 0.146393Z" fill="black"></path>\n' +
    '              </svg>';


$('.main-sidebar .sidebar-menu li a.has-dropdown').click(function () {

     let arrow = $(this).find('svg').hasClass('arrow-top');
     if (arrow) {
         $(this).find('.dot-arrow').html(arrowBottom);
     }else{
         $(this).find('.dot-arrow').html(arrowTop);
     }
});

let svg = $('.main-sidebar .sidebar-menu li a svg');
let arrow = $('.dot-arrow');
let click = 0;
$('.toggle-sidebar').on('click', function() {


    if (click % 2 == 1) {
        arrow.show();
        $('.sidebar-style-2 .sidebar-menu > li.active > a').css({"padding-left": 11});
        $('.main-sidebar .sidebar-menu li a').css({"padding-left": 11});
        svg.attr("style", "margin-right: 13px; margin-left: 6px");
    }else{
        svg.attr("style", "margin-right: 0px; margin-left: 0px");
        arrow.hide();
        $('.sidebar-style-2 .sidebar-menu > li.active > a').css({"padding-left":0});
        $('.main-sidebar .sidebar-menu li a').css({"padding-left": 0});
    };
    click += 1;
});