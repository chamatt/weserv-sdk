import { Transform } from "types";

 const flattenTransform = (ob: Transform) =>  {
    var toReturn = {};
    for (var i in ob) {
        if (!ob.hasOwnProperty(i)) continue;
        //@ts-ignore
        if ((typeof ob[i]) == 'object' && ob[i] !== null) {
            //@ts-ignore
            var flatObject = flattenTransform(ob[i]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;
                //@ts-ignore
                toReturn[`${i}${x}`] = flatObject[x];
            }
        } else {
            //@ts-ignore
            toReturn[i] = ob[i];
        }
    }
    return toReturn;
}
export default flattenTransform