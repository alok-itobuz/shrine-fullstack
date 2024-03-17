export default (() => new Array(700).fill(1).map((_, i) => {
    const monthRandom = Math.trunc(Math.random() * 12 + 1)
    const dateRandom = Math.trunc(Math.random() * 30 + 1)
    return {
        name: `Volunteer ${i + 1}`,
        socialHandles: {
            instagram: "#",
            google: "#",
            youtube: "#"
        },
        joiningDate: `2024/${monthRandom < 10 ? '0' + monthRandom : monthRandom}/${dateRandom < 10 ? '0' + dateRandom : dateRandom}`
    }
}))()