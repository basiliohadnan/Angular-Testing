import { Injectable } from "@angular/core";
import { v4 as uuiv4 } from 'uuid'

@Injectable()
export class UniqueIdService {

    private numberOfGeneratedIds = 0
    private validId = /^[A-Za-z]+[\w\-\:\.]*$/

    public generateUniqueIdWithPrefix(prefix: string): string {
        if (!prefix || !this.validId.test(prefix)) throw new Error('Prefix can not be empty!')
        const uniqueId = this.generateUniqueId()
        this.numberOfGeneratedIds++
        return `${prefix}-${uniqueId}`
    }

    private generateUniqueId(): string {
        return uuiv4()
    }

    public getNumberOfGeneratedIds(): number {
        return this.numberOfGeneratedIds
    }
}