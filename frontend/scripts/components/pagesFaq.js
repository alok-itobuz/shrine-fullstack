export const accordionItemGenerator = ({ question, answer }, i) => `
    <div class="accordion-item-container p-0 ps-md-2 col-12 col-12 col-sm-6 p-sm-2 p-0">
        <div class="accordion-item w-100">
            <h2 class="accordion-header" id="heading-${i}">
                <button style="outline:none" class="accordion-button bg-transparent fs-medium font-roboto fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${i}" aria-expanded="true" aria-controls="collapse-${i}">
                    <span class="border-0 font-poppins me-3 d-flex align-items-center justify-content-center">${i + 1}</span> ${question}
                </button>
            </h2>
            <div id="collapse-${i}" class="accordion-collapse collapse" aria-labelledby="heading-${i}">
                <div class="accordion-body fs-small">
                    ${answer}
                </div>
            </div>
        </div>
    </div>
`