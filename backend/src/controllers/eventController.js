import events from "../devData/events.js"

export const getAllEvents = (req, res) => {
    res.status(200).json(events)
}

export const getSingleEvent = (req, res) => {
    const eventId = +req.params.id
    const event = events.find(ev => ev.id === eventId)

    res.status(200).json({
        status: 'Successs',
        message: 'Found the data',
        data: {
            event
        }
    })
}