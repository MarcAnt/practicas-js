document.addEventListener("DOMContentLoaded", e => {

    const includeHTML = (el, url) => {
        
        const xhr = new XMLHttpRequest(); 

        xhr.addEventListener('readystatechange', e => {
            if(xhr.readyState !== 4) return; 

            if (xhr.status >= 200 && xhr.status < 300) {
                //Con aouterHTML se cambia toda la etiqueta y no lo de adentro. Y response text viene una etiqueta específica
                
                el.outerHTML = xhr.responseText;  
            }else {
                let message = xhr.statusText || "Ocurrió un error al cargar el archivo, verifica que estas la petición por http o https"; 
                el.outerHTML = `<div><p>Error ${xhr.status}: ${message}</p></div>`
            }
        }); 

        xhr.open('GET', url); 
        xhr.setRequestHeader("Content-type", "text/html; charset=utf-8"); 
        xhr.send(); 

    }; 


    //obtener todas las etiquetas con ese dataset y aplicarle la funcion a cada uno reemplazar las etiquetas
    document.querySelectorAll('[data-include]')
    .forEach((el) => includeHTML(el, el.getAttribute('data-include'))); 

}); 