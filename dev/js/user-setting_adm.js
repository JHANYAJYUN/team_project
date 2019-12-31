Vue.component('memData', {
    template: `
        <div class="userSetting_memData">
            <table class="userSetting_memDataTable">
                <tr>
                    <td colspan="6"><img class="mempic" src="./img/chatroom/mark_1.png" alt="mempic"></td>
                </tr>
                <tr>
                    <td id="memNo">會員帳號:</td>
                    <td colspan="5">波音777-1</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td colspan="5">aaa@gmail.com<img onclick="showForm()" class="emailSet" src="./img/user-setting/gear.svg" alt="robotB3"></td>
                </tr>
                <tr>
                    <td>Air幣:</td>
                    <td colspan="5">50</td>
                </tr>
                <tr>
                    <td>信紙:</td>
                    <td colspan="5">5</td>
                </tr>
            </table>
        </div>
    `,
});
Vue.component('airCoin', {
    template: `
        <div class="userSetting_airCoin">
            <table class="userSetting_airCoinTable">
                <tr>
                    <td><h4>時間</h4></td>
                    <td><h4>信件</h4></td>
                    <td><h4>打賞者</h4></td>
                </tr>
                <tr>
                    <td>2019/12/18 12:00</td>
                    <td>被遺忘的外套</td>
                    <td>不怕冷的小樺</td>
                </tr>
                <tr>
                    <td>2019/12/15 18:35</td>
                    <td>百岳烏拉拉</td>
                    <td>亂爬阿祥</td>
                </tr>
                <tr>
                    <td>2019/12/14 05:45</td>
                    <td>大零食家</td>
                    <td>洋芋片咬輝哥</td>
                </tr>
                <tr>
                    <td>2019/12/10 05:46</td>
                    <td>青鳥傳情</td>
                    <td>香菇姑姑咕咕咕</td>
                </tr>
                <tr>
                    <td>2019/12/09 05:46</td>
                    <td>&on旅社</td>
                    <td>咖啡翰</td>
                </tr>
                <tr>
                    <td>2019/12/07 08:46</td>
                    <td>睡眠很重要</td>
                    <td>早起的邱哥</td>
                </tr>
            </table>
        </div>
    `,
});
Vue.component('memcolor', {
    template: `
        <div class="userSetting_memcolor">
            <div class="memcolorBig">
                <img id="memcolorBigLarge" src="img/share/blue-paint-bigline.svg" alt="blackB">
            </div>
            <div class="memcolorSmall">
                <img src="img/share/blue-paint-bigline.svg" alt="blackB">
                <img src="img/share/yellow-paint-bigline.svg" alt="white">
            </div>
        </div>
    `,
});
new Vue({
    el: '#memKanban',
    data: {
        content: 'memData',
    },
});
Vue.component('manu', {
    template: `
        <div class = "userSetting_manu">  
            <div class="panel-group" id="accordion">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="panel-title">
                            <h4 class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#post1">寫信</h4>
                        </div>
                    </div>
                    <div id="post1" class="panel-collapse collapse in">
                        <p class="panel-body"><ul><li>1.選擇分類<br>紙飛機的意義由自己賦予，也許心情抒發，也許生活趣事，一切就由選擇分類開始吧。</li><br><li>2.寫下內容<br>獨樂樂不如眾樂樂，有什麼大家必須知道的事情，最勁爆的踢爆、直擊與新聞，在此盡覽無遺。</li><br><li>3.漆上彩繪<br>選擇要漆上的彩繪，彩繪樣式可於<a href="./shop.html">商城</a>裡購買及設計。</li><br><li>4.選擇郵戳<br>選擇屬於自己的郵戳，郵戳樣式可於<a href="./shop.html">商城</a>裡購買及設計。</li><br><li>了解這些流程後快到<a href="./write-letter.html">寫信頁面</a>寫一封信吧。</li></ul></p><br>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="panel-title">
                            <h4 class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#post2">撈信</h4>
                        </div>
                    </div>
                    <div id="post2" class="panel-collapse collapse">
                    <p class="panel-body"><ul><li>1.選擇分類<br>紙飛機的意義由自己賦予，也許心情抒發，也許生活趣事，一切就由選擇分類開始吧。</li><br><li>2.寫下內容<br>獨樂樂不如眾樂樂，有什麼大家必須知道的事情，最勁爆的踢爆、直擊與新聞，在此盡覽無遺。</li><br><li>3.漆上彩繪<br>選擇要漆上的彩繪，彩繪樣式可於<a href="./shop.html">商城</a>裡購買及設計。</li><br><li>4.選擇郵戳<br>選擇屬於自己的郵戳，郵戳樣式可於<a href="./shop.html">商城</a>裡購買及設計。</li><br><li>了解這些流程後快到<a href="./write-letter.html">寫信頁面</a>寫一封信吧。</li></ul></p><br>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="panel-title">
                            <h4 class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#post3">商城</h4>
                        </div>
                    </div>
                    <div id="post3" class="panel-collapse collapse">
                        <p class="panel-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nam natus error et deserunt molestias placeat debitis nobis facilis quae. Sunt laudantium inventore hic omnis ab aliquam assumenda delectus corporis.</p>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="panel-title">
                            <h4 class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#post4">我的倉庫</h4>
                        </div>
                    </div>
                    <div id="post4" class="panel-collapse collapse">
                        <p class="panel-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nam natus error et deserunt molestias placeat debitis nobis facilis quae. Sunt laudantium inventore hic omnis ab aliquam assumenda delectus corporis.</p>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="panel-title">
                            <h4 class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#post5">聊天室</h4>
                        </div>
                    </div>
                    <div id="post5" class="panel-collapse collapse">
                        <p class="panel-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nam natus error et deserunt molestias placeat debitis nobis facilis quae. Sunt laudantium inventore hic omnis ab aliquam assumenda delectus corporis.</p>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="panel-title">
                            <h4 class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#post6">用戶設定</h4>
                        </div>
                    </div>
                    <div id="post6" class="panel-collapse collapse">
                        <p class="panel-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nam natus error et deserunt molestias placeat debitis nobis facilis quae. Sunt laudantium inventore hic omnis ab aliquam assumenda delectus corporis.</p>
                    </div>
                </div>
            </div>
        </div> 
     `,
});
Vue.component('ver', {
    template: `
    
        <div class="userSetting_ver">
            <h4>版本</h4>
            <p>1.0.0</p>
            <h4>版本內容</h4>
            <p>紙飛機對每個人有不同意義<br>也許思念、也許請訴<br>也許祝福、也許願望<br>不論翱翔或墜落<br>飛出手的紙飛機<br>如果能再次回到手裡<br>會是什麼模樣呢？</p>
        </div>
            
       
     `,
});
new Vue({
    el: '#sysKanban',
    data: {
        content: 'manu',
    }
});


// Vue.component('mike', {
//     template: `
//         <div class="userSetting_mike">
//             <div class="lighting"></div>
//             <div class="userSetting_wrap">
//                 <div class="userSetting_Name">
//                     <h4>開發者</h4>
//                     <span>峻瑜</span>
//                 </div>
//                 <ul class="userSetting_work">
//                     <h4>分工項目</h4>
//                     <li>UI視覺整合</li>
//                     <li>首頁、精華區</li>
//                     <li>後台管理員帳號管理</li>
//                 </ul>
//                 <div class="userSetting_portfolio">
//                     <h4>作品</h4>
//                     <a href="http://140.115.236.71/demo-personal/DD104/web/T1901173/" target="_blank">
//                         <span>Radara</span>
//                     </a><br>
//                     <a href="http://140.115.236.71/demo-personal/DD104/web/T1901163/">
//                         <span>Air Plan</span>
//                     </a>
//                 </div>
//             </div>
//             <img class="userSetting_picture" src="img/user-developer/mike.png">
//         </div>
//      `,
// });
// Vue.component('spencer', {
//     template: `
//         <div class="userSetting_spencer">
//             <div class="lighting"></div>
//             <div class="userSetting_wrap">
//                 <div class="userSetting_Name">
//                     <h4>開發者</h4>
//                     <span>宗翰</span>
//                 </div>
//                 <ul class="userSetting_work">
//                     <h4>分工項目</h4>
//                     <li>寫信、撈信</li>
//                     <li>前台網站整合</li>
//                     <li>Git版本控管</li>
//                 </ul>
//                 <div class="userSetting_portfolio">
//                     <h4>作品</h4>
//                     <a href="http://140.115.236.71/demo-personal/DD104/web/T1901175/" target="_blank">
//                         <span>&on</span>
//                     </a><br>
//                     <a href="http://140.115.236.71/demo-personal/DD104/web/T1901163/">
//                         <span>Air Plan</span>
//                     </a>
//                 </div>
//             </div>
//             <img class="userSetting_picture" src="img/user-developer/spencer.png">
//         </div>
//      `,
// });
// Vue.component('allen', {
//     template: `
//         <div class="userSetting_allen">
//             <div class="lighting"></div>
//             <div class="userSetting_wrap">
//                 <div class="userSetting_Name">
//                     <h4>開發者</h4>
//                     <span>耀輝</span>
//                 </div>
//                 <ul class="userSetting_work">
//                     <h4>分工項目</h4>
//                     <li>我的倉庫</li>
//                     <li>明信片紀錄</li>
//                     <li>後台審核檢舉</li>
//                 </ul>
//                 <div class="userSetting_portfolio">
//                     <h4>作品</h4>
//                     <a href="http://140.115.236.71/demo-personal/DD104/web/T1901167/" target="_blank">
//                         <span>Snack Snake</span>
//                     </a><br>
//                     <a href="http://140.115.236.71/demo-personal/DD104/web/T1901163/">
//                         <span>Air Plan</span>
//                     </a>
//                 </div>
//             </div>
//             <img class="userSetting_picture" src="img/user-developer/allen.png">
//         </div>
//      `,
// });
// Vue.component('grace', {
//     template: `
//         <div class="userSetting_grace">
//             <div class="lighting"></div>
//             <div class="userSetting_wrap">
//                 <div class="userSetting_Name">
//                     <h4>開發者</h4>
//                     <span>雅珺</span>
//                 </div>
//                 <ul class="userSetting_work">
//                     <h4>分工項目</h4>
//                     <li>購物商品</li>
//                     <li>客製化素材</li>
//                     <li>後台商品管理</li>
//                 </ul>
//                 <div class="userSetting_portfolio">
//                     <h4>作品</h4>
//                     <a href="http://140.115.236.71/demo-personal/DD104/web/T1901164/1103demo/" target="_blank">
//                         <span>Powder Ski Resort</span>
//                     </a><br>
//                     <a href="http://140.115.236.71/demo-personal/DD104/web/T1901163/">
//                         <span>Air Plan</span>
//                     </a>
//                 </div>
//             </div>
//             <img class="userSetting_picture" src="img/user-developer/grace.png">
//         </div>
//      `,
// });
// Vue.component('sharon', {
//     template: `
//         <div class="userSetting_sharon">
//             <div class="lighting"></div>
//             <div class="userSetting_wrap">
//                 <div class="userSetting_Name">
//                     <h4>開發者</h4>
//                     <span>湘文</span>
//                 </div>
//                 <ul class="userSetting_work">
//                     <h4>分工項目</h4>
//                     <li>即時聊天</li>
//                     <li>邀約提醒</li>
//                     <li>後台網站整合</li>
//                 </ul>
//                 <div class="userSetting_portfolio">
//                     <h4>作品</h4>
//                     <a href="http://140.115.236.71/demo-personal/DD104/web/T1901158/" target="_blank">
//                         <span>Bonheur</span>
//                     </a><br>
//                     <a href="http://140.115.236.71/demo-personal/DD104/web/T1901163/">
//                         <span>Air Plan</span>
//                     </a>
//                 </div>
//             </div>
//             <img class="userSetting_picture" src="img/user-developer/sharon.png">
//         </div>
//      `,
// });
// Vue.component('howard', {
//     template: `
//         <div class="userSetting_howard">
//             <div class="lighting"></div>
//             <div class="userSetting_wrap">
//                 <div class="userSetting_Name">
//                     <h4>開發者</h4>
//                     <span>恒祥</span>
//                 </div>
//                 <ul class="userSetting_work">
//                     <h4>分工項目</h4>
//                     <li>用戶設定</li>
//                     <li>後台會員管理</li>
//                     <li>資料庫建置與控管</li>
//                 </ul>
//                 <div class="userSetting_portfolio">
//                     <h4>作品</h4>
//                     <a href="http://140.115.236.71/demo-personal/DD104/web/T1901163/" target="_blank">
//                         <span>岳世界</span>
//                     </a><br>
//                     <a href="http://140.115.236.71/demo-personal/DD104/web/T1901163/">
//                         <span>Air Plan</span>
//                     </a>
//                 </div>
//             </div>
//             <img class="userSetting_picture" src="img/user-developer/howard.png">
//         </div>
//      `,
// });
// new Vue({
//     el: '#admKanban',
//     data: {
//         content: 'mike',
//     }
// });

//開發人員
var works = [
    {
      title: "峻瑜",
      description: "Radara",
      cover: "./img/user-developer/mike.png",
      src:"http://140.115.236.71/demo-personal/DD104/web/T1901173/"
    },
    {
      title: "宗翰",
      description: "&on",
      cover: "./img/user-developer/spencer.png",
      src:"http://140.115.236.71/demo-personal/DD104/web/T1901175/"
    },
    {
      title: "耀輝",
      description: "Snack Snake",
      cover: "./img/user-developer/allen.png",
      src:"http://140.115.236.71/demo-personal/DD104/web/T1901167/"
    },
    {
      title: "雅珺",
      description: "Powder Ski Resort",
      cover: "./img/user-developer/grace.png",
      src:"http://140.115.236.71/demo-personal/DD104/web/T1901164/"
    },
    {
      title: "湘文",
      description: "Bonheur",
      cover: "./img/user-developer/sharon.png",
      src:"http://140.115.236.71/demo-personal/DD104/web/T1901158/"
    },
    {
      title: "恒祥",
      description: "岳世界",
      cover: "./img/user-developer/howard.png",
      src:"http://140.115.236.71/demo-personal/DD104/web/T1901163/"
    }
];

new Vue({
    el: "#app",
    data: {
    now_index: 0,
    works: works,
    span: 962
    },
    computed: {
        computed_left() {
            var result = { 
                left: -this.now_index * this.span + "px" };
            // console.log(result);
            return result;
        }
    },
    methods: {
        delta(d) {
            this.now_index =(this.now_index + d + this.works.length) % this.works.length;
        },
        bg_css(url) {
            return "background-image:url(" + url + ")";
        }
    }
});


//外觀設定
function showLarge(e) {
    let memsmall = e.target;
    document.getElementById("memcolorBigLarge").src = memsmall.src;
    };

let picture_small = document.querySelectorAll(".memcolorSmall img");
for (let i = 0; i < picture_small.length; i++) {
    picture_small[i].onclick = showLarge;
};



//會員資料修改燈箱
var setDataBg = document.querySelector(".setDataBg");
function showForm() {
    setDataBg.style.display = "block";
};
function closeForm() {
    setDataBg.style.display = "none";
};



