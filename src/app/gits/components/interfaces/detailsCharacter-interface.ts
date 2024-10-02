export interface DetailCharacter {
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    deletedAt: null;
    originPlanet: OriginPlanet;
    transformations: any[];
}

export interface OriginPlanet {
    id: number;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
    deletedAt: null;
}


export interface Transformations {
    id: number;
    name: string;
    image: string;
    ki: string;
    deletedAt: null;
}


