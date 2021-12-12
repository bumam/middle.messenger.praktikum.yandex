import template from "./form.tmpl"
import { FormType, RelatedData } from "./form.type"
import Block from "../block/block"

export default class Form extends Block<FormType> {
  constructor(props) {
    super(props, "div", "#root")
  }

  onValid(
    formData: Record<string, FormDataEntryValue | null>,
    relatedData?: RelatedData
  ) {
    let isValidForm = true
    let relatedValue = ""

    this.props.content.forEach((item) => {
      if (item.props.inputName === relatedData?.key) {
        if (relatedData) relatedValue = relatedData.value
      }
      item.onUpdate(
        item.props.inputName,
        formData[item.props.inputName],
        relatedValue
      )
      if (!item.props.isValid) {
        isValidForm = false
      }
    })

    return isValidForm
  }

  render() {
    return this.compile(template, this.props)
  }
}
