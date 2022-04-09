import { ObjectId, Document, Model, Types, Condition } from "mongoose"

export interface MainSector {
    label: string;
    options: Condition<{type: ObjectId; ref: string}>[]
}

export interface MainSectorDocument extends MainSector, Document {
    _doc: {
        [key?: string]: string | number
    }
}

export interface MainSectorModel extends Model<MainSectorDocument>{}

export interface SubSector {
    label: string;
    value: string;
    options: Condition<{type: ObjectId; ref: string}>[]
}

export interface SubSectorDocument extends SubSector, Document {
    _doc: {
        [key?: string]: string | number
    }
}

export interface SubSectorModel extends Model<SubSectorDocument>{}

export interface Field {
    label: string;
    value: string;
}

export interface FieldDocument extends Field, Document {
    _doc: {
        [key?: string]: string | number
    }
}

export interface FieldModel extends Model<FieldDocument>{}

export interface User {
    name: string;
    sector: string;
    token: string;
    checked: boolean;
}

export interface UserDocument extends User, Document {
    _doc: {
        [key?: string]: string | number | boolean;
    }
}

export interface UserModel extends Model<UserDocument>{}