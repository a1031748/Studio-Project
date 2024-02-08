$(window).scroll(function (e) {
    if ($(window).scrollTop() <= 0){
        $(".explore").addClass("at_top");
        $(".navbar").removeClass("bg_color");
        $(".navbar-brand").css("color","#ececec");
        $(".nav-item").removeClass("text_color");
        $(".nav_link").css("color","#ececec");
        

    }
    else{
        $(".explore").removeClass("at_top");
        $(".navbar").addClass("bg_color");
        $(".navbar-brand").css("color","#282f44");
        $(".nav-item").addClass("text_color");
        $(".nav_link").css("color","#282f44");
        
    }
        
});


function detect_cat(cat_id, x) {
    var catplace = $(cat_id).offset().left + $("#cat").width() / 2;
    if (Math.abs(x - catplace) < 80) {
        $(cat_id).css("bottom", "0px");
    } else {
        $(cat_id).css("bottom", "-50px");
    }

}


$(window).mousemove(function (evt) {
    var pagex = evt.pageX;
    var pagey = evt.pageY;

    var x = pagex - $("#section_about").offset().left;
    var y = pagey - $("#section_about").offset().top;

    //console.log(x + "," + y);

    detect_cat("#cat_yellow", pagex);
    detect_cat("#cat_blue", pagex);
    detect_cat("#cat_grey", pagex);


    $(".mountain").css("transform", "translateX(" + (pagex / -20 + 50) + "px)");
    $(".r1text").css("transform", "translateX(" + (pagex / -5) + "px)");
    $(".r2text").css("transform", "translateX(" + (pagex / -10) + "px)");
    $(".r3text").css("transform", "translateX(" + (pagex / -12) + "px)");


    $(".tri1").css("transform", "translateX(" + (pagex / -5) + "px)");
    $(".tri2").css("transform", "translateX(" + (pagex / -10) + "px)");
    $(".tri3").css("transform", "translateX(" + (pagex / -12) + "px)");
    $(".tri4").css("transform", "translateX(" + (pagex / -14) + "px)");
    $(".tri5").css("transform", "translateX(" + (pagex / -16) + "px)");

    if (y < 0 || y > $("#section_about").outerHeight()) {
        $("#cross").css("opacity", 0);
    } else {
        $("#cross").css("opacity", 1);
    }

    $("#cross").css("left", x + "px");
    $("#cross").css("top", y + "px");

    //cat animate---------------------------------------------

    var catplace = $("#cat").offset().left + $("#cat").width() / 2;
    var cattop = $("#cat").offset().top;
    var img_url = "https://awiclass.monoame.com/catpic/";

    if (pagex < catplace - 50) {
        $("#cat").attr("src", img_url + "cat_left.png");
    } else if (pagex > catplace + 50) {
        $("#cat").attr("src", img_url + "cat_right.png");
    }

});

const app = Vue.createApp({
    data() {
        return {

            works: [
                {
                    name: "雜學校 | zashare 網頁製作",
                    website: "https://zashare.org",
                    description: "亞洲最大的創新教育展",
                    img: "https://monoame.com/projects/proj_zashare/main.jpg",
                },
                {
                    name: "Selinko智慧酒瓶認證 UI/UX",
                    website: "https://monoame.com/works/5",
                    description: "與RemyMartin合作的限量酒款活動",
                    img: "https://monoame.com/projects/proj_selinko/main.jpg",
                },
                {
                    name: "國際美容化妝品展",
                    website: "https://health-fair.top-link.com.tw/",
                    description: "網頁製作、視覺設計",
                    img: "https://monoame.com/projects/proj_beauty/main.jpg",
                },
                {
                    name: "啟程，畢業故事總匯瘋 | 活動VI設計",
                    website: "https://www.flyingv.cc/projects/6796",
                    description: "CIS 主視覺設計",
                    img: "https://monoame.com/projects/proj_story/main.JPG",
                },
                {
                    name: "世界健康大會 | 網頁設計",
                    website: "https://www.creatop.com.tw/project/medical-biotechnology",
                    description: "網頁與視覺設計",
                    img: "https://monoame.com/projects/proj_health_conf/01.jpg",
                }
            ],

        };
    },
    // mounted() {
    //     var vobj = this;
    //     //console.log(vobj);
    //     axios.get("https://awiclass.monoame.com/api/command.php?type=get&name=projects")
    //         .then(function (res) {
    //             console.log(res);
    //             console.log(res.data);
    //             var ary = res.data;
    //             console.log(ary);
    //             //vobj.works=ary;

    //         })
    // },

});
const vm = app.mount("#app");

// console.log(vm.works);
// console.log(typeof (vm.works));
// rawObject = JSON.parse(JSON.stringify(vm.works));
// console.log(rawObject);

// $.ajax({
//     url: "https://awiclass.monoame.com/api/command.php?type=get&name=projects",
//     success: function (res) {
//         vobj.works = JSON.parse(res);
//         console.log(vobj.works);
//     }
// });