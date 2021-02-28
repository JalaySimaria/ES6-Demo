import { v4 } from 'uuid';
import { qs } from './helpers';

export default class Component {
    /**
     * On instantiating, a unique uuid is assigned to each instance
     *
     * @param {string} name Name of the component
     * @param {Element} element DOM element object
     */
    constructor(name, element) {
        this.name = name;
        this.element = element;

        this._uuid = v4();
    }

    /**
     * Upon rendering, this function inserts the component into the DOM
     *
     * @param {String} target HTML tag string
     */
    render(target) {
        qs(target).insertAdjacentElement('afterbegin', this.element);
    }

    /**
     * Removed the element from the DOM
     */
    unmount() {
        this.element.remove();
    }
}
