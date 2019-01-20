$( document ).ready(function() {
  //  $('#date').keyup(function() {
  //   $('span.error-keyup-5').remove();
  //   var inputVal = $(this).val();
  //   var dateReg = /^[0,1]?\d{1}\/(([0-2]?\d{1})|([3][0,1]{1}))\/(([1]{1}[9]{1}[9]{1}\d{1})|([2-9]{1}\d{3}))$/;
  //   if(!dateReg.test(inputVal)) {
  //       $(this).after('<span class="error error-keyup-5">Invalid date format.</span>');
  //       $('.error').css({"font-size":"0.75em", "color": "red"});
  //   }
  // });
   $.mask.definitions['9']='';
  $.mask.definitions['d']='[0-9]';
  $("#phone").mask("+998 (dd) ddd-dd-dd");
    $("#id_card").mask("KNG-dddd");
   $('#email').keyup(function() {
    $('span.error-keyup-7').remove();
    var inputVal = $(this).val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!emailReg.test(inputVal)) {
        $(this).after('<span class="error error-keyup-7">Invalid Email Format.</span>');
        $('.error').css({"font-size":"0.75em", "color": "red"});
    }
  });

//    $('#phone').keyup(function() {
//     $('span.error-keyup-4').remove();
//     var inputVal = $(this).val();
//     var characterReg = /^[2-9]\d{3}-\d{2}-\d{3}-\d{2}-\d{2}$/;
//     if(!characterReg.test(inputVal)) {
//         $(this).after('<span class="error error-keyup-4">Format xxx-xxx-xxxx</span>');
//         $('.error').css({"font-size":"0.75em", "color": "red"});
//     }
// });
    // var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var cleave = new Cleave('#date', {
    date: true,
    datePattern: ['d', 'm', 'Y']
    });
    // var cleave = new Cleave('#phone', {
    // phone: true,
    // phoneRegionCode: 'UZ'
    // });
   /* var cleave = new Cleave('#id_card', {
    prefix: 'KNG',
    delimiter: '-',
    blocks: [ 3, 4],
    uppercase: true
});*/
   function check(form_id) {
    var flag;
      var arr = $(form_id +' input, ' +form_id + ' select').serializeArray();
      $.each(arr, function(i , field){
        if(!field.value){
          var errlabel = $( form_id +' label[for="'+field.name+'"]').html();
          // alert("Fill this line "+ errlabel);
          var err = $(form_id + ' input[name="'+ field.name+'"]');
          err.css("border", "2px solid red");
          flag=false;
          return false;
        }
        else{
          flag=true;
          var err = $(form_id + ' input[name="'+ field.name+'"]');
          err.css("border", "1px solid #D0D0D0");
        }
      });
      console.log(flag);
     return flag;
   };

    $('#go_to_school').click(function()
    {
      
      if(check('form#form_1')){
        $(".main").hide();
        $(".about_school").show();        
      }
    });

    $('#back_to_main').click(function()
    {
      $(".about_school").hide();
      $(".main").show();
    });

     $('#go_to_payment').click(function()
      {
        if (check('form#form_2')) {
        $(".main").hide();
        $(".about_school").hide();
        $(".payment").show();
      }
      });

      $('#back_to_school').click(function()
      { 
        $(".payment").hide();
        $(".about_school").show();
      
      });

      $('#submited').click(function()
      {
        if (check('#form_3')) {
          alert("Sent!");
          $(".payment").hide();
          $(".main").show();
          location.reload();
        }
      });

      var select_json={ 

        "regions": [
        {
          "name": "Андижан",
          "code": "03000"
        },
        {
          "name": "Бухара",
          "code": "06000"
        },
        {
          "name": "Джизак ",
          "code": "08000"
        },
        {
          "name": "Кашкадарьz",
          "code": "10000"
        },
        {
          "name": "Навоий ",
          "code": "12000"
        },
        {
          "name": "Наманган ",
          "code": "14000"
        },
        {
          "name": "Самарканд ",
          "code": "18000"
        },
        {
          "name": "Сурхандарья ",
          "code": "22000"
        },
        {
          "name": "Сырдарья ",
          "code": "24000"
        },
        {
          "name": "ТашГор",
          "code": "26000"
        },
        {
          "name": "Ташобл  ",
          "code": "27000"
        },
        {
          "name": "Фергана ",
          "code": "30000"
        },
        {
          "name": "Хорезм",
          "code": "33000"
        },
        {
          "name": "Каракалпакскистан ",
          "code": "35000"
        }
      ],
      
      "districts": [
        {
          "name": "Алтынкульский  ",
          "code": "03202"
        },
        {
          "name": "Андижанский  ",
          "code": "03203"
        },
        {
          "name": "Балыкчинский  ",
          "code": "03206"
        },
        {
          "name": "Чинабадский  ",
          "code": "03207"
        },
        {
          "name": "Бозский  ",
          "code": "03209"
        },
        {
          "name": "Булакбашинский  ",
          "code": "03210"
        },
        {
          "name": "Джалалкудукский  ",
          "code": "03211"
        },
        {
          "name": "Избасканский  ",
          "code": "03214"
        },
        {
          "name": "Улугноpский  ",
          "code": "03217"
        },
        {
          "name": "Кургантепинский  ",
          "code": "03220"
        },
        {
          "name": "Карасуйский  ",
          "code": "03221"
        },
        {
          "name": "Асакинский  ",
          "code": "03224"
        },
        {
          "name": "Мархаматский  ",
          "code": "03227"
        },
        {
          "name": "Шахриханский  ",
          "code": "03230"
        },
        {
          "name": "Шахрихан Гор ",
          "code": "03231"
        },
        {
          "name": "Пахтаабадский  ",
          "code": "03232"
        },
        {
          "name": "Ходжаабадский  ",
          "code": "03236"
        },
        {
          "name": "Андижан   ",
          "code": "03400"
        },
        {
          "name": "Андижан янги Гор ",
          "code": "03401"
        },
        {
          "name": "Андижан эски Гор ",
          "code": "03404"
        },
        {
          "name": "Асака Гор ",
          "code": "03405"
        },
        {
          "name": "Ханабад Гор ",
          "code": "03408"
        },
        {
          "name": "Алатский  ",
          "code": "06204"
        },
        {
          "name": "Бухарский  ",
          "code": "06207"
        },
        {
          "name": "Вабкентский  ",
          "code": "06212"
        },
        {
          "name": "Гиждуванский  ",
          "code": "06215"
        },
        {
          "name": "Каганский  ",
          "code": "06219"
        },
        {
          "name": "Каракульский  ",
          "code": "06230"
        },
        {
          "name": "Караулбазарский  ",
          "code": "06232"
        },
        {
          "name": "Пешкунский  ",
          "code": "06240"
        },
        {
          "name": "Ромитанский  ",
          "code": "06242"
        },
        {
          "name": "Жондоpский  ",
          "code": "06246"
        },
        {
          "name": "Шафирканский  ",
          "code": "06258"
        },
        {
          "name": "Бухара  ",
          "code": "06400"
        },
        {
          "name": "Бухара Гор ",
          "code": "06401"
        },
        {
          "name": "Арнасайский  ",
          "code": "08201"
        },
        {
          "name": "Бахмальский  ",
          "code": "08204"
        },
        {
          "name": "Галляаральский  ",
          "code": "08209"
        },
        {
          "name": "Джизакский  ",
          "code": "08212"
        },
        {
          "name": "Дустликский  ",
          "code": "08215"
        },
        {
          "name": "Зааминский  ",
          "code": "08218"
        },
        {
          "name": "Зарбдорский  ",
          "code": "08220"
        },
        {
          "name": "Мирзачульский  ",
          "code": "08223"
        },
        {
          "name": "Зафарабадский  ",
          "code": "08225"
        },
        {
          "name": "Пахтакорский  ",
          "code": "08228"
        },
        {
          "name": "Фаришский  ",
          "code": "08235"
        },
        {
          "name": "Янгиободский  ",
          "code": "08237"
        },
        {
          "name": "Джизак Гор ",
          "code": "08402"
        },
        {
          "name": "Гузарский  ",
          "code": "10207"
        },
        {
          "name": "Дехканабадский  ",
          "code": "10212"
        },
        {
          "name": "Камашинский  ",
          "code": "10220"
        },
        {
          "name": "Каршинский  ",
          "code": "10224"
        },
        {
          "name": "Касанский  ",
          "code": "10229"
        },
        {
          "name": "Шарк Юлдузи  ",
          "code": "10230"
        },
        {
          "name": "Бахористанский  ",
          "code": "10231"
        },
        {
          "name": "Китабский  ",
          "code": "10232"
        },
        {
          "name": "Миришкорский  ",
          "code": "10233"
        },
        {
          "name": "Мубарекский  ",
          "code": "10234"
        },
        {
          "name": "Нишанский  ",
          "code": "10235"
        },
        {
          "name": "Касбинский  ",
          "code": "10237"
        },
        {
          "name": "Чиракчинский  ",
          "code": "10242"
        },
        {
          "name": "Кукдалинский  ",
          "code": "10243"
        },
        {
          "name": "Шахрисабзский  ",
          "code": "10245"
        },
        {
          "name": "ШахрисабзсГор ",
          "code": "10246"
        },
        {
          "name": "Яккабагский  ",
          "code": "10250"
        },
        {
          "name": "Карши Гор ",
          "code": "10401"
        },
        {
          "name": "Карши  ",
          "code": "10402"
        },
        {
          "name": "Канимехский  ",
          "code": "12211"
        },
        {
          "name": "Кызылтепинский  ",
          "code": "12216"
        },
        {
          "name": "Навбахорский  ",
          "code": "12230"
        },
        {
          "name": "Карманинский  ",
          "code": "12234"
        },
        {
          "name": "Нуратинский  ",
          "code": "12238"
        },
        {
          "name": "Тамдынский  ",
          "code": "12244"
        },
        {
          "name": "Учкудукский  ",
          "code": "12248"
        },
        {
          "name": "Хатырчинский  ",
          "code": "12251"
        },
        {
          "name": "Навои  ",
          "code": "12400"
        },
        {
          "name": "НавоиГор ",
          "code": "12401"
        },
        {
          "name": "Заравшан Гор ",
          "code": "12408"
        },
        {
          "name": "Мингбулакский  ",
          "code": "14204"
        },
        {
          "name": "Касансайский  ",
          "code": "14207"
        },
        {
          "name": "Наманганский  ",
          "code": "14212"
        },
        {
          "name": "Нарынский  ",
          "code": "14216"
        },
        {
          "name": "Папский  ",
          "code": "14219"
        },
        {
          "name": "Туракурганский  ",
          "code": "14224"
        },
        {
          "name": "Уйчинский  ",
          "code": "14229"
        },
        {
          "name": "Учкурганский  ",
          "code": "14234"
        },
        {
          "name": "Чартакский  ",
          "code": "14236"
        },
        {
          "name": "Чустский  ",
          "code": "14237"
        },
        {
          "name": "Янгикурганский  ",
          "code": "14242"
        },
        {
          "name": "НаманганГор ",
          "code": "14401"
        },
        {
          "name": "Дустликский  ",
          "code": "14402"
        },
        {
          "name": "Наманган  ",
          "code": "14403"
        },
        {
          "name": "Акдарьинский  ",
          "code": "18203"
        },
        {
          "name": "Булунгурский  ",
          "code": "18206"
        },
        {
          "name": "Джамбайский  ",
          "code": "18209"
        },
        {
          "name": "Иштыханский  ",
          "code": "18212"
        },
        {
          "name": "Карадарьинский  ",
          "code": "18214"
        },
        {
          "name": "Каттакурганский  ",
          "code": "18215"
        },
        {
          "name": "Кошрабадский  ",
          "code": "18216"
        },
        {
          "name": "Нарпайский  ",
          "code": "18218"
        },
        {
          "name": "Пайарыкский  ",
          "code": "18224"
        },
        {
          "name": "Челекский  ",
          "code": "18225"
        },
        {
          "name": "Пастдаргомский  ",
          "code": "18227"
        },
        {
          "name": "Гузалкентский  ",
          "code": "18228"
        },
        {
          "name": "Пахтачийский  ",
          "code": "18230"
        },
        {
          "name": "Дустликский  ",
          "code": "18233"
        },
        {
          "name": "Зарафшанский  ",
          "code": "18234"
        },
        {
          "name": "Нурабадский  ",
          "code": "18235"
        },
        {
          "name": "Ургутский  ",
          "code": "18236"
        },
        {
          "name": "Дехканобадский  ",
          "code": "18237"
        },
        {
          "name": "Тайлякский  ",
          "code": "18238"
        },
        {
          "name": "Самарканд  ",
          "code": "18400"
        },
        {
          "name": "Темирйульский  ",
          "code": "18405"
        },
        {
          "name": "Сиабский  ",
          "code": "18407"
        },
        {
          "name": "Багишамальский  ",
          "code": "18408"
        },
        {
          "name": "Алтынсайский  ",
          "code": "22201"
        },
        {
          "name": "Ангорский  ",
          "code": "22202"
        },
        {
          "name": "Байсунский  ",
          "code": "22204"
        },
        {
          "name": "Бандыханский  ",
          "code": "22205"
        },
        {
          "name": "Музрабадский  ",
          "code": "22207"
        },
        {
          "name": "Денауский  ",
          "code": "22210"
        },
        {
          "name": "Денауский Гор ",
          "code": "22211"
        },
        {
          "name": "Джаркурганский  ",
          "code": "22212"
        },
        {
          "name": "Кумкурганский  ",
          "code": "22214"
        },
        {
          "name": "Кизирикский  ",
          "code": "22215"
        },
        {
          "name": "Сариасийский  ",
          "code": "22217"
        },
        {
          "name": "Термезский  ",
          "code": "22220"
        },
        {
          "name": "Узунский  ",
          "code": "22221"
        },
        {
          "name": "Шерабадский  ",
          "code": "22223"
        },
        {
          "name": "Шурчинский  ",
          "code": "22226"
        },
        {
          "name": "ТермезГор ",
          "code": "22401"
        },
        {
          "name": "Термез  ",
          "code": "22403"
        },
        {
          "name": "Акалтынский  ",
          "code": "24206"
        },
        {
          "name": "Баяутский  ",
          "code": "24212"
        },
        {
          "name": "Сайхунабадский  ",
          "code": "24216"
        },
        {
          "name": "Гулистанский  ",
          "code": "24220"
        },
        {
          "name": "Сардобский  ",
          "code": "24226"
        },
        {
          "name": "Мирзаабадский  ",
          "code": "24228"
        },
        {
          "name": "Сырдарьинский  ",
          "code": "24231"
        },
        {
          "name": "Хавастский  ",
          "code": "24235"
        },
        {
          "name": "ГулистанГор ",
          "code": "24401"
        },
        {
          "name": "Гулистан  ",
          "code": "24402"
        },
        {
          "name": "ШиpинГор ",
          "code": "24410"
        },
        {
          "name": "ЯнгиеpГор ",
          "code": "24413"
        },
        {
          "name": "Учтепинский  ",
          "code": "26262"
        },
        {
          "name": "Бектемирский  ",
          "code": "26264"
        },
        {
          "name": "Юнусабадский  ",
          "code": "26266"
        },
        {
          "name": "Мирзо-Улугбекский  ",
          "code": "26269"
        },
        {
          "name": "Мирабадский  ",
          "code": "26273"
        },
        {
          "name": "Шайхантахурский  ",
          "code": "26277"
        },
        {
          "name": "Алмазарский  ",
          "code": "26280"
        },
        {
          "name": "Сергелийский  ",
          "code": "26283"
        },
        {
          "name": "Яккасарайский  ",
          "code": "26287"
        },
        {
          "name": "Хамзинский  ",
          "code": "26290"
        },
        {
          "name": "Чиланзарский  ",
          "code": "26294"
        },
        {
          "name": "Аккурганский  ",
          "code": "27206"
        },
        {
          "name": "Ахангаранский  ",
          "code": "27212"
        },
        {
          "name": "Зафарский  ",
          "code": "27220"
        },
        {
          "name": "Бостанлыкский  ",
          "code": "27224"
        },
        {
          "name": "Букинский  ",
          "code": "27228"
        },
        {
          "name": "К. чирчикский  ",
          "code": "27233"
        },
        {
          "name": "Зангиатинский  ",
          "code": "27237"
        },
        {
          "name": "Юкоричирчикский  ",
          "code": "27239"
        },
        {
          "name": "Кибрайский  ",
          "code": "27248"
        },
        {
          "name": "Паркентский  ",
          "code": "27249"
        },
        {
          "name": "Пскентский  ",
          "code": "27250"
        },
        {
          "name": "Уртачирчикский  ",
          "code": "27253"
        },
        {
          "name": "Ташкентский  ",
          "code": "27255"
        },
        {
          "name": "Чиназский  ",
          "code": "27256"
        },
        {
          "name": "Янгиюльский  ",
          "code": "27259"
        },
        {
          "name": "Алмалыкский  ",
          "code": "27404"
        },
        {
          "name": "Ангренский  ",
          "code": "27407"
        },
        {
          "name": "Бекабадский  ",
          "code": "27413"
        },
        {
          "name": "Чирчикский  ",
          "code": "27419"
        },
        {
          "name": "Янгиюль Гор ",
          "code": "27426"
        },
        {
          "name": "Алтыарыкский  ",
          "code": "30203"
        },
        {
          "name": "Ахунбабаевский  ",
          "code": "30206"
        },
        {
          "name": "Багдадский  ",
          "code": "30209"
        },
        {
          "name": "Бувайдинский  ",
          "code": "30212"
        },
        {
          "name": "Бешарыкский  ",
          "code": "30215"
        },
        {
          "name": "Кувинский  ",
          "code": "30218"
        },
        {
          "name": "Учкуприкский  ",
          "code": "30221"
        },
        {
          "name": "Риштанский  ",
          "code": "30224"
        },
        {
          "name": "Сохский  ",
          "code": "30226"
        },
        {
          "name": "Ташлакский  ",
          "code": "30227"
        },
        {
          "name": "Узбекистанский  ",
          "code": "30230"
        },
        {
          "name": "Ферганский  ",
          "code": "30233"
        },
        {
          "name": "Дангаринский  ",
          "code": "30236"
        },
        {
          "name": "Фуркатский  ",
          "code": "30238"
        },
        {
          "name": "Язъяванский  ",
          "code": "30242"
        },
        {
          "name": "Фергана  ",
          "code": "30400"
        },
        {
          "name": "ФерганаГор ",
          "code": "30401"
        },
        {
          "name": "Киргулинский  ",
          "code": "30402"
        },
        {
          "name": "КокандГор ",
          "code": "30405"
        },
        {
          "name": "КувасайГор ",
          "code": "30408"
        },
        {
          "name": "МаpгиланГор ",
          "code": "30412"
        },
        {
          "name": "Багатский  ",
          "code": "33204"
        },
        {
          "name": "Гурленский  ",
          "code": "33208"
        },
        {
          "name": "Кошкупырский  ",
          "code": "33212"
        },
        {
          "name": "Ургенчский  ",
          "code": "33217"
        },
        {
          "name": "Хазараспский  ",
          "code": "33220"
        },
        {
          "name": "Ханкинский  ",
          "code": "33223"
        },
        {
          "name": "Хивинский  ",
          "code": "33226"
        },
        {
          "name": "Шаватский  ",
          "code": "33230"
        },
        {
          "name": "Янгиарыкский  ",
          "code": "33233"
        },
        {
          "name": "Янгибазарский  ",
          "code": "33236"
        },
        {
          "name": "Ургенч ГорЭС",
          "code": "33401"
        },
        {
          "name": "Питняк Гор ",
          "code": "33402"
        },
        {
          "name": "Амударьинский  ",
          "code": "35204"
        },
        {
          "name": "Берунийский  ",
          "code": "35207"
        },
        {
          "name": "Караузякский  ",
          "code": "35211"
        },
        {
          "name": "Кегейлийский  ",
          "code": "35212"
        },
        {
          "name": "Кунградский  ",
          "code": "35215"
        },
        {
          "name": "Канлыкульский  ",
          "code": "35218"
        },
        {
          "name": "Муйнакский  ",
          "code": "35222"
        },
        {
          "name": "Нукусский  ",
          "code": "35225"
        },
        {
          "name": "Тахтакупырский  ",
          "code": "35230"
        },
        {
          "name": "Турткульский  ",
          "code": "35233"
        },
        {
          "name": "Ходжейлийский  ",
          "code": "35236"
        },
        {
          "name": "Чимбайский  ",
          "code": "35240"
        },
        {
          "name": "Шуманайский  ",
          "code": "35243"
        },
        {
          "name": "Элликкалинский  ",
          "code": "35250"
        },
        {
          "name": "Нукус Гор ",
          "code": "35401"
        },
        {
          "name": "Тахиаташ Гор ",
          "code": "35410"
        }
      ],
      
      }
      var text = $('#region').html();
      for (var i = 0; i< select_json.regions.length; i++) {
        var temp = select_json.regions[i];
        text += '<option value="'+temp.code+'">'+temp.name+'</option>';
      }
      $('#region').html(text);

      $(document).delegate('#region', 'change', function(){
       text = "";
        var code_val = $(this).val().slice(0,2);
        for (var i = 0; i < select_json.districts.length; i++) {
          var temp = select_json.districts[i];
           if (temp.code.slice(0,2) == code_val) {
            text += '<option value="'+temp.code+'">'+temp.name+'</option?>';
           }
           $('#district').attr('disabled', false);
           $('#district').html(text);
        }
      });


});



