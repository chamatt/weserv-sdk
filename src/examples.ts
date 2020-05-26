import weserv, {Transform} from "./index"

const original = "https://images.weserv.nl/puppy.jpg"

const config: Transform = { w: 1000, h: 1000, fit: "cover", a: "attention", mask: "heart" }

const transformed = weserv.transform(original, config)

console.log(transformed)
// https://images.weserv.nl?url=images.weserv.nl%2Fpuppy.jpg&w=1000&h=1000&fit=cover&a=attention&mask=heart
