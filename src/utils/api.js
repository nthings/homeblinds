// TODO: 
// Estaria nice que los datos de los productos y testimonios se obtuvieran de una API, pero por ahora solo se simulará con una función que retorna un arreglo de objetos.
// {
//     "id": 1,
//     "title": "Enrollables",
//     "price": "Desde $150 m2",
//     "image": "/images/enrollable.jpg",
//     "roomSuitability": ["bedroom", "living room", "office"],
//     "material": "fabric",
//     "lightControl": "light filtering",
//     "privacyLevel": "medium",
//     "installationType": ["inside mount", "outside mount"],
//     "colorOptions": ["white", "beige", "gray"],
//     "priceRange": 150
// },
export async function fetchProducts() {
    // const res = await fetch('https://api.example.com/products');
    // return res.json();

    return [
        {
            "slug": "enrollables",
            "title": "Enrollables",
            "price": "Desde $580 m2",
            "image": "/images/enrollable.jpg",
            "description": "Las persianas enrollables son una solución moderna y funcional que se adapta a cualquier ambiente. Su diseño minimalista permite un manejo eficiente de la luz y la privacidad, ajustándose a tus necesidades en cada momento. Disponibles en una variedad de tejidos, desde traslúcidos que permiten el paso de la luz natural hasta blackout para un control total de la iluminación. Además de ser fáciles de operar, destacan por su durabilidad y mantenimiento sencillo, lo que las convierte en una opción ideal tanto para el hogar como para oficinas y espacios comerciales.",
        },
        {
            "slug": "sheer-elegance",
            "title": "Sheer Elegance",
            "price": "Desde $700 m2",
            "image": "/images/sheer_elegance.jpg",
            "description": "Las persianas Sheer combinan elegancia y funcionalidad, permitiendo un control preciso de la luz y privacidad gracias a su diseño de franjas alternadas de tela translúcida y opaca. Estas persianas ofrecen una estética sofisticada que se adapta a cualquier espacio, brindando un ambiente cálido y acogedor. Con una operación sencilla y un mantenimiento fácil, las persianas Sheer son ideales para quienes buscan una solución decorativa y práctica para el hogar o la oficina.",
        },
        {
            "slug": "cortinas",
            "title": "Cortinas",
            "price": "Desde $1200 m2",
            "image": "/images/cortinas.jpg",
            "description": "Las cortinas ofrecen una solución decorativa y funcional para el control de luz y privacidad en cualquier espacio. Disponibles en una amplia variedad de telas, colores y texturas, se adaptan a estilos clásicos y modernos. Además, puedes optar por cortinas blackout, perfectas para bloquear totalmente la luz exterior y crear ambientes más íntimos y confortables. Con opciones tanto decorativas como prácticas, las cortinas son ideales para transformar cualquier habitación en un espacio acogedor y elegante.",
        },
        {
            "slug": "verticales",
            "title": "Verticales",
            "price": "Desde $550 m2",
            "image": "/images/verticales.jpg",
            "description": "Las persianas verticales son una opción elegante y versátil para grandes ventanales y puertas corredizas. Ofrecen un control eficaz de la luz y la privacidad, gracias a sus láminas ajustables que permiten regular la entrada de luz. Disponibles en una amplia gama de materiales y colores, se adaptan fácilmente a distintos estilos decorativos, brindando un toque moderno y funcional a cualquier espacio. Su fácil manejo y durabilidad las hacen perfectas tanto para hogares como para oficinas.",
        },
        {
            "slug": "panel-japones",
            "title": "Panel Japonés",
            "price": "Desde $900 m2",
            "image": "/images/panel_japones.jpg",
            "description": "El panel japonés es una solución elegante y minimalista, ideal para grandes ventanales y divisores de ambientes. Sus paneles deslizantes permiten un control suave de la luz y la privacidad, brindando un estilo moderno y limpio. Disponible en una variedad de telas y colores, se adapta fácilmente a diferentes estilos decorativos. Además, su fácil manejo y versatilidad lo convierten en una opción perfecta para espacios residenciales o comerciales que buscan una estética sofisticada y funcional.",
        },
        {
            "slug": "horizontales",
            "title": "Horizontales",
            "price": "Desde $690 m2",
            "image": "/images/wooden-blinds.jpg",
            "description": "Las persianas horizontales son una opción clásica y versátil que permite un control preciso de la luz y la privacidad. Gracias a sus láminas ajustables, es posible regular la entrada de luz de manera eficiente. Están disponibles en una amplia gama de materiales, como madera o aluminio, lo que permite adaptarlas a cualquier estilo decorativo. Su diseño duradero y fácil de mantener las convierte en una solución práctica y atractiva para cualquier espacio, ya sea residencial o comercial.",
        },
        {
            "slug": "romanas",
            "title": "Romanas",
            "price": "Desde $1900 m2",
            "image": "/images/roman-shades.jpg",
            "description": "Las persianas romanas combinan elegancia y funcionalidad, con un diseño de pliegues suaves que se recogen de manera uniforme al elevarse. Son una excelente opción para quienes buscan un estilo sofisticado que también ofrezca control sobre la luz y la privacidad. Disponibles en una amplia variedad de telas, colores y texturas, se adaptan fácilmente a diferentes estilos decorativos. Además, su manejo sencillo y su capacidad de crear ambientes acogedores las convierten en una solución decorativa ideal para cualquier espacio.",
        },
        {
            "slug": "toldos",
            "title": "Toldos",
            "price": "Desde $1600 m2",
            "image": "/images/awning.jpg",
            "description": "Los toldos son una solución práctica y estilizada para proteger del sol y la lluvia en áreas exteriores. Su diseño retráctil permite regular la sombra y la ventilación, creando espacios más frescos y confortables. Disponibles en distintos tamaños, materiales y colores, se adaptan a terrazas, balcones o jardines, aportando un toque decorativo y funcional. Además, su durabilidad y fácil operación los hacen ideales para quienes buscan aprovechar al máximo sus espacios exteriores.",
        }
    ];
}

export async function fetchTestimonials() {
    // const res = await fetch('https://api.example.com/testimonials');
    // return res.json();

    return [
        {
            quote: "Los planes de financiamiento en HOMEBLINDS me permitieron renovar toda mi casa sin preocupaciones. ¡Tienen un servicio al cliente que no encuentras en otro lugar!",
            author: "Alberto Mendez Raya",
            image: "/images/testimonial1.jpg",
        },
        {
            quote: "Opté por la automatización de mis cortinas con HOMEBLINDS y fue la mejor decisión. Es increíble como puedo controlar todo con solo un clic. Lo mejor para mí, es que la instalación fue rápida y sin problemas.",
            author: "Ana Roberta Ruiz",
            image: "/images/testimonial2.jpg",
        },
        {
            quote: "Lo que me hizo escoger HOMEBLINDS fue su garantía de por vida, sin embargo, tras 4 años de uso, sus persianas han resistido el paso del tiempo y siguen como nuevas. ¡Realmente estoy satisfecho!",
            author: "Jorge Abdiel Torres",
            image: "/images/testimonial3.jpg",
        },
        {
            quote: "HOMEBLINDS transformó mi oficina. La obtención de las persianas fue directa y sin presiones, y la variedad de estilos encajó perfectamente con las necesidades y exigencias que teniamos. ¡Un cambio total!",
            author: "Miguel Ángel Jiménez",
            image: "/images/testimonial3.jpg",
        },
        {
            quote: "Después de cotizar en varios lugares, HOMEBLINDS me atrapó por su servicio tan personalizado. Me ayudaron a seleccionar las mejores persianas para mi clima y decoración, honestamente quedé encantada con ellos.",
            author: "Sofía Guerrero",
            image: "/images/testimonial3.jpg",
        },
        {
            quote: "En mi vida había tenido un servicio de reparación tan eficiente, detectaron el problema de mis persianas y en menos de 24 horas estaban funcionando perfectamente. Puedo decir que HOMEBLINDS nos brindó un servicio de primera.",
            author: "Iñaki Loera",
            image: "/images/testimonial3.jpg",
        },
    ];
}

export async function fetchProductBySlug(slug) {
    const products = await fetchProducts();
    return products.find(product => {
        return product.slug == slug
    });
}
