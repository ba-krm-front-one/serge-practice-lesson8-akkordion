/**
 * Created by Serge on 19.04.2017.
 */
//document.addEventListener('DOMContentLoaded', () => {
    let accordionButtons = document.querySelectorAll('.accordion');

    accordionButtons.forEach(accordionButton => {
        accordionButton.onclick = function (event) {
            this.classList.toggle('active');

            let panel = this.parentNode.querySelector ('.outgoing-panel');
            panel.classList.toggle('show');
        }
});