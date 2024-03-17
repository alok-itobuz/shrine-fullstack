import donations from "../devData/donations.js"
import members from "../devData/members.js"
import volunteers from "../devData/volunteers.js"

export const getStats = (req, res) => {
    const totalDonationAmount = donations.reduce((total, curr) => curr.amount + total, 0)
    const totalNewMembers = members.filter(member => (Date.now() - (new Date(member.joiningDate)).getTime()) / (1000 * 60 * 60 * 24) <= 30).length
    const totalNewVolunteers = volunteers.filter(volunteer => (Date.now() - (new Date(volunteer.joiningDate)).getTime()) / (1000 * 60 * 60 * 24) <= 30).length


    res.status(200).json({
        newVolunteer: totalNewVolunteers,
        churches: 88,
        donations: Math.trunc(totalDonationAmount / 10000000),
        newMembers: totalNewMembers
    })
}