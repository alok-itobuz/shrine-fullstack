


export default (gallery) => {

    const currentGalleryItem = window.location.hash.split('/')
    let activeLink = 'all';
    if (currentGalleryItem.length === 2 || currentGalleryItem.at(-1) === '')
        activeLink = 0
    else activeLink = currentGalleryItem.at(-1)

    const categories = ['all', 'church', 'donation', 'charity', 'education']

    return `
        <section id="gallery" class="container py-5">
            <ul class="nav nav-tabs">
                ${categories.map((category) => `
                    <li class="nav-item">
                        <a class="nav-link border-0 text-capitalize fs-small fw-semibold ${category === activeLink ? 'active' : ''}" aria-current="page" href="#pages/gallery/${category}" ">${category}</a>
                    </li>
                `).join("")}
            </ul>
            <div class=" mt-4 row m-0 p-0 gap-3 gap-sm-0"> 
                ${gallery?.map(({ image, name }) => `
                    <div class="gallery-image-container aspect-1-1 rounded-1 overflow-hidden col-12 col-sm-6 col-md-4 m-0 p-0 p-sm-3 p-md-2">
                        <img src=${image} alt=${name} class=" h-100 w-100 object-fit-cover rounded-1 overflow-hidden" />
                    </div>
                `).join("")}
            </div>
        </section>
    `
}