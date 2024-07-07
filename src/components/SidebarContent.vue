<template>
    <div>
        <div class="tags p-8">
            <div class="flex top-tags pb-3">
                <img src="@/assets/download.png" alt="">
                <h2>Tags</h2>
            </div>
            <div class="tags-button flex flex-col justify-start items-start">
                <button type="button">#justatag</button>
                <button type="button">#justanothertag</button>
                <button type="button">#averydifferenttag</button>
                <button type="button">#anothertag</button>
            </div>
        </div>
        <div class="download-documents p-8 mt-8">
            <div class="flex top-tags pb-3">
                <img src="@/assets/download.png" alt="">
                <h2>Descargar documentos</h2>
            </div>
            <div class="divider"></div>
            <div class="feature-box flex items-center py-4">
                <div class="pr-2 feature-img">
                    <img src="@/assets/feature1.png" alt="">
                </div>
                <div class="feature-content pl-4 flex flex-col"> 
                    <h2>> Guia de Implementacion</h2>
                    <button type="button" class="pdf-btn my-4">
                        <img src="@/assets/pdf.png" alt="">
                        35kb
                    </button>
                </div>
            </div>
            <div class="feature-box flex items-center py-4 h-full">
                <div class="pr-2 feature-img w-5/12">
                    <img src="@/assets/feature2.png" alt="">
                </div>
                <div class="feature-content pl-4 flex flex-col  w-7/12 h-full justify-between"> 
                    <h2 class="pb-8">> Decreto promulgatorio del Acuerdo de Algo en Algun lugar</h2>
                    <button type="button" class="pdf-btn my-4">
                        <img src="@/assets/pdf.png" alt="">
                        35kb
                    </button>
                </div>
            </div>
            <div class="flex top-tags pb-3 pt-8">
                <img src="@/assets/build.png" alt="">
                <h2>See Partner Institutions</h2>
            </div>            
            <div class="flex top-tags pb-3 pt-8">
                <img src="@/assets/link.png" alt="">
                <h2>Quick Links</h2>
            </div>
            <div class="flex Quick-link items-center">
                <div class="w-2/4 flex flex-col justify-between h-full">
                    <a href="" >> Quick Link 1</a>
                    <a href="" >> Quick Link 2</a>
                    <a href="" >> Quick Link 3</a>
                </div>
                <div class="w-2/4">
                    <img src="@/assets/feature1.png" alt="">
                </div>
            </div>
        </div>

    </div>
</template>
<style>
.top-tags h2{
    font-family: "Public Sans",sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 23.5px;
    text-align: left;
    padding-left: 10px;
    color: #6E851C;
}
.tags{
    background: #fff;
    border-radius: 15px;
}
.tags-button button{
    background: #4B549E;
    padding: 10px 25px;
    border-radius: 15px;
    font-family: "Public Sans",sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 18.8px;
    text-align: left;
    color: #fff;
    margin: 5px 0;
}
.download-documents{
    background: #EFEFEF;
    border-radius: 15px;
}
.divider{
    width: 100%;
    height: 4px;
    background: #fff;
    margin: 10px 0;
}
.feature-content h2{
    font-family: 'Public Sans',sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 23.5px;
    text-align: left;
    color: #535353;
}
.feature-content button{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.feature-img img{
    width: 100%;
}
.pdf-btn {
    background-color:#4442951F ;
    padding: 7px 20px;
    border-radius: 10px;
}
.Quick-link a{
    display: block;
    font-family: "Public Sans",sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 23.5px;
    text-align: left;
    color: #535353;
    text-decoration: underline;
    padding: 10px 0;
}
</style>