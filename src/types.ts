export interface Constructor {
    url?: string
}
export interface CreateInstance {
    url: string
}

export type Width = number
export type Height = number
export interface ISize {
    w?: Width,
    h?: Height,
    dpr?: DPR
}

export type DPR = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type Fit = "inside" | "outside" | "contain" | "cover" | "fill"
export interface IFit {
    fit?: Fit,
    we?: boolean
}

export type AligmentPosition = "center"
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "top-left"
    | "bottom-left"
    | "bottom-right"
    | "top-right"

export type AlignmentSmart = "entropy" | "attention"

export interface AligmentFocal {
    x: number,
    y: number
}

export interface RectangleCrop {
    x: number,
    y: number,
    w: Width,
    h: Height
}

export type Trim = number;

export interface ICrop {
    a?: AligmentPosition | AlignmentSmart | AligmentFocal;
    c?: RectangleCrop,
    trim?: Trim
}

export interface Mask {
    mask?: "circle" | "ellipse" | "triangle" | "triangle-180" | "pentagon" | "pentagon-180" | "hexagon" | "square" | "star" | "heart"
    mtrim?: boolean
    mbg?: string
}

export interface Orientation {
    flip?: boolean,
    flop?: boolean,
    ro?: number,
    rbg?: string
}


export type FilterSwitch = {
    filt?: "greyscale" | "sepia" | "negate"
} | {
    filt?: "duotone"
    start?: string,
    stop?: string
}

export type SharpAjustments = {
    sharp?: number
} | {
    sharp: number
    sharpf?: number
    sharpj?: number
}

export interface BaseAdjustments {
    bg?: string
    blur?: number
    bri?: number
    con?: number
    gam?: number
    tint?: number
}


export type Adjustments = BaseAdjustments & FilterSwitch & SharpAjustments

export type CompressionLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type DefaultImage = string

export interface Format {
    af?: boolean
    maxage?: string
    encoding?: "base64"
    l?: CompressionLevel
    default?: DefaultImage
    filename?: string
    il?: boolean
    n?: number
    output?: "jpg" | "png" | "gif" | "tiff" | "webp" | "json"
    page?: number
    quality?: number
}

export type Transform = ISize & IFit & ICrop & Mask & Orientation & Adjustments & Format
