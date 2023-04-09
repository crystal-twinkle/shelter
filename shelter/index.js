let text = `Реализация burger menu на обеих страницах: +26
- при ширине страницы меньше 768рх панель навигации скрывается, появляется бургер-иконка: +2
- при нажатии на бургер-иконку, справа плавно появляется адаптивное меню шириной 320px, бургер-иконка плавно поворачивается на 90 градусов: +4
- высота адаптивного меню занимает всю высоту экрана: +2
- при повторном нажатии на бургер-иконку или на свободное от бургер-меню пространство адаптивное меню плавно скрывается уезжая за правую часть экрана, бургер-иконка плавно поворачивается на 90 градусов обратно: +4
- бургер-иконка создана при помощи html+css, без использования изображений: +2
- ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям, сохраняются заданные на первом этапе выполнения задания требования интерактивности элементов меню: +2
- при клике по любой ссылке (интерактивной или неинтерактивной) в меню адаптивное меню плавно скрывается вправо, бургер-иконка поворачивается на 90 градусов обратно: +2
- расположение и размеры элементов в бургер-меню соответствует макету (центрирование по вертикали и горизонтали элементов меню, расположение иконки). При этом на странице Pets цветовая схема может быть как темная, так и светлая: +2
- область, свободная от бургер-меню, затемняется: +2
- страница под бургер-меню не прокручивается: +4
- Реализация слайдера-карусели на странице Main: +36
- при нажатии на стрелки происходит переход к новому блоку элементов: +4
- смена блоков происходит с соответствующей анимацией карусели (способ выполнения анимации не проверяется): +4
- слайдер бесконечен, т.е. можно бесконечно много нажимать влево или вправо, и каждый раз будет прокрутка в эту сторону с новым набором карточек: +4
- при переключении влево или вправо прокручивается ровно столько карточек, сколько показывается при текущей ширине экрана (3 для 1280px, 2 для 768px, 1 для 320px): +4
- каждый новый слайд содержит псевдослучайный набор карточек животных, т.е. формируется из исходных объектов в случайном порядке со следующими условиями:
в текущем блоке слайда карточки с питомцами не повторяются: +4
- в следующем блоке нет дублирования карточек с текущим блоком. Например в слайдере из 3 элементов, следующий выезжающий слайд будет содержать 3 (из 8 доступных) новых карточки питомца, таких, каких не было среди 3х карточек на предыдущем уехавшем слайде: +4
- сохраняется только одно предыдущее состояние. Т.е. при последовательном переходе два раза влево, а потом два раза вправо, мы получим набор карточек, отличный от исходного: +4
- при каждой перезагрузке страницы формируется новая последовательность карточек: +2
- генерация наборов карточек происходит на основе 8 объектов с данными о животными: +2
- при изменении ширины экрана (от 1280px до 320px и обратно), слайдер перестраивается и работает без перезагрузки страницы (набор карточек при этом может как изменяться, так и оставаться тем же, скрывая лишнюю или добавляя недостающую, и сохраняя при этом описанные для слайдера требования): +4
- Реализация пагинации на странице Pets: +36
- при перезагрузке страницы всегда открывается первая страница пагинации: +2
- при нажатии кнопок > или < открывается следующая или предыдущая страница пагинации соответственно: +2
- при нажатии кнопок >> или << открывается последняя или первая страница пагинации соответственно: +2
- при открытии первой страницы кнопки << и < неактивны: +2
- при открытии последней страницы кнопки > и >> неактивны: +2
- в кружке по центру указан номер текущей страницы. При переключении страниц номер меняется на актуальный: +2
- каждая страница пагинации содержит псевдослучайный набор питомцев, т.е. формируется из исходных объектов в случайном порядке со следующими условиями:
- при загрузке страницы формируется массив из 48 объектов питомцев. Каждый из 8 питомцев должен встречаться ровно 6 раз: +4
- при каждой перезагрузке страницы формируется новый массив со случайной последовательностью: +4
- карточки питомцев не должны повторяться на одной странице: +4
- при переключении страницы данные меняются (для >1280px меняется порядок карточек, для остальных - меняется набор и порядок карточек): +4
- при неизменных размерах области пагинации, в том числе размерах окна браузера, и без перезагрузки страницы, возвращаясь на страницу под определенным номером, контент на ней всегда будет одинаков. Т.е. карточки питомцев будут в том же расположении, что и были до перехода на другие страницы: +2
- общее количество страниц при ширине экрана 1280px - 6, при 768px - 8, при 320px - 16 страниц: +2
- при изменении ширины экрана (от 1280px до 320px и обратно), пагинация перестраивается и работает без перезагрузки страницы (страница может оставаться той же или переключаться, при этом сформированный массив - общая последовательность карточек - не обновляется, сохраняются все остальные требования к пагинации): +4
- Реализация попап на обеих страницах: +12
- попап появляется при нажатии на любое место карточки с описанием конкретного животного: +2
- часть страницы вне попапа затемняется: +2
- при открытии попапа вертикальный скролл страницы становится неактивным, при закрытии - снова активным: +2
- при нажатии на область вокруг попапа или на кнопку с крестиком попап закрывается, при этом при нажатии на сам попап ничего не происходит: +2
- кнопка с крестиком интерактивная: +2
- окно попапа (не считая кнопку с крестиком) центрировано по всем осям, размеры элементов попапа и их расположение совпадают с макетом: +2 ` ;


console.log(text);
