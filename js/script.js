let form  = document.getElementById('empForm');
let id = document.getElementById('id');
let name = document.getElementById('name');
let ext = document.getElementById('ext');
let email = document.getElementById('email');
let department = document.getElementById('department');

window.addEventListener('load', init, false)
  function init(){"use strict";
       form.addEventListener("submit", () => {
               console.log('id: '+  id.value);
               console.log('name: ' + name.value);
               console.log('ext: '+ ext.value);
               console.log('email: ' + email.value);
               console.log('department: ' + department.value);
               event.preventDefault(); 
               });
           }
