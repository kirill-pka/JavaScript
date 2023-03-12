<!-- settings.json -->

https://github.com/YK911/live_sass_compiler_settings/blob/main/settings.json

<!-- Тени -->

https://getcssscan.com/css-box-shadow-examples

<!-- swiperjs -->

https://swiperjs.com/demos#default

<!-- Методолигии css -->

- smacss
- atomic css
- BAM
- allcss

<!-- Configure User Snippets для svg -->

    "Include svg tag": {
    	"prefix": "svg",
    	"body": [
    	  "<svg class=/"${1}/" width=/"${2}/" height=/"${3}/">",
    	  "  <use href=/"${4}/"></use>",
    	  "</svg>"
    	],
    	"description": "Add svg tag for html"
      }

<!-- Методология БЭМ -->

https://ru.bem.info/methodology/quick-start/

<!-- Рандомные фото -->

https://picsum.photos/

<!-- Переменные -->

%section {
padding-top: 94px;
padding-bottom: 94px;
}
@extend %section;

%mixins section (pt, pb){
padding-top: 94px;
padding-bottom: 94px;
}
@include

<!-- Сайт через телефон по wifi -->

ipconfig

<!-- Загрузка картинок -->

loading="lazy"

<!-- Про мексин -->

https://www.youtube.com/watch?time_continue=3898&v=fOLZwexvA5c&feature=emb_title
1.04.00

<!-- Библиотека lodash -->

https://github.com/lodash/lodash

<!-- Git -->
git branch - список веток
git branch name - добавить ветку
git checkout main - переход на ветку
git branch -d main - удалить


git init
git status
git add .
git commit -m "first commit"
git branch -M main
git remote add origin "address "
git push -u origin main
git push origin main -ff