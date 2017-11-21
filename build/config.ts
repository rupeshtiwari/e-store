export interface PackageDescription {
    name: string;
    hasTestingModule: boolean;
}

export interface Config {
    packages: PackageDescription[];
    scope: string;
}

export const packages: PackageDescription[] = [
    {
        name: 'cart',
        hasTestingModule: false,
    },
    {
        name: 'finance',
        hasTestingModule: false,
    },
    {
        name: 'sales',
        hasTestingModule: false,
    }
];
