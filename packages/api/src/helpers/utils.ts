interface DirtyObj {
    [key: string]: null | number | string | Object;
}

export interface CleanObj {
    [key: string]: number | string | Object;
}

export class Utils {
    static removeNull(dirtyObj: DirtyObj): CleanObj {
        const cleanObj: CleanObj = {};

        Array.from(Object.keys(dirtyObj)).forEach((key) => {
            const currentValue = dirtyObj[key];

            if (currentValue) {
                cleanObj[key] = currentValue;
            }
        });

        return cleanObj;
    }
}
