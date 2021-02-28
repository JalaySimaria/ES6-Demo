/**
 * querySelector wrapper
 *
 * @param {String} selector Selector to query
 * @param {Element} scope Optional score element for the selector
 *
 * @return {Element} DOM element or null
 */
export function qs(selector, scope) {
    return (scope || document).querySelector(selector);
}

/**
 * createElement with text wrapper
 *
 * @param {String} tagName HTML tag name
 * @param {String} text Text that will get displayed in the tag
 *
 * @return {Element} DOM element
 */
export function ce(tagName, text) {
    const element = document.createElement(tagName);
    element.appendChild(document.createTextNode(text));

    return element;
}

/**
 * addEventListener wrapper
 *
 * @param {Element|Window} target Target Element
 * @param {String} type Event name to bind to
 * @param {Function} callback Event callback
 * @param {Boolean} [capture] Capture the event
 */
export function $on(target, type, callback, capture) {
    target.addEventListener(type, callback, !!capture);
}
