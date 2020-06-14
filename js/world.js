class Tree {
    constructor(x, y) {
        this.node = document.createElement('div');
        this.node.setAttribute('class', 'tree');
        this.treeType = this.getTreeType();
        
        switch(this.treeType) {
            case 0:
                this.node.classList.add('tree-style-1');

                break;
            case 1:
                this.node.classList.add('tree-style-2');

                break
            
            default:
                this.node.classList.add('tree-style-3');
        }

        this.render(x, y);
    }

    getTreeType() {
        return Math.floor(Math.random() * 3);
    }

    render(x, y) {
        document.body.appendChild(this.node);

        this.node.style.left = x + 'px';
        this.node.style.top = y + 'px';
    }
}

class Insect {
    constructor(x, y) {
        this.node = document.createElement('div');
        this.node.setAttribute('class', 'insect');

        this.render(x, y);
    }

    animate() {
        
    }

    render(x, y) {
        document.body.appendChild(this.node);

        this.node.style.left = x + 'px';
        this.node.style.top = y + 'px';
    }
}