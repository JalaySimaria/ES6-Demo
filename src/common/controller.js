import Component from './component';
import { qs, ce, $on } from './helpers';

export default class Controller {
    /**
     * @param {String} target String css selector where this controller will be rendered
     */
    constructor(target) {
        this.components = {};
        this.target = target;

        this._currentIndex = Number.NEGATIVE_INFINITY;
        this._uuids = [];
    }

    /**
     * All the components which needs to be handled by this component need to be registered with this method
     *
     * @param {Component} component Instance of Component class
     */
    registerComponent(component) {
        if (component && component instanceof Component) {
            this.components[component._uuid] = component;
            this._uuids.push(component._uuid);
        } else {
            throw Error('invalid parameter: component');
        }
    }

    unregisterComponent(component) {
        // TODO
    }

    /**
     * This function initiates the rendering process of all the registered components
     * Ideally used on window load
     */
    load() {
        this._currentIndex = 0;
        this.loadComponent();
        this.loadPagination();
    }

    /**
     * Utility function to load the component based on the current index
     */
    loadComponent() {
        this.components[this._uuids[this._currentIndex]].render(this.target);
    }

    /**
     * Utility function to load the pagination buttons
     */
    loadPagination() {
        const previous = ce('button', 'Previous');
        $on(previous, 'click', this.previousPage.bind(this));

        const next = ce('button', 'Next');
        $on(next, 'click', this.nextPage.bind(this));

        qs(this.target).insertAdjacentElement('beforeend', previous);
        qs(this.target).insertAdjacentElement('beforeend', next);
    }

    /**
     * Pagination previous button click handler
     */
    previousPage() {
        if (this._uuids[this._currentIndex - 1]) {
            this.components[this._uuids[this._currentIndex]].unmount();
            this._currentIndex -= 1;
            this.loadComponent();
        }
    }

    /**
     * Pagination next button click handler
     */
    nextPage() {
        if (this._uuids[this._currentIndex + 1]) {
            this.components[this._uuids[this._currentIndex]].unmount();
            this._currentIndex += 1;
            this.loadComponent();
        }
    }
}
