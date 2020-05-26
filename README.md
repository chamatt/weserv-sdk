# Weserv.nl SDK

### A javascript/typescript SDK for using weserv.nl image transformation service

## Example Usage 1
```typescript
import weserv, {Transform} from "./index"

const original = "https://images.weserv.nl/puppy.jpg"

const config: Transform = { 
    w: 1000, 
    h: 1000, 
    fit: "cover", 
    a: "attention", 
    mask: "heart"
}

const transformed = weserv.transform(original, config)
// https://images.weserv.nl?url=images.weserv.nl%2Fpuppy.jpg&w=1000&h=1000&fit=cover&a=attention&mask=heart
```
|Original|Transformed|
|--|--|
 ![](https://images.weserv.nl/puppy.jpg)| ![](https://images.weserv.nl?url=images.weserv.nl%2Fpuppy.jpg&w=1000&h=1000&fit=cover&a=attention&mask=heart)

## Documentation

You can see the full documentation here: [Weserv.nl Docs](https://images.weserv.nl/docs)

The config arguments for the SDK are basically the same as the query strings from the documentation. 

## Exceptions

For queries that require multiple parameters to be passed at the same time (e.g. &ch=300&cw=300&cx=300&cy=300), you would use it like this:

List of properties affected by this:
- Rectangular crop 
    - From
    ```typescript
    "&ch=300&cw=300&cx=300&cy=300"
    ```
    - To
     ```typescript
     {
        // ...other transformations
        c: {
            x: 300,
            y: 300,
            w: 300,
            h: 300
        }
    }
     ```
- Focal Alignment

    - From
    ```typescript
    "&a=focal-0-20"
    ```
    - To
  ```typescript
     {
        // ...other transformations
        a: {
            x: 0,
            y: 20,
        }
    }
     ```
