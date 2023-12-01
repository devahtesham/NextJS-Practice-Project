import {Orbitron} from "next/font/google";
import {Devonshire} from "next/font/google";

const orbitron = Orbitron({
    subsets:['latin'],
    variable:'--font-orbitron'
})

const devonshire = Devonshire({
    subsets:['latin'],
    weight:'400',
    variable:'--font-devonshire'
})

export {
    orbitron,devonshire
}