import { Controller } from "stimulus"

export default class extends Controller {

    replace(event){
        event.preventDefault();
        event.stopPropagation();

        document.querySelectorAll("#" + event.currentTarget.dataset.htmlLoaderTargetId).forEach((target) => {
            target.outerHTML = this.extractHTMLFromEvent(event);
        });
    }

    replaceContent(event){
        event.preventDefault();
        event.stopPropagation();
        document.querySelectorAll("#" + event.currentTarget.dataset.htmlLoaderTargetId).forEach((target) => {
            target.innerHTML = this.extractHTMLFromEvent(event)
        });
    }

    append(event){
        event.preventDefault();
        event.stopPropagation();
        document.querySelectorAll("#" + event.currentTarget.dataset.htmlLoaderTargetId).forEach((target) => {
            target.insertAdjacentHTML('afterend', this.extractHTMLFromEvent(event))
        });
    }

    appendContent(event){
        event.preventDefault();
        event.stopPropagation();
        document.querySelectorAll("#" + event.currentTarget.dataset.htmlLoaderTargetId).forEach((target) => {
            target.insertAdjacentHTML('beforeend', this.extractHTMLFromEvent(event))
        });
    }

    appendSelf(event){
        event.preventDefault();
        event.stopPropagation();
        event.currentTarget.insertAdjacentHTML('afterend', this.extractHTMLFromEvent(event))
    }

    prepend(event){
        event.preventDefault();
        event.stopPropagation();
        document.querySelectorAll("#" + event.currentTarget.dataset.htmlLoaderTargetId).forEach((target) => {
            target.insertAdjacentHTML('beforebegin', this.extractHTMLFromEvent(event));
        });
    }

    prependContent(event){
        event.preventDefault();
        event.stopPropagation();
        document.querySelectorAll("#" + event.currentTarget.dataset.htmlLoaderTargetId).forEach((target) => {
            target.insertAdjacentHTML('afterbegin', this.extractHTMLFromEvent(event));
        });
    }

    prependSelf(event){
        event.preventDefault();
        event.stopPropagation();
        event.currentTarget.insertAdjacentHTML('beforebegin', this.extractHTMLFromEvent(event))
    }

    remove(event){
        event.preventDefault();
        event.stopPropagation();
        document.querySelectorAll("#" + event.currentTarget.dataset.htmlLoaderTargetId).forEach((target) => {
            target.remove();
        });
    }

    extractHTMLFromEvent(event){
        if(event.detail !== null && typeof event.detail === "object" && event.detail.type == "ajax-loader-event"){
            return event.detail.response;
        } else if (event.detail !== null && Array.isArray(event.detail)){
            const [_data, _status, xhr] = event.detail;
            return xhr.response;
        }
        return "";
    }
}