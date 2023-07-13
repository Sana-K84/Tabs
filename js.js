const tabsTitle = document.querySelectorAll('.tab_title');
const tabsContent = document.querySelectorAll('.content');
console.log(tabsTitle)

tabsTitle.forEach(el => el.addEventListener('click', event => {
    const tabsTitleTarget = event.target.getAttribute('data-tab');




    tabsTitle.forEach(el => el.classList.remove('activ'));
    if (tabsTitleTarget === 'All') {
        tabsContent.forEach(el => { el.classList.remove('hidden') });



    } else { tabsContent.forEach(el => el.classList.add('hidden')); }


    el.classList.add('activ')
    const tabsContentHidden = document.getElementsByClassName(tabsTitleTarget)

    for (elem of tabsContentHidden) {
        elem.classList.remove('hidden')
    }

}))

