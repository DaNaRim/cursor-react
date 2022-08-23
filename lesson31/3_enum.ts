enum Membership {
    Simple,
    Standard,
    Premium
}

const membership: Membership = Membership.Standard
const membershipReverse = Membership[0]

enum SocialMedia {
    TWITTER = "TWITTER",
    FACEBOOK = "FACEBOOK",
    INSTAGRAM = "INSTAGRAM"
}

enum days {
    MONDAY = "MONDAY",
    FRIDAY = "FRIDAY",
    SUNDAY = "SUNDAY"
}

const day: string = "MONDAY"

switch (day) {
    case days.MONDAY:
        console.log("asd")
        break
    case days.SUNDAY:
        console.log("ads")
        break
    default:
        console.log("DDD")
}