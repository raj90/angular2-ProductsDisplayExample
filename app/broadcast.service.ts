import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class BroadcastService {
    public onevent$: EventEmitter<string>;
    public onsortevent$: EventEmitter<string>;
    private eventArg: string;

    constructor() {
        this.onevent$ = new EventEmitter();
        this.onsortevent$ = new EventEmitter();
    }

    public getEventArg(): string {
        return this.eventArg;
    }

    public broadcast(item: string): void {
        this.onevent$.emit(item);
        this.eventArg = item;
    }

    public broadcastSort(sortBy: string): void {
        this.onsortevent$.emit(sortBy);
    }
}