interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const a: Rect[] = [
    {
        id: "fd",
        color: "black",
        size: {
            width: 35,
            height: 33,
        },
    },
    {
        id: "f4",
        size: {
            width: 35,
            height: 33,
        },
    },
]

// a[0].id = "ffp3"
a[0].color = "da"
a[0]["color"] = "daTochno"

const rect3 = {} as Rect
const rect4 = <Rect>{}

interface RectWithArea extends Rect {
    getArea: () => number
}

const react5: RectWithArea = {
    id: "33",
    size: {
        height: 0,
        width: 0,
    },

    getArea(): number {
        return 0
    },
}

interface ICLock {
    time: Date

    setTime(date: Date): void
}

class Clock implements ICLock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: "1px solid black",
    marginTop: "2px",
    borderRadius: "5px",
    d: "f",
}
