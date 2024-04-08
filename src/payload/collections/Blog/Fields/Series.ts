import { ArrayField } from "payload/types";
import { SeriesName } from "./Series/SeriesName";
import { SeriesPart } from "./Series/SeriesPart";

export const Series: ArrayField = {
    name: 'series',
    label: 'Series',
    type: 'array',
    maxRows: 1,
    fields: [
        SeriesPart,
        SeriesName
    ]

}