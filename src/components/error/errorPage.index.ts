import template from './errorPage.tmpl'
import {ErrorType} from "./error.type"
import Block from "../block/block"


export default class ErrorPage extends Block<ErrorType> {
    public template: string = template

    constructor(props) {
        super(props, 'div', '#root')
        this.props = props
    }

    render(): HTMLElement {
        return this.compile(template, this.props)
    }
}

