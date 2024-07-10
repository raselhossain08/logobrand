<template>
    <footer >
        <div class="container">
            <div class="flex items-center">
                <img src="@/assets/logo.png" alt="">
                <div class="hidden md:block px-2 content">
                    <h2>Sitio realizado por {Variable} , Lorem ipsum dolorem sic parabelum vis a sacarician sobaresi sisimamen</h2>
                    <h2>Fecha: {InsertDate}.  Derechos reservados. v1.0</h2>
                    <a href="">Contacto</a>
                </div>
                <div class="block md:hidden  px-2 content">
                    <h2>Sitio realizado por {Variable} {InsertDate}. </h2>
                    <h2>Derechos reservados. v1.0</h2>
                    <a href="">Contacto</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
footer{
    background: #404A98;
    height: 140px;
    display: flex;
    align-items: center;

}
footer h2{
    font-family: "Public Sans",sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 21.15px;
    text-align: left;
    color: #FFFFFF;
}
footer a{
    padding-top: 10px;
    font-family: "Public Sans",sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 21.15px;
    text-align: left;
    color: #FFFFFF;
    text-decoration: underline;
}
@media only screen and (max-width: 768px){
    footer h2{
    font-family: "Public Sans",sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 21.15px;
    text-align: left;
    color: #FFFFFF;
}
footer a{
    padding-top: 10px;
    font-family: "Public Sans",sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 21.15px;
    text-align: left;
    color: #FFFFFF;
    text-decoration: underline;
}
}
</style>