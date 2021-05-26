export namespace Beans {

    export interface OptionBean {
        id: string,
        description: string,
        price: number
        title: string
    }

    export interface ServiceBean {
        id: string,
        title: string,
        price: number,
        description: string,
        options: OptionBean[]
    }
}
