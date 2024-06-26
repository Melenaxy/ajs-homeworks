import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }


    sum(): number {
        return this.items.reduce((result: number, arr) => {
            return result + arr.price;
        }, 0);
    };

    sumWithDiscount(discount: number): number {
        let sum = this.sum();
        return sum * (1 - discount / 100);
    };

    delete(id: number): void {
        this._items = this.items.filter(item => item.id !== id);
    };
}