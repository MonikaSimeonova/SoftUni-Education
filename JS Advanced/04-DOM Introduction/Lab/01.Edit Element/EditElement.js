function editElement(ref, match, replacer) {
    //const pattern = new RegExp(match)
    const text = ref.textContent;
    const result = text.split(match).join(replacer)

    ref.textContent = result;
}