import { v4 as uuidv4 } from 'uuid';

export class BinaryTree {
    value: number;
    depth: number;
    id: string;
    left: BinaryTree | null;
    right: BinaryTree | null;
    
    constructor(value: number, depth = 1, id?: string) {
        this.value = value;
        this.id = id || uuidv4();
        this.depth = depth;
        this.left = null;
        this.right = null;
    }

    insert(value: number) {
        if (value < this.value) {
            if (!this.left) {
                this.left = new BinaryTree(value, this.depth + 1, );
            } else {
                this.left.insert(value);
            }
        } else {
            if (!this.right) {
                this.right = new BinaryTree(value, this.depth + 1, );
            } else {
                this.right.insert(value);
            }
        }
    }

    getNodeByValue(value: number): BinaryTree | null {
        if (this.value === value) {
            return this;
        } else if (this.left && value < this.value) {
            return this.left.getNodeByValue(value);
        } else if (this.right) {
            return this.right.getNodeByValue(value);
        } else {
            return null;
        }
    }
}

