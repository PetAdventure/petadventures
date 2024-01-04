document.addEventListener('DOMContentLoaded', (event) => {

    const menuItems = document.querySelectorAll('#service-button');
    const serviceItems = document.querySelectorAll('#service');

    const aboutItems = document.querySelectorAll('.moreabout');
    const infoItems = document.querySelectorAll('.moreinfo');

    const mobileMenu  = document.querySelector('#hamburger-icon');
    mobileMenu.addEventListener('click', (e) => {
        e.target.classList.toggle('open');
    })

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if(e.target.classList.contains('selected'))
            {
                return; 
            }
            else
            {
                menuItems.forEach(item => {
                    item.classList.remove('selected');
                })
                e.target.classList.add('selected')
                serviceItems.forEach(item => {
                    item.classList.remove('flex');
                    item.classList.add('hidden')
                    if(item.classList.contains(e.target.innerHTML))
                    {
                        item.classList.remove('hidden');
                        item.classList.add('flex')
                    }
                })
            }
            
        })
    })

    aboutItems.forEach(item => {
        item.addEventListener('click', (e) => {
            console.log(e.target.classList)
            if(e.target.classList.contains('selected'))
            {
                return; 
            }
            else
            {
                aboutItems.forEach(item => {
                    item.classList.remove('selected');
                })
                e.target.classList.add('selected')
                infoItems.forEach(item => {
                    item.classList.remove('show');
                    if(item.classList.contains(e.target.classList[0]))
                    {
                        item.classList.add('show');
                    }
                })
            }
        })
    })

})
