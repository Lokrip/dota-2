const ActiveInit = (function(){
    const add_active = (container: HTMLElement, method: string, classMethod: string) => {
        switch (method) {
            case 'add':
                container.classList.add(classMethod)
                break;
            case 'remove':
                container.classList.remove(classMethod)
                break;
            default:
                container.classList.toggle(classMethod)
                break;
        }
    }


    const Aconsole = {
        add_active: add_active
    }

    return {
        Aconsole
    }
}())


export default ActiveInit;