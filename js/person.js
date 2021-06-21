 $(document).ready(function() {

     $("#header").load("../components/header.html");

     $("#footer").load("../components/footer.html");


     $("#exit").click(function() {
         window.location.href = "../pages/home.html"
     });

     $(".img-home").click(function() {
         window.location.href = "../pages/home.user.html"
     });

     initializeUser();
     loadElementsHome();
     writeContentAdm();
     writeContentUser();

     $(".regular").slick({
         dots: true,
         infinite: true,
         slidesToShow: 4,
         slidesToScroll: 1
     });




     function writeContentAdm() {
         let html = "";
         let acomadacoes = [
             { image: "https://cf.bstatic.com/xdata/images/hotel/square200/279745101.webp?k=8669d3657fb3cf76eca7b186d61e14ed1fdd9ffb9062b94f3a9a5ac46d1c6e76&o=", name: "Hotel Express", description: "O Hotel oferece acomodações com Wi-Fi gratuito e estacionamento privativo gratuito, bem como acesso a uma piscina. O Hotel oferece acomodações com Wi-Fi gratuito e estacionamento privativo gratuito, bem como acesso a uma piscina." },
             { image: "https://cf.bstatic.com/xdata/images/hotel/square200/295407890.webp?k=7a56c61fcfdb4d534cfdbc78aa5bfecf61a01f6b5727399dbcb7888821d2009b&o=", name: "Fortaleza Beach", description: "O Hotel oferece acomodações com Wi-Fi gratuito e estacionamento privativo gratuito, bem como acesso a uma piscina. O Hotel oferece acomodações com Wi-Fi gratuito e estacionamento privativo gratuito, bem como acesso a uma piscina." },
             { image: "https://cf.bstatic.com/xdata/images/hotel/square200/184060191.webp?k=470c1a9493c261c8bd75fe4a1fa7307c43b928b9c9895b0ad8da1113ee814ea1&o=", name: "Village Hotel", description: "O Hotel oferece acomodações com Wi-Fi gratuito e estacionamento privativo gratuito, bem como acesso a uma piscina. O Hotel oferece acomodações com Wi-Fi gratuito e estacionamento privativo gratuito, bem como acesso a uma piscina." },
             { image: "https://cf.bstatic.com/xdata/images/hotel/square200/111260373.webp?k=87c55fe3f81bf973bdda937141a0f522430b68d938748c1280239742717106f3&o=", name: "Sol e Mar", description: "O Hotel oferece acomodações com Wi-Fi gratuito e estacionamento privativo gratuito, bem como acesso a uma piscina. O Hotel oferece acomodações com Wi-Fi gratuito e estacionamento privativo gratuito, bem como acesso a uma piscina." },
             { image: "https://cf.bstatic.com/xdata/images/hotel/square200/138465217.webp?k=272872925266f34fecb023d6c8ea37ab3524e5f6bf9db2a7be52d829ac8676e0&o=", name: "Praias Belas", description: "O Hotel oferece acomodações com Wi-Fi gratuito e estacionamento privativo gratuito, bem como acesso a uma piscina. O Hotel oferece acomodações com Wi-Fi gratuito e estacionamento privativo gratuito, bem como acesso a uma piscina." },
             { image: "https://cf.bstatic.com/xdata/images/hotel/square200/291518034.webp?k=0c8c09098e533646731f56dcd30afd6b902d4349fa464fcf1329d53eb68474f0&o=", name: "Palace City", description: "O Hotel oferece acomodações com Wi-Fi gratuito e estacionamento privativo gratuito, bem como acesso a uma piscina.O Hotel oferece acomodações com Wi-Fi gratuito e estacionamento privativo gratuito, bem como acesso a uma piscina." },
             { image: "https://cf.bstatic.com/xdata/images/hotel/square200/158232832.webp?k=482d1ffc1bbc530522080c5d9782216976b5a85ca7706d7298077cf53eddfcb8&o=", name: "Villa do Mar", description: "O Hotel oferece acomodações com Wi-Fi gratuito e estacionamento privativo gratuito, bem como acesso a uma piscina. O Hotel oferece acomodações com Wi-Fi gratuito e estacionamento privativo gratuito, bem como acesso a uma piscina." },
             { image: "https://cf.bstatic.com/xdata/images/hotel/square200/195957183.webp?k=b5195070fe44ea6a0b982528f7b38be02af5821a8163fa3647925c6bbfe12e24&o=", name: "Quality Hotel", description: "O Hotel oferece acomodações com Wi-Fi gratuito e estacionamento privativo gratuito, bem como acesso a uma piscina. O Hotel oferece acomodações com Wi-Fi gratuito e estacionamento privativo gratuito, bem como acesso a uma piscina." },
             { image: "https://cf.bstatic.com/xdata/images/hotel/square200/132094395.webp?k=71d03b79db516967f59d66955d5f351ac8a78d18a4f1e2bd4d391fcdcad7b92e&o=", name: "Algas Marinhas", description: "O Hotel oferece acomodações com Wi-Fi gratuito e estacionamento privativo gratuito, bem como acesso a uma piscina. O Hotel oferece acomodações com Wi-Fi gratuito e estacionamento privativo gratuito, bem como acesso a uma piscina." },
             { image: "https://cf.bstatic.com/xdata/images/hotel/square200/244681552.webp?k=ad78522c99b10a85ea0d90579645182bd4ff111defb4b57c6f7b736e4a76a7fb&o=", name: "Encantos", description: "O Hotel oferece acomodações com Wi-Fi gratuito e estacionamento privativo gratuito, bem como acesso a uma piscina. O Hotel oferece acomodações com Wi-Fi gratuito e estacionamento privativo gratuito, bem como acesso a uma piscina." },
             { image: "https://cf.bstatic.com/xdata/images/hotel/square200/132094395.jpg?k=71d03b79db516967f59d66955d5f351ac8a78d18a4f1e2bd4d391fcdcad7b92e&o=", name: "Tropicalia", description: "O Hotel oferece acomodações com Wi-Fi gratuito e estacionamento privativo gratuito, bem como acesso a uma piscina. O Hotel oferece acomodações com Wi-Fi gratuito e estacionamento privativo gratuito, bem como acesso a uma piscina." }
         ]
         localStorage.setItem("acomadacoes", JSON.stringify(acomadacoes));

         acomadacoes.forEach(city => {
             html += "<div class='col-12 content-adm-home'><div class='row'><div class='col-2'> <img src='" + city.image + "' class='img-thumbnail img-home-adm' alt='Responsive image'></div><div class='col-10'><h4 class='title-content-adm'>" + city.name + " </h4><p>" + city.description + "</p> <button type='button' class='btn btn-danger' onclick='removeAcomodation(\"" + city.name + "\")'	 style='float: right;'>- Remover </button>  </div></div></div>";


         });

         $("#contente-adm").html(html);
     }


     function writeContentUser() {
         let html = "";
         let cities = localStorage.getItem("acomadacoes")
         cities = JSON.parse(cities);


         cities.forEach(city => {
             html += "<div class='col-12 content-adm-home'><div class='row'><div class='col-2'> <img src='" + city.image + "' class='img-thumbnail img-home-adm' alt='Responsive image'></div><div class='col-10'><h4 class='title-content-adm'>" + city.name + " </h4><p>" + city.description + "</p> <button type='button' class='btn btn-success' onclick='reservar()'	 style='float: right;'>- Reservar </button>  </div></div></div>";
         });
         $("#contente-user").html(html);

     }

     function loadElementsHome() {
         let cities = [
             { image: "brasilia.jpg", name: "Brasilia", qtdAcm: 130, price: 100 },
             { image: "fortaleza.jpg", name: "Fortaleza", qtdAcm: 130, price: 100 },
             { image: "cuiaba.jpg", name: "Cuiaba", qtdAcm: 130, price: 100 },
             { image: "rio.jpg", name: "Rio de Janeiro", qtdAcm: 130, price: 100 },
             { image: "gramado.jpg", name: "Gramado", qtdAcm: 130, price: 100 },
             { image: "campos.jpg", name: "Campos do Jordao", qtdAcm: 130, price: 100 }
         ]
         var citeHtml = ""
         var control = 0

         cities.forEach(element => {
             citeHtml += "<div class='col-4'><a href='../pages/home.user.html'> <img src='../images/" + element.image + "' class='img-thumbnail img-home' alt='Responsive image'>" + element.name + " - " + element.qtdAcm + " Acomodações </a></div> ";
             control++;
         });

         $("#cities").html(citeHtml);

     }

     function initializeUser() {
         let users = localStorage.getItem("users")
         users = JSON.parse(users);

         if (users == null || users.length == 0) {
             let users = [{ user: "Deivide", email: "deivide@fortes.com.br", password: "123", permission: "user" },
                 { user: "Fortes", email: "fortes@tecnologia.com.br", password: "123", permission: "adm" }
             ]
             localStorage.setItem("users", JSON.stringify(users));
         }
     }

 });


 function makeLogin() {
     let Users = localStorage.getItem("users")
     Users = JSON.parse(Users);
     let email = $("#user-login").val();
     let password = $("#password-login").val();


     let unicUser = Users.filter(us => us.email === email && us.password === password);

     if (unicUser.length > 0 && unicUser[0].permission === 'adm') {
         localStorage.setItem('logado', true);
         window.location.href = "../pages/home.adm.html"
         $("#buttom-header").html("<h4>Bem Vindo Administrador: <h4>")
     } else if (unicUser.length > 0 && unicUser[0].permission === 'user') {
         window.location.href = "../pages/home.user.html"
         localStorage.setItem('logado', true);
         $("#buttom-header").html("<h4>Bem Vindo: <h4>")
     } else {
         alert("Falha ao Logar")
     }
     $("#buttom-header").html("<h4>Bem Vindo: <h4>" + unicUser[0].name + "")
 }

 function NewUser() {
     let users = localStorage.getItem("users");
     users = JSON.parse(users);
     let user = {
         user: $("#name-new-user").val(),
         email: $("#email-new-user").val(),
         password: $("#password-new-user").val(),
         permission: "user",

     };

     users.push(user);
     localStorage.setItem("users", JSON.stringify(users));


     alert("Cadastro Finalizado.")
 }


 function newAcomodation() {

     let html = "";
     let newAcomodation = localStorage.getItem("acomadacoes");
     newAcomodation = JSON.parse(newAcomodation);
     let acm = {
         image: $("#image-adm").val(),
         name: $("#title-adm").val(),
         description: $("#description-adm").val(),

     };

     newAcomodation.push(acm);
     localStorage.setItem("acomadacoes", JSON.stringify(newAcomodation));


     newAcomodation.forEach(city => {
         html += "<div class='col-12 content-adm-home'><div class='row'><div class='col-2'> <img src='" + city.image + "' class='img-thumbnail img-home-adm' alt='Responsive image'></div><div class='col-10'><h4 class='title-content-adm'>" + city.name + " </h4><p>" + city.description + "</p> <button type='button' onclick='removeAcomodation(\"" + city.name + "\")' class='btn btn-danger' style='float: right;'>- Remover </button>  </div></div></div>";


     });

     $("#contente-adm").html(html);
     alert("Cadastro Finalizado.")

 }


 function removeAcomodation(title) {
     let auxRemove = [];
     let html = "";
     let newAcomodation = localStorage.getItem("acomadacoes");
     newAcomodation = JSON.parse(newAcomodation);

     newAcomodation.forEach(city => {

         if (city.name != title) {
             auxRemove.push(city);
             console.log(city.name != title)
             console.log(city.name)
             console.log(title)
             html += "<div class='col-12 content-adm-home'><div class='row'><div class='col-2'> <img src='" + city.image + "' class='img-thumbnail img-home-adm' alt='Responsive image'></div><div class='col-10'><h4 class='title-content-adm'>" + city.name + " </h4><p>" + city.description + "</p> <button type='button' onclick='removeAcomodation(\"" + city.name + "\")' class='btn btn-danger' style='float: right;'>- Remover </button>  </div></div></div>";

         }
     });

     $("#contente-adm").html(html);
     localStorage.setItem("acomadacoes", JSON.stringify(auxRemove));
     alert("Removido com Sucesso.")

 }


 function reservar() {

     let isloged = localStorage.getItem("logado");
     if (isloged != null) {
         alert("Reservado com Sucesso!")
     } else {
         alert("Voce Precisa Estar Logado !!")
     }
 }