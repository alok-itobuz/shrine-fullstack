export default (() => new Array(1000).fill(100).map((_, i) => i % 2 == 0 ? ({
    name: "Vonda Sanders",
    description: "Sir Gerry Serrano",
    image: "./images/members/member1.svg",
    socialLinks: {
        instagram: "#",
        google: "#",
        youtube: "#",
    },
    joiningDate: '2024/01/01'
}) :
    ({
        name: "Ronnie Ferrell",
        description: "Sir Gerry Serrano",
        image: "./images/members/member2.svg",
        socialLinks: {
            instagram: "#",
            google: "#",
            youtube: "#",
        },
        joiningDate: '2024/02/17'
    })))()