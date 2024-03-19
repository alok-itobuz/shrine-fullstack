import { sectionHeading } from "../../../components/main.js"

export default (sectionData) => {
    const { headingPrimary, descriptionPrimary, images } = sectionData
    return `
        <section id="hero" class="section-text-image container pb-5">
            <div class="row m-0 p-0 justify-content-between justify-content-xxl-center aspect-sm-3-1">
                <div class="image-container col-12 col-sm-8 m-0 p-2 mx-auto mx-sm-0 mt-3 mt-sm-0 aspect-1-1 aspect-sm-unset">
                    <div class="image-wrapper rounded-3 h-100 mx-auto overflow-hidden">
                        <img src=${images[0]?.url} alt=${images[0]?.alt
        } class="h-100 w-100 object-fit-cover object-center">
                    </div>
                </div>
                <div class="text-container col-12 row m-0 p-0 col-sm-4 m-0">
                    <div class="image-container col-6 col-sm-12 m-0 p-2 h-sm-66 aspect-1-1 aspect-sm-unset">
                        <div class="image-wrapper rounded-3 w-100 h-100 mx-auto overflow-hidden">
                            <img src=${images[1]?.url} alt=${images[1]?.alt
        } class="h-100 w-100 object-fit-cover object-center">
                        </div>
                    </div>
                    <div class="image-container col-6 col-sm-12 m-0 p-2 h-sm-33 aspect-1-1 aspect-sm-unset">
                        <div class="image-wrapper rounded-3 w-100 h-100 mx-auto overflow-hidden">
                            <img src=${images[2]?.url} alt=${images[2]?.alt
        } class="h-100 w-100 object-fit-cover object-center">
                        </div>
                    </div>
                </div>
            </div>
            ${sectionHeading(headingPrimary, descriptionPrimary, 'column', 'mt-5')}
        </section>
    `
}