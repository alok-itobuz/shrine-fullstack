import gallery from "../devData/gallery.js";

export const getGallery = (req, res) => {
    const type = req.params.type;

    let updatedGallery = gallery

    if (type != 'all') {
        updatedGallery = updatedGallery.filter(gallery => gallery.type === type)
    }

    res.status(200).json(updatedGallery)
}