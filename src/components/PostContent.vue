<template>
    <div >
        <div class="post-items w-full p-5">
            <div class="flex justify-end">
                <button type="button" class="flex justify-end">
                    <font-awesome-icon :icon="['fas', 'ellipsis']" />
                 </button>
            </div>
            <div class="post-content">
                <h3 class="date">20.06.2024</h3>
                <h4 class="sub-title">¿Qué es el Acuerdo de ?</h4>
                <h1 class="title">Latest Post</h1>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <a href="" class="see-btn"> SEE MORE</a>
                <div class="post-image">
                    <img src="@/assets/postImage.png" alt="postImage">
                </div>
                <div class="flex items-center">
                    <div class="w-6/12">
                        <button class="tag-button" type="button">
                            #Justatag
                        </button>
                    </div>
                    <div class="w-6/12">
                        <div class="flex social items-center justify-end">
                            <h2 class=" mr-10">Share</h2>
                            <ul class="flex items-center">
                                <li class="nav-item"><a href="">
                                    <img src="@/assets/twitter.png" alt="twitter">
                                </a></li>
                                <li class="nav-item"><a href="">
                                    <img src="@/assets/facebook.png" alt="twitter">
                                </a></li>
                                <li class="nav-item"><a href="">
                                    <img src="@/assets/linkedin.png" alt="twitter">
                                </a></li>
                                <li class="nav-item"><a href="">
                                    <img src="@/assets/whatsapp.png" alt="twitter">
                                </a></li>
                                <button type="button">
                                    <img src="@/assets/print.png" alt="twitter">
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

.post-items{
    background: #fff;
    border-radius: 15px;
    height: 100%;
}
.post-content{
    padding-top: 20px;
}
.post-content .date{
    color: #404A98;
    font-family: "Public Sans",sans-serif;
    font-size: 25px;
    font-weight: 800;
    text-align: left;
    padding-bottom: 7px;
}
.post-content .sub-title{
    color: #6E851C;
    font-family: "Public Sans",sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    padding-bottom: 7px;
}
.post-content .title{
    color: #404A98;
    font-family: "Public Sans",sans-serif;
    font-size: 35px;
    font-weight: 700;
    text-align: left;
    padding-bottom: 7px;
}
.post-content .p{
    color: #535353;
    font-family: "Public Sans",sans-serif;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    padding-bottom: 20px;
}
.post-content .see-btn{
    color: #404A98;
    font-family: "Public Sans",sans-serif;
    font-size: 35px;
    font-weight: 700;
    text-align: left;
    display: block;
}
.post-content img{
    width: 100%;
    object-fit: cover;
    height: 388px;
    display: block;
    padding: 20px 0;
}
.post-content .tag-button{
    background: #4B549E;
    padding: 10px 25px;
    border-radius: 15px;
    font-family: "Public Sans",sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 18.8px;
    text-align: left;
    color: #fff;
}
.post-content .social li{
    padding:  0 10px;
}
.post-content .social img{
    width: 30px !important;
    height: auto !important;
}.post-content .social h2{
    color: #404A98;
    font-family: "Public Sans",sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 18.8px;
}
</style>