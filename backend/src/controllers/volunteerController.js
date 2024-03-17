import volunteers from "../devData/volunteers";


export const getAllVolunteers = (req, res) => {
    res.status(200).json(volunteers)
}
