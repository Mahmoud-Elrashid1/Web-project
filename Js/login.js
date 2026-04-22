// login.js
// el querySelector -> deh method bn7otha 34an n5tar el 3onsr mn el html
const loginForm = document.querySelector('.loginform');
/* el addEventListener -> hya zy el onlick bs a7sn w akwa fa 2st5dmnha */
loginForm.addEventListener('submit', function (e)/* el e -> 25tsar event */ {/* lma el user ydos login el function t4t8l*/ 
    e.preventDefault();/*mn3na en el form t3ml refresh -> 34an n3alg el bynat el awl b js */

    const email = document.getElementById('email').value.trim();/* value -> hat el kyma el user katbha , trim -> bt4yl el spaces el malha4 lzma */ 
    const password = document.getElementById('pass').value;

    // bngyb kol el students el mt5azn 3andna el email bt3hom w el pass w nfs el klam ll admins
    const students = JSON.parse(localStorage.getItem('students')) || [];/* el Json.parse -> bt7awl el string l array aw object w (or) -> low mafy4 bynat 5als 5lyh array fady bdl null*/ 
    const admins = JSON.parse(localStorage.getItem('admins')) || [];

    // Search in students first, then admins
    let user = null;
    let role = '';

    for (let i = 0; i < students.length; i++) {
        if (students[i].email === email && students[i].password === password) {
            user = students[i];
            role = 'student';/* w 3mtn 2st5dma (===) 34an nt2akd ml kyma w el type bt3ha l2n (==) btt2akd ml kyma bs*/ 
        }
    }

    for (let i = 0; i < admins.length; i++) {
        if (admins[i].email === email && admins[i].password === password) {
            user = admins[i];
            role = 'admin';
        }
    }

    // el goz2 dah kol el hwa by3mlo by4of b2a f3ln fe email w pass 2tla2o w low fe f3ln 
    //  bydyf no3 el user dlw w bytb3 resala "welcome" w y5zn el most5dm dlw fe localStorage
    // w low mafy4 email w pass 2tla2o ytb3 deh "Invalid email or password!""
    if (user) {
        user.role = role;
        alert('Welcome ' + user.name + '!');
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = "campusevent.html";
    } else {
        alert('Invalid email or password!');
    }
});